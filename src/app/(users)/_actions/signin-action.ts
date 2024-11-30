'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { compareSync } from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SignInActionProps } from "../_types/user-types";

/**
 * 로그인 서버 액션
 * @param formData 
 * @returns 
 */
export async function SignInAction(data: SignInActionProps) {

    const user = await prisma.user.findFirst({
        select: {
            id: true,
            user_email: true,
            user_first_name: true,
            user_last_name: true,
            user_password: true,
        },
        where: {
            user_email: data.userEmail,
        }
    });

    if (user) {
        if (compareSync(data.userPassword, user.user_password)) {
            user.user_password = "";
            const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
            session.userKey = user.id;
            session.userEmail = user.user_email;
            session.userFirstName = user.user_first_name ? user.user_first_name : "";
            session.userLastName = user.user_last_name ? user.user_last_name : "";
            session.isLogin = true;
            await session.save();
            console.log(session);
        }
    }

    return user;
}
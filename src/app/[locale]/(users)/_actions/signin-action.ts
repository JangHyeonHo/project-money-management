'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { compareSync } from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SignInActionProps } from "../_types/user-types";
import { Prisma } from "../../../../../prisma/generated/client";

/**
 * 로그인 서버 액션
 * @param formData 
 * @returns 
 */
export async function SignInAction(data: SignInActionProps) {

    try {
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
                delete_flg: false,
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
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            // 코드에 대해서 혹시 알게되면 이부분은 추가
            if (e.code === 'P2002') {

            }
        }
        console.error(`Prisma Error: ${e}`)
        return null;
    }

}
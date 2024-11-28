'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { hashSync } from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SignupActionProps } from "../_types/user-types";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

/**
 * 회원가입 서버 액션
 * @param formData 
 * @returns 
 */
export async function SignupAction(data: SignupActionProps) {

    const saltRounds = 10;

    // 에러 체크
    // 로그인 체크
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    if (session.isLogin) {
        return redirect("/");
    }

    try {
        const hashPwd = hashSync(data.userPassword, saltRounds);

        const user = await prisma.user.create({
            data: {
                user_email: data.userEmail,
                user_password: hashPwd,
                user_first_name: data.userFirstName,
                user_last_name: data.userLastName,
            }
        });

        if (user) {
            user.user_password = "";
            session.userKey = user.id;
            session.userEmail = user.user_email;
            session.userFirstName = user.user_first_name ? user.user_first_name : "";
            session.userLastName = user.user_last_name ? user.user_last_name : "";
            session.isLogin = true;
            await session.save();
            console.log(session);
        }

        return user;
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            // 코드에 대해서 혹시 알게되면 이부분은 추가
            if (e.code === 'P2002') {

            }
        }
        return null;
    }

}
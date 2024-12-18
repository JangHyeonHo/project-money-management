'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 가계부 삭제 서버 액션
 * @param formData 
 * @returns 
 */
export async function HouseholdDeleteAction(userKey:string, householdKey:string) {

    // 로그인 체크
    try {
        const asset = await prisma.household.delete({
            where: {
                id: householdKey,
                user_id: userKey
            }
        });

        return asset;
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
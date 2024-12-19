'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Prisma } from "../../../../../../prisma/generated/client";
import { CategoryRegModActionProps } from "../_types/settings-type";

/**
 * 카테고리 수정 서버 액션
 * @param formData 
 * @returns 
 */
export async function CategoryModifyAction(data: CategoryRegModActionProps) {

    // 로그인 체크
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    if (!session.isLogin) {
        return null;
    }
    const userKey = session.userKey;

    try {

        if (!data.id) {
            return null;
        }

        const category = await prisma.household_categories.update({
            data: {
                category_name: data.categoryName,
                category_comment: data.categoryComment,
                household_type: data.householdType,
                parent_category_id: data.parentCategoryId,
            },
            where: {
                id_user_id: {
                    id: data.id,
                    user_id: userKey,
                }
            }
        });

        return category;
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

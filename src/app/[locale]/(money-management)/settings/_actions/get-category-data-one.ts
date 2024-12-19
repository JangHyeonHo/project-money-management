'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 모든 카테고리 취득
 * @param formData 
 * @returns 
 */
export async function GetCategoryDataOne(userKey: string, categoryKey: number) {

    try {
        const category = await prisma.household_categories.findFirst({
            select: {
                id: true,
                category_name: true,
                category_comment: true,
                parent_category_id: true,
                household_type: true,
            },
            where: {
                user_id: userKey,
                id: categoryKey,
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

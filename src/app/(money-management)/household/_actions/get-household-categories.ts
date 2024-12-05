'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../prisma/generated/client";

/**
 * 가계부의 대분류 취득
 * @param formData 
 * @returns 
 */
export async function GetHouseholdCategories(userKey: string) {

    try {
        const asset = await prisma.household_categories.findMany({
            select: {
                id: true,
                category_name: true,
                household_type: true,
                parent_category_id: true,
            },
            orderBy: {
                parent_category_id: 'asc'
            },
            where: {
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
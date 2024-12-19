'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 가계부 취득
 * @param formData 
 * @returns 
 */
export async function GetHouseholdDataOne(userKey: string, householdKey: string) {

    try {
        const asset = await prisma.household.findFirst({
            select: {
                id: true,
                issue_date: true,
                Asset: true,
                household_type: true,
                household_categories: true,
                household_name: true,
                household_amount: true,
                household_comment: true,
            },
            where: {
                user_id: userKey,
                id: householdKey
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
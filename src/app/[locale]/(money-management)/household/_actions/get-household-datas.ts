'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 모든 가계부데이터 취득
 * @param formData 
 * @returns 
 */
export async function GetHouseholdDatas(userKey:string) {

    try {
        const asset = await prisma.household.findMany({
            select: {
                id:true,
                issue_date:true,
                household_type: true,
                household_categories_household_household_categoryTohousehold_categories: true,
                household_categories_household_household_subcategoryTohousehold_categories: true,
                household_name: true,
                household_amount: true,
                Asset: true,
            },
            orderBy:{
                issue_date : "desc"
            },
            where:{
                user_id : userKey
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
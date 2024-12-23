'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 자산의 키와 이름 취득
 * @param formData 
 * @returns 
 */
export async function GetAssetKeys(userKey: string) {

    try {
        const asset = await prisma.asset.findMany({
            select: {
                id:true,
                asset_name: true,
            },
            orderBy: {
                asset_name: 'asc'
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
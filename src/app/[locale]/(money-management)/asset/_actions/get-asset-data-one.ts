'use server'

import prisma from "@/lib/db";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 자산 취득
 * @param formData 
 * @returns 
 */
export async function GetAssetDataOne(userKey:string, assetKey:string) {

    try {
        const asset = await prisma.asset.findFirst({
            select: {
                id:true,
                asset_type: true,
                asset_name: true,
                asset_money: true,
                asset_currency: true,
                asset_comment: true,
                household: true,
            },
            where:{
                user_id: userKey,
                id : assetKey
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
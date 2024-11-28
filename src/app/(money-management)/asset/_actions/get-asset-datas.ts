'use server'

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

/**
 * 자산 등록 서버 액션
 * @param formData 
 * @returns 
 */
export async function GetAssetDatas(userKey:string) {

    try {
        const asset = await prisma.asset.findMany({
            select: {
                id:true,
                asset_type: true,
                asset_name: true,
                asset_money: true,
                asset_currency: true,
                asset_comment: true,
            },
            orderBy:{
                asset_type : "asc"
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
        return null;
    }
}
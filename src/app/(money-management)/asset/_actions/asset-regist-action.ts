'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { AssetRegModActionProps } from "../_types/asset-type";
import { Prisma } from "../../../../../prisma/generated/client";

/**
 * 자산 등록 서버 액션
 * @param formData 
 * @returns 
 */
export async function AssetRegistAction(data: AssetRegModActionProps) {

    // 로그인 체크
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    if (!session.isLogin) {
        return null;
    }
    const userKey = session.userKey;

    try {
        const asset = await prisma.asset.create({
            data: {
                asset_type: data.assetType,
                asset_name: data.assetName,
                asset_money: data.assetMoney,
                asset_currency: data.assetCurrency,
                asset_comment: data.assetComment,
                user_id: userKey
            }
        });
        // 테스트용
        // const asset = await prisma.asset.findFirst({
        //     select: {
        //         asset_type: true,
        //         asset_name: true,
        //         asset_money: true,
        //         asset_currency: true,
        //         asset_comment: true,
        //     }
        // });

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
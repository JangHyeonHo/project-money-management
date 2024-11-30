'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { AssetRegModActionProps } from "../_types/asset-type";
import { Prisma } from "../../../../../prisma/generated/client";

/**
 * 자산 삭제 서버 액션
 * @param formData 
 * @returns 
 */
export async function AssetDeleteAction(userKey:string, assetKey:string) {

    // 로그인 체크
    try {
        const asset = await prisma.asset.delete({
            where: {
                id: assetKey,
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
        return null;
    }
}
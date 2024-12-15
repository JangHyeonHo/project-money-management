'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { HouseholdRegModActionProps } from "../_types/household-type";
import { Prisma } from "../../../../../../prisma/generated/client";

/**
 * 가계부 갱신 서버 액션
 * @param formData 
 * @returns 
 */
export async function HouseholdModifyAction(data: HouseholdRegModActionProps) {

    // 로그인 체크
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    if (!session.isLogin) {
        return null;
    }
    const userKey = session.userKey;

    try {
        const asset = await prisma.household.update({
            data: {
                issue_date: data.issueDate,
                asset_id: data.assetKey,
                household_type: data.householdType,
                household_category: data.householdCategory ? data.householdCategory : null,
                household_subcategory: data.householdSubcategory ? data.householdSubcategory : null,
                household_name: data.householdName,
                household_amount: data.householdAmount,
                household_comment: data.householdComment,
            },
            where: {
                id: data.assetKey,
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
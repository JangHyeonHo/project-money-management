'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Prisma } from "../../../../../../prisma/generated/client";
import { HouseholdRegModActionProps } from "../_types/household-type";

/**
 * 자산 등록 서버 액션
 * @param formData 
 * @returns 
 */
export async function HouseholdRegistAction(data: HouseholdRegModActionProps) {

    // 로그인 체크
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    if (!session.isLogin) {
        return null;
    }
    const userKey = session.userKey;

    //console.log(`issue_date : ${data.issueDate?.toISOString()}`)
    try {
        if (data.issueDate === undefined) {
            return null;
        }

        const household = await prisma.household.create({
            data: {
                issue_date: data.issueDate,
                household_type: data.householdType,
                household_category: data.householdCategory ? data.householdCategory : null,
                household_category_userid: data.householdCategory ? userKey : null,
                image_text: data.imageText === "" ? null : data.imageText,
                household_name: data.householdName,
                household_amount: data.householdAmount,
                household_comment: data.householdComment,
                user_id: userKey,
                asset_id: data.assetKey,
            }
        });
        return household;
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
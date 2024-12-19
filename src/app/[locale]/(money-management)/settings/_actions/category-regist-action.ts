'use server'

import prisma from "@/lib/db";
import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Prisma } from "../../../../../../prisma/generated/client";
import { CategoryRegModActionProps } from "../_types/settings-type";

/**
 * 카테고리 등록 서버 액션(복수 등록)
 * @param formData 
 * @returns 
 */
export async function CategoryRegistAction(datas: CategoryRegModActionProps[]) {

    // 로그인 체크
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    if (!session.isLogin) {
        return null;
    }
    const userKey = session.userKey;

    try {

        //배열 데이터로 넘기기
        const arrayDatas: {
            id: number, category_name: string, category_comment?: string, parent_category_id?: number
            household_type?: string, user_id: string
        }[] = []

        const nowMaxIdData = await prisma.household_categories.findFirst({
            select: {
                id: true,
            },
            where: {
                user_id: userKey,
            },
            orderBy: {
                id: "desc"
            }
        })

        // 최대 번호를 취득해서 무조건 그 다음 번으로 등록되게 
        let maxId = nowMaxIdData ? nowMaxIdData.id + 1 : 1

        for (const data of datas) {
            arrayDatas.push({
                id: data.id || maxId,
                category_name: data.categoryName,
                category_comment: data.categoryComment,
                household_type: data.householdType,
                parent_category_id: data.parentCategoryId,
                user_id: userKey,
            });
            maxId += 1;
        }

        const category = await prisma.household_categories.createMany({
            data: arrayDatas,
        });

        return category;
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

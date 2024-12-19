import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// DELETE 요청 처리
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    if (Number.isNaN(Number(id))) {
        throw Error("id is not Number");
    }

    try {
        // 세션 정보 확인
        const userInfo = await GetUserCookieFromSession();
        //console.log(userInfo);

        if (!userInfo.isLogin) {
            throw Error("not Signin");
        }

        //하위 카테고리 삭제
        await prisma.household_categories.deleteMany({
            where: {
                parent_category_id: Number(id),
                user_id: userInfo.userKey
            },
        });

        // 상위 카테고리 삭제
        const category = await prisma.household_categories.delete({
            where: {
                id_user_id: {
                    id: Number(id),
                    user_id: userInfo.userKey
                }
            },
        });

        if (category === null) {
            throw Error("asset data nothing");
        }

        return NextResponse.json({ message: "Household deleted successfully", id }, { status: 200 });
    } catch (error) {
        console.error("Error deleting household:", error);
        return NextResponse.json({ error: "Failed to delete household" }, { status: 500 });
    }
}
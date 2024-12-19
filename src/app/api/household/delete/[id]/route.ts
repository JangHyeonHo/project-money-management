import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// DELETE 요청 처리
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    try {
        // 세션 정보 확인
        const userInfo = await GetUserCookieFromSession();
        //console.log(userInfo);

        if (!userInfo.isLogin) {
            throw Error("not Signin");
        }

        const household = await prisma.household.delete({
            where: {
                id: id,
                user_id: userInfo.userKey
            }
        });

        if (household === null) {
            throw Error("asset data nothing");
        }
        return NextResponse.json({ message: "Household deleted successfully", id }, { status: 200 });
    } catch (error) {
        console.error("Error deleting household:", error);
        return NextResponse.json({ error: "Failed to delete household" }, { status: 500 });
    }
}
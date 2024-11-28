import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import AssetRegist from "../_components/asset-regist";
import { redirect } from "next/navigation";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";

/**
 * 자본 등록 화면
 * @returns 
 */
export default async function Page() {

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect("/login")
    }

    return (
        <SiteStackedLayout
            headtitle={'asset.regist'}
            headCurrent={LayoutHeaders.Asset}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <AssetRegist>

            </AssetRegist>
        </SiteStackedLayout>

    )
}
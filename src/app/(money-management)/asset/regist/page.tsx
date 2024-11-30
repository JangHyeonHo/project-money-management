import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import AssetRegModForm from "../_components/asset-regmod";
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
        redirect("/signin")
    }

    return (
        <SiteStackedLayout
            headtitle={'asset.regist'}
            headCurrent={LayoutHeaders.Asset}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <AssetRegModForm>

            </AssetRegModForm>
        </SiteStackedLayout>

    )
}
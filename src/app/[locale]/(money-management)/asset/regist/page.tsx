import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import AssetRegModForm from "../_components/asset-regmod";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/[locale]/_types/common-const";
import { redirect } from "@/i18n/routing";

/**
 * 자본 등록 화면
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale });
        return;
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
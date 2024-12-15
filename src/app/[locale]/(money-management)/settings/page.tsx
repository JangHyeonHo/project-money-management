import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/[locale]/_types/common-const";
import SettingList from "./_components/setting-list";
import { redirect } from "@/i18n/routing";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale })
    }

    return (
        <SiteStackedLayout
            headtitle={'settings.title'}
            headCurrent={LayoutHeaders.Config}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <SettingList></SettingList>


        </SiteStackedLayout>
    )
}
import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/[locale]/_types/common-const";
import { redirect } from "@/i18n/routing";
import SettingMenu from "./_components/setting-menu";
import SettingList from "./_components/setting-list";

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
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SettingMenu className="h-full md:border-r pr-4"></SettingMenu>
                <SettingList
                    className="pl-4 md:grid-cols-2 lg:col-span-3"
                >

                </SettingList>
            </div>


        </SiteStackedLayout>
    )
}
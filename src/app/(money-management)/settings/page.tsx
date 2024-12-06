import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";
import { redirect } from "next/navigation";
import SettingList from "./_components/setting-list";

export default async function Page() {

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect("/signin")
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
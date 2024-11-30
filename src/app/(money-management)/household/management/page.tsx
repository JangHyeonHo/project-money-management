import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import { redirect } from "next/navigation";
import HouseholdManagement from "../_components/household-management";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";

export default async function Page() {

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect("/signin")
    }

    return (

        <SiteStackedLayout
            headtitle={'household.management'}
            headCurrent={LayoutHeaders.Household}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <HouseholdManagement>

            </HouseholdManagement>
        </SiteStackedLayout>
    )

}
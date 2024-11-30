import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import { redirect } from "next/navigation";
import HouseholdRegist from "../_components/household-regist";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";

/**
 * 가계부 등록 화면
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
            headtitle={'household.regist'}
            headCurrent={LayoutHeaders.Household}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <HouseholdRegist>

            </HouseholdRegist>
        </SiteStackedLayout>
    )
}
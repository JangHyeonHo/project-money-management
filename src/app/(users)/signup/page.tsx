import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import { redirect } from "next/navigation";
import Signup from "../_components/signup";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";

/**
 * 회원 등록 화면
 * @returns 
 */
export default async function Page() {

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (userInfo.isLogin) {
        redirect("/")
    }

    return (

        <SiteStackedLayout>
            <Signup>

            </Signup>
        </SiteStackedLayout>
    )
}
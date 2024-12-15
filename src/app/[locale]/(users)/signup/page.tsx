import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import Signup from "../_components/signup";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { redirect } from "@/i18n/routing";

/**
 * 회원 등록 화면
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (userInfo.isLogin) {
        redirect({ href: "/", locale: locale });
        return;
    }

    return (

        <SiteStackedLayout>
            <Signup>

            </Signup>
        </SiteStackedLayout>
    )
}


import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import { redirect } from "next/navigation";
import SignIn from "../_components/signin";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";

export default async function Page() {

    const isLogin = await GetUserCookieFromSession();
    //console.log(isLogin);

    if (isLogin.isLogin) {
        redirect("/")
    }

    return (

        <SiteStackedLayout>
            <SignIn>

            </SignIn>
        </SiteStackedLayout>
    )
}
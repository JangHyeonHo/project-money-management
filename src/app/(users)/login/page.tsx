

import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import { redirect } from "next/navigation";
import Login from "../_components/login";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";

export default async function Page() {

    const isLogin = await GetUserCookieFromSession();
    //console.log(isLogin);

    if (isLogin.isLogin) {
        redirect("/")
    }

    return (

        <SiteStackedLayout>
            <Login>

            </Login>
        </SiteStackedLayout>
    )
}


import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import SignIn from "../_components/signin";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { redirect } from "@/i18n/routing";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = await params;

  const isLogin = await GetUserCookieFromSession();
  //console.log(isLogin);

  if (isLogin.isLogin) {
    redirect({ href: "/", locale: locale });
    return;
  }

  return (

    <SiteStackedLayout>
      <SignIn>

      </SignIn>
    </SiteStackedLayout>
  )
}
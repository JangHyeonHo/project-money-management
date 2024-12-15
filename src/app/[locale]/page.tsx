
import GetUserCookieFromSession from "./_actions/get-user-cookies";
import SiteStackedLayout from "./_components/_layout/stacked-layout";
import MainTitle from "./_components/main-title";
import { redirect } from "@/i18n/routing";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = await params;

  // 세션 정보 확인
  const userInfo = await GetUserCookieFromSession();
  //console.log(userInfo);

  if (!userInfo.isLogin) {
    redirect({ href: "/signin", locale: locale });
    return;
  }

  return (
    <SiteStackedLayout
      isLogin={userInfo.isLogin}
      userFirstName={userInfo.userFirstName}
      userLastName={userInfo.userLastName}
    >
      <MainTitle></MainTitle>
    </SiteStackedLayout>
  );
}

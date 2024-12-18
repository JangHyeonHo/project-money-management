
import GetUserCookieFromSession from "./_actions/get-user-cookies";
import SiteStackedLayout from "./_components/_layout/stacked-layout";
import MainTitle from "./_components/main-title";

export default async function Page() {

  //const { locale } = await params;

  // 세션 정보 확인
  const userInfo = await GetUserCookieFromSession();

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

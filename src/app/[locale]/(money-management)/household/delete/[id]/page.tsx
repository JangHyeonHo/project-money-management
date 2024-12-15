import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import { HouseholdDeleteAction } from "../../_actions/household-delete-action";
import { redirect } from "@/i18n/routing";

/**
 * 자본 등록 화면
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{ locale: string, id:string, }> }) {

  const { locale, id } = await params;

  // 세션 정보 확인
  const userInfo = await GetUserCookieFromSession();
  //console.log(userInfo);

  if (!userInfo.isLogin) {
    redirect({ href: "/signin", locale: locale })
    return;
  }

  const deleteData = await HouseholdDeleteAction(userInfo.userKey, id);

  if (deleteData === null) {
    // 에러로 나중에 바꿀것
    redirect({ href: "/household/management", locale: locale });
    return;
  }

  redirect({ href: "/household/management", locale: locale });
}
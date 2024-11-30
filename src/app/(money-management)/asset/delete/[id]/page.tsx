import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";

import { redirect } from "next/navigation";
import { AssetDeleteAction } from "../../_actions/asset-delete-action";

/**
 * 자본 등록 화면
 * @returns 
 */
export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {

    const deleteKey = (await params).id

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect("/signin")
    }

    const deleteData = await AssetDeleteAction(userInfo.userKey, deleteKey);

    if(deleteData===null){
        // 에러로 나중에 바꿀것
        redirect("/asset/management")
    }

    redirect("/asset/management")

}
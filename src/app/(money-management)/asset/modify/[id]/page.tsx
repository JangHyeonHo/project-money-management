import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";

import { redirect } from "next/navigation";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";
import AssetRegModForm from "../../_components/asset-regmod";
import { GetAssetDataOne } from "../../_actions/get-asset-data-one";
import { NullChangeBlankValueFromString } from "@/app/_utils/common-utils";

/**
 * 자본 등록 화면
 * @returns 
 */
export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {

    const modifyKey = (await params).id

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect("/signin")
    }

    const modifyData = await GetAssetDataOne(userInfo.userKey, modifyKey);

    if(modifyData===null){
        // 에러로 나중에 바꿀것
        redirect("/asset/management")
    }

    return (
        <SiteStackedLayout
            headtitle={'asset.modify'}
            headCurrent={LayoutHeaders.Asset}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <AssetRegModForm
                isModify={true}
                assetId={modifyData.id}
                assetType={modifyData.asset_type}
                assetName={modifyData.asset_name}
                assetMoney={modifyData.asset_money}
                assetCurrency={NullChangeBlankValueFromString(modifyData.asset_currency)}
                assetComment={NullChangeBlankValueFromString(modifyData.asset_comment)}
            >

            </AssetRegModForm>
        </SiteStackedLayout>

    )
}
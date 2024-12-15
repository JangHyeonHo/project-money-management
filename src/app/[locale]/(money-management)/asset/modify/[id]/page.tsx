import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { HouseholdTypes, LayoutHeaders } from "@/app/[locale]/_types/common-const";
import AssetRegModForm from "../../_components/asset-regmod";
import { GetAssetDataOne } from "../../_actions/get-asset-data-one";
import { NullChangeBlankValueFromString } from "@/app/[locale]/_utils/common-utils";
import { redirect } from "@/i18n/routing";

/**
 * 자본 등록 화면
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{ locale: string, id: string }> }) {

    const { locale, id } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale });
        return;
    }

    const modifyData = await GetAssetDataOne(userInfo.userKey, id);

    if (modifyData === null) {
        // 에러로 나중에 바꿀것
        redirect({ href: "/asset/management", locale: locale });
        return;
    }

    let totalIncome = 0;
    if (modifyData) {
        modifyData.household.filter((item) => item.household_type === HouseholdTypes.Income)
            .forEach(({ household_amount }) => {
                totalIncome += household_amount;
            })
        modifyData.household.filter((item) => item.household_type === HouseholdTypes.Expenditure)
            .forEach(({ household_amount }) => {
                totalIncome -= household_amount;
            })
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
                assetMoney={modifyData.asset_money + totalIncome}
                assetCurrency={NullChangeBlankValueFromString(modifyData.asset_currency)}
                assetComment={NullChangeBlankValueFromString(modifyData.asset_comment)}
            >

            </AssetRegModForm>
        </SiteStackedLayout>

    )
}
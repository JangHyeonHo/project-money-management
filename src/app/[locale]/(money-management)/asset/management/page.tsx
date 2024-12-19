
import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import AssetManagement from "../_components/asset-management";
import { AssetTypes, HouseholdTypes, LayoutHeaders } from "@/app/[locale]/_types/common-const";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { GetAssetDatas } from "../_actions/get-asset-datas";
import { AssetListItemProps } from "../_types/asset-type";
import { NullChangeBlankValueFromString } from "@/app/[locale]/_utils/common-utils";
import { redirect } from "@/i18n/routing";


/**
 * 자본 관리 화면
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale });
        return;
    }

    const assetManagementDatas = await GetAssetDatas(userInfo.userKey);

    const cashAssets: AssetListItemProps[] = [];
    const cardAssets: AssetListItemProps[] = [];
    const bankbookAssets: AssetListItemProps[] = [];
    const etcAssets: AssetListItemProps[] = [];

    if (assetManagementDatas) {
        for (let i = 0; i < assetManagementDatas.length; i++) {
            let totalIncome = 0;
            assetManagementDatas[i].household.filter((item) => item.household_type === HouseholdTypes.Income)
                .forEach(({ household_amount }) => {
                    totalIncome += household_amount;
                })
            assetManagementDatas[i].household.filter((item) => item.household_type === HouseholdTypes.Expenditure)
                .forEach(({ household_amount }) => {
                    totalIncome -= household_amount;
                })

            switch (assetManagementDatas[i].asset_type) {
                case AssetTypes.Cash:
                    cashAssets.push({
                        key: assetManagementDatas[i].id,
                        name: assetManagementDatas[i].asset_name,
                        currency: NullChangeBlankValueFromString(assetManagementDatas[i].asset_currency),
                        money: assetManagementDatas[i].asset_money + totalIncome,
                    });
                    break;
                case AssetTypes.Card:
                    cardAssets.push({
                        key: assetManagementDatas[i].id,
                        name: assetManagementDatas[i].asset_name,
                        currency: NullChangeBlankValueFromString(assetManagementDatas[i].asset_currency),
                        money: assetManagementDatas[i].asset_money + totalIncome,
                    });
                    break;
                case AssetTypes.Bankbook:
                    bankbookAssets.push({
                        key: assetManagementDatas[i].id,
                        name: assetManagementDatas[i].asset_name,
                        currency: NullChangeBlankValueFromString(assetManagementDatas[i].asset_currency),
                        money: assetManagementDatas[i].asset_money + totalIncome,
                    });
                    break;
                case AssetTypes.Etc:
                    etcAssets.push({
                        key: assetManagementDatas[i].id,
                        name: assetManagementDatas[i].asset_name,
                        currency: NullChangeBlankValueFromString(assetManagementDatas[i].asset_currency),
                        money: assetManagementDatas[i].asset_money + totalIncome,
                    });
                    break;
            }
        }
    }

    const isBankTransfer = (assetManagementDatas ? assetManagementDatas.length : 0) > 1;


    return (
        <SiteStackedLayout
            headtitle={'asset.management'}
            headCurrent={LayoutHeaders.Asset}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <>
                <AssetManagement
                    bankbookAssets={bankbookAssets}
                    cardAssets={cardAssets}
                    cashAssets={cashAssets}
                    etcAssets={etcAssets}
                    isBankTransfer={isBankTransfer}
                >

                </AssetManagement>
            </>
        </SiteStackedLayout>
    )
}
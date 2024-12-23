import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import HouseholdRegMod from "../../_components/household-regmod";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/[locale]/_types/common-const";
import { GetHouseholdCategories } from "../../_actions/get-household-categories";
import { HouseholdCategoryItemProps, HouseholdSubcategoryItemProps, AssetKeyItemProps } from "../../_types/household-type";
import { GetAssetKeys } from "../../_actions/get-asset-keys";
import { GetHouseholdDataOne } from "../../_actions/get-household-data-one";
import { NullChangeBlankValueFromString } from "@/app/[locale]/_utils/common-utils";
import { redirect } from "@/i18n/routing";

/**
 * 가계부 등록 화면
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{ locale: string, id: string, }> }) {

    const { locale, id } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale });
        return;
    }

    const modifyData = await GetHouseholdDataOne(userInfo.userKey, id);

    if (modifyData === null) {
        // 에러로 나중에 바꿀것
        redirect({ href: "/household/management", locale: locale })
        return;
    }

    // 대분류/소분류 처리
    const householdCategories = await GetHouseholdCategories(userInfo.userKey);
    const mainCategoryItems: HouseholdCategoryItemProps[] = [];

    if (householdCategories !== null) {
        const mainCategories = householdCategories.filter((sel) => sel.parent_category_id === null);

        for (let i = 0; i < mainCategories.length; i++) {
            const subcategories = householdCategories.filter((sel) => sel.parent_category_id === mainCategories[i].id)
            const subcategoryItems: HouseholdSubcategoryItemProps[] = [];

            for (let j = 0; j < subcategories.length; j++) {
                subcategoryItems.push(
                    {
                        key: subcategories[j].id,
                        name: subcategories[j].category_name,
                    }
                );
            }

            mainCategoryItems.push(
                {
                    key: mainCategories[i].id,
                    name: mainCategories[i].category_name,
                    type: mainCategories[i].household_type,
                    subcategory: subcategoryItems,
                }
            );
        }
    }

    const assetKeys = await GetAssetKeys(userInfo.userKey);
    const assetKeyItems: AssetKeyItemProps[] = [];

    if (assetKeys !== null) {
        for (let i = 0; i < assetKeys.length; i++) {
            assetKeyItems.push(
                {
                    key: assetKeys[i].id,
                    name: assetKeys[i].asset_name,
                }
            );
        }
    }

    const category = modifyData.household_categories === null ? undefined : modifyData.household_categories;

    return (

        <SiteStackedLayout
            headtitle={'household.regist'}
            headCurrent={LayoutHeaders.Household}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <HouseholdRegMod
                categoryItems={mainCategoryItems}
                assetItems={assetKeyItems}
                isModify={true}
                locale={locale}
                householdKey={modifyData.id}
                issueDate={modifyData.issue_date}
                assetKey={modifyData.Asset.id}
                householdType={modifyData.household_type}
                householdName={NullChangeBlankValueFromString(modifyData.household_name)}
                householdCategory={category?.parent_category_id === null ? category?.id : category?.parent_category_id}
                householdSubcategory={category?.parent_category_id === null ? undefined : category?.id}
                householdAmount={modifyData.household_amount}
                householdComment={NullChangeBlankValueFromString(modifyData.household_comment)}
            >

            </HouseholdRegMod>
        </SiteStackedLayout>
    )
}
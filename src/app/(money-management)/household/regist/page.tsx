import GetUserCookieFromSession from "@/app/_actions/get-user-cookies";
import { redirect } from "next/navigation";
import HouseholdRegist from "../_components/household-regmod";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";
import { GetHouseholdCategories } from "../_actions/get-household-categories";
import { HouseholdCategoryItemProps, HouseholdSubcategoryItemProps, AssetKeyItemProps } from "../_types/household-type";
import { GetAssetKeys } from "../_actions/get-asset-keys";

/**
 * 가계부 등록 화면
 * @returns 
 */
export default async function Page() {

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect("/signin")
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


    return (

        <SiteStackedLayout
            headtitle={'household.regist'}
            headCurrent={LayoutHeaders.Household}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <HouseholdRegist
                categoryItems={mainCategoryItems}
                assetItems={assetKeyItems}>

            </HouseholdRegist>
        </SiteStackedLayout>
    )
}
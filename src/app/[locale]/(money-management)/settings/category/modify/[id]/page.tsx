import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { HouseholdTypes, LayoutHeaders, SettingMenus } from "@/app/[locale]/_types/common-const";
import { redirect } from "@/i18n/routing";
import SettingMenu from "../../../_components/setting-menu";
import SettingList from "../../../_components/setting-list";
import { CategoryRegModParameter, DropdownCategoryItems } from "../../../_types/settings-type";
import CategoryRegModForm from "../../../_components/category-regmod";
import { GetCategoryDatasTopOnly } from "../../../_actions/get-category-datas-top-only";
import { InputDropdownPropsItem } from "@/app/[locale]/_types/common-types";
import { GetCategoryDataOne } from "../../../_actions/get-category-data-one";
import { NullChangeBlankValueFromString, NullChangeUndefinedValueFromNumber } from "@/app/[locale]/_utils/common-utils";

export default async function Page({ params, searchParams }: { params: Promise<{ locale: string, id: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const { locale, id } = await params;

    const search = await searchParams;

    if(Number.isNaN(Number(id))){
        redirect({ href: "/settings/category", locale: locale });
    }

    const isSubcategory = search["s"] === CategoryRegModParameter.isSubcategory;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale });
        return;
    }

    const categoryItems: DropdownCategoryItems[] = [];

    const getCategory = await GetCategoryDataOne(Number(id), userInfo.userKey);

    if (!getCategory) {
        redirect({ href: "/settings/category", locale: locale });
        return;
    }

    if (isSubcategory) {
        const categoryDatas = await GetCategoryDatasTopOnly(userInfo.userKey);

        if (categoryDatas) {
            const incomes = categoryDatas.filter((item) => item.household_type === HouseholdTypes.Income);
            const incomeItems: InputDropdownPropsItem[] = [];
            for (const income of incomes) {
                incomeItems.push({
                    key: income.id.toString(),
                    value: income.category_name
                });
            }
            categoryItems.push({
                categoryType: HouseholdTypes.Income,
                items: incomeItems,
            })

            const expenditures = categoryDatas.filter((item) => item.household_type === HouseholdTypes.Expenditure);
            const expenditureItems: InputDropdownPropsItem[] = [];
            for (const expenditure of expenditures) {
                expenditureItems.push({
                    key: expenditure.id.toString(),
                    value: expenditure.category_name
                });
            }
            categoryItems.push({
                categoryType: HouseholdTypes.Expenditure,
                items: expenditureItems,
            })

        }
    }
    //TODO category리스트 출력
    //UI는 큰 박스 2개 놓고 대분류/소분류 버튼화(박스 사이즈를 좀 크게 잡고 모자라면 스크롤 올리는 느낌?)
    //리스트에서 수정/삭제 아이콘으로 수정 삭제로 들어가는 느낌으로

    return (
        <SiteStackedLayout
            headtitle={'settings.title'}
            headCurrent={LayoutHeaders.Config}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SettingMenu
                    className="h-full md:border-r pr-4"
                    menuCurrent={SettingMenus.Category}
                ></SettingMenu>
                <SettingList
                    className="px-4 md:col-span-2 lg:col-span-3"
                    title={isSubcategory ? "settings.category.sub-regist" : "settings.category.regist"}
                    info="settings.category-regist-info"
                >
                    <CategoryRegModForm
                        dropdownCategoryItems={categoryItems}
                        isSubcategory={isSubcategory}
                        isModify={true}
                        categoryKey={getCategory.id}
                        categoryName={getCategory.category_name}
                        householdType={getCategory.household_type}
                        parentCategoryKey={NullChangeUndefinedValueFromNumber(getCategory.parent_category_id)}
                        categoryComment={NullChangeBlankValueFromString(getCategory.category_comment)}
                    >

                    </CategoryRegModForm>

                </SettingList>
            </div>


        </SiteStackedLayout>
    )
}
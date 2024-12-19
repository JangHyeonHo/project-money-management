import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { LayoutHeaders, SettingMenus } from "@/app/[locale]/_types/common-const";
import { redirect } from "@/i18n/routing";
import SettingMenu from "../_components/setting-menu";
import SettingList from "../_components/setting-list";
import CategorySetting from "../_components/category-setting";
import { GetCategoryDatas } from "../_actions/get-category-datas";
import { CategoryItems, SubcategoryItems } from "../_types/settings-type";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale })
    }

    //TODO category리스트 출력
    //UI는 큰 박스 2개 놓고 대분류/소분류 버튼화(박스 사이즈를 좀 크게 잡고 모자라면 스크롤 올리는 느낌?)
    //리스트에서 수정/삭제 아이콘으로 수정 삭제로 들어가는 느낌으로
    const categoryDatas = await GetCategoryDatas(userInfo.userKey);

    //const categories = [];
    const categoryItems: CategoryItems[] = [];

    if (categoryDatas) {
        // 대분류 변환
        const categories = categoryDatas.filter((item) => item.parent_category_id === null);
        for (const category of categories) {
            const subcategories = categoryDatas.filter((item) => item.parent_category_id === category.id);
            const subcategoryItems: SubcategoryItems[] = [];
            for (const subcategory of subcategories) {
                subcategoryItems.push({
                    key: subcategory.id,
                    name: subcategory.category_name,
                });
            }
            categoryItems.push({
                key: category.id,
                name: category.category_name,
                householdType: category.household_type,
                subcategories: subcategoryItems
            });
        }
    }

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
                    className="h-full md:border-r px-4"
                    menuCurrent={SettingMenus.Category}
                ></SettingMenu>
                <SettingList
                    className="px-4 md:col-span-2 lg:col-span-3"
                    title="settings.category.main"
                    info="settings.category-info"
                >
                    <CategorySetting
                        categoryItems={categoryItems}
                    >

                    </CategorySetting>
                </SettingList>
            </div>


        </SiteStackedLayout>
    )
}
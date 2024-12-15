import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import HouseholdManagement from "../_components/household-management";
import SiteStackedLayout from "@/app/[locale]/_components/_layout/stacked-layout";
import { HouseholdTypes, LayoutHeaders } from "@/app/[locale]/_types/common-const";
import { GetHouseholdDatas } from "../_actions/get-household-datas";
import { HouseholdDateTotalAssetData, HouseholdDateTotalAssetItem, HouseholdMonthData, HouseholdMonthItem } from "../_types/household-type";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import { NullChangeBlankValueFromString } from "@/app/[locale]/_utils/common-utils";
import { redirect } from "@/i18n/routing";

//Page기능 넣으려고 했는데.. Page보다 더보기 기능으로 넣는게 나을까 싶어서 일단은 보류
// type Props = {
//     searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }
//export default async function Page({ searchParams }: Props) {
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // 페이지 방식에 Parameter담는 법
    // const search = await searchParams;
    // const page = search["page"] ? Number(search["page"]) : 1;
    // console.log(page);

    // 세션 정보 확인
    const userInfo = await GetUserCookieFromSession();
    //console.log(userInfo);

    if (!userInfo.isLogin) {
        redirect({ href: "/signin", locale: locale })
        return;
    }

    // TODO household 리스트
    const householdDatas = await GetHouseholdDatas(userInfo.userKey);

    const dateTotalAssetItems: HouseholdDateTotalAssetItem[] = [];

    // 1. 날짜별 총 자산정리(날짜별 카운팅 추가)
    if (householdDatas !== null) {
        for (const householdData of householdDatas) {
            // 날짜별로 데이터 검색
            const getDateItem = dateTotalAssetItems.find((item) => item.issueDate.getDate() === householdData.issue_date.getDate());
            // 해당 날짜의 데이터가 아예 존재하지 않는다면 새롭게 생성
            if (getDateItem === undefined) {
                const initAssetDatas: HouseholdDateTotalAssetData[] = [];
                initAssetDatas.push({
                    assetName: householdData.Asset.asset_name,
                    totalAmount: householdData.household_type === HouseholdTypes.Income ? householdData.household_amount : householdData.household_amount * -1,
                    currency: householdData.Asset.asset_currency,
                });
                dateTotalAssetItems.push({
                    issueDate: householdData.issue_date,
                    count: 1,
                    assetDatas: initAssetDatas
                });
                continue;
            }
            // 데이터가 존재한다면 자산 검색
            const getTotalAssetData = getDateItem.assetDatas.find((item) => item.assetName === householdData.Asset.asset_name);
            getDateItem.count += 1;
            if (getTotalAssetData === undefined) {
                // 자산이 존재하지 않는다면 새롭게 생성
                getDateItem.assetDatas.push({
                    assetName: householdData.Asset.asset_name,
                    totalAmount: householdData.household_type === HouseholdTypes.Income ? householdData.household_amount : householdData.household_amount * -1,
                    currency: householdData.Asset.asset_currency,
                });
            } else {
                // 존재한다면 전체 금액에서 계산
                if (householdData.household_type === HouseholdTypes.Income) {
                    getTotalAssetData.totalAmount += householdData.household_amount;
                } else {
                    getTotalAssetData.totalAmount -= householdData.household_amount;
                }
            }
        }
    }

    //console.log(dateTotalAssetItems);

    // 2. 월별 전체 이력 표시
    const householdMonthItems: HouseholdMonthItem[] = [];

    if (householdDatas !== null) {
        for (const householdData of householdDatas) {
            // 달별로 데이터 검색
            const getMonthItem = householdMonthItems.find((item) => item.issueDate.toLocaleDateString("en", {
                year: "2-digit", month: "2-digit"
            }) === householdData.issue_date.toLocaleDateString("en", {
                year: "2-digit", month: "2-digit"
            }));

            if (getMonthItem === undefined) {
                const initHouseholdDatas: HouseholdMonthData[] = [];
                initHouseholdDatas.push({
                    householdKey: householdData.id,
                    issueDate: householdData.issue_date,
                    householdType: householdData.household_type,
                    assetName: householdData.Asset.asset_name,
                    householdName: NullChangeBlankValueFromString(householdData.household_name),
                    householdAmount: householdData.household_type === HouseholdTypes.Income ? householdData.household_amount : householdData.household_amount * -1,
                    currency: householdData.Asset.asset_currency,
                });
                householdMonthItems.push({
                    issueDate: householdData.issue_date,
                    count: 1,
                    householdDatas: initHouseholdDatas
                });
                continue;
            }

            // 달데이터가 존재한다면 데이터 추가
            getMonthItem.count += 1;
            getMonthItem.householdDatas.push({
                householdKey: householdData.id,
                issueDate: householdData.issue_date,
                householdType: householdData.household_type,
                assetName: householdData.Asset.asset_name,
                householdName: NullChangeBlankValueFromString(householdData.household_name),
                householdAmount: householdData.household_type === HouseholdTypes.Income ? householdData.household_amount : householdData.household_amount * -1,
                currency: householdData.Asset.asset_currency,
            });
        }
    }

    const calendarEvents: EventSourceInput = []
    // 3. 카운팅 데이터 분리
    if (householdDatas !== null) {
        for (const totalAssetItem of dateTotalAssetItems) {
            calendarEvents.push({
                title: totalAssetItem.count.toString(),
                date: totalAssetItem.issueDate,
            })
        }
    }


    return (

        <SiteStackedLayout
            headtitle={'household.management'}
            headCurrent={LayoutHeaders.Household}
            isLogin={userInfo.isLogin}
            userFirstName={userInfo.userFirstName}
            userLastName={userInfo.userLastName}
        >
            <HouseholdManagement
                householdDateTotalAssetItems={dateTotalAssetItems}
                householdMonthItems={householdMonthItems}
                calendarEvents={calendarEvents}
                locale={locale}
            >

            </HouseholdManagement>
        </SiteStackedLayout>
    )

}
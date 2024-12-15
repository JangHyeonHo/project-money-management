import { AmountChangeAutoComma } from "@/app/[locale]/_utils/common-utils";
import { HouseholdDayInfoProps } from "../_types/household-type";
import { useTranslations } from "next-intl";

/**
 * 날짜별 데이터 표시
 * @param householdSelectedDate // 선택한 날짜
 * @param householdDateTotalAssetItem // 표시할 데이터 아이템
 * @returns 
 */
export default function HouseholdDayInfo({ className, householdSelectedDate, householdDateTotalAssetItem, locale }: HouseholdDayInfoProps) {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const tableDefaultClassName = "p-4 pl-8 border-slate-300 ";

    return (
        <div className={"overflow-x-auto " + className}>
            <div className="relative border rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden mt-8">
                    <table className="table-fixed border-collapse border-spacing-2 text-sm w-full">
                        <caption className="caption-top mb-4 text-inherit text-sm font-bold">
                            {householdSelectedDate.toLocaleDateString(locale, {
                                year: "numeric", month: "long", day: "numeric"
                            })}
                        </caption>
                        <thead>
                            <tr>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left"}>{w("asset.name")}</th>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left"}>{w("asset.total")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {householdDateTotalAssetItem ?
                                householdDateTotalAssetItem.assetDatas.map(({ assetName, totalAmount, currency }, index) => (
                                    <tr
                                        key={assetName + index}
                                        className={totalAmount > 0 ? "bg-indigo-100" : "bg-red-100"}
                                    >
                                        <td className={tableDefaultClassName + "truncate"}>{assetName}</td>
                                        <td className={tableDefaultClassName}>{AmountChangeAutoComma(totalAmount)}<span className="ml-2">{currency}</span></td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td className={tableDefaultClassName + "text-nowrap"}>{m("household.not-exist-datedata")}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}
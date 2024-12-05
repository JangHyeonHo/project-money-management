import { AmountChangeAutoComma } from "@/app/_utils/common-utils";
import { HouseholdMonthInfoProps } from "../_types/household-type";
import { useTranslations } from "next-intl";
import { HouseholdTypes } from "@/app/_types/common-const";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

/**
 * 월별 데이터 표시
 * @param householdSelectedDate // 선택한 날짜
 * @param householdDateTotalAssetItem // 표시할 데이터 아이템
 * @returns 
 */
export default function HouseholdMonthInfo({ className, householdSelectedMonth, householdMonthItems }: HouseholdMonthInfoProps) {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const tableDefaultClassName = "p-4 pl-8 border-slate-300 ";

    const getClassName = (type: string, issueDate: Date) => {
        const className = (type === HouseholdTypes.Income ? "bg-sky-50" : "bg-rose-50")
        // + (householdSelectedMonth.getDate() === issueDate.getDate() ? "-300" : "-50");
        return className;
    }

    return (
        <div className={"overflow-x-auto " + className}>
            <div className="relative border rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden mt-8">
                    <table className="table-fixed border-collapse border-spacing-2 text-sm w-full">
                        <caption className="caption-top mb-4 text-inherit text-sm font-bold">
                            {householdSelectedMonth.toLocaleDateString("en", {
                                year: "numeric", month: "long",
                            })}
                        </caption>
                        <thead>
                            <tr>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left w-16"}></th>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left"}>{w("household.date")}</th>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left truncate hidden md:table-cell"}>{w("household.in-exp")}</th>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left truncate hidden md:table-cell"}>{w("asset.name")}</th>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left truncate"}>{w("household.name")}</th>
                                <th className={tableDefaultClassName + "border-b font-medium bg-slate-50 text-slate-400 text-left"}>{w("asset.money")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {householdMonthItems ?
                                householdMonthItems.householdDatas.map(({ householdKey, issueDate, householdType, assetName, householdName, householdAmount, currency }, index) => (
                                    <tr
                                        key={householdKey + index}
                                        className={
                                            getClassName(householdType, issueDate)
                                        }
                                    >
                                        <td className={"border-slate-300 p-2 w-16"}>
                                            <div className="grid grid-cols-2 content-center">
                                                <button>
                                                    <PencilSquareIcon
                                                        width={22}
                                                    >
                                                    </PencilSquareIcon>
                                                </button>
                                                <button type="button">
                                                    <TrashIcon
                                                        width={22}
                                                    >
                                                    </TrashIcon>
                                                </button>
                                            </div>
                                        </td>
                                        <td className={tableDefaultClassName}>
                                            {issueDate.toLocaleDateString("en", {
                                                year: "2-digit", month: "2-digit", day: "2-digit"
                                            })}
                                            {householdSelectedMonth.getDate() === issueDate.getDate() &&
                                                <CheckCircleIcon
                                                    className="ml-2 inline"
                                                    width={10}
                                                />
                                            }
                                        </td>
                                        <td className={tableDefaultClassName + "hidden md:table-cell truncate"}>{householdType === HouseholdTypes.Income ? w('household.income') : w('household.expense')}
                                        </td>
                                        <td className={tableDefaultClassName + "hidden md:table-cell truncate"}>{assetName}</td>
                                        <td className={tableDefaultClassName + "truncate"}>{householdName}</td>
                                        <td className={tableDefaultClassName}>{AmountChangeAutoComma(householdAmount)}<span className="ml-2">{currency}</span></td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td className={tableDefaultClassName + "text-center text-nowrap"} >{m("household.not-exist-monthdata")}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}
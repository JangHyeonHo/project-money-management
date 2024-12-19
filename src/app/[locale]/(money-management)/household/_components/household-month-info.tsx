"use client"

import { AmountChangeAutoComma } from "@/app/[locale]/_utils/common-utils";
import { HouseholdMonthInfoProps } from "../_types/household-type";
import { useTranslations } from "next-intl";
import { HouseholdTypes } from "@/app/[locale]/_types/common-const";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";

/**
 * 월별 데이터 표시
 * @param householdSelectedDate // 선택한 날짜
 * @param householdDateTotalAssetItem // 표시할 데이터 아이템
 * @returns 
 */
export default function HouseholdMonthInfo({ className, householdSelectedMonth, householdMonthItems, onDeleteClick, locale }: HouseholdMonthInfoProps) {

    const router = useRouter();

    const w = useTranslations('word');
    const m = useTranslations('msg');

    //const tableDefaultClassName = "md:p-4 py-4 border-slate-300 ";

    const [viewItem, setViewItem] = useState<number>(10);

    const deleteClick = (deleteKey: string, deleteName: string) => {
        //Confirm창
        onDeleteClick({
            key: deleteKey,
            itemName: deleteName
        });
    }

    const modifyClick = (modifyKey: string) => {
        //Confirm창
        router.push(`./modify/${modifyKey}`);
    }

    return (
        <div className={"overflow-x-auto " + className}>
            <div className="relative border rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden mt-8">
                    <ul role="list" className="divide-y divide-gray-100">
                        <li className="mb-4 text-center text-inherit text-sm font-bold">
                            {householdSelectedMonth.toLocaleDateString(locale, {
                                year: "numeric", month: "long",
                            })}
                        </li>
                        {/* <li className="flex flex-row justify-between py-2">
                            <div className="px-2 md:px-0 md:ml-4">
                                <div className="join">
                                    <div>
                                        <div>
                                            <input className="input input-bordered join-item" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="indicator">
                                        <button className="btn join-item">Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <div className="text-xs hidden md:block mr-4 text-gray-500">
                                    이번달 내역수 : 500건
                                </div>
                            </div>
                        </li> */}
                        {householdMonthItems ?
                            householdMonthItems.householdDatas.map(({ householdKey, issueDate, householdType, assetName, householdName, householdAmount, currency }, index) =>
                                index < viewItem && (
                                    <li key={"li" + householdKey} className={"flex justify-between gap-x-6 p-5"}>
                                        <div className="flex flex-col min-w-0 gap-x-4">
                                            <div>
                                                <kbd className={"kbd kbd-xs " + (householdType === HouseholdTypes.Income ? "bg-sky-50 text-blue-600" : "bg-rose-50 text-red-600")}>
                                                    {householdType === HouseholdTypes.Income ? w('household.income') : w('household.expense')}
                                                </kbd>
                                            </div>
                                            <div className="my-2 truncate text-lg font-bold text-black-500">
                                                {householdName}
                                            </div>
                                            <div className="truncate text-xs text-gray-500">
                                                {householdSelectedMonth.getDate() === issueDate.getDate() &&
                                                    <CheckCircleIcon
                                                        className="mr-1 mb-0.5 inline w-2.5"
                                                    />
                                                }
                                                {issueDate.toLocaleDateString(locale, {
                                                    year: "numeric", month: "2-digit", day: "2-digit"
                                                })}
                                            </div>
                                        </div>
                                        <div className="shrink-0 flex flex-col items-end justify-center">
                                            <div className={"my-2 truncate font-semibold text-sm/6"}>
                                                {AmountChangeAutoComma(householdAmount)}
                                                <span className="mx-1">
                                                    {currency.toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="text-xs text-gray-500 mx-1">{assetName}</div>
                                            <div className="text-xs text-gray-500 mx-1 mt-2">
                                                <div className="grid grid-cols-2 gap-x-4 content-center">
                                                    <div className="tooltip tooltip-top" data-tip={w('common.modify')}>
                                                        <button>
                                                            <PencilSquareIcon
                                                                className="w-6 hover:text-yellow-500"
                                                                onClick={() => { modifyClick(householdKey) }}
                                                            >
                                                            </PencilSquareIcon>
                                                        </button>
                                                    </div>
                                                    <div className="tooltip tooltip-top" data-tip={w('common.delete')}>
                                                        <button type="button">
                                                            <TrashIcon
                                                                className="w-6 hover:text-red-500"
                                                                onClick={() => { deleteClick(householdKey, householdName) }}
                                                            >
                                                            </TrashIcon>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            :
                            <li>
                                <div className={"md:p-4 py-4 border-slate-300 text-center text-nowrap"} >{m("household.not-exist-monthdata")}</div>
                            </li>
                        }

                        {householdMonthItems && householdMonthItems.count > viewItem &&
                            (
                                <li>
                                    <div>
                                        <button
                                            className="btn btn-ghost w-full"
                                            onClick={()=>{setViewItem(viewItem + 10)}}
                                        >
                                            {w("common.more")}
                                        </button>
                                    </div>
                                    {/* <div>
                                        <div className="join">
                                            <button className="join-item btn btn-ghost btn-sm md:btn-md">«</button>
                                            <button className="join-item btn btn-ghost md:btn-wide cursor-default hover:bg-transparent no-animation btn-sm md:btn-md">1/100</button>
                                            <button className="join-item btn btn-ghost btn-sm md:btn-md">»</button>
                                        </div>
                                    </div> */}
                                </li>
                            )}

                    </ul>
                </div>
            </div>

        </div>
    )
}
"use client"

import { useTranslations } from "next-intl";
import { HouseholdDateTotalAssetItem, HouseholdManagementProps, HouseholdMonthItem } from "../_types/household-type";
import HouseholdCalendar from "./household-calendar";
import HouseholdDayInfo from "./household-day-info";
import { useState } from "react";
import HouseholdMonthInfo from "./household-month-info";
import ConfirmModal from "@/app/[locale]/_components/_alert/confirm-modal";
import { useRouter } from "@/i18n/routing";

export default function HouseholdManagement({ householdDateTotalAssetItems, householdMonthItems, calendarEvents, isNothingAsset, locale }: HouseholdManagementProps) {

    const router = useRouter();

    const [selectDate, setSelectDate] = useState<Date>(new Date());
    const [totalAssetData, setTotalAssetData] = useState<HouseholdDateTotalAssetItem | undefined>(
        householdDateTotalAssetItems?.find((item) => item.issueDate.getDate() === selectDate.getDate())
    );
    const [monthData, setMonthData] = useState<HouseholdMonthItem | undefined>(
        householdMonthItems?.find((item) => item.issueDate.toLocaleDateString(locale, {
            year: "2-digit", month: "2-digit"
        }) === selectDate.toLocaleDateString(locale, {
            year: "2-digit", month: "2-digit"
        }))
    )

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const dateClick = (selectDate: Date) => {
        setSelectDate(selectDate);
        if (householdDateTotalAssetItems) {
            setTotalAssetData(householdDateTotalAssetItems.find((item) => item.issueDate.toLocaleDateString() === selectDate.toLocaleDateString()));
        }
        if (householdMonthItems) {
            setMonthData(householdMonthItems.find((item) => item.issueDate.toLocaleDateString(locale, {
                year: "2-digit", month: "2-digit"
            }) === selectDate.toLocaleDateString(locale, {
                year: "2-digit", month: "2-digit"
            })));
        }
    }

    const [deleteItem, setDeleteItem] = useState<{ key: string, itemName: string }>({ key: "", itemName: "" });
    const [openConfirm, setOpenConfirm] = useState<boolean>(false);

    const deleteCallback = (item: { key: string, itemName: string }) => {
        setDeleteItem(item);
        setOpenConfirm(true);
    }

    const deleteConfirmYesClick = async () => {
        const res = await fetch(`/api/household/delete/${deleteItem.key}`, {
            method: "DELETE", // 요청 메서드
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(!res.ok){
            //에러 표시시
        }
        setDeleteItem({ key: "", itemName: deleteItem.itemName });
        setOpenConfirm(false);
        // 서버 재호출
        window.location.reload();
    }

    const deleteConfirmNoClick = () => {
        setDeleteItem({ key: "", itemName: deleteItem.itemName });
        setOpenConfirm(false);
    }

    return (
        <div>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('household.management')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m.rich('household.management-info', {
                    br: () => <br />
                })}</p>
                <div className="mt-4 flex items-center gap-x-6">
                    <button
                        disabled={isNothingAsset}
                        onClick={() => { router.push("./regist"); }}
                        className="btn btn-info btn-sm">
                        {w('household.regist')}
                    </button>
                </div>
            </div>
            <ConfirmModal
                isOpen={openConfirm}
                title={w("household.delete", { item: deleteItem.itemName })}
                children={m.rich("household.delete-info", {
                    br: () => <br />
                })}
                onYes={deleteConfirmYesClick}
                onNo={deleteConfirmNoClick}
            />
            <div className="grid md:grid-cols-2 md:gap-8 border-b border-gray-900/10 pb-8">
                <HouseholdCalendar
                    className="mt-4"
                    dateClilck={dateClick}
                    events={calendarEvents}
                    locale={locale}
                >

                </HouseholdCalendar>
                <HouseholdDayInfo
                    className="mt-4"
                    householdSelectedDate={selectDate}
                    householdDateTotalAssetItem={totalAssetData}
                    locale={locale}
                >

                </HouseholdDayInfo>
            </div>
            <HouseholdMonthInfo
                className="mt-8"
                householdSelectedMonth={selectDate}
                householdMonthItems={monthData}
                onDeleteClick={deleteCallback}
                locale={locale}
            >

            </HouseholdMonthInfo>

        </div>
    )
}
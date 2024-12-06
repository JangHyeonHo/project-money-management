"use client"

import { useTranslations } from "next-intl";
import { HouseholdDateTotalAssetItem, HouseholdManagementProps, HouseholdMonthItem } from "../_types/household-type";
import HouseholdCalendar from "./household-calendar";
import HouseholdDayInfo from "./household-day-info";
import { useState } from "react";
import HouseholdMonthInfo from "./household-month-info";

export default function HouseholdManagement({ householdDateTotalAssetItems, householdMonthItems, calendarEvents }: HouseholdManagementProps) {

    const [selectDate, setSelectDate] = useState<Date>(new Date());
    const [totalAssetData, setTotalAssetData] = useState<HouseholdDateTotalAssetItem | undefined>(
        householdDateTotalAssetItems?.find((item) => item.issueDate.getDate() === selectDate.getDate())
    );
    const [monthData, setMonthData] = useState<HouseholdMonthItem | undefined>(
        householdMonthItems?.find((item) => item.issueDate.toLocaleDateString("en", {
            year: "2-digit", month: "2-digit"
        }) === selectDate.toLocaleDateString("en", {
            year: "2-digit", month: "2-digit"
        }))
    )

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const dateClick = (selectDate: Date) => {
        setSelectDate(selectDate);
        if (householdDateTotalAssetItems) {
            setTotalAssetData(householdDateTotalAssetItems.find((item) => item.issueDate.getDate() === selectDate.getDate()));
        }
        if (householdMonthItems) {
            setMonthData(householdMonthItems.find((item) => item.issueDate.toLocaleDateString("en", {
                year: "2-digit", month: "2-digit"
            }) === selectDate.toLocaleDateString("en", {
                year: "2-digit", month: "2-digit"
            })));
        }
    }

    return (
        <div>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('household.management')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('household.management-info')}</p>
                <div className="mt-4 flex items-center gap-x-6">
                    <a
                        href="./regist"
                        className="btn btn-info btn-sm">
                        {w('household.regist')}
                    </a>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8 border-b border-gray-900/10 pb-8">
                <HouseholdCalendar
                    className="mt-4"
                    dateClilck={dateClick}
                    events={calendarEvents}
                >

                </HouseholdCalendar>
                <HouseholdDayInfo
                    className="mt-4"
                    householdSelectedDate={selectDate}
                    householdDateTotalAssetItem={totalAssetData}>

                </HouseholdDayInfo>
            </div>
            <HouseholdMonthInfo
                className="mt-8"
                householdSelectedMonth={selectDate}
                householdMonthItems={monthData}
            >

            </HouseholdMonthInfo>

        </div>
    )
}
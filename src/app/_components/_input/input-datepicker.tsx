"use client"

import { InputDatePickerProps } from "@/app/_types/common-types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import DatePicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"

export default function InputDatePicker({title, language, id, name, defaultDate, disabled }:InputDatePickerProps) {

    /**시간관계상 DatePicker는 일단 기성품을 쓰기로 함
     * 이후에 만들 여유가 있으면 수제 커스텀으로 만들어 보는것도 괜찮을지도
     */
    const options: IOptions = {
        title: title || "Select Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: undefined,
        minDate: new Date("2000-01-01"),
        theme: {
            background: "bg-base-100",
            todayBtn: "bg-sky-500",
            clearBtn: "",
            icons: "",
            text: "w-full",
            disabledText: "bg-emerald-300",
            input: "",
            inputIcon: "",
            selected: "bg-sky-500",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <ChevronLeftIcon className="w-4"/>,
            next: () => <ChevronRightIcon className="w-4"/>,
        },
        datepickerClassNames: "top-auto",
        defaultDate: defaultDate || new Date(),
        language: language || "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: name,
        inputIdProp: id,
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    }

    const [show, setShow] = useState<boolean>(false);
    const [selectDate, setSelectDate] = useState<Date>();
    const handleChange = (selectedDate: Date) => {
        //console.log(selectedDate)
        setSelectDate(selectedDate);
    }
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    return (
        <div>
            <DatePicker
                options={options} 
                onChange={handleChange}
                show={!disabled && show}
                value={selectDate}
                setShow={handleClose} />
        </div>
    )
}
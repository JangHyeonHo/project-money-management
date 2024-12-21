"use client"

import { InputDatePickerProps } from "@/app/[locale]/_types/common-types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "next-intl"
import { forwardRef, useImperativeHandle, useState } from "react"
import DatePicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"

const InputDatePicker = forwardRef(({ title, language, id, name, defaultDate, disabled, setDate }: InputDatePickerProps, ref) => {

    const w = useTranslations('word');

    useImperativeHandle(ref, () => ({
        handleChange,
    }));

    /**시간관계상 DatePicker는 일단 기성품을 쓰기로 함
     * 이후에 만들 여유가 있으면 수제 커스텀으로 만들어 보는것도 괜찮을지도
     */
    const options: IOptions = {
        title: title || w('common.sel-date'),
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        clearBtnText: w('common.clear'),
        todayBtnText: w('common.today'),
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
            prev: () => <ChevronLeftIcon className="w-4" />,
            next: () => <ChevronRightIcon className="w-4" />,
        },
        datepickerClassNames: "top-auto",
        defaultDate: defaultDate || new Date(),
        language: language || "en",
        disabledDates: [],
        weekDays: [w('common.weekend.mo'), w('common.weekend.tu'), w('common.weekend.we'), w('common.weekend.th'), w('common.weekend.fr'), w('common.weekend.sa'), w('common.weekend.su')],
        inputNameProp: name,
        inputIdProp: id,
        inputPlaceholderProp: w('common.sel-date'),
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
        if (setDate) {
            setDate(selectedDate);
        }
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
})

export default InputDatePicker;
"use client"

import { InputDropdownProps } from "@/app/[locale]/_types/common-types";
import { useEffect, useState } from "react";

export default function InputDropdown({ dropdownItems, defaultBtnName, id, name, required, disabled, className, isChangeBtnName, defaultInputValue, setParentValue, onChange }: InputDropdownProps) {

    const [inputValue, setInputValue] = useState<string>(defaultInputValue || "");
    const [inputButtonName, setInputButtonName] = useState<string>(defaultBtnName || "");
    const [open, isOpen] = useState<boolean>(false);

    // 고민을 좀 해봅시다... 초기화에 대해서

    const itemOnClick = (key: string, value: string) => {
        if (isChangeBtnName) {
            setInputButtonName(value);
        }
        if (inputValue !== key) {
            if (onChange) {
                onChange(key);
            }
        }
        setInputValue(key);
        if (setParentValue) {
            setParentValue(key);
        }
    }

    // 드랍다운 항목이 바뀌면 모두 초기화
    useEffect(() => {
        setInputButtonName(defaultBtnName || "");
        if (setParentValue) {
            setParentValue(defaultInputValue || "");
        }
        setInputValue(defaultInputValue || "");
    }, [dropdownItems])

    return (
        <>
            <details
                className={(disabled ? "btn-disabled" : "dropdown")}
                open={open}
                onClick={(e) => { e.preventDefault(); if (!disabled) isOpen(!open); }}>
                <summary
                    className={"btn m-1 justify-start " + className}
                >{inputButtonName}</summary>
                <ul
                    className={className + " dropdown-content menu bg-base-100 rounded-box z-[1] mx-1 p-2 shadow"}>
                    {dropdownItems.map(({ key, value }) => (
                        <li key={"opt" + key} value={key} onClick={() => { itemOnClick(key, value) }} >
                            <a>
                                {value}
                            </a>
                        </li>
                    ))}
                </ul>
                <input
                    type="hidden"
                    id={id}
                    name={name}
                    required={required}
                    value={inputValue}
                />
            </details>
        </>
    )
}
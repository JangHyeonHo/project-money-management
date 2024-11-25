"use client"

import { useState } from "react";

export default function InputDropdown({ dropdownItems, btnName, id, name, required, className, isChangeBtnName, defaultInputValue, setParentValue }: InputDropdownProps) {

    const [inputValue, setInputValue] = useState<string>(defaultInputValue ? defaultInputValue : "");
    const [inputButtonName, setInputButtonName] = useState<string>(btnName ? btnName : "");
    const [open, isOpen] = useState<boolean>(false);


    const itemOnClick = (key: string, value: string) => {
        if (isChangeBtnName) {
            setInputButtonName(value);
        }
        setInputValue(key);
        if (setParentValue){
            setParentValue(key);
        }

    }

    return (
        <>
            <details
                className="dropdown"
                open={open}
                onClick={(e) => { e.preventDefault(); isOpen(!open);}}>
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
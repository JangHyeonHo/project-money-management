"use client"

import { ProcessAlertProps } from "@/app/_types/common-types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ProcessAlert({ isAlert, alertType, alertMsg }: ProcessAlertProps) {

    const m = useTranslations('msg');

    const [isOpen, setOpen] = useState<boolean>(isAlert ? true : false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [setOpen]);

    const info = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    const success = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
    const warning = "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
    const error = "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";

    const svgPath = alertType === "info" ? info :
        alertType === "success" ? success :
            alertType === "warning" ? warning :
                alertType === "error" ? error :
                    info;

    return (
        <>
            {isOpen &&
                <div className="toast toast-top toast-center">
                    <div role="alert" className={"alert alert-" + alertType}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-info"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={svgPath} />
                        </svg>
                        <span>{isAlert && m(alertMsg)}</span>
                    </div>
                </div>
            }
        </>
    )
}
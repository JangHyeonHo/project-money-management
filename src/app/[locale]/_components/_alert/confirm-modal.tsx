"use client"

import { ConfirmModalProps } from "@/app/[locale]/_types/common-types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ConfirmModal({ title, children, isOpen, onYes, onNo }: ConfirmModalProps) {

    const w = useTranslations("word");

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        if(isOpen){
            setLoading(false);
        }
    },[isOpen])

    const onYesClick = () => {
        setLoading(true);
        onYes();
    }

    const onNoClick = () => {
        setLoading(true);
        onNo();
    }

    return (
        <dialog id="confirm" className={"modal " + (isOpen && "modal-open")}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{children}</p>
                <div className="modal-action">
                    <button disabled={loading} className="btn w-1/6 btn-success" onClick={()=> onYesClick()}>{w("common.yes")}</button>
                    <button disabled={loading} className="btn w-1/6 btn-outline btn-error" onClick={()=> onNoClick()}>{w("common.no")}</button>
                </div>
            </div>
        </dialog>
    )
}
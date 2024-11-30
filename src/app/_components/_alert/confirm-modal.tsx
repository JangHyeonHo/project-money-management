"use client"

import { ConfirmModalProps } from "@/app/_types/common-types";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ConfirmModal({ title, msg, isOpen, onYes, onNo }: ConfirmModalProps) {

    const w = useTranslations("word");

    const [loading, setLoading] = useState<boolean>(false);

    const onYesClick = () => {
        setLoading(true);
        onYes();
        setLoading(false);
    }

    const onNoClick = () => {
        setLoading(true);
        onNo();
        setLoading(false);
    }

    return (
        <dialog id="confirm" className={"modal " + (isOpen && "modal-open")}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{msg}</p>
                <div className="modal-action">
                    <button disabled={loading} className="btn w-1/6 btn-success" onClick={()=> onYesClick()}>{w("common.yes")}</button>
                    <button disabled={loading} className="btn w-1/6 btn-outline btn-error" onClick={()=> onNoClick()}>{w("common.no")}</button>
                </div>
            </div>
        </dialog>
    )
}
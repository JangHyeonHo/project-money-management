"use client"

import { TextModalProps } from "@/app/[locale]/_types/common-types";
import { useTranslations } from "next-intl";

export default function TextModal({ title, children, isOpen, onClose }: TextModalProps) {

    const w = useTranslations("word");

    const onCloseClick = () => {
        onClose();
    }

    return (
        <dialog id="confirm" className={"modal " + (isOpen && "modal-open")}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="pt-4 pl-2 text-sm leading-6 whitespace-pre-wrap">{children}</p>
                <div className="modal-action">
                    <button 
                    type="button"
                    className="btn w-1/4 btn-outline btn-error" 
                    onClick={() => onCloseClick()}>{w("common.close")}</button>
                </div>
            </div>
        </dialog>
    )
}
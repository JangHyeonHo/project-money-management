"use client"

import { useTranslations } from "next-intl";
import AssetList from "./asset-list";
import AssetListCollapse from "./asset-list-collapse";
import { AssetManagementProps } from "../_types/asset-type";
import ConfirmModal from "@/app/[locale]/_components/_alert/confirm-modal";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";

export default function AssetManagement({ bankbookAssets, cashAssets, cardAssets, etcAssets, isBankTransfer }: AssetManagementProps) {

    const router = useRouter();

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const [deleteItem, setDeleteItem] = useState<{ key: string, itemName: string }>({ key: "", itemName: "" });
    const [openConfirm, setOpenConfirm] = useState<boolean>(false);


    const deleteCallback = (item: { key: string, itemName: string }) => {
        setDeleteItem(item);
        setOpenConfirm(true);
    }

    const deleteConfirmYesClick = async () => {
        const res = await fetch(`/api/asset/delete/${deleteItem.key}`, {
            method: "DELETE", // 요청 메서드
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            //에러 표시시
        }
        setDeleteItem({ key: "", itemName: deleteItem.itemName });
        setOpenConfirm(false);
        router.refresh();
    }

    const deleteConfirmNoClick = () => {
        setDeleteItem({ key: "", itemName: deleteItem.itemName });
        setOpenConfirm(false);
    }

    return (
        <div>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('asset.management')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('asset.management-info')}</p>
                <div className="mt-4 flex items-center gap-x-6">
                    <button
                        onClick={() => { router.push("./regist"); }}
                        className="btn btn-info btn-sm">
                        {w('asset.regist')}
                    </button>
                    <button
                        disabled={isBankTransfer}
                        onClick={() => {window.alert(m("common.ready"))}}
                        className="btn btn-warning btn-sm">
                        {w('asset.transfer')}
                    </button>
                </div>
            </div>
            <ConfirmModal
                isOpen={openConfirm}
                title={w("asset.delete", { item: deleteItem.itemName })}
                children={m.rich("asset.delete-info", {
                    br: () => <br />
                })}
                onYes={deleteConfirmYesClick}
                onNo={deleteConfirmNoClick}
            />
            <div className="border-b border-gray-900/10 py-4">
                <AssetListCollapse
                    title={w('asset.cash')}
                >
                    <AssetList
                        items={cashAssets}
                        onDeleteClick={deleteCallback} />
                </AssetListCollapse>
            </div>
            <div className="border-b border-gray-900/10 py-4">
                <AssetListCollapse
                    title={w('asset.bankbook')}
                >
                    <AssetList
                        items={bankbookAssets}
                        onDeleteClick={deleteCallback} />
                </AssetListCollapse>
            </div>
            <div className="border-b border-gray-900/10 py-4">
                <AssetListCollapse
                    title={w('asset.card')}
                >
                    <AssetList
                        items={cardAssets}
                        onDeleteClick={deleteCallback} />
                </AssetListCollapse>
            </div>
            <div className="border-b border-gray-900/10 py-4">
                <AssetListCollapse
                    title={w('common.etc')}
                >
                    <AssetList
                        items={etcAssets}
                        onDeleteClick={deleteCallback} />
                </AssetListCollapse>
            </div>
        </div>
    )
}
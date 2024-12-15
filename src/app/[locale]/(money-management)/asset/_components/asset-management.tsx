"use client"

import { useTranslations } from "next-intl";
import AssetList from "./asset-list";
import AssetListCollapse from "./asset-list-collapse";
import { AssetManagementProps } from "../_types/asset-type";
import ConfirmModal from "@/app/[locale]/_components/_alert/confirm-modal";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";

export default function AssetManagement({ bankbookAssets, cashAssets, cardAssets, etcAssets }: AssetManagementProps) {

    const router = useRouter();

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const [deleteItem, setDeleteItem] = useState<{ key: string, itemName: string }>({ key: "", itemName: "" });
    const [openConfirm, setOpenConfirm] = useState<boolean>(false);


    const deleteCallback = (item: { key: string, itemName: string }) => {
        setDeleteItem(item);
        setOpenConfirm(true);
    }

    const deleteConfirmYesClick = () => {
        router.push(`./delete/${deleteItem.key}`);
    }

    const deleteConfirmNoClick = () => {
        setOpenConfirm(false);
        setDeleteItem({ key: "", itemName: deleteItem.itemName });
    }

    return (
        <div>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('asset.management')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('asset.management-info')}</p>
                <div className="mt-4 flex items-center gap-x-6">
                    <a
                        href="./regist"
                        className="btn btn-info btn-sm">
                        {w('asset.regist')}
                    </a>
                </div>
            </div>
            <ConfirmModal
                isOpen={openConfirm}
                title={w("asset.delete", { item: deleteItem.itemName })}
                msg={m("asset.delete-info")}
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
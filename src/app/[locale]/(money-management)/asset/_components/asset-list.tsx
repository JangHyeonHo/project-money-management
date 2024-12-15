"use client"

import { useTranslations } from "next-intl";
import { AssetListProps } from "../_types/asset-type";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { AmountChangeAutoComma } from "@/app/[locale]/_utils/common-utils";
import { useRouter } from "@/i18n/routing";

/** 
 * 자산 관리용 공통 리스트
*/
export default function AssetList({ items, onDeleteClick }: AssetListProps) {

    const router = useRouter();

    const w = useTranslations('word');

    const deleteClick = (deleteKey: string, deleteName: string) => {
        //Confirm창
        onDeleteClick({
            key: deleteKey,
            itemName: deleteName
        });
    }

    const modifyClick = (modifyKey: string) => {
        //Confirm창
        router.push(`./modify/${modifyKey}`);
    }

    return (
        <div className="overflow-x-auto">
            <ul role="list" className="divide-y divide-gray-100">
                {items?.map(({ key, name, money, currency }) => (
                    <li key={"li" + key} className="flex justify-between gap-x-6 py-5">
                        <div className="flex flex-col min-w-0 gap-x-4">
                            <div className="text-sm text-gray-500">{w('asset.name')}</div>
                            <div className="mt-2 truncate font-semibold text-black-500">{name}</div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end mr-4">
                            <div className="text-sm/4 text-gray-500">{w('asset.money')}</div>
                            <div className={"my-2 truncate text-semibold text-sm/6 " + (money < 0 ? "text-red-600" : "text-indigo-600")}>
                                {AmountChangeAutoComma(money)}
                                <span className="mx-1">
                                    {currency}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 mb-3 content-center">
                                <div className="tooltip tooltip-bottom" data-tip={w('common.modify')}>
                                    <button>
                                        <PencilSquareIcon
                                            className="w-6 hover:text-yellow-500"
                                            onClick={()=>{modifyClick(key)}}
                                        >
                                        </PencilSquareIcon>
                                    </button>
                                </div>
                                <div className="tooltip tooltip-bottom" data-tip={w('common.delete')}>
                                    <button type="button">
                                        <TrashIcon
                                            className="w-6 hover:text-red-500"
                                            onClick={() => { deleteClick(key, name) }}
                                        >
                                        </TrashIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/** 2024-11-24 수정 Table방식에서 List방식으로 변경(모바일 UI가 불편함) */}
            {/* <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>{w('asset.name')}</th>
                        <th>{w('asset.money')}</th>
                        <th>{w('asset.currency')}</th>
                        <th>{w('common.btn')}</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map(({ key, name, money, currency }, index) => (
                        <tr
                            key={"tr" + key}
                            className={"bg-gradient-to-r " + (money < 0 ? "from-red-200" : "from-indigo-200")}
                        >
                            <th key={"th" + key}>{index + 1}</th>
                            <td key={"td" + key + name}>{name}</td>
                            <td
                                key={"td" + key + money}
                                className={money < 0 ? "text-red-600" : "text-indigo-600"}
                            >{money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td key={"td" + key + currency}>{currency}</td>
                            <td key={"td" + key}>
                                <button
                                    key={"modBtn" + key}
                                    className="btn btn-warning btn-sm">
                                    {w('common.modify')}
                                </button>
                                <button
                                    key={"delBtn" + key}
                                    className="btn btn-error btn-sm">
                                    {w('common.delete')}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {/** 2024-11-24 수정 Table방식에서 List방식으로 변경(모바일 UI가 불편함) */}

        </div>
    )
}
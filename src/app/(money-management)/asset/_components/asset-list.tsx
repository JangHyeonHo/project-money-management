"use client"

import { useTranslations } from "next-intl";
import { AssetListProps } from "../_types/asset-type";

/** 
 * 자산 관리용 공통 리스트
*/
export default function AssetList({ items, onDeleteClick }: AssetListProps) {

    const w = useTranslations('word');

    const deleteClick = (deleteKey:string, deleteName:string) => {
        //Confirm창
        onDeleteClick({
            key:deleteKey,
            itemName:deleteName
        });
    }

    return (
        <div className="overflow-x-auto">
            <ul role="list" className="divide-y divide-gray-100">
                {items?.map(({ key, name, money, currency }) => (
                    <li key={"li" + key} className="flex justify-between gap-x-6 py-5">
                        <div className="flex flex-col min-w-0 gap-x-4">
                            <p className="text-sm/4 font-semibold text-gray-600">{w('asset.name')}</p>
                            <p className="mt-1 truncate text-sm/6 text-black-500">{name}</p>
                        </div>
                        <div className="shrink-0 flex flex-col items-end">
                            <p className="text-sm/4 text-gray-500 mx-1">{w('asset.money')}</p>
                            <p className={"mt-1 truncate text-semibold text-sm/6 " + (money < 0 ? "text-red-600" : "text-indigo-600")}>
                                {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                <span className="mx-1">
                                    {currency}
                                </span>
                            </p>
                            <p className="mt-1 join">
                                <a
                                    key={"modBtn" + key}
                                    href={`./modify/${key}`}
                                    className="btn btn-warning btn-sm join-item">
                                    {w('common.modify')}
                                </a>
                                <button
                                    key={"delBtn" + key}
                                    onClick={()=>{deleteClick(key, name)}}
                                    className="btn btn-error btn-sm join-item">
                                    {w('common.delete')}
                                </button>
                            </p>
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
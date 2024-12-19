"use client"
import { PencilSquareIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { CategoryItems, CategoryRegModParameter, CategorySettingProps, SubcategoryItems } from "../_types/settings-type";
import { useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { HouseholdTypes } from "@/app/[locale]/_types/common-const";
import { useRouter } from "@/i18n/routing";
import ConfirmModal from "@/app/[locale]/_components/_alert/confirm-modal";

export default function CategorySetting({ categoryItems }: CategorySettingProps) {

    const router = useRouter();

    const w = useTranslations("word");
    const m = useTranslations("msg");

    const [selectType, setSelectType] = useState<string>(HouseholdTypes.Income);

    const [selectItem, setSelectItem] = useState<number>(() => {
        if (!categoryItems) {
            return 0;
        }
        const categoryItem = categoryItems.filter((item) => item.householdType === HouseholdTypes.Income);
        if (categoryItem.length === 0) {
            return 0;
        }
        return categoryItem[0].key
    });

    const [selectCategoryItems, setSelectCategoryItems] = useState<CategoryItems[]>(() => {
        if (!categoryItems) {
            return [];
        }
        return categoryItems.filter((item) => item.householdType === HouseholdTypes.Income);
    });

    const [selectSubcategoryItems, setSelectSubcategoryItems] = useState<SubcategoryItems[]>(() => {
        if (!categoryItems) {
            return [];
        }
        const categoryItem = categoryItems.filter((item) => item.householdType === HouseholdTypes.Income);
        if (categoryItem.length === 0) {
            return [];
        }
        return categoryItem[0].subcategories;
    });

    const [deleteItem, setDeleteItem] = useState<{ key: number, itemName: string }>({ key: -1, itemName: "" });
    const [openConfirm, setOpenConfirm] = useState<boolean>(false);

    const incomeBtnOnClick = () => {
        setSelectType(HouseholdTypes.Income);
        householdTypeChange(HouseholdTypes.Income);
    }

    const expenditureBtnOnClick = () => {
        setSelectType(HouseholdTypes.Expenditure);
        householdTypeChange(HouseholdTypes.Expenditure);
    }

    const categoryClick = (key: number) => {
        const categoryItem = selectCategoryItems.find((item) => item.key === key);
        if (!categoryItem) {
            setSelectSubcategoryItems([]);
            setSelectItem(0);
        } else {
            setSelectSubcategoryItems(categoryItem.subcategories);
            setSelectItem(key);
        }

    }

    const householdTypeChange = (householdType: string) => {
        if (!categoryItems) {
            setSelectCategoryItems([]);
            setSelectSubcategoryItems([]);
            setSelectItem(0);
        } else {
            const categoryItem = categoryItems.filter((item) => item.householdType === householdType);
            setSelectCategoryItems(categoryItem);
            if (categoryItem.length === 0) {
                setSelectSubcategoryItems([]);
                setSelectItem(0);
            } else {
                setSelectSubcategoryItems(categoryItem[0].subcategories);
                setSelectItem(categoryItem[0].key)
            }
        }
    }

    const modifyClick = (modifyKey: number, isSubcategory: boolean) => {
        const param = isSubcategory ? `?s=${CategoryRegModParameter.isSubcategory}` : ""
        //Confirm창
        router.push(`./category/modify/${modifyKey}${param}`);
    }

    const deleteClick = (item: { key: number, itemName: string }) => {
        setDeleteItem(item);
        setOpenConfirm(true);
    }

    const deleteConfirmYesClick = async () => {
        const res = await fetch(`/api/category/delete/${deleteItem.key}`, {
            method: "DELETE", // 요청 메서드
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            //에러 표시시
        }
        setDeleteItem({ key: -1, itemName: deleteItem.itemName });
        setOpenConfirm(false);
        // 서버 재호출
        window.location.reload();
    }

    const deleteConfirmNoClick = () => {
        setDeleteItem({ key: -1, itemName: deleteItem.itemName });
        setOpenConfirm(false);
    }



    return (
        <div>
            <ConfirmModal
                isOpen={openConfirm}
                title={w("settings.category.delete", { item: deleteItem.itemName })}
                onYes={deleteConfirmYesClick}
                onNo={deleteConfirmNoClick}
            >
                {m.rich("settings.category-delete-info", {
                    br: () => <br />
                })}
            </ConfirmModal>
            <div className="mt-2">
                <div className="join">
                    <button
                        type="button"
                        onClick={() => incomeBtnOnClick()}
                        className={"w-40 btn btn-sm hover:bg-sky-400 join-item " + (selectType === HouseholdTypes.Income ? "bg-sky-400" : "bg-sky-100")}>
                        {w("household.income")}
                    </button>
                    <button
                        type="button"
                        onClick={() => expenditureBtnOnClick()}
                        className={"w-40 btn btn-sm hover:bg-rose-400 join-item " + (selectType === HouseholdTypes.Expenditure ? "bg-rose-400" : "bg-rose-100")}>
                        {w("household.expense")}
                    </button>
                </div>
            </div>
            <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 gap-x-2">

                <div className="w-full">
                    <ul role="list" className={(selectType === HouseholdTypes.Income ? "bg-sky-50" : "bg-rose-50")}>
                        {selectCategoryItems.map(({ key, name, householdType }) => (
                            <li key={key + name}>
                                <div
                                    className={"btn w-full flex justify-between btn-ghost " + (selectItem === key ? (householdType === HouseholdTypes.Income ? "bg-sky-300" : "bg-rose-300") : "")}
                                    onClick={() => categoryClick(key)}
                                >
                                    <span className="truncate p-1 w-3/5 text-start">
                                        {name}
                                    </span>
                                    <span>
                                        <div className="tooltip tooltip-top" data-tip={w('common.modify')}>
                                            <button className="mr-1">
                                                <PencilSquareIcon
                                                    className="w-5 hover:text-yellow-500"
                                                    onClick={() => { modifyClick(key, false) }}
                                                >
                                                </PencilSquareIcon>
                                            </button>
                                        </div>
                                        <div className="tooltip tooltip-top" data-tip={w('common.delete')}>
                                            <button type="button">
                                                <TrashIcon
                                                    className="w-5 hover:text-red-500"
                                                    onClick={() => { deleteClick({ key: key, itemName: name }) }}
                                                >
                                                </TrashIcon>
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        ))}

                        <li>
                            <button
                                onClick={() => { router.push("./category/regist") }}
                                className={"btn w-full btn-ghost"}>
                                <PlusCircleIcon
                                    className="w-6"
                                ></PlusCircleIcon>
                                <span className="block align-middle">
                                    {w("common.add-item", { "item": w("household.category") })}
                                </span>
                            </button>
                        </li>
                    </ul>

                </div>
                <div className="hidden content-center lg:block">
                    <div
                        className="flex justify-center">
                        <ChevronDoubleRightIcon
                            className="w-6"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <ul role="list" className={(selectType === HouseholdTypes.Income ? "bg-sky-50" : "bg-rose-50")}>
                        {selectSubcategoryItems.map(({ key, name }) => (
                            <li key={key + name}>
                                <div className={"btn w-full flex justify-between btn-ghost no-animation hover:bg-transparent cursor-default"}>
                                    <span className="truncate p-1 w-3/5 text-start">
                                        {name}
                                    </span>
                                    <span>
                                        <div className="tooltip tooltip-top" data-tip={w('common.modify')}>
                                            <button className="mr-1">
                                                <PencilSquareIcon
                                                    className="w-5 hover:text-yellow-500"
                                                    onClick={() => { modifyClick(key, true) }}
                                                >
                                                </PencilSquareIcon>
                                            </button>
                                        </div>
                                        <div className="tooltip tooltip-top" data-tip={w('common.delete')}>
                                            <button type="button">
                                                <TrashIcon
                                                    className="w-5 hover:text-red-500"
                                                    onClick={() => { }}
                                                >
                                                </TrashIcon>
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => { router.push(`./category/regist?s=${CategoryRegModParameter.isSubcategory}`) }}
                                className="btn w-full btn-ghost">
                                <PlusCircleIcon
                                    className="w-6"
                                ></PlusCircleIcon>
                                <span className="block align-middle">
                                    {w("common.add-item", { "item": w("household.subcategory") })}
                                </span>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
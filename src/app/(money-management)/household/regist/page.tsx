"use client"

import ImageUploader from "@/app/_components/_input/image-uploader";
import InputDropdown from "@/app/_components/_input/input-dropdown";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { HouserholdTypes, LayoutHeaders } from "@/app/_types/common-const";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function HouseholdRegist() {
    const w = useTranslations('word');
    const m = useTranslations('msg');

    const [householdValue, setHouseHoldValue] = useState<string>(HouserholdTypes.Income);

    const householdTypeItems = [
        { key: HouserholdTypes.Income, value: w('household.income') },
        { key: HouserholdTypes.Expenditure, value: w('household.expense') }
    ];

    const capitalKeyItems = [
        { key: "CAP1", value: "TEST DATA" },
        { key: "CAP3", value: "CARD TEST DATA" },
    ];

    const householdCategoryItems = [
        { key: "CATE1", value: "SALARY" },
        { key: "CATE2", value: "SIDELINE WORK" }
    ];

    const householdSubcategoryItems = [
        { key: "SCATE1", value: "-" },
        { key: "SCATE2", value: "TEST" }
    ];

    return (
        <SiteStackedLayout
            headtitle={w('household.regist')}
            headCurrent={LayoutHeaders.Household}
        >
            <form>
                <div className="border-b border-gray-900/10 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">{w('household.regist')}</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">{m('household.regist-info')}</p>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4">
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('common.image') + " " + w('common.upload')}</span>
                                </div>
                            </label>
                            <ImageUploader
                                className="max-w-md mb-4"
                                id="householdImage"
                                name="householdImage" />
                            <div className="join join-vertical w-full max-w-md">
                                <button className="btn btn-outline join-item btn-sm" disabled>
                                    {w('common.image') + " " + w('common.read')}
                                </button>
                                <button className="btn btn-outline join-item btn-success btn-sm" disabled>
                                    {w('common.data') + " " + w('common.read')}
                                </button>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('household.date')}</span>
                                </div>
                                <input type="date"
                                    id="issueDate"
                                    name="issueDate"
                                    required
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('capital.name')}</span>
                                </div>
                                <InputDropdown
                                    dropdownItems={capitalKeyItems}
                                    id="capitalKey"
                                    key="capitalKey"
                                    name="capitalKey"
                                    btnName={w('common.select')}
                                    className="w-full max-w-md"
                                    required
                                    isChangeBtnName={true}
                                />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('household.in-exp')}</span>
                                </div>
                                <InputDropdown
                                    dropdownItems={householdTypeItems}
                                    id="householdType"
                                    key="householdType"
                                    name="householdType"
                                    btnName={w('household.income')}
                                    defaultInputValue={HouserholdTypes.Income}
                                    className={"w-full max-w-md " + (householdValue === HouserholdTypes.Income ? "bg-indigo-100" : "bg-red-100" )}
                                    setParentValue={setHouseHoldValue}
                                    required
                                    isChangeBtnName={true}
                                />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('household.category')}</span>
                                </div>
                                <InputDropdown
                                    dropdownItems={householdCategoryItems}
                                    id="householdCategory"
                                    key="householdCategory"
                                    name="householdCategory"
                                    btnName={w('common.select')}
                                    className="w-full max-w-md"
                                    required
                                    isChangeBtnName={true}
                                />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('household.subcategory')}</span>
                                </div>
                                <InputDropdown
                                    dropdownItems={householdSubcategoryItems}
                                    id="householdSubcategory"
                                    key="householdSubcategory"
                                    name="householdSubcategory"
                                    btnName={w('common.select')}
                                    className="w-full max-w-md"
                                    isChangeBtnName={true}
                                />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('capital.money')}</span>
                                </div>
                                <input type="number"
                                    id="householdAmount"
                                    name="householdAmount"
                                    required
                                    defaultValue={0}
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('common.comment')}</span>
                                </div>
                                <textarea className="textarea textarea-bordered w-full" 
                                    placeholder={w("common.comment")}
                                    id="householdComment"
                                    name="householdComment"
                                    rows={5}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="my-8 flex items-center gap-x-6">
                    <button
                        type="submit"
                        className="btn btn-info btn-sm">
                        {w('common.save')}
                    </button>
                    <a
                        href="./management"
                        className="btn btn-ghost btn-sm">
                        {w('common.cancel')}
                    </a>
                </div>
            </form>
        </SiteStackedLayout>
    )
}
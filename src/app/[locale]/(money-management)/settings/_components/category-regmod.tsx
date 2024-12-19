"use client"

import InputDropdown from "@/app/[locale]/_components/_input/input-dropdown";
import { HouseholdTypes } from "@/app/[locale]/_types/common-const";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { StringRangeCheck } from "@/app/[locale]/_utils/common-utils";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useRouter } from "@/i18n/routing";
import { CategoryRegModActionProps, CategoryRegModFormProps } from "../_types/settings-type";
import { InputDropdownPropsItem } from "@/app/[locale]/_types/common-types";
import { CategoryRegistAction } from "../_actions/category-regist-action";
import { CategoryModifyAction } from "../_actions/category-modify-action";

/**
 * 자본 등록/수정 화면
 * @returns 
 */
export default function CategoryRegModForm({ dropdownCategoryItems, isSubcategory, isModify, categoryKey, householdType, parentCategoryKey, categoryName, categoryComment }: CategoryRegModFormProps) {

    const router = useRouter();

    dayjs.extend(utc);
    dayjs.extend(timezone);

    const w = useTranslations('word');
    const m = useTranslations('msg');
    const e = useTranslations('msg.error');

    const [loading, setLoading] = useState<boolean>(false);

    const [typeError, setTypeError] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [subCategoryError, setSubCategoryError] = useState<string>("");
    const [commentError, setCommentError] = useState<string>("");

    const [householdValue, setHouseHoldValue] = useState<string>(isModify ? householdType || HouseholdTypes.Income : HouseholdTypes.Income);
    const [categoryItems, setCategoryItems] = useState<InputDropdownPropsItem[]>(
        () => {
            const items: InputDropdownPropsItem[] = [];
            if (!isSubcategory) {
                return items;
            }
            if (dropdownCategoryItems) {
                const categoryItems = dropdownCategoryItems.find((item) => item.categoryType === householdValue);
                if (categoryItems) {
                    return categoryItems.items;
                }
            }
            return items;
        }
    );

    const setHouseholdKey = (key: string) => {
        setHouseHoldValue(key);
    };

    const [householdTypeItems] = useState<InputDropdownPropsItem[]>([
        { key: HouseholdTypes.Income, value: w('household.income') },
        { key: HouseholdTypes.Expenditure, value: w('household.expense') }
    ]);

    const getHouseholdTypeItem = (itemKey?: string) => {
        if (itemKey === undefined) return w('household.income');

        const selectItem = HouseholdTypes.Income === itemKey ? w('household.income') : w('household.expense')

        return selectItem;
    }

    const getCategoryKeyItem = (itemKey?: number) => {
        if (itemKey === undefined) return w('common.select');

        const selectItem = categoryItems.find(({ key }) => key === itemKey.toString());

        return selectItem ? selectItem.value : w('common.select');
    }

    const assetSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setTypeError("");
        setNameError("");
        setCommentError("");

        const formData = changeFormToApi(new FormData(event.currentTarget));

        //입력데이터 확인용
        //console.log(formData);

        if (formData === null) {
            setLoading(false);
            return;
        }
        // api호출(데이터 변조 방지를 위해 세션에서 바로 쿠키등록)
        if (isModify) {
            const data = await CategoryModifyAction(formData);
            // 로그인 데이터 존재 확인
            if (data === null) {
                //처리 에러 알람 표시
                //setEmailError(e('login'));
                setLoading(false);
            } else {
                // 이전 화면으로 돌아가게(완료 메시지 띄울까..?)
                router.push("/settings/category");
            }

        } else {
            const data = await CategoryRegistAction([formData]);
            // 로그인 데이터 존재 확인
            if (data === null) {
                //처리 에러 알람 표시
                //setEmailError(e('login'));
                setLoading(false);
            } else {
                // 이전 화면으로 돌아가게(완료 메시지 띄울까..?)
                router.push("/settings/category");
            }
        }
    }

    /**
     * Api호출을 위해 폼 변경
     * @param form 
     * @returns 
     */
    const changeFormToApi = (form: FormData) => {
        const type = form.get("householdType");
        const parentId = form.get("parentCategoryId");
        const name = form.get("categoryName");
        const comment = form.get("categoryComment");

        const data: CategoryRegModActionProps = {
            id: isModify ? categoryKey : undefined,
            householdType: type === null ? "" : type.toString(),
            parentCategoryId: isSubcategory ? (parentId === null ? undefined : Number(parentId.toString())) : undefined, //Error시 NaN을 배출
            categoryName: name === null ? "" : name.toString(),
            categoryComment: comment === null ? "" : comment.toString(),
            updateDate: dayjs(new Date()).utc(true).toDate(),
        }
        const error = validationCheck(data);

        if (error) {
            return null;
        }

        return data;

    }

    /**
     * 폼 validation 체크
     * @param form 
     * @returns 
     */
    const validationCheck = (form: CategoryRegModActionProps) => {
        let error = false;
        // 타입 미선택일 경우
        if (form.householdType === "") {
            //type error
            setTypeError(e('input.select', { item: w('household.in-exp') }));
            error = true;
        }
        // 이름이 1~20자가 아닐 경우
        if (form.categoryName === "" || !StringRangeCheck(form.categoryName, 1, 20)) {
            //name error
            setNameError(e('input.c-range-min-max', { item: getCategoryName(), min: 1, max: 20 }));
            error = true;
        }
        // 소분류이면서 소분류 미선택일 경우
        if (isSubcategory && form.parentCategoryId === undefined) {
            //type error
            setSubCategoryError(e('input.select', { item: w('category.main-sel') }));
            error = true;
        }
        // 코멘트가 500자 초과일 경우
        if (!StringRangeCheck(form.categoryComment, 0, 500)) {
            //comment error
            setCommentError(e('input.c-range-max', { item: w('common.comment'), max: 500 }));
            error = true;
        }

        return error;
    }

    const getCategoryName = () => {
        return isSubcategory ? w('category.sub-name') : w('category.name');
    }

    const incomeExpenditureChange = (key: string) => {
        if (!isSubcategory) {
            return;
        }
        const items: InputDropdownPropsItem[] = [];
        if (dropdownCategoryItems) {
            const categoryItems = dropdownCategoryItems.find((item) => item.categoryType === key);
            if (categoryItems) {
                setCategoryItems(categoryItems.items);
                return;
            }
        }
        setCategoryItems(items);
    }


    return (
        <>
            <form onSubmit={assetSubmit}>
                <div className="border-b border-gray-900/10 pb-8">
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
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
                                    defaultBtnName={isModify ? getHouseholdTypeItem(householdType) : w('household.income')}
                                    defaultInputValue={isModify ? householdType : HouseholdTypes.Income}
                                    className={"w-full max-w-md " + (householdValue === HouseholdTypes.Income ? "bg-indigo-100" : "bg-red-100")}
                                    disabled={loading}
                                    required
                                    setParentValue={setHouseholdKey}
                                    onChange={(key) => incomeExpenditureChange(key)}
                                    isChangeBtnName={true}
                                />
                                {typeError !== "" &&
                                    <div className="label">
                                        <span className="label-text-alt text-red-500">{typeError}</span>
                                    </div>
                                }
                            </label>
                        </div>
                        {isSubcategory &&
                            <div className="sm:col-span-4">
                                <label className="form-control w-full max-w-md">
                                    <div className="label">
                                        <span className="label-text">{w('category.main-sel')}</span>
                                    </div>
                                    <InputDropdown
                                        dropdownItems={categoryItems}
                                        id="parentCategoryId"
                                        key="parentCategoryId"
                                        name="parentCategoryId"
                                        disabled={loading}
                                        defaultBtnName={isModify ? getCategoryKeyItem(parentCategoryKey) : w('common.select')}
                                        className="w-full max-w-md"
                                        defaultInputValue={isModify ? parentCategoryKey?.toString() : undefined}
                                        required
                                        isChangeBtnName={true}
                                    />
                                    {subCategoryError !== "" &&
                                        <div className="label">
                                            <span className="label-text-alt text-red-500">{subCategoryError}</span>
                                        </div>
                                    }
                                </label>
                            </div>
                        }
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{getCategoryName()}</span>
                                    <span className="label-text-alt">{m('common.input-max', { item: getCategoryName(), max: 20 })}</span>
                                </div>
                                <input type="text"
                                    id="categoryName"
                                    name="categoryName"
                                    required
                                    placeholder="Type here"
                                    disabled={loading}
                                    defaultValue={isModify ? categoryName : ""}
                                    maxLength={20}
                                    className="input input-bordered w-full max-w-md" />
                                {nameError !== "" &&
                                    <div className="label">
                                        <span className="label-text-alt text-red-500">{nameError}</span>
                                    </div>
                                }
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('common.comment')}</span>
                                    <span className="label-text-alt">{m('common.input-max', { item: w('common.comment'), max: 500 })}</span>
                                </div>
                                <textarea className="textarea textarea-bordered w-full"
                                    placeholder={w("common.comment")}
                                    id="categoryComment"
                                    name="categoryComment"
                                    disabled={loading}
                                    defaultValue={isModify ? categoryComment : undefined}
                                    maxLength={500}
                                    rows={5} />
                                {commentError !== "" &&
                                    <div className="label">
                                        <span className="label-text-alt text-red-500">{commentError}</span>
                                    </div>
                                }
                            </label>
                        </div>
                    </div>
                </div>

                <div className="my-8 flex items-center gap-x-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-info btn-sm">
                        {w('common.save')}
                    </button>
                    <button
                        type="button"
                        onClick={() => { router.push("/settings/category") }}
                        className="btn btn-ghost btn-sm">
                        {w('common.cancel')}
                    </button>
                </div>
            </form>
        </>
    )
}
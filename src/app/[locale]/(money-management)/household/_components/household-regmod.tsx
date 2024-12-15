"use client"

import ImageUploader from "@/app/[locale]/_components/_input/image-uploader";
import InputDropdown from "@/app/[locale]/_components/_input/input-dropdown";
import { HouseholdTypes } from "@/app/[locale]/_types/common-const";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { HouseholdRegModFormProps, HouseholdRegModActionProps } from "../_types/household-type";
import { InputDropdownPropsItem } from "@/app/[locale]/_types/common-types";
import InputDatePicker from "@/app/[locale]/_components/_input/input-datepicker";
import { StringRangeCheck } from "@/app/[locale]/_utils/common-utils";
import { HouseholdRegistAction } from "../_actions/household-regist-action";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { HouseholdModifyAction } from "../_actions/household-modify-action";
import { useRouter } from "@/i18n/routing";

export default function HouseholdRegModForm({ categoryItems, assetItems, locale,
    isModify,
    issueDate,
    householdKey,
    assetKey,
    householdType,
    householdCategory,
    householdSubcategory,
    householdName,
    householdAmount,
    householdComment
}: HouseholdRegModFormProps) {

    const router = useRouter();

    const w = useTranslations('word');
    const m = useTranslations('msg');
    const e = useTranslations('msg.error');

    const [loading, setLoading] = useState<boolean>(false);

    const [dateError, setDateError] = useState<string>("");
    const [assetDataError, setAssetDataError] = useState<string>("");
    const [typeError, setTypeError] = useState<string>("");
    const [categoryError, setCategoryError] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [amountError, setAmountError] = useState<string>("");
    const [commentError, setCommentError] = useState<string>("");

    const [householdTypeItems] = useState<InputDropdownPropsItem[]>([
        { key: HouseholdTypes.Income, value: w('household.income') },
        { key: HouseholdTypes.Expenditure, value: w('household.expense') }
    ]);

    const [assetKeyItems] = useState<InputDropdownPropsItem[]>(
        () => {
            const items: InputDropdownPropsItem[] = [];
            if (assetItems) {
                for (const item of assetItems) {
                    items.push({
                        key: item.key.toString(),
                        value: item.name,
                    });
                }
            }
            return items;
        }
    )
    const [householdValue, setHouseHoldValue] = useState<string>(HouseholdTypes.Income);
    const [householdCategoryItems, setHouseholdCategoryItems] = useState<InputDropdownPropsItem[]>(
        () => {
            const items: InputDropdownPropsItem[] = [];
            if (categoryItems) {
                for (const item of categoryItems) {
                    if (item.type === HouseholdTypes.Expenditure) continue;
                    items.push({
                        key: item.key.toString(),
                        value: item.name,
                    });
                }
            }
            return items;
        }
    );
    const [householdSubcategoryItems, setHouseholdSubcategoryItems] = useState<InputDropdownPropsItem[]>([]);

    const setHouseholdKey = (key: string) => {
        setHouseHoldValue(key);
    };

    const incomeExpenditureChange = (key: string) => {
        const items: InputDropdownPropsItem[] = [];
        if (categoryItems) {
            for (const item of categoryItems) {
                if (item.type !== key) continue;
                items.push({
                    key: item.key.toString(),
                    value: item.name,
                });
            }
        }
        setHouseholdCategoryItems(items);
        setHouseholdSubcategoryItems([]);
    }

    const categoryChange = (key: string) => {
        const subcategoryItems: InputDropdownPropsItem[] = [];
        if (categoryItems) {
            const subcategory = categoryItems.find((item) => item.key === BigInt(key))?.subcategory;
            if (subcategory) {
                subcategory.forEach((item) => {
                    subcategoryItems.push({
                        key: item.key.toString(),
                        value: item.name,
                    });
                });
            }
        };
        setHouseholdSubcategoryItems(subcategoryItems);
    }



    const householdSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setDateError("");
        setAssetDataError("");
        setTypeError("");
        setCategoryError("");
        setNameError("");
        setCommentError("");
        setAmountError("");

        const formData = changeFormToApi(new FormData(event.currentTarget));

        //입력데이터 확인용
        //console.log(formData);

        if (formData === null) {
            setLoading(false);
            return;
        }

        // api호출(데이터 변조 방지를 위해 세션에서 바로 쿠키등록)
        if (isModify) {
            // 2. 자산 데이터 변경
            const data = await HouseholdModifyAction(formData);
            // 로그인 데이터 존재 확인
            if (data === null) {
                //처리 에러 알람 표시
                //setEmailError(e('login'));
            } else {
                // 이전 화면으로 돌아가게(완료 메시지 띄울까..?)
                router.push("/household/management");
            }
        } else {
            const data = await HouseholdRegistAction(formData);
            // 로그인 데이터 존재 확인
            if (data === null) {
                //처리 에러 알람 표시
                //setEmailError(e('login'));
            } else {
                // 이전 화면으로 돌아가게(완료 메시지 띄울까..?)
                router.push("/household/management");
            }
        }
        setLoading(false);
    }

    /**
     * Api호출을 위해 폼 변경
     * @param form 
     * @returns 
     */
    const changeFormToApi = (form: FormData) => {
        //const image = form.get("householdImage");
        const issue = form.get("issueDate");
        const asset = form.get("assetKey");
        const hType = form.get("householdType");
        const category = form.get("householdCategory");
        const subcategory = form.get("householdSubcategory");
        const name = form.get("householdName");
        const amount = form.get("householdAmount");
        const comment = form.get("householdComment");

        //utc날짜 제거용
        dayjs.extend(utc);
        dayjs.extend(timezone);

        const data: HouseholdRegModActionProps = {
            householdKey: isModify ? householdKey : undefined,
            issueDate: issue === null ? undefined : dayjs(issue?.toString()).utc(true).toDate(),
            assetKey: asset === null ? "" : asset.toString(),
            householdType: hType === null ? "" : hType.toString(),
            householdCategory: category === null ? BigInt(-1) : BigInt(category.toString()),
            householdSubcategory: subcategory === null ? undefined : BigInt(subcategory.toString()),
            householdName: name === null ? "" : name.toString(),
            householdAmount: amount === null ? 0 : Number(amount.toString()), //Error시 NaN을 배출
            householdComment: comment === null ? "" : comment.toString(),
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
    const validationCheck = (form: HouseholdRegModActionProps) => {
        let error = false;
        // 날짜 미선택일 경우
        if (form.issueDate === undefined) {
            //type error
            setDateError(e('input.select', { item: w('household.date') }));
            error = true;
        }
        // 자산 미선택일 경우
        if (form.assetKey === "") {
            //name error
            setAssetDataError(e('input.select', { item: w('asset.name') }));
            error = true;
        }
        // 수입/지출 미선택일 경우
        if (form.householdType !== HouseholdTypes.Income && form.householdType !== HouseholdTypes.Expenditure) {
            //name error
            setTypeError(e('input.select', { item: w('household.in-exp') }));
            error = true;
        }
        // 대분류 미선택일 경우
        if (form.householdCategory === BigInt(-1)) {
            //name error
            setCategoryError(e('input.select', { item: w('household.category') }));
            error = true;
        }
        // 이름이 0~30자가 아닐 경우
        if (!StringRangeCheck(form.householdName, 0, 30)) {
            //name error
            setNameError(e('input.c-range-min-max', { item: w('asset.name'), min: 1, max: 30 }));
            error = true;
        }
        // 입력한 수치가 NaN일 경우
        if (Number.isNaN(form.householdAmount)) {
            //money error
            setAmountError(e('input.number'));
            error = true;
        }
        // 코멘트가 500자 초과일 경우
        if (!StringRangeCheck(form.householdComment, 0, 500)) {
            //comment error
            setCommentError(e('input.c-range-max', { item: w('common.comment'), max: 500 }));
            error = true;
        }

        return error;
    }

    const getAssetKeyItem = (itemKey?: string) => {
        if (itemKey === undefined) return w('common.select');

        const selectItem = assetKeyItems.find(({ key }) => key === itemKey);

        return selectItem ? selectItem.value : w('common.select');
    }

    const getHouseholdTypeItem = (itemKey?: string) => {
        if (itemKey === undefined) return w('household.income');

        const selectItem = HouseholdTypes.Income === itemKey ? w('household.income') : w('household.expense')

        return selectItem;
    }

    const getCategoryKeyItem = (itemKey?: bigint) => {
        if (itemKey === undefined) return w('common.select');

        const selectItem = householdCategoryItems.find(({ key }) => key === itemKey.toString());

        return selectItem ? selectItem.value : w('common.select');
    }

    const getSubcategoryKeyItem = (itemKey?: bigint) => {
        if (itemKey === undefined) return w('common.select');

        const selectItem = householdSubcategoryItems.find(({ key }) => key === itemKey.toString());

        return selectItem ? selectItem.value : w('common.select');
    }

    return (
        <form onSubmit={householdSubmit}>
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
                            name="householdImage"
                            disabled={loading}
                        />
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
                            <InputDatePicker
                                id="issueDate"
                                name="issueDate"
                                disabled={loading}
                                language={locale}
                                defaultDate={isModify ? issueDate : undefined}
                            ></InputDatePicker>
                            {/* <input type="date"
                                id="issueDate"
                                name="issueDate"
                                required
                                className="input input-bordered w-full" /> */}
                            {dateError !== "" &&
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{dateError}</span>
                                </div>
                            }
                        </label>
                    </div>
                    <div className="sm:col-span-4">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('asset.name')}</span>
                            </div>
                            <InputDropdown
                                dropdownItems={assetKeyItems}
                                id="assetKey"
                                key="assetKey"
                                name="assetKey"
                                disabled={loading}
                                defaultBtnName={isModify ? getAssetKeyItem(assetKey) : w('common.select')}
                                defaultInputValue={isModify ? assetKey : undefined}
                                className="w-full max-w-md"
                                required
                                isChangeBtnName={true}
                            />
                            {assetDataError !== "" &&
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{assetDataError}</span>
                                </div>
                            }
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
                                disabled={loading}
                                defaultBtnName={isModify ? getHouseholdTypeItem(householdType) : w('household.income')}
                                defaultInputValue={isModify ? householdType : HouseholdTypes.Income}
                                className={"w-full max-w-md " + (householdValue === HouseholdTypes.Income ? "bg-indigo-100" : "bg-red-100")}
                                setParentValue={setHouseholdKey}
                                required
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
                                disabled={loading}
                                defaultBtnName={isModify ? getCategoryKeyItem(householdCategory) : w('common.select')}
                                defaultInputValue={isModify ? householdCategory?.toString() : undefined}
                                className="w-full max-w-md"
                                required
                                onChange={(key) => categoryChange(key)}
                                isChangeBtnName={true}
                            />
                            {categoryError !== "" &&
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{categoryError}</span>
                                </div>
                            }
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
                                disabled={loading}
                                defaultBtnName={isModify ? getSubcategoryKeyItem(householdSubcategory) : w('common.select')}
                                defaultInputValue={isModify ? householdSubcategory?.toString() : undefined}
                                className="w-full max-w-md"
                                isChangeBtnName={true}
                            />
                        </label>
                    </div>
                    <div className="sm:col-span-4">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('household.name')}</span>
                                <span className="label-text-alt">{m('common.input-max', { item: w('household.name'), max: 30 })}</span>
                            </div>
                            <input type="text"
                                id="householdName"
                                name="householdName"
                                disabled={loading}
                                maxLength={30}
                                defaultValue={isModify ? householdName : ""}
                                className="input input-bordered w-full" />
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
                                <span className="label-text">{w('asset.money')}</span>
                            </div>
                            <input type="number"
                                id="householdAmount"
                                name="householdAmount"
                                disabled={loading}
                                required
                                defaultValue={isModify ? householdAmount : 0}
                                step={0.01}
                                className="input input-bordered w-full" />
                            {amountError !== "" &&
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{amountError}</span>
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
                                id="householdComment"
                                name="householdComment"
                                disabled={loading}
                                defaultValue={isModify ? householdComment : undefined}
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
                    onClick={() => { router.push("/household/management") }}
                    className="btn btn-ghost btn-sm">
                    {w('common.cancel')}
                </button>
            </div>
        </form>
    )
}
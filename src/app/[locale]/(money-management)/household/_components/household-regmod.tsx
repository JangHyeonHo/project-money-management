"use client"

import ImageUploader from "@/app/[locale]/_components/_input/image-uploader";
import InputDropdown from "@/app/[locale]/_components/_input/input-dropdown";
import { HouseholdTypes } from "@/app/[locale]/_types/common-const";
import { useTranslations } from "next-intl";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { HouseholdRegModProps, HouseholdRegModActionProps } from "../_types/household-type";
import { InputDropdownPropsItem } from "@/app/[locale]/_types/common-types";
import InputDatePicker from "@/app/[locale]/_components/_input/input-datepicker";
import { StringRangeCheck } from "@/app/[locale]/_utils/common-utils";
import { HouseholdRegistAction } from "../_actions/household-regist-action";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { HouseholdModifyAction } from "../_actions/household-modify-action";
import { useRouter } from "@/i18n/routing";
import { XMarkIcon } from "@heroicons/react/20/solid";
import TextModal from "@/app/[locale]/_components/_modal/text-modal";
import { GetCategoryDataOne } from "../../settings/_actions/get-category-data-one";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function HouseholdRegMod({ categoryItems, assetItems, locale,
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
}: HouseholdRegModProps) {

    dayjs.extend(utc);
    dayjs.extend(timezone);

    const router = useRouter();

    const w = useTranslations('word');
    const m = useTranslations('msg');
    const e = useTranslations('msg.error');

    const [loading, setLoading] = useState<boolean>(false);

    // 에러 발생시 에러 메시지용
    const [dateError, setDateError] = useState<string>("");
    const [assetDataError, setAssetDataError] = useState<string>("");
    const [typeError, setTypeError] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [amountError, setAmountError] = useState<string>("");
    const [commentError, setCommentError] = useState<string>("");

    // 이미지 변경 후 일괄 적용을 위해 Ref사용
    const issueDateRef = useRef<{ handleChange: (selectedDate: Date) => void }>(null);
    const assetRef = useRef<{ itemOnClick: (key: string) => void }>(null);
    const typeRef = useRef<{ itemOnClick: (key: string) => void }>(null);
    const categoryRef = useRef<{ itemOnClick: (key: string) => void }>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);

    const [inputIssueDate, setInputIssueDate] = useState<Date | undefined>(issueDate);
    const [imageName, setImageName] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | undefined>(undefined);
    const [imageText, setImageText] = useState<string>("");

    const [imageTextModalOpen, setImageTextModalOpen] = useState<boolean>(false);

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
    const [householdValue, setHouseHoldValue] = useState<string>(isModify ? householdType || HouseholdTypes.Income : HouseholdTypes.Income);
    const [householdCategoryItems, setHouseholdCategoryItems] = useState<InputDropdownPropsItem[]>(
        () => {
            const items: InputDropdownPropsItem[] = [];
            if (categoryItems) {
                for (const item of categoryItems) {
                    if (item.type !== householdValue) continue;
                    items.push({
                        key: item.key.toString(),
                        value: item.name,
                    });
                }
            }
            return items;
        }
    );
    const [householdSubcategoryItems, setHouseholdSubcategoryItems] = useState<InputDropdownPropsItem[]>(
        () => {
            const subcategoryItems: InputDropdownPropsItem[] = [];
            if (isModify && categoryItems) {
                const subcategory = categoryItems.find((item) => item.key === Number(householdCategory))?.subcategory;
                if (subcategory) {
                    subcategory.forEach((item) => {
                        subcategoryItems.push({
                            key: item.key.toString(),
                            value: item.name,
                        });
                    });
                }
            };
            return subcategoryItems;
        });

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
            const subcategory = categoryItems.find((item) => item.key === Number(key))?.subcategory;
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
                setLoading(false);
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
                setLoading(false);
            } else {
                // 이전 화면으로 돌아가게(완료 메시지 띄울까..?)
                router.push("/household/management");
            }
        }
    }

    const getCategoryValue = (category: FormDataEntryValue | null, subcategory: FormDataEntryValue | null) => {
        if (category === null || category.toString().trim().length === 0) {
            return undefined;
        }
        if (subcategory === null || subcategory.toString().trim().length === 0) {
            return category.toString();
        }
        return subcategory.toString();
    }

    /**
     * Api호출을 위해 폼 변경
     * @param form 
     * @returns 
     */
    const changeFormToApi = (form: FormData) => {
        //const image = form.get("householdImage");
        const issue = inputIssueDate;
        const asset = form.get("assetKey");
        const hType = form.get("householdType");
        const category = form.get("householdCategory");
        const subcategory = form.get("householdSubcategory");
        const name = form.get("householdName");
        const amount = form.get("householdAmount");
        const comment = form.get("householdComment");

        //utc날짜 제거용

        // if(issue){
        //     console.log(dayjs(issue).utc(true).toDate());
        // }

        const data: HouseholdRegModActionProps = {
            householdKey: isModify ? householdKey : undefined,
            imageText: isModify ? undefined : imageText,
            issueDate: issue === null ? undefined : dayjs(issue).utc(true).toDate(),
            assetKey: asset === null ? "" : asset.toString(),
            householdType: hType === null ? "" : hType.toString(),
            householdCategory: Number(getCategoryValue(category, subcategory)),
            householdName: name === null ? "" : name.toString(),
            householdAmount: amount === null ? 0 : Number(amount.toString()), //Error시 NaN을 배출
            householdComment: comment === null ? "" : comment.toString(),
            updateDate: isModify ? dayjs(new Date()).utc(true).toDate() : undefined,
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

    const getCategoryKeyItem = (itemKey?: number) => {
        if (itemKey === undefined) return w('common.select');

        const selectItem = householdCategoryItems.find(({ key }) => key === itemKey.toString());

        return selectItem ? selectItem.value : w('common.select');
    }

    const getSubcategoryKeyItem = (itemKey?: number) => {
        if (itemKey === undefined) return w('common.select');

        const selectItem = householdSubcategoryItems.find(({ key }) => key === itemKey.toString());

        return selectItem ? selectItem.value : w('common.select');
    }

    const changeImage = (event: ChangeEvent<HTMLInputElement>) => {
        // 실제 이벤트 값은 비운다.(다음 이벤트에 계속 change하게 만들기 위해서)
        //console.log(event.target.files?.item(0));
        setImageText("");
        if (event.target.files && event.target.files.length > 0) {
            const item = event.target.files.item(0);
            if (item != null) {
                const size = item.size / (1024 * 1024)
                if (item.size < 1024 * 1024 * 4) {
                    event.target.value = "";
                    setImageFile(item);
                    setImageName(item.name);
                    return;
                }
                window.alert(`${m("household.file-error")} [${size.toFixed(2)}MB]`);
            }
        }
        event.target.value = "";
        setImageFile(undefined);
        setImageName("");
        return;
    }

    const imageDeleteClick = () => {
        setImageFile(undefined);
        setImageName("");
        setImageText("");
    }

    const imageReadClick = async () => {
        if (!imageFile) return;

        setLoading(true);

        // 이미지 파일 변환(읽기 위해서는 string으로 데이터를 보내야 하므로로)
        async function blobToBase64(blob: Blob) {
            return blob.arrayBuffer().then(buffer => {
                return Buffer.from(buffer).toString('base64');
            });
        }

        const base64ImageFile = await blobToBase64(imageFile);

        // 이미지가 있으면 이미지를 요청시킴
        const res = await fetch(`/api/household/image`, {
            method: "POST", // 요청 메서드
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: base64ImageFile })
        });

        if (!res.ok) {
            //에러 표시시
        }

        const text = await res.json();

        // AI로 자동으로 등록이 되게끔 하기 위해 API호출
        const aiRes = await fetch(`/api/household/ai`, {
            method: "POST", // 요청 메서드
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ assets: JSON.stringify(assetItems), categories: JSON.stringify(categoryItems), text: text.res, locale: locale })
        });

        //
        const aiResponse = await aiRes.json();
        //console.log(aiResponse.res);

        //aiResponse.res의 데이터 반환 타입
        //{asset: , type: 'E', category: , householdName: , amount: }
        if (assetRef.current) {
            assetRef.current.itemOnClick(aiResponse.res.asset);
        }
        if (typeRef.current) {
            typeRef.current.itemOnClick(aiResponse.res.type);
        }
        if (issueDateRef.current) {
            issueDateRef.current.handleChange(new Date(aiResponse.res.issueDate))
        }

        if (categoryItems) {
            // 카테고리에 데이터 취득
            const category = await GetCategoryDataOne(aiResponse.res.category);
            if (category !== null) {
                if (category.parent_category_id === null) {
                    if (categoryRef.current) {
                        categoryRef.current.itemOnClick(category.id.toString());
                    }
                } else {
                    if (categoryRef.current) {
                        categoryRef.current.itemOnClick(category.parent_category_id.toString());
                    }
                }

            }
        }

        if (nameRef.current) {
            nameRef.current.value = aiResponse.res.householdName;
        }
        if (amountRef.current) {
            amountRef.current.value = aiResponse.res.amount.toString();
        }
        if (commentRef.current) {
            commentRef.current.value = aiResponse.res.comment;
        }

        setImageText(text.res);

        setLoading(false);
    }

    const modalOpen = () => {
        if (imageText === "") return;
        setImageTextModalOpen(true);
    }

    const modalClose = () => {
        setImageTextModalOpen(false);
    }

    return (
        <form onSubmit={householdSubmit}>
            <TextModal
                title={w('common.data') + " " + w('common.check')}
                isOpen={imageTextModalOpen}
                onClose={modalClose}
            >
                {imageText}
            </TextModal>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('household.regist')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('household.regist-info')}</p>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4">
                    {!isModify &&
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('household.image-title')}</span>
                                    <div className="tooltip" data-tip="gpt-4o-mini">
                                        <InformationCircleIcon
                                            className="w-4"
                                        ></InformationCircleIcon>
                                    </div>
                                </div>
                            </label>
                            <ImageUploader
                                className="max-w-md mb-4"
                                id="householdImage"
                                name="householdImage"
                                disabled={loading}
                                setImage={changeImage}
                            />
                            {imageName !== "" &&
                                <div className="mb-4 flex justify-between w-full max-w-md">
                                    <div className="badge badge-lg badge-success gap-2">
                                        <button onClick={() => { imageDeleteClick(); }}>
                                            <XMarkIcon className="w-4">

                                            </XMarkIcon>
                                        </button>
                                        {imageName}
                                    </div>
                                    {imageText !== "" &&
                                        <span className="content-end text-xs text-green-700 font-bold">{w("household.image-read-end")}</span>
                                    }
                                </div>
                            }
                            <div className="join join-vertical w-full max-w-md">
                                <button
                                    type="button"
                                    className="btn btn-outline join-item btn-sm"
                                    onClick={() => { imageReadClick(); }}
                                    disabled={loading || imageName === "" || imageText !== ""}>
                                    {loading && <span className="loading loading-spinner"></span>}
                                    {w('household.image-read-ai')}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline join-item btn-success btn-sm"
                                    onClick={() => { modalOpen(); }}
                                    disabled={loading || imageText === ""}>
                                    {w('common.data') + " " + w('common.check')}
                                </button>
                            </div>
                        </div>
                    }
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
                                ref={issueDateRef}
                                defaultDate={isModify ? issueDate : inputIssueDate}
                                setDate={setInputIssueDate}
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
                                ref={assetRef}
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
                                ref={typeRef}
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
                                ref={categoryRef}
                                defaultBtnName={isModify ? getCategoryKeyItem(householdCategory) : w('common.select')}
                                defaultInputValue={isModify ? householdCategory?.toString() : undefined}
                                className="w-full max-w-md"
                                onChange={(key) => categoryChange(key)}
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
                                ref={nameRef}
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
                                ref={amountRef}
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
                                ref={commentRef}
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
                    {loading && <span className="loading loading-spinner"></span>}
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
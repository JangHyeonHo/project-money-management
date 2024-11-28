"use client"

import InputDropdown from "@/app/_components/_input/input-dropdown";
import { AssetTypes } from "@/app/_types/common-const";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { AssetRegistActionProps } from "../_types/asset-type";
import { StringRangeCheck } from "@/app/_utils/common-utils";
import { AssetRegistAction } from "../_actions/asset-regist-action";
import { redirect } from "next/navigation";

/**
 * 자본 등록 화면
 * @returns 
 */
export default function AssetRegist() {

    const w = useTranslations('word');
    const m = useTranslations('msg');
    const e = useTranslations('msg.error');

    const [loading, setLoading] = useState<boolean>(false);
    const [typeError, setTypeError] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [currencyError, setCurrencyError] = useState<string>("");
    const [amountError, setAmountError] = useState<string>("");
    const [commentError, setCommentError] = useState<string>("");


    const assetTypeItems = [
        { key: AssetTypes.Cash, value: w('asset.cash') },
        { key: AssetTypes.Bankbook, value: w('asset.bankbook') },
        { key: AssetTypes.Card, value: w('asset.card') },
        { key: AssetTypes.Etc, value: w('common.etc') }
    ];

    /**
     * 대표적인 통화 30개정도 뽑았는데, 일단 이렇게 많이 필요 없을것 같아서 예시만 만들고 없앰
     * 근데 이상하게 원이 안포함되어 있어서 원은 수동으로 포함
     * 통화 종류가 너무 많아서.. 통화는 나중에 다른 컴포넌트로 교체할 가능성 있음
     */
    const currencyItems = [
        { key: "usd", value: w("asset.cur-key.usd") },
        //{ key: "cad", value: w("asset.cur-key.cad") },
        { key: "eur", value: w("asset.cur-key.eur") },
        //{ key: "gbp", value: w("asset.cur-key.gbp") },
        //{ key: "chf", value: w("asset.cur-key.chf") },
        //{ key: "nok", value: w("asset.cur-key.nok") },
        //{ key: "sek", value: w("asset.cur-key.sek") },
        //{ key: "dkk", value: w("asset.cur-key.dkk") },
        //{ key: "pln", value: w("asset.cur-key.pln") },
        //{ key: "czk", value: w("asset.cur-key.czk") },
        //{ key: "huf", value: w("asset.cur-key.huf") },
        { key: "cny", value: w("asset.cur-key.cny") },
        { key: "jpy", value: w("asset.cur-key.jpy") },
        { key: "krw", value: w("asset.cur-key.krw") },
        //{ key: "inr", value: w("asset.cur-key.inr") },
        { key: "aud", value: w("asset.cur-key.aud") },
        //{ key: "sgd", value: w("asset.cur-key.sgd") },
        //{ key: "hkd", value: w("asset.cur-key.hkd") },
        //{ key: "thb", value: w("asset.cur-key.thb") },
        //{ key: "myr", value: w("asset.cur-key.myr") },
        //{ key: "idr", value: w("asset.cur-key.idr") },
        //{ key: "php", value: w("asset.cur-key.php") },
        //{ key: "vnd", value: w("asset.cur-key.vnd") },
        //{ key: "brl", value: w("asset.cur-key.brl") },
        //{ key: "mxn", value: w("asset.cur-key.mxn") },
        //{ key: "ars", value: w("asset.cur-key.ars") },
        //{ key: "clp", value: w("asset.cur-key.clp") },
        //{ key: "zar", value: w("asset.cur-key.zar") },
        //{ key: "ngn", value: w("asset.cur-key.ngn") },
        //{ key: "egp", value: w("asset.cur-key.egp") }
    ];

    const assetSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setTypeError("");
        setNameError("");
        setCurrencyError("");
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
        const data = await AssetRegistAction(formData);

        setLoading(false);

        // 로그인 데이터 존재 확인
        if (data === null) {
            //처리 에러 알람 표시
            //setEmailError(e('login'));
        } else {
            // 이전 화면으로 돌아가게(완료 메시지 띄울까..?)
            redirect("./management");
        }

    }

    /**
     * Api호출을 위해 폼 변경
     * @param form 
     * @returns 
     */
    const changeFormToApi = (form: FormData) => {
        const type = form.get("assetType");
        const name = form.get("assetName");
        const money = form.get("assetMoney");
        const currency = form.get("assetCurrency");
        const comment = form.get("assetComment");

        const data: AssetRegistActionProps = {
            assetType: type === null ? "" : type.toString(),
            assetName: name === null ? "" : name.toString(),
            assetMoney: money === null ? 0 : Number(money.toString()), //Error시 NaN을 배출
            assetCurrency: currency === null ? "" : currency.toString(),
            assetComment: comment === null ? "" : comment.toString(),
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
    const validationCheck = (form: AssetRegistActionProps) => {
        let error = false;
        // 타입 미선택일 경우
        if (form.assetType === "") {
            //type error
            setTypeError(e('input.select', { item: w('asset.type') }));
            error = true;
        }
        // 이름이 1~30자가 아닐 경우
        if (form.assetName === "" || !StringRangeCheck(form.assetName, 1, 30)) {
            //name error
            setNameError(e('input.c-range-min-max', { item: w('asset.name'), min: 1, max: 30 }));
            error = true;
        }
        // 입력한 수치가 NaN일 경우
        if (Number.isNaN(form.assetMoney)) {
            //money error
            setAmountError(e('input.number'));
            error = true;
        }
        // 타입 미선택일 경우
        if (form.assetCurrency === "") {
            //name error
            setCurrencyError(e('input.select', { item: w('asset.currency') }));
            error = true;
        }
        // 코멘트가 500자 초과일 경우
        if (!StringRangeCheck(form.assetComment, 0, 500)) {
            //comment error
            setCommentError(e('input.c-range-max', { item: w('common.comment'), max: 500 }));
            error = true;
        }

        return error;
    }


    return (
        <form onSubmit={assetSubmit}>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('asset.regist')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('asset.regist-info')}</p>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('asset.type')}</span>
                            </div>
                            <InputDropdown
                                dropdownItems={assetTypeItems}
                                id="assetType"
                                key="assetType"
                                name="assetType"
                                btnName={w('common.select')}
                                className="w-full max-w-md"
                                disabled={loading}
                                required
                                isChangeBtnName={true}
                            />
                            {typeError !== "" &&
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{typeError}</span>
                                </div>
                            }
                            {/** 2024-11-24 Select방식에서 Dropdown방식으로 변경(모바일 UI가 불편함)
                                 * 공통 input input-dropdown.tsx파일 생성
                                 */}
                            {/* <select className="select select-bordered w-full max-w-md"
                                    key="assetType"
                                    id="assetType"
                                    name="assetType"
                                    required>
                                    <option value={"00"}>{w('common.select')}</option>
                                    {assetTypeItems.map(({ key, value }) => (
                                        <option key={"opt" + key} value={key} >{value}</option>
                                    ))}
                                </select> */}
                            {/** 2024-11-24 Select방식에서 Dropdown방식으로 변경(모바일 UI가 불편함) */}
                        </label>
                    </div>
                    <div className="sm:col-span-4">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('asset.name')}</span>
                                <span className="label-text-alt">{m('common.input-max', { item: w('asset.name'), max: 30 })}</span>
                            </div>
                            <input type="text"
                                id="assetName"
                                name="assetName"
                                required
                                placeholder="Type here"
                                disabled={loading}
                                maxLength={30}
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
                                <span className="label-text">{w('asset.money')}</span>
                            </div>
                            <input type="number"
                                id="assetMoney"
                                name="assetMoney"
                                disabled={loading}
                                required
                                step="0.01"
                                defaultValue={0}
                                className="input input-bordered w-full max-w-md" />
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
                                <span className="label-text">{w('asset.currency')}</span>
                            </div>
                            <InputDropdown
                                dropdownItems={currencyItems}
                                id="assetCurrency"
                                key="assetCurrency"
                                name="assetCurrency"
                                disabled={loading}
                                btnName={w('common.select')}
                                className="w-full max-w-md"
                                required
                                isChangeBtnName={true}
                            />
                            {currencyError !== "" &&
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{currencyError}</span>
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
                                id="assetComment"
                                name="assetComment"
                                disabled={loading}
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

            <div className="mt-8 flex items-center gap-x-6">
                <button
                    type="submit"
                    disabled={loading}
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
    )
}
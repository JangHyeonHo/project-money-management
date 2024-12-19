"use client"

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { SignupActionProps } from "../_types/user-types";
import { checkPasswordWithEscapedSpecialChars, StringRangeCheck } from "@/app/[locale]/_utils/common-utils";
import { SignupAction } from "../_actions/signup-action";
import { useRouter } from "@/i18n/routing";
import { CategoryRegistAction } from "../../(money-management)/settings/_actions/category-regist-action";
import { HouseholdTypes } from "../../_types/common-const";


export default function Signup() {

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [passwordCheckError, setPasswordCheckError] = useState<string>("");
    const [firstNameError, setFirstNameError] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");

    const w = useTranslations('word');
    const m = useTranslations('msg');
    const e = useTranslations('msg.error');

    const signupSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setEmailError("");
        setPasswordError("");
        setPasswordCheckError("");
        setFirstNameError("");
        setLastNameError("");
        const formData = changeFormToApi(new FormData(event.currentTarget));

        //입력데이터 확인용
        //console.log(formData);

        if (formData === null) {
            setLoading(false);
            return;
        }
        // api호출(데이터 변조 방지를 위해 세션에서 바로 쿠키등록)
        const data = await SignupAction(formData);

        // 로그인 데이터 존재 확인
        if (data === null) {
            //붉은 에러메시지 표시
            router.push("/");

        } else {
            // 로그인 처리
            // 트리거로 대분류/소분류 자동등록하려고 했으나.. 언어 설정이 생각해보니 서버에 있는 관계로, 어쩔 수 없지만 회원가입시 여기서 대분류
            // 소분류를 만들기로 결정
            const userCategoryInit = await CategoryRegistAction(SignupCategoryDatas());

            // 실패시
            if (userCategoryInit === null) {
                router.push("/");
            }

            router.push("/");
        }
        setLoading(false);
    }

    const changeFormToApi = (form: FormData) => {
        const email = form.get("userEmail");
        const pwd = form.get("userPassword");
        const pwdCheck = form.get("userPasswordCheck");
        const fName = form.get("userFirstName");
        const lName = form.get("userLastName");

        const data: SignupActionProps = {
            userEmail: email === null ? "" : email.toString(),
            userPassword: pwd === null ? "" : pwd.toString(),
            userPasswordCheck: pwdCheck === null ? "" : pwdCheck.toString(),
            userFirstName: fName === null ? "" : fName.toString(),
            userLastName: lName === null ? "" : lName.toString(),
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
    const validationCheck = (form: SignupActionProps) => {
        let error = false;
        // 작성 에러 체크(버그 수정)
        if (form.userEmail === "" || !StringRangeCheck(form.userFirstName, 1, 320)) {
            //email error
            setEmailError(e('input.c-range-min-max', { item: w('users.email'), min: 1, max: 320 }));
            error = true;
        }
        if (form.userPassword === "" || form.userPassword.trim().length === 0) {
            //password error
            setPasswordError(e('users.pwd-input'));
            error = true;
        }
        // 영어/숫자/특수문자 포함 8글자 이상 체크
        if (!checkPasswordWithEscapedSpecialChars(form.userPassword)) {
            setPasswordError(e('users.pwd-error'));
            error = true;
        }
        if (form.userPasswordCheck !== form.userPassword) {
            setPasswordCheckError(e('users.pwd-check-input'));
            error = true;
        }
        if (form.userFirstName === "" || !StringRangeCheck(form.userFirstName, 1, 20)) {
            setFirstNameError(e('input.c-range-min-max', { item: w('users.f-name'), min: 1, max: 20 }));
            error = true;
        }
        if (form.userLastName === "" || !StringRangeCheck(form.userLastName, 1, 20)) {
            setLastNameError(e('input.c-range-min-max', { item: w('users.l-name'), min: 1, max: 20 }));
            error = true;
        }
        return error;
    }

    // 회원가입시 기본적으로 넣을 데이터, 언어 설정으로 인해 트리거를 사용하지 않음.
    const SignupCategoryDatas = () => {
        const categoryDatas: {
            id: number,
            categoryName: string, categoryComment?: string,
            householdType?: string, parentCategoryId?: number,
        }[] = []
        categoryDatas.push({
            id: 1,
            categoryName: w("users.init-category.salary"),
            categoryComment: m("users.init-comment.salary"),
            householdType: HouseholdTypes.Income
        });
        categoryDatas.push({
            id: 2,
            categoryName: w("users.init-category.ex-income"),
            categoryComment: m("users.init-comment.ex-income"),
            householdType: HouseholdTypes.Income
        });
        categoryDatas.push({
            id: 3,
            categoryName: w("users.init-category.pocket-money"),
            categoryComment: m("users.init-comment.pocket-money"),
            householdType: HouseholdTypes.Income
        });
        categoryDatas.push({
            id: 4,
            categoryName: w("users.init-category.etc-income"),
            categoryComment: m("users.init-comment.etc-income"),
            householdType: HouseholdTypes.Income
        });
        categoryDatas.push({
            id: 5,
            categoryName: w("users.init-category.food-exp"),
            categoryComment: m("users.init-comment.food-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 6,
            categoryName: w("users.init-category.trans-exp"),
            categoryComment: m("users.init-comment.trans-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 7,
            categoryName: w("users.init-category.enter-exp"),
            categoryComment: m("users.init-comment.enter-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 8,
            categoryName: w("users.init-category.util-exp"),
            categoryComment: m("users.init-comment.util-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 9,
            categoryName: w("users.init-category.cong-exp"),
            categoryComment: m("users.init-comment.cong-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 10,
            categoryName: w("users.init-category.live-exp"),
            categoryComment: m("users.init-comment.live-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 11,
            categoryName: w("users.init-category.misc-exp"),
            categoryComment: m("users.init-comment.misc-exp"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 12,
            parentCategoryId: 4,
            categoryName: w("users.init-category.trans-deposit"),
            categoryComment: m("users.init-comment.trans-deposit"),
            householdType: HouseholdTypes.Income
        });
        // parentCategoryId: 5 (eat-out ~ conv)
        categoryDatas.push({
            id: 13,
            parentCategoryId: 5,
            categoryName: w("users.init-category.eat-out"),
            categoryComment: m("users.init-comment.eat-out"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 14,
            parentCategoryId: 5,
            categoryName: w("users.init-category.mart"),
            categoryComment: m("users.init-comment.mart"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 15,
            parentCategoryId: 5,
            categoryName: w("users.init-category.conv"),
            categoryComment: m("users.init-comment.conv"),
            householdType: HouseholdTypes.Expenditure
        });

        // parentCategoryId: 6 (public-trans ~ maintain)
        categoryDatas.push({
            id: 16,
            parentCategoryId: 6,
            categoryName: w("users.init-category.public-trans"),
            categoryComment: m("users.init-comment.public-trans"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 17,
            parentCategoryId: 6,
            categoryName: w("users.init-category.taxi"),
            categoryComment: m("users.init-comment.taxi"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 18,
            parentCategoryId: 6,
            categoryName: w("users.init-category.gas"),
            categoryComment: m("users.init-comment.gas"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 19,
            parentCategoryId: 6,
            categoryName: w("users.init-category.maintain"),
            categoryComment: m("users.init-comment.maintain"),
            householdType: HouseholdTypes.Expenditure
        });

        // parentCategoryId: 7 (movie ~ game)
        categoryDatas.push({
            id: 20,
            parentCategoryId: 7,
            categoryName: w("users.init-category.movie"),
            categoryComment: m("users.init-comment.movie"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 21,
            parentCategoryId: 7,
            categoryName: w("users.init-category.music"),
            categoryComment: m("users.init-comment.music"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 22,
            parentCategoryId: 7,
            categoryName: w("users.init-category.app"),
            categoryComment: m("users.init-comment.app"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 23,
            parentCategoryId: 7,
            categoryName: w("users.init-category.travel"),
            categoryComment: m("users.init-comment.travel"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 24,
            parentCategoryId: 7,
            categoryName: w("users.init-category.hobby"),
            categoryComment: m("users.init-comment.hobby"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 25,
            parentCategoryId: 7,
            categoryName: w("users.init-category.karaoke"),
            categoryComment: m("users.init-comment.karaoke"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 26,
            parentCategoryId: 7,
            categoryName: w("users.init-category.game"),
            categoryComment: m("users.init-comment.game"),
            householdType: HouseholdTypes.Expenditure
        });

        // parentCategoryId: 8 (water-bill ~ phone-bill)
        categoryDatas.push({
            id: 27,
            parentCategoryId: 8,
            categoryName: w("users.init-category.water-bill"),
            categoryComment: m("users.init-comment.water-bill"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 28,
            parentCategoryId: 8,
            categoryName: w("users.init-category.elect-bill"),
            categoryComment: m("users.init-comment.elect-bill"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 29,
            parentCategoryId: 8,
            categoryName: w("users.init-category.gas-bill"),
            categoryComment: m("users.init-comment.gas-bill"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 30,
            parentCategoryId: 8,
            categoryName: w("users.init-category.month-rent"),
            categoryComment: m("users.init-comment.month-rent"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 31,
            parentCategoryId: 8,
            categoryName: w("users.init-category.phone-bill"),
            categoryComment: m("users.init-comment.phone-bill"),
            householdType: HouseholdTypes.Expenditure
        });

        // parentCategoryId: 9 (present)
        categoryDatas.push({
            id: 32,
            parentCategoryId: 9,
            categoryName: w("users.init-category.present"),
            categoryComment: m("users.init-comment.present"),
            householdType: HouseholdTypes.Expenditure
        });

        // parentCategoryId: 10 (supplies ~ medicine)
        categoryDatas.push({
            id: 33,
            parentCategoryId: 10,
            categoryName: w("users.init-category.supplies"),
            categoryComment: m("users.init-comment.supplies"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 34,
            parentCategoryId: 10,
            categoryName: w("users.init-category.homes"),
            categoryComment: m("users.init-comment.homes"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 35,
            parentCategoryId: 10,
            categoryName: w("users.init-category.cloth"),
            categoryComment: m("users.init-comment.cloth"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 36,
            parentCategoryId: 10,
            categoryName: w("users.init-category.hospital"),
            categoryComment: m("users.init-comment.hospital"),
            householdType: HouseholdTypes.Expenditure
        });
        categoryDatas.push({
            id: 37,
            parentCategoryId: 10,
            categoryName: w("users.init-category.medicine"),
            categoryComment: m("users.init-comment.medicine"),
            householdType: HouseholdTypes.Expenditure
        });

        // parentCategoryId: 11 (Parents)
        categoryDatas.push({
            id: 38,
            parentCategoryId: 11,
            categoryName: w("users.init-category.Parents"),
            categoryComment: m("users.init-comment.Parents"),
            householdType: HouseholdTypes.Expenditure
        });

        categoryDatas.push({
            id: 39,
            parentCategoryId: 11,
            categoryName: w("users.init-category.trans-withdrawal"),
            categoryComment: m("users.init-comment.trans-withdrawal"),
            householdType: HouseholdTypes.Expenditure
        });

        return categoryDatas;
    }



    return (
        <form
            onSubmit={(event) => { signupSubmit(event) }}>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('users.signup')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600 text-wrap">{m.rich('users.tos', {
                    br: () => <br />
                })}</p>
                <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
                    <div className="col-span-2">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('users.email')}</span>
                            </div>
                            <input type="email"
                                id="userEmail"
                                name="userEmail"
                                disabled={loading}
                                maxLength={320}
                                required
                                placeholder="test@domain.com"
                                className="input input-bordered w-full max-w-md" />
                        </label>
                        {emailError !== "" &&
                            <div className="label">
                                <span className="label-text-alt text-red-500">{emailError}</span>
                            </div>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('users.pwd')}</span>
                                <span className="label-text-alt">{m('users.password-info')}</span>
                            </div>
                            <input type="password"
                                id="userPassword"
                                name="userPassword"
                                disabled={loading}
                                required
                                className="input input-bordered w-full max-w-md" />
                        </label>
                        {passwordError !== "" &&
                            <div className="label">
                                <span className="label-text-alt text-red-500">{passwordError}</span>
                            </div>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('users.pwd-confirm')}</span>
                                <span className="label-text-alt">{m('users.password-check-info')}</span>
                            </div>
                            <input type="password"
                                id="userPasswordCheck"
                                name="userPasswordCheck"
                                disabled={loading}
                                required
                                className="input input-bordered w-full max-w-md" />
                        </label>
                        {passwordCheckError !== "" &&
                            <div className="label">
                                <span className="label-text-alt text-red-500">{passwordCheckError}</span>
                            </div>
                        }
                    </div>
                    <div className="col-span-1">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('users.f-name')}</span>
                            </div>
                            <input type="text"
                                id="userFirstName"
                                name="userFirstName"
                                disabled={loading}
                                maxLength={20}
                                required
                                className="input input-bordered w-full max-w-md" />
                        </label>
                        {firstNameError !== "" &&
                            <div className="label">
                                <span className="label-text-alt text-red-500">{firstNameError}</span>
                            </div>
                        }
                    </div>
                    <div className="col-span-1">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">{w('users.l-name')}</span>
                            </div>
                            <input type="text"
                                id="userLastName"
                                name="userLastName"
                                disabled={loading}
                                maxLength={20}
                                required
                                className="input input-bordered w-full max-w-md" />
                        </label>
                        {lastNameError !== "" &&
                            <div className="label">
                                <span className="label-text-alt text-red-500">{lastNameError}</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="mt-8 flex items-center gap-x-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-secondary w-1/2 max-w-md">
                        {loading && <span className="loading loading-spinner"></span>}
                        {w('users.signup')}
                    </button>
                </div>
            </div>
        </form>
    )
}
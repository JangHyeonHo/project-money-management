"use client"

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { SignupActionProps } from "../_types/user-types";
import { StringRangeCheck } from "@/app/[locale]/_utils/common-utils";
import { SignupAction } from "../_actions/signup-action";
import { useRouter } from "@/i18n/routing";


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
        
        setLoading(false);

        // 로그인 데이터 존재 확인
        if (data === null) {
            //붉은 에러메시지 표시
            router.push("/");
            
        } else {
            // 로그인 처리
            router.push("/");
        }
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
            setPasswordError(e('pwd-input'));
            error = true;
        }
        if (form.userPasswordCheck !== form.userPassword) {
            setPasswordCheckError(e('pwd-check-input'));
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
                        {w('users.signup')}
                    </button>
                </div>
            </div>
        </form>
    )
}
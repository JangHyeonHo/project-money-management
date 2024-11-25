"use client"

import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { User } from "@prisma/client";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const w = useTranslations('word');
    const e = useTranslations('msg.users.error');

    /**
     * Login 클릭 이벤트
     * @param event 
     * @returns 
     */
    const loginSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setEmailError("");
        const formData = changeFormToApi(new FormData(event.currentTarget));
        
        //입력데이터 확인용
        //console.log(formData);

        if (formData === null) {
            setLoading(false);
            return;
        }

        // api호출
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(formData),
        });
        const data: User[] = await res.json();

        //console.log(data);

        setLoading(false);

        // 로그인 데이터 존재 확인
        if (data === null) {
            //붉은 에러메시지 표시
            setEmailError(e('login'));
        } else {
            // redirect home
            // 로그인 처리
        }

    }

    /**
     * Api호출을 위해 폼 변경
     * @param form 
     * @returns 
     */
    const changeFormToApi = (form: FormData) => {
        const error = validationCheck(form);

        if (error) {
            return null;
        }

        const data = {
            "user_email": form.get("userEmail"),
            "user_password": form.get("userPassword"),
        }
        

        return data;
    }

    /**
     * 폼 validation 체크
     * @param form 
     * @returns 
     */
    const validationCheck = (form: FormData) => {
        var error = false;
        const email = form.get("userEmail");
        const pwd = form.get("userPassword");
        // 작성 에러 체크
        if (email === null || email.toString().trim().length === 0) {
            //email error
            setEmailError(e('email-input'));
            error = true;
        }
        if (pwd === null || pwd.toString().trim().length === 0) {
            //password error
            setPasswordError(e('pwd-input'));
            error = true;
        }
        return error;
    }


    return (
        <SiteStackedLayout>
            <form onSubmit={(event) => { loginSubmit(event) }}>
                <div className="mx-auto pb-8 max-w-96 mt-10">
                    <div className="border border-gray-200">
                        <h2 className="mt-3 text-xl font-semibold text-gray-900 text-center">{w('users.login')}</h2>
                        <div className="my-3 px-5 grid grid-cols-1 gap-x-3 gap-y-3">
                            <div className="col-span-1">
                                <label className="form-control w-full max-w-md">
                                    <div className="label">
                                        <span className="label-text">{w('users.email')}</span>
                                    </div>
                                    <input type="email"
                                        id="userEmail"
                                        name="userEmail"
                                        required
                                        disabled={loading}
                                        placeholder="test@domain.com"
                                        className="input input-bordered w-full max-w-md" />
                                    {emailError !== "" &&
                                        <div className="label">
                                            <span className="label-text-alt text-red-500">{emailError}</span>
                                        </div>
                                    }
                                </label>
                            </div>
                            <div className="col-span-1">
                                <label className="form-control w-full max-w-md">
                                    <div className="label">
                                        <span className="label-text">{w('users.pwd')}</span>
                                    </div>
                                    <input type="password"
                                        id="userPassword"
                                        name="userPassword"
                                        required
                                        disabled={loading}
                                        className="input input-bordered w-full max-w-md" />
                                </label>
                                {passwordError !== "" &&
                                    <div className="label">
                                        <span className="label-text-alt text-red-500">{passwordError}</span>
                                    </div>
                                }
                            </div>
                            <div className="col-span-1">
                                <label className="cursor-pointer label">
                                    <span className="label-text grow text-end px-3">{w('users.autologin')}</span>
                                    <input type="checkbox"
                                        id="autoLogin"
                                        name="autoLogin"
                                        className="checkbox checkbox-secondary" />
                                </label>
                            </div>
                            <div className="col-span-1">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn-secondary w-full max-w-md">
                                    {loading && <span className="loading loading-spinner"></span>}
                                    {w('users.login')}
                                </button>
                            </div>
                            <div className="col-span-1">
                                <button
                                    disabled={loading}
                                    className="btn btn-outline w-full max-w-md">
                                    {loading && <span className="loading loading-spinner"></span>}
                                    {w('users.signup')}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </SiteStackedLayout>
    )
}
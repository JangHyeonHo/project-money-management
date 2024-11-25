"use client"
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { User } from "@prisma/client";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";

export default function Signup() {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const signupSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = changeFormToApi(new FormData(event.currentTarget));
        console.log(formData);

        const res = await fetch("/api/user");
        const data: User[] = await res.json();

        if(data===null){
            //아이디가 존재하지 않음
        }
        console.log(data);

        //const signupApi = await prisma.user.create();
    }

    const changeFormToApi = (form: FormData) => {
        //TODO Validation Check 
        const check = true;

        const signupData = {
            "user_email": form.get("userEmail"),
            "user_password": form.get("userPassword"),
            "user_first_name": form.get("userFirstName"),
            "user_last_name": form.get("userLastName"),
        }
        if (!check) {
            return null;
        }
        return signupData;
    }



    return (
        <SiteStackedLayout>
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
                                    required
                                    placeholder="test@domain.com"
                                    className="input input-bordered w-full max-w-md" />
                            </label>
                        </div>
                        <div className="col-span-2">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('users.pwd')}</span>
                                </div>
                                <input type="password"
                                    id="userPassword"
                                    name="userPassword"
                                    required
                                    className="input input-bordered w-full max-w-md" />
                            </label>

                            <div className="label">
                                <span className="label-text-alt">{m('users.password-info')}</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('users.pwd-confirm')}</span>
                                </div>
                                <input type="password"
                                    id="userPasswordCheck"
                                    name="userPasswordCheck"
                                    required
                                    className="input input-bordered w-full max-w-md" />
                            </label>

                            <div className="label">
                                <span className="label-text-alt">{m('users.password-check-info')}</span>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('users.f-name')}</span>
                                </div>
                                <input type="text"
                                    id="userFirstName"
                                    name="userFirstName"
                                    required
                                    className="input input-bordered w-full max-w-md" />
                            </label>
                        </div>
                        <div className="col-span-1">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('users.l-name')}</span>
                                </div>
                                <input type="text"
                                    id="userLastName"
                                    name="userLastName"
                                    required
                                    className="input input-bordered w-full max-w-md" />
                            </label>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center gap-x-6">
                        <button
                            type="submit"
                            className="btn btn-secondary w-1/2 max-w-md">
                            {w('users.signup')}
                        </button>
                    </div>
                </div>
            </form>

        </SiteStackedLayout>
    )
}
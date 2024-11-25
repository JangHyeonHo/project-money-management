import InputDropdown from "@/app/_components/_input/input-dropdown";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { CapitalTypes, LayoutHeaders } from "@/app/_types/common-const";
import { useTranslations } from "next-intl";

/**
 * 자본 등록 화면
 * @returns 
 */
export default function CapitalRegist() {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    const capitalTypeItems = [
        { key: CapitalTypes.Cash, value: w('capital.cash') },
        { key: CapitalTypes.Card, value: w('capital.card') },
        { key: CapitalTypes.Etc, value: w('common.etc') }
    ];

    const currencyItems = [
        { key: "C1", value: "WON"}
    ];

    return (
        <SiteStackedLayout
            headtitle={w('capital.regist')}
            headCurrent={LayoutHeaders.Capital}
        >
            <form>
                <div className="border-b border-gray-900/10 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">{w('capital.regist')}</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">{m('capital.regist-info')}</p>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('capital.type')}</span>
                                </div>
                                <InputDropdown 
                                    dropdownItems={capitalTypeItems}
                                    id="capitalType"
                                    key="capitalType"
                                    name="capitalType"
                                    btnName={w('common.select')}
                                    className="w-full max-w-md"
                                    required
                                    isChangeBtnName={true}
                                />
                                {/** 2024-11-24 Select방식에서 Dropdown방식으로 변경(모바일 UI가 불편함)
                                 * 공통 input input-dropdown.tsx파일 생성
                                 */}
                                {/* <select className="select select-bordered w-full max-w-md"
                                    key="capitalType"
                                    id="capitalType"
                                    name="capitalType"
                                    required>
                                    <option value={"00"}>{w('common.select')}</option>
                                    {capitalTypeItems.map(({ key, value }) => (
                                        <option key={"opt" + key} value={key} >{value}</option>
                                    ))}
                                </select> */}
                                {/** 2024-11-24 Select방식에서 Dropdown방식으로 변경(모바일 UI가 불편함) */}
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('capital.name')}</span>
                                </div>
                                <input type="text"
                                    id="capitalName"
                                    name="capitalName"
                                    required
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-md" />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('capital.money')}</span>
                                </div>
                                <input type="number"
                                    id="capitalMoney"
                                    name="capitalMoney"
                                    required
                                    defaultValue={0}
                                    className="input input-bordered w-full max-w-md" />
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('capital.currency')}</span>
                                </div>
                                <InputDropdown 
                                    dropdownItems={currencyItems}
                                    id="capitalCurrency"
                                    key="capitalCurrency"
                                    name="capitalCurrency"
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
                                    <span className="label-text">{w('common.comment')}</span>
                                </div>
                                <textarea className="textarea textarea-bordered w-full"
                                    placeholder={w("common.comment")}
                                    id="capitalComment"
                                    name="capitalComment"
                                    rows={5} />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-x-6">
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
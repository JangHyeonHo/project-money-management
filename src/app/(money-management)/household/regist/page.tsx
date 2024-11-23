import ImageUploader from "@/app/_components/_input/image-uploader";
import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { HouserholdTypes, LayoutHeaders } from "@/app/_types/common-const";
import { useTranslations } from "next-intl";

export default function HouseholdRegist() {
    const w = useTranslations('word');
    const m = useTranslations('msg');

    const householdTypeItems = [
        { key: HouserholdTypes.Income, value: w('household.income') },
        { key: HouserholdTypes.Expenditure, value: w('household.expense') }
    ];

    const capitalKeyItems = [
        { key: "CAP1", name: "TEST DATA" },
        { key: "CAP3", name: "CARD TEST DATA" },
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
                                key="householdImage"
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
                                <select className="select select-bordered w-full"
                                    key="capitalKey"
                                    id="capitalKey"
                                    name="capitalKey"
                                    required>
                                    {capitalKeyItems.map(({ key, name }) => (
                                        <option
                                            key={"opt" + key}
                                            value={key}
                                        >{name}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">{w('household.in-exp')}</span>
                                </div>
                                <select className="select select-bordered w-full bg-indigo-100"
                                    key="householdType"
                                    id="householdType"
                                    name="householdType"
                                    //className={"select select-bordered w-full " + (value === HouserholdTypes.Income ? "bg-indigo-100" : "bg-red-100" )}
                                    required>
                                    {householdTypeItems.map(({ key, value }) => (
                                        <option
                                            key={"opt" + key}
                                            value={key}
                                        >{value}</option>
                                    ))}
                                </select>
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
import { useTranslations } from "next-intl";

export default function HouseholdManagement() {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    return (
            <div>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('household.management')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('household.management-info')}</p>
                <div className="mt-4 flex items-center gap-x-6">
                    <a
                        href="./regist"
                        className="btn btn-info btn-sm">
                        {w('household.regist')}
                    </a>
                </div>
            </div>
        </div>
    )
}
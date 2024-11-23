import SiteStackedLayout from "@/app/_components/_layout/stacked-layout";
import { LayoutHeaders } from "@/app/_types/common-const";
import { useTranslations } from "next-intl";
import CapitalTable from "../_components/capital-table";


/**
 * 자본 관리 화면
 * @returns 
 */
export default function CapitalManagement() {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    //Test용 데이터, 나중에 기능 구현 후 삭제 예정
    const cashItems = [
        { key: "CAP1", name: "TEST DATA", money: 3000000, currency: "WON" }
    ]
    const cardItems = [
        { key: "CAP3", name: "CARD TEST DATA", money: -300000, currency: "WON" }
    ]
    const etcItems = []

    return (
        <SiteStackedLayout
            headtitle={w('capital.management')}
            headCurrent={LayoutHeaders.Capital}
        >
            <div>
                <div className="border-b border-gray-900/10 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">{w('capital.management')}</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">{m('capital.management-info')}</p>
                    <div className="mt-4 flex items-center gap-x-6">
                        <a
                            href="./regist"
                            className="btn btn-info btn-sm">
                            {w('capital.regist')}
                        </a>
                    </div>
                </div>
                <div className="border-b border-gray-900/10 pt-6 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">{w('capital.cash')}</h2>
                    <CapitalTable items={cashItems}></CapitalTable>
                </div>
                <div className="border-b border-gray-900/10 pt-6 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">{w('capital.card')}</h2>
                    <CapitalTable items={cardItems}></CapitalTable>
                </div>
                <div className="border-b border-gray-900/10 pt-6 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">{w('common.etc')}</h2>
                    <CapitalTable></CapitalTable>
                </div>
            </div>

        </SiteStackedLayout>
    )
}
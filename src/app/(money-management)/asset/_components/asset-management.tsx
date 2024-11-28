import { useTranslations } from "next-intl";
import AssetList from "./asset-list";
import AssetListCollapse from "./asset-list-collapse";
import { AssetManagementProps } from "../_types/asset-type";

export default function AssetManagement({bankbookAssets, cashAssets, cardAssets, etcAssets}:AssetManagementProps) {

    const w = useTranslations('word');
    const m = useTranslations('msg');

    //Test용 데이터, 나중에 기능 구현 후 삭제 예정

    return (
        <div>
            <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base/7 font-semibold text-gray-900">{w('asset.management')}</h2>
                <p className="mt-1 text-sm/6 text-gray-600">{m('asset.management-info')}</p>
                <div className="mt-4 flex items-center gap-x-6">
                    <a
                        href="./regist"
                        className="btn btn-info btn-sm">
                        {w('asset.regist')}
                    </a>
                </div>
            </div>
            <div className="border-b border-gray-900/10 pt-6 pb-8">
                <AssetListCollapse
                    title={w('asset.cash')}
                >
                    <AssetList items={cashAssets} />
                </AssetListCollapse>
            </div>
            <div className="border-b border-gray-900/10 pt-6 pb-8">
                <AssetListCollapse
                    title={w('asset.bankbook')}
                >
                    <AssetList items={bankbookAssets} />
                </AssetListCollapse>
            </div>
            <div className="border-b border-gray-900/10 pt-6 pb-8">
                <AssetListCollapse
                    title={w('asset.card')}
                >
                    <AssetList items={cardAssets} />
                </AssetListCollapse>
            </div>
            <div className="border-b border-gray-900/10 pt-6 pb-8">
                <AssetListCollapse
                    title={w('common.etc')}
                >
                    <AssetList items={etcAssets} />
                </AssetListCollapse>
            </div>
        </div>
    )
}
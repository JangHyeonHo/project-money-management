import { AssetListCollapseProps } from "../_types/asset-type";

/**
 * List의 Accordion 파일
 */
export default function AssetListCollapse({ children, title }: AssetListCollapseProps) {

    return (
        <>
            <div tabIndex={0} className={"collapse collapse-arrow bg-base-200"}>
                <input type="checkbox"/>
                <div className="collapse-title text-xl font-medium">
                    {title}
                </div>
                <div className="collapse-content">
                    {children}
                </div>
            </div>
        </>
    )
}
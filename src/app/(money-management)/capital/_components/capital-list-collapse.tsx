/**
 * List의 Accordion 파일
 */
export default function CapitalListCollapse({ children, title }: CapitalListCollapseProps) {
    return (
        <>
            <div className="collapse collapse-open collapse-arrow bg-base-200">
                <div className="collapse-title text-xl font-medium">{title}</div>
                <div className="collapse-content">
                    {children}
                </div>
            </div>
        </>
    )
}
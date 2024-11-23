import { useTranslations } from "next-intl";

export default function CapitalTable({ items }: CapitalTableProps) {

    const w = useTranslations('word');

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>{w('capital.name')}</th>
                        <th>{w('capital.money')}</th>
                        <th>{w('capital.currency')}</th>
                        <th>{w('common.btn')}</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map(({ key, name, money, currency }, index) => (
                        <tr
                            key={"tr" + key}
                            className={"bg-gradient-to-r " + (money < 0 ? "from-red-200" : "from-indigo-200")}
                        >
                            <th key={"th" + key}>{index + 1}</th>
                            <td key={"td" + key + name}>{name}</td>
                            <td
                                key={"td" + key + money}
                                className={money < 0 ? "text-red-600" : "text-indigo-600"}
                            >{money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td key={"td" + key + currency}>{currency}</td>
                            <td key={"td" + key}>
                                <button
                                    key={"modBtn" + key}
                                    className="btn btn-warning btn-sm">
                                    {w('common.modify')}
                                </button>
                                <button
                                    key={"delBtn" + key}
                                    className="btn btn-error btn-sm">
                                    {w('common.delete')}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
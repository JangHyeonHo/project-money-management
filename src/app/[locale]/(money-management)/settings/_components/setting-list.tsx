import { useTranslations } from "next-intl";
import { SettingListProps } from "../_types/settings-type";

export default function SettingList({ className, title, info, children }: SettingListProps) {

    const w = useTranslations("word");
    const m = useTranslations("msg");

    return (
        <div className={className}>
            {title &&
                <h2 className="text-base/7 font-semibold text-gray-900">{w(title)}</h2>
            }
            {title &&
                <p className="mt-1 text-sm/6 text-gray-600">{m(info)}</p>
            }
            {children}
        </div>
    )
}
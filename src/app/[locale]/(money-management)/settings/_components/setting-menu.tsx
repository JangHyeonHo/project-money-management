"use client"
import { useTranslations } from "next-intl";
import { SettingMenuProps } from "../_types/settings-type";
import { useRouter } from "@/i18n/routing";
import { SettingMenus } from "@/app/[locale]/_types/common-const";

export default function SettingMenu({ className, menuCurrent }: SettingMenuProps) {

    const w = useTranslations("word");

    const router = useRouter();

    return (
        <div className={className}>
            <ul className="menu bg-base-200 rounded-box w-full">
                <li>
                    <div
                        className={menuCurrent === SettingMenus.Category ? "active" : ""}
                        onClick={() => { router.push("/settings/category") }}>
                        {w("settings.category.main")}
                    </div>
                </li>
                {/* <li>
                    <div
                        onClick={() => { }}>
                        Item2
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => { }}>
                        Item3
                    </div>
                </li> */}
            </ul>
        </div>
    )
}
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

/**
 * Localization Config
 */
export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../public/locales/${locale}.json`)).default
    }

});
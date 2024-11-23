import { getRequestConfig } from "next-intl/server";

/**
 * Localization Config
 */
export default getRequestConfig( async () => {
    const locale = 'en';

    return {
        locale,
        messages: (await import(`../../../public/locales/${locale}.json`)).default
    }

});
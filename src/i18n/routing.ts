import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

/**
 * Localization Config
 */
export const routing = defineRouting({
    locales: ['en', 'ko'],
    defaultLocale: 'ko'
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
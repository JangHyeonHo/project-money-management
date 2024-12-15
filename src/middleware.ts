import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// export default createMiddleware({ => 업데이트: routing으로 변경
// 	// A list of all locales that are supported
// 	locales: ['en', 'ko'],
//
// 	// Used when no locale matches
// 	defaultLocale: 'ko'
// });

export default createMiddleware(routing);

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(ko|en)/:path*']
};
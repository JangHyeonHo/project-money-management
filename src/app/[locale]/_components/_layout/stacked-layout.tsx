"use client"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LayoutHeaders } from '../../_types/common-const'
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import { SiteStackedLayoutProps } from '@/app/[locale]/_types/common-types'
import LogoutAction from '@/app/[locale]/_actions/logout-action';
import { Link, useRouter } from '@/i18n/routing'


/**
 * 기본 사이트 Layout
 * @param children 하위 요소
 * @param headtitle 헤더 타이틀명
 * @param headCurrent 현재 선택중인 헤더
 * @returns 
 */
export default function SiteStackedLayout({ children, headtitle, headCurrent, isLogin, userFirstName, userLastName }: SiteStackedLayoutProps) {

    const w = useTranslations('word');

    // const [userInfo, setUserInfo] = useState<UserSessionData>();

    // useEffect(()=>{
    //     getUserInfo();
    // },[]);

    // const getUserInfo = async () => {
    //     const cookie = await fetchUserCookieFromSession();
    //     if(cookie.isLogin){
    //         if(path==="/login"){
    //             redirect("/");
    //         }
    //         setUserInfo(cookie);
    //     }

    // }

    const router = useRouter();


    const navigation = [
        { name: w('household.title'), href: '/household/management', current: LayoutHeaders.Household },
        { name: w('asset.title'), href: '/asset/management', current: LayoutHeaders.Asset },
        { name: w('common.config'), href: '/settings', current: LayoutHeaders.Config },
    ]

    const titleClick = (layout: number) => {
        switch (layout) {
            case LayoutHeaders.Household:
                router.push('/household/management');
                break;
            case LayoutHeaders.Asset:
                router.push('/asset/management');
                break;
            case LayoutHeaders.Config:
                router.push('/settings');
                break;
            default:
                router.push('/');
                break;
        }
    }

    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
    ]

    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <Link href='/'>
                                    <Image
                                        aria-hidden
                                        src="/images/money-management-icon.svg"
                                        alt="Money Management"
                                        className="size-10"
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={()=>{titleClick(item.current)}}
                                            aria-current={item.current === headCurrent ? 'page' : undefined}
                                            className={
                                                (item.current === headCurrent ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                                                + ' rounded-md px-3 py-2 text-sm font-medium'
                                            }
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {isLogin === undefined || !isLogin ?
                                    <a
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                                        href="/login"
                                    >
                                        {w("users.login")}
                                    </a>
                                    :
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img alt="" className="size-8 rounded-full" />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                            <MenuItem>
                                                <a
                                                    onClick={() => LogoutAction()}
                                                    className="cursor-pointer block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                >
                                                    {w("users.logout")}
                                                </a>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                }

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                onClick={()=>{titleClick(item.current)}}
                                aria-current={item.current === headCurrent ? 'page' : undefined}
                                className={
                                    (item.current === headCurrent ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') +
                                    ' block rounded-md px-3 py-2 text-base font-medium'
                                }
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                {/* TODO img => Image로 교체해야함 */}
                                <img alt="" className="size-10 rounded-full" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base/5 font-medium text-white">{userFirstName}</div>
                                <div className="text-sm font-medium text-gray-400">{userLastName}</div>
                            </div>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                            <DisclosureButton
                                as="a"
                                onClick={() => {
                                    LogoutAction();
                                    router.push('/signin');
                                }}
                                className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                {w("users.logout")}
                            </DisclosureButton>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {headtitle &&
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{w(headtitle)}</h1>
                    </div>
                </header>
            }
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    )
}
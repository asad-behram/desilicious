'use client'
import { deleteCookie } from '@/common/helper'
import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon, ChartPieIcon, File } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const SideBar = () => {
  const router = useRouter();
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Items', href: '/items', icon: UsersIcon, current: false },
    { name: 'Orders', href: '/orders', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: File, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleLogout = () => {
      deleteCookie("accessToken");
      router.push("/login");
    }
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-700 text-white'
                            : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                            'size-6 shrink-0',
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>

              </li>
              <li className="mt-auto">
                <button
                  onClick={handleLogout}
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  {/* <Cog6ToothIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-indigo-200 group-hover:text-white"
                  /> */}
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </>
  )
}

export default SideBar
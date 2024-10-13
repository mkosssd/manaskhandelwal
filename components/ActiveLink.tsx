import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveLink = ({ href, classname, children }: { href: string, children: string, classname?: string }) => {
    const pathName = usePathname()

    return (
        <li className="flex">
            <Link href={href} className={cn("self-center flex-shrink-0 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700", pathName == href ? 'dark:text-white text-black' : '', classname)}>{children}</Link>
        </li>
    )
}

export default ActiveLink

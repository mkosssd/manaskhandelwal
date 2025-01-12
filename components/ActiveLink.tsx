import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveLink = ({ href, classname, children }: { href: string, children: string, classname?: string }) => {
    const pathName = usePathname()

    return (
        <li className="flex">
            <Link href={href} className={cn("self-center flex-shrink-0 pr-4 pl-3 text-gray-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700", pathName == href ? 'dark:text-white text-black underline underline-offset-[3px] decoration-[2.2px] dark:decoration-white decoration-gray-500' : '', classname)}>{children}</Link>
        </li>
    )
}

export default ActiveLink

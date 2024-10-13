'use client';
import Link from "next/link";
import React, { useState } from "react";
import ActiveLink from "./ActiveLink";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="shadow dark:shadow-white/20  mx-auto   bg-white dark:bg-black" >
                <div className="container" >
                    <div className="flex h-16">
                        <div className="flex w-full justify-between ">
                            <Link href="/" className="flex-shrink-0 flex items-center text-xl font-bold">
                                <span className="dark:text-white text-black">Manas Khandelwal</span>
                            </Link>
                            <div className="hidden lg:flex lg:ml-6 lg:space-x-8 fl">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <ActiveLink href="/about-me">About Me</ActiveLink>
                                    <ActiveLink href="/projects">Projects</ActiveLink>
                                    <ActiveLink href="/experience">Experience</ActiveLink>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center lg:hidden">
                            <button
                                type="button"
                                className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                                onClick={toggleMenu}
                            >
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 lg:mt-0">
                            <ActiveLink href="/about-me">About Me</ActiveLink>
                            <ActiveLink href="/projects">Projects</ActiveLink>
                            <ActiveLink href="/experience">Experience</ActiveLink>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

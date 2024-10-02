'use client';
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="md:py-5">
            <div className="md:rounded-[50px] max-w-7xl mx-auto sm:px-6  bg-white px-4 lg:px-6 py-2.5 dark:bg-black" >
                <div className="flex h-16 w-full">
                    <div className="flex w-full justify-between md:px-8 ">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center text-2xl font-bold">
                            <span className="dark:text-white text-black">Manas Khandelwal</span>
                        </Link>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:ml-6 md:space-x-8 fl">
                            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 lg:mt-0">
                                {/* <li className="flex">
                                    <Link href="" className="self-center pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                                </li> */}
                                <li className="flex">
                                    <Link href="/about-me" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                                </li>
                                <li className="flex">
                                    <Link href="/projects" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
                                </li>
                                <li className="flex">
                                    <Link href="/skills" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Skills</Link>
                                </li>
                                <li className="flex">
                                    <Link href="/experience" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Experience </Link>
                                </li>
                                
                                <li className="flex">
                                    <Link href="/contact" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Mobile Toggle Button */}
                    <div className="flex items-center md:hidden">
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

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 lg:mt-0">
                                {/* <li className="flex">
                                    <Link href="" className="self-center pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                                </li> */}
                                <li className="flex">
                                    <Link href="/about-me" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                                </li>
                                <li className="flex">
                                    <Link href="/projects" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
                                </li>
                                <li className="flex">
                                    <Link href="/skills" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Skills</Link>
                                </li>
                                <li className="flex">
                                    <Link href="/experience" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Experience </Link>
                                </li>
                                
                                <li className="flex">
                                    <Link href="/contact" className="self-center pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

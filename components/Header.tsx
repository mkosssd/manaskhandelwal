'use client';

import Link from "next/link";
import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-neutral-200 dark:border-neutral-800">
                <div className="container px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-lg font-semibold tracking-tight"
                        >
                            <span className="text-black dark:text-white">
                                Manas Khandelwal
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex">
                            <ul className="flex items-center gap-8 text-sm font-medium">
                                <ActiveLink href="/about-me">About</ActiveLink>
                                <ActiveLink href="/projects">Projects</ActiveLink>
                                <ActiveLink href="/experience">Experience</ActiveLink>
                            </ul>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800">
                    <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-medium" onClick={() => setIsOpen(false)}>
                        <ActiveLink href="/about-me">
                            About
                        </ActiveLink>
                        <ActiveLink href="/projects">
                            Projects
                        </ActiveLink>
                        <ActiveLink href="/experience">
                            Experience
                        </ActiveLink>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            type="button"
            className="rounded-full px-2" 
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <SunIcon className="h-[1.2rem] hidden w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
            <MoonIcon className=" h-[1.2rem] w-[1.2rem] text-neutral-800  dark:hidden dark:text-neutral-200" />
        </Button>
    );
}
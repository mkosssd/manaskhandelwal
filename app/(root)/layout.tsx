import { CustomDock } from "@/components/CustomDock";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: {
        template: '%s | Manas Khandelwal',
        default: "Manas Khandelwal",
    },

    description: "Home - Manas Khandelwal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">

            <div className=" fixed top-0 w-full z-10">
                <div className="">
                    <Header />
                </div>
            </div>
            <div className="md:mt-[100px] mt-[70px] relative">
                {children}
            </div>
            <div>
                <CustomDock />
            </div>
        </ThemeProvider>
    );
}

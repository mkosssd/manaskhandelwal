import { CustomDock } from "@/components/CustomDock";
import Header from "@/components/Header";
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
        <>
            <div className="container">

                <Header />
            </div>
            {children}
            <div>

            <CustomDock/>                   
            </div>
        </>
    );
}

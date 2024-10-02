import Header from "@/components/Header";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Manas Khandelwal",
    description: "Personal Portfolio - Manas Khandelwal",
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
        </>
    );
}

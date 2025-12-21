import type { Metadata } from "next";
import "./globals.css";
import { Inter, Albert_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const albert_sans = Albert_Sans({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-albert-sans' });

export const metadata: Metadata = {
    title: "Manas Khandelwal",
    description: "Personal Portfolio - Manas Khandelwal",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${albert_sans.variable} antialiased`}>
                <Analytics />
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import { Inter, Albert_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const albertSans = Albert_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-albert-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Manas Khandelwal | Frontend Developer",
        template: "%s | Manas Khandelwal",
    },
    description:
        "Personal portfolio of Manas Khandelwal, a frontend developer working with modern web and mobile technologies.",

    keywords: [
        "Manas Khandelwal",
        "Frontend Developer",
        "React Developer",
        "React Native Developer",
        "Angular Developer",
        "Web Developer Portfolio",
        "Mobile App Developer",
    ],

    authors: [{ name: "Manas Khandelwal" }],
    creator: "Manas Khandelwal",

    metadataBase: new URL("https://manas-khandelwal.vercel.app"),
    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "Manas Khandelwal | Frontend Developer",
        description:
            "Personal portfolio of Manas Khandelwal, a frontend developer working with modern web and mobile technologies.",
        url: "https://manas-khandelwal.vercel.app",
        siteName: "Manas Khandelwal Portfolio",
        images: [
            {
                url: "https://fra.cloud.appwrite.io/v1/storage/buckets/66fee2f7002f815b7690/files/697dfb59003cabe7dde1/view?project=66fee2e7001c9368dff3",
                width: 1200,
                height: 630,
                alt: "Manas Khandelwal Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Manas Khandelwal | Frontend Developer",
        description:
            "Frontend developer specializing in React, React Native, and Angular.",
        images: [
            "https://fra.cloud.appwrite.io/v1/storage/buckets/66fee2f7002f815b7690/files/697dfb59003cabe7dde1/view?project=66fee2e7001c9368dff3",
        ],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="G_v4GxBiESRi2mOSQNe1tQEMvPhf5YKFxn3vW0rT4nA"
                />
            </head>
            <body
                className={`${inter.variable} ${albertSans.variable} antialiased`}
            >
                <Analytics />
                {children}
            </body>
        </html>
    );
}

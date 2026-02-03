import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import experiences from "@/assets/json/Experiences.json";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Experience | Manas Khandelwal",
    description:
        "Professional experience of Manas Khandelwal as a frontend developer building scalable web and mobile applications.",
    alternates: {
        canonical: `/experience`,
    },
};

export default function Page() {
    return (
        <>
            {/* JSON-LD */}
            <Script
                id="experience-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        name: "Experience - Manas Khandelwal",
                        url: "https://manas-khandelwal.vercel.app/experience",
                        description:
                            "Professional experience of Manas Khandelwal as a frontend developer working on production applications.",
                    }),
                }}
            />

            {/* Header */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="mb-14 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold font-albert-sans">
                            Experience
                        </h1>
                        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
                            A timeline of my professional journey, roles, and contributions
                            across web and mobile application development.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-8">
                        {/* Vertical Line */}
                        <div className="absolute left-0 top-0 h-full w-[2px] bg-neutral-300 dark:bg-neutral-700" />

                        <div className="space-y-14">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    {/* Dot */}
                                    <span className="absolute -left-[31px] top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-violet-500 shadow-[0_0_0_6px_rgba(139,92,246,0.15)]" />

                                    {/* Card */}
                                    <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-7">
                                        {/* Header */}
                                        <div className="flex gap-4 items-start">
                                            <Image
                                                src={exp.companyLogo}
                                                alt={`${exp.company} logo`}
                                                width={56}
                                                height={56}
                                                className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white"
                                            />

                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                                                    <h2 className="text-lg md:text-xl font-semibold">
                                                        {exp.jobTitle}
                                                    </h2>
                                                    <span className="text-sm font-medium text-neutral-500">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                    {exp.company} · {exp.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="mt-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                            {exp.responsibilities.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className={i === 0 ? "list-none font-medium" : "list-disc list-inside"}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import React from "react";
import { Metadata } from "next";
import { CustomIconCloud } from "@/components/CustomIconCloud";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import skills from "@/assets/json/skills.json";
import { Badge } from "@/components/ui/badge";
import Script from "next/script";

export const metadata: Metadata = {
title: "About Me",
    description:
        "About Manas Khandelwal, a frontend developer specializing in React Native, Angular, and modern web and mobile application development.",
};

export default function Page() {
    return (
        <>
            {/* JSON-LD */}
            <Script
                id="about-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        name: "About Manas Khandelwal",
                        url: "https://manas-khandelwal.vercel.app/about",
                        description:
                            "About Manas Khandelwal, a frontend developer experienced in modern web and mobile technologies.",
                    }),
                }}
            />

            {/* Page Wrapper */}
            <section className="py-20">
                <div className="container px-4">

                    {/* Header */}
                    <div className="mb-12 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold font-albert-sans">
                            About Me
                        </h1>
                        <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl">
                            A quick look into my journey, skills, and passion for building
                            modern web and mobile applications.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div className="space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            <p>
                                Hi, I’m <strong>Manas Khandelwal</strong>, a frontend developer
                                passionate about crafting scalable, responsive, and
                                user-friendly applications. I work extensively with
                                <strong> React Native, Angular, React, and TypeScript</strong>,
                                focusing on clean architecture and intuitive user experiences.
                            </p>

                            <p>
                                Over the past year, I’ve worked on diverse real-world projects
                                including fintech platforms, ecommerce applications, and social
                                media products. These experiences have strengthened my ability
                                to collaborate with cross-functional teams and deliver
                                performance-focused solutions.
                            </p>

                            <p>
                                Recently, I’ve been deepening my expertise in React Native while
                                exploring Next.js and Tailwind CSS to build faster, more
                                scalable interfaces. I enjoy both team collaboration and
                                independent ownership of features.
                            </p>

                            <p>
                                Beyond coding, I stay actively updated with industry trends and
                                continuously refine my problem-solving skills.
                            </p>

                            <Button className="mt-4 px-6 py-5 group">
                                <a
                                    href="https://www.linkedin.com/in/manaskh"
                                    target="_blank"
                                    rel="nofollow"
                                    className="flex items-center text-[15px]"
                                >
                                    Let’s connect
                                    <ArrowTopRightIcon
                                        width={18}
                                        height={18}
                                        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                            </Button>
                        </div>

                        {/* Visual */}
                        <div className="flex justify-center">
                            <CustomIconCloud />
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-4">
                            Skills & Technologies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    className="px-4 py-1.5 text-xs font-medium capitalize"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

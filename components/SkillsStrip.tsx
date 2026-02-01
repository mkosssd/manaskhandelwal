import React from "react";
import Image from "next/image";

const skills = [
    {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
];

export const SkillsStrip = () => {
    return (
        <section className="py-20">
            <div className="container px-4">
                {/* Header */}
                <div className="mb-10 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-albert-sans">
                        Skills & Technologies
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        Tools and technologies I use to build modern, scalable web and
                        mobile applications.
                    </p>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap items-center gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex items-center gap-3"
                        >
                            <div
                                className="relative w-10 h-10 grayscale opacity-70
                                transition-all duration-300
                                group-hover:grayscale-0 group-hover:opacity-100"
                            >
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

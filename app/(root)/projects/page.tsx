import projects from "@/assets/json/projects.json";
import { ProjectsMetadata } from "@/assets/meta";
import { Github, Globe, Settings } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

export const metadata: Metadata = ProjectsMetadata;

export default function Page() {
    return (
        <>
            {/* Header */}
            <section className="py-24">
                <div className="container px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-albert-sans">
                            Projects
                        </h1>
                        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg">
                            A curated selection of production and side projects showcasing my
                            work in frontend and mobile application development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-28">
                <div className="container px-4">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {projects.map((project, index) => (
                            <article
                                key={index}
                                className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800
                                bg-white dark:bg-neutral-900
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl
                                flex flex-col overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.projectImage}
                                        alt={`${project.projectName} project preview`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority={index < 3}
                                    />
                                    {/* subtle overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6">
                                    {/* Category */}
                                    <span
                                        className={`inline-flex w-fit text-xs font-medium px-3 py-1 rounded-full mb-3
                                        ${project.category === "Production"
                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                                : project.category === "Internship"
                                                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
                                                    : "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
                                            }`}
                                    >
                                        {project.category}
                                    </span>

                                    {/* Title */}
                                    <h2 className="text-xl font-semibold leading-snug">
                                        {project.projectName}
                                    </h2>
                                    {project.company && (
                                        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                                            Built at <span className="font-medium">{project.company}</span>
                                        </p>
                                    )}


                                    {/* Description */}
                                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.skills.split(",").map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] px-3 py-1 rounded-full
                                                bg-neutral-100 dark:bg-neutral-800
                                                text-neutral-700 dark:text-neutral-300"
                                            >
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto pt-6 flex flex-wrap gap-3">
                                        {project.urls?.map((item, i) => {
                                            const isAdmin = item.type === "admin";
                                            const isGithub = item.type === "github";
                                            const isPlayStore = item.type === "playstore";
                                            const isAppStore = item.type === "appstore";

                                            const Icon = isPlayStore
                                                ? FaGooglePlay
                                                : isAppStore
                                                    ? FaAppStore
                                                    : isGithub
                                                        ? Github
                                                        : isAdmin
                                                            ? Settings
                                                            : Globe;

                                            return (
                                                <a
                                                    key={i}
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition
                                                    ${isPlayStore
                                                            ? "bg-green-600 text-white hover:bg-green-700"
                                                            : isAppStore
                                                                ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
                                                                : isAdmin || isGithub
                                                                    ? "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                                                    : "bg-neutral-900 text-white hover:opacity-90 dark:bg-white dark:text-black"
                                                        }`}
                                                >
                                                    <Icon size={15} />
                                                    {item.label}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

import skills from "@/assets/json/skills.json";
import { SkillsStrip } from "@/components/SkillsStrip";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Script from "next/script";

const Home = () => {
    return (
        <>
            {/* JSON-LD */}
            <Script
                id="person-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Manas Khandelwal",
                        url: "https://manas-khandelwal.vercel.app",
                        jobTitle: "Frontend Developer",
                        sameAs: [
                            "https://www.linkedin.com/in/manaskh",
                            "https://github.com/mkosssd"
                        ],
                        knowsAbout: skills
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />

                <div className="container px-4 md:px-3">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="max-md:text-center">
                            {/* Availability */}
                            <BlurFade delay={0.15} inView>
                                <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs
                                    bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                    ● Open to frontend opportunities
                                </span>
                            </BlurFade>

                            {/* Role */}
                            <BlurFade delay={0.25} inView>
                                <p className="text-sm uppercase tracking-widest text-violet-500 font-medium mb-3">
                                    Frontend Developer
                                </p>
                            </BlurFade>

                            {/* Name */}
                            <BlurFade delay={0.35} inView>
                                <h1 className="font-albert-sans font-bold tracking-tight">
                                    <span className="block text-3xl md:text-4xl">
                                        Hey, I’m
                                    </span>
                                    <span className="block text-4xl sm:text-5xl xl:text-6xl text-[#937ee9]">
                                        Manas Khandelwal
                                    </span>
                                </h1>
                            </BlurFade>

                            {/* Current Role */}
                            <BlurFade delay={0.45} inView>
                                <p className="mt-3 text-sm text-neutral-500">
                                    Currently working as <strong>SDE-1</strong> at{" "}
                                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                                        Tractor Junction
                                    </span>
                                </p>
                            </BlurFade>

                            {/* Tagline */}
                            <BlurFade delay={0.55} inView>
                                <h2 className="mt-4 text-lg md:text-2xl text-neutral-700 dark:text-neutral-300">
                                    Crafting intuitive web & mobile applications
                                </h2>
                            </BlurFade>

                            {/* Description */}
                            <BlurFade delay={0.65} inView>
                                <p className="mt-5 max-w-xl text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mx-auto md:mx-0">
                                    SDE-1 specializing in React Native and Angular, focused on
                                    building scalable, high-performance web and mobile applications
                                    with exceptional user experience.
                                </p>
                            </BlurFade>

                            {/* Stats */}
                            <BlurFade delay={0.75} inView>
                                <div className="mt-6 flex gap-6 max-md:justify-center text-sm text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <span className="block text-lg font-semibold text-neutral-900 dark:text-white">
                                            2+
                                        </span>
                                        <span>Years Experience</span>
                                    </div>
                                    <div>
                                        <span className="block text-lg font-semibold text-neutral-900 dark:text-white">
                                            10+
                                        </span>
                                        <span>Projects Built</span>
                                    </div>
                                    <div>
                                        <span className="block text-lg font-semibold text-neutral-900 dark:text-white">
                                            5+
                                        </span>
                                        <span>Apps Shipped</span>
                                    </div>
                                </div>
                            </BlurFade>

                            {/* Tech Stack */}
                            <BlurFade delay={0.85} inView>
                                <div className="mt-6 flex flex-wrap gap-2 max-md:justify-center">
                                    {["React Native", "Angular", "React", "TypeScript", "Next.js"].map(
                                        (tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-full
                                                bg-neutral-100 dark:bg-neutral-800
                                                text-neutral-700 dark:text-neutral-300"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </BlurFade>

                            {/* CTAs */}
                            <BlurFade delay={0.95} inView>
                                <div className="mt-8 flex gap-4 max-md:justify-center">
                                    <Button className="px-6 py-5 group">
                                        <a
                                            rel="nofollow"
                                            target="_blank"
                                            href="https://www.linkedin.com/in/manaskh"
                                            className="flex items-center gap-1 text-[15px]"
                                        >
                                            Connect with me
                                            <ArrowTopRightIcon
                                                width={18}
                                                height={18}
                                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </a>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="px-6 py-5 border-neutral-700 dark:border-white/40"
                                    >
                                        <a
                                            target="_blank"
                                            href="https://drive.google.com/file/d/1MU7ha8DnVSH2nCbZ5SbFYlQwvPGpag5z/view?usp=sharing"
                                            className="text-[15px]"
                                        >
                                            Download resume
                                        </a>
                                    </Button>
                                </div>
                            </BlurFade>
                        </div>

                        {/* Right Image */}
                        <BlurFade delay={0.6} inView className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl -z-10" />
                                <Image
                                    width={220}
                                    height={220}
                                    className="rounded-full border border-neutral-200 dark:border-neutral-800"
                                    alt="Manas Khandelwal"
                                    src="https://cloud.appwrite.io/v1/storage/buckets/66fee2f7002f815b7690/files/66fee35900198be05b99/view?project=66fee2e7001c9368dff3&mode=admin"
                                />
                            </div>
                        </BlurFade>
                    </div>
                </div>
                <SkillsStrip />
            </section>
        </>
    );
};

export default Home;

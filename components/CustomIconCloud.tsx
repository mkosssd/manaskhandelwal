import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "angular",
    "shadcnui",
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nextdotjs",
    "firebase",
    "vercel",
    "git",
    "jira",
    "github",
    "bitbucket",
    "visualstudiocode",
    "androidstudio",
    "netlify",
    "tailwindcss",
    "bootstrap",
    "sass",
    "cplusplus",
];

export function CustomIconCloud() {
    return (
        <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg   bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

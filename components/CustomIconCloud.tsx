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
        <div className="relative flex size-full max-w-[420px] items-center justify-center overflow-hidden bg-background p-8 w-[425px]">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

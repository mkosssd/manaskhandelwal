import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://manas-khandelwal.vercel.app",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://manas-khandelwal.vercel.app/about-me",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://manas-khandelwal.vercel.app/experience",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://manas-khandelwal.vercel.app/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        // {
        //     url: "https://manas-khandelwal.vercel.app/contact",
        //     lastModified: new Date(),
        //     changeFrequency: "yearly",
        //     priority: 0.5,
        // },
    ];
}

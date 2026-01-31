import { CustomDock } from "@/components/CustomDock";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <div className=" fixed top-0 w-full z-10">
                <Header />
            </div>
            <div className="mt-[65px] relative">
                {children}
            </div>
            <CustomDock />
        </ThemeProvider>
    );
}

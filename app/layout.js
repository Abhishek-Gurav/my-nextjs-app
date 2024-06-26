import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
export const metadata = {
  title: { 
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <section className="flex flex-col items-center justify-center gap-32 py-8 md:py-10">
              <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Exploring&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>
                  {" "}
                  Environmental &nbsp;
                </h1>
                <br />
                <h1 className={title()}>Data for a Cleaner Future</h1>
              </div>
            </section>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://portfolio-abhishek-sde.netlify.app"
                title="portfolio"
              >
                <span className="text-default-600">Made By</span>
                <p className="text-primary dark:text-white text-gray-950">
                  Abhishek and Ajay
                </p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Md. Anonto Shuvo: full-stack software engineer building AI-powered ed-tech with Next.js, NestJS and PostgreSQL, and adjunct lecturer at BRAC University.";

export const metadata: Metadata = {
  title: "Shuvo | Software Engineer & Adjunct Lecturer",
  description,
  openGraph: {
    title: "Md. Anonto Shuvo | Software Engineer & Educator",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Anonto Shuvo | Software Engineer & Educator",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080d19" },
  ],
};

// Runs before first paint so the theme is applied without a flash.
// Follows the OS setting unless the visitor picked a theme with the toggle.
const themeScript = `(function(){var t=null;try{t=localStorage.getItem("theme");}catch(e){}var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

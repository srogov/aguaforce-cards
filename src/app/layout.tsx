import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NavigationTracker } from "@/components/navigation-tracker";
import { NotificationHost } from "@/components/notification-host";
import { FloatingLikesButton } from "@/components/floating-likes-button";
import { COMPANY } from "@/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AguaForce Exercise Library | Water Weight Workouts & Exercises";
const description = "Discover dynamic water weight exercises in the AguaForce Exercise Library. Filter by target muscle groups, build custom workout routines, and train with fluid resistance.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
  },
  appleWebApp: {
    title: COMPANY.brandName,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#08d9d6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <NavigationTracker />
        <NotificationHost />
        <Header />
        {children}
        <Footer />
        <FloatingLikesButton />
      </body>
    </html>
  );
}

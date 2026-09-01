import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NavigationTracker } from "@/components/navigation-tracker";
import { NotificationHost } from "@/components/notification-host";
import { FloatingLikesButton } from "@/components/floating-likes-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AguaForce Exercise Library | Water Weight Workouts & Exercises",
  description: "Discover dynamic water weight exercises in the AguaForce Exercise Library. Filter by target muscle groups, build custom workout routines, and train with fluid resistance.",
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

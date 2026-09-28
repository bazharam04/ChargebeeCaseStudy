import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
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
  title: "Chargebee Billing Case Study",
  description: "AI & SaaS billing case study: ICP segments, billing needs, and gap analysis for Chargebee.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-zinc-50 text-zinc-900">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-10 py-10">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
        </main>
      </body>
    </html>
  );
}

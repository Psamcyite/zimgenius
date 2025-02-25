import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "../components/LayoutWrapper";
import { ThemeProvider } from "../context/ThemeProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZimGenius",
  description: "AI-powered job match dashboard with job recommendations, scores, and applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex">
            <LayoutWrapper>
              <main className="flex-1 p-6">{children}</main>
            </LayoutWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
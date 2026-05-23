import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superhuman/OS — Matt Vincent Walker",
  description:
    "Inner order. Outer leverage. A twelve-week installation for experts whose business is quietly running them.",
  openGraph: {
    title: "Superhuman/OS — Matt Vincent Walker",
    description:
      "Inner order. Outer leverage. A twelve-week installation for experts whose business is quietly running them.",
    siteName: "Superhuman/OS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-op-void text-op-paper font-sans">
        {children}
      </body>
    </html>
  );
}

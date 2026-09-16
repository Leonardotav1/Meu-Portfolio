import type { Metadata } from "next";
import { VT323, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const display = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const mono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-sharetech",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable}`}>
      <body className="crt min-h-screen">{children}</body>
    </html>
  );
}
import "@radix-ui/themes/styles.css";
import './theme-config.css';//custom font family using radix-ui
import { Theme } from "@radix-ui/themes";
import {Roboto, Geist_Mono} from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arash Next.js app",
  description: "Generated Arash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <Theme accentColor="teal" grayColor="sand" radius="large">
          <NavBar />
          <main className="p-4">{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}

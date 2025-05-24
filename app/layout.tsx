import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
  title: "EasySched",
  description: "Scheduling made quick and easy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <Image
          src="./globe.svg"
          alt="EasySched Logo (but not really)"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">EasySched</h1>
          <ul className="flex gap-4 mt-2 text-base">
            <li>
              <a href="./" className="hover:underline">About</a>
            </li>
            <li>
              <a href="./signup" className="hover:underline">Sign Up</a>
            </li>
          </ul>
        </div>
      </header>
        {children}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
      </body>
    </html>
  );
}

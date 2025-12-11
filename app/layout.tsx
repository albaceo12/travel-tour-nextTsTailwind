import type { Metadata, Viewport } from "next";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import "./globals.css";

// ------------------------------------------
// Root Layout for the Next.js App Router.
// This component wraps the entire application, serving as the main HTML shell.
//
// Key Responsibilities:
// 1. Importing global styles (globals.css).
// 2. Defining global Metadata (title, description, viewport, etc.).
// 3. Setting the root HTML and Body tags (e.g., language, font-family).
// ------------------------------------------
// 💡 using next/font/google
import { Poppins, Kanit, Lobster_Two } from "next/font/google";

//font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
// 2. font Kanit
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-kanit",
});

// 3. font Lobster Two
const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster",
});
export const metadata: Metadata = {
  title: "Refactor NextJS Project",
  description:
    "Refactoring a legacy React application to a modern stack: Next.js (App Router), TypeScript, and Tailwind CSS.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${kanit.variable} ${lobster.variable} font-sans desktop:zoom-240`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

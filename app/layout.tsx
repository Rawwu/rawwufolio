import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rawwufolio",
  description: "Rawwu's portfolio",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= "bg-white text-black dark:bg-gray-900 dark:text-white"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

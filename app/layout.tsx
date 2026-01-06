import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Notification from "./comonents/Notification";
import Navbar from "./comonents/Navbar";
import Footer from "./comonents/Footer";
import { Providers } from "./comonents/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizza Delivery App",
  description: "Order your favorite pizza online! Fast delivery and delicious taste.",
  keywords: [
    "Pizza Delivery",
    "Online Pizza Order",
    "Fast Food",
    "Delicious Pizza",
    "Food Delivery Service",
  ],
  
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
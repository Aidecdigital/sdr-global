import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-geist-sans", // Keeping the variable name ensures Tailwind config still works
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono", // Keeping the variable name ensures Tailwind config still works
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDR Global - Sales Development Solutions",
  description: "Empowering businesses with expert sales development representatives to drive growth and success.",
  icons: {
    icon: "/SDRGlobalIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

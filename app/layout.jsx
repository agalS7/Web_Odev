import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Ana Sayfa | Ramazan Bodur",
    description:
        "Web Teknolojileri ve Programlama dersi ödevi için NextJS teknolojisi ile geliştirdiğim website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <body className={`${inter.className} antialiased bg-gray-950 text-gray-100`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

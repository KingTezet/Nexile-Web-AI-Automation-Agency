import { Inter, Lexend, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import AuthProvider from "@/components/AuthProvider"; // IMPORT BARU DARI CLAUDE

// next/font self-hosts and inlines font-display: swap automatically —
// this avoids CLS (Cumulative Layout Shift) from late-loading web fonts.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "jasa pembuatan website",
    "AI automation",
    "n8n automation",
    "Next.js developer",
    "web agency Indonesia",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // DIUBAH DARI #09090b (Hitam) JADI #FAFAFA (Putih)
  themeColor: "#FAFAFA", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${lexend.variable} ${jetbrainsMono.variable}`}>
      {/* DIUBAH: bg-base text-zinc-200 diganti jadi bg-[#FAFAFA] text-zinc-900 */}
      <body className="font-sans bg-[#FAFAFA] text-zinc-900 antialiased">
        <AuthProvider> {/* WRAPPER BARU DARI CLAUDE */}
          {/* Skip-to-content link — accessibility for keyboard/screen reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
          >
            Lompat ke konten utama
          </a>

          <Navbar />

          <main id="main-content">{children}</main>

          <Footer />
        </AuthProvider> {/* PENUTUP WRAPPER */}
      </body>
    </html>
  );
}
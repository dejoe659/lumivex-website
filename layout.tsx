import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/Chrome";
import { site } from "@/lib/data";

const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Software, AI and Digital Solutions`, template: `%s | ${site.short}` },
  description: "Lumivex builds websites, software, mobile apps and AI solutions for startups and businesses in Nigeria and worldwide.",
  keywords: ["Software Development Company in Nigeria", "AI Development Company", "Web Development Services", "Custom Software Development", "Business Automation Solutions", "SaaS Development"],
  openGraph: { title: site.name, description: site.tagline, url: site.url, siteName: site.name, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, slogan: site.tagline, areaServed: "Worldwide", address: { "@type": "PostalAddress", addressCountry: "NG" } };
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

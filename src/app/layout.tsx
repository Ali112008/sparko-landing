import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import DirectionManager from "@/components/DirectionManager";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex",
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparko. | ابدأ رحلتك من التدريب الميداني",
  description:
    "منصة Sparko للتدريب الميداني الاحترافي - تدريب ميداني حقيقي يمنحك خبرة عملية",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: 1440,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${ibmPlexSansArabic.variable} antialiased font-ibm-plex`}
      >
        <LanguageProvider>
          <DirectionManager />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

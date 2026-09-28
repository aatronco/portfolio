import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "ACDE — E-commerce y software para nutricionistas";
const description = "Migraciones a Jumpseller, integraciones y software para nutricionistas. Conoce NutriCal y sus modalidades por paciente o Enterprise con Alejandro Troncoso.";

export const metadata: Metadata = {
  metadataBase: new URL("https://acde.cl"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/acde.svg" },
  openGraph: { title, description, url: "/", siteName: "ACDE", locale: "es_CL", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

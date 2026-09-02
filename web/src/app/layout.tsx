import type { Metadata, Viewport } from "next";
import { Albert_Sans, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/** Albert Sans es la tipografía de marca que ya usa upcomp.cl. */
const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

/** Plex Sans para texto corrido: legible en tamaños chicos, registro corporativo. */
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Plex Mono para etiquetas, especificaciones y datos. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UpComp — Tecnología integral para empresas",
  description:
    "Equipamiento especializado, servicios TI, software a medida y financiamiento. Un solo partner para diseñar, implementar, mantener y evolucionar la operación tecnológica.",
  openGraph: {
    title: "UpComp — Tecnología integral para empresas",
    description:
      "Un solo partner para diseñar, implementar, mantener y evolucionar la operación tecnológica.",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1412",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body
        className={`${albert.variable} ${plex.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AISER Seguros y Fianzas | Reynosa, Tamaulipas",
  description:
    "Asesoría integral en seguros y fianzas. Protege tu patrimonio, auto, hogar y familia con las mejores aseguradoras. Cotiza gratis en Reynosa, Tamaulipas.",
  keywords: "seguros, fianzas, Reynosa, Tamaulipas, seguro de auto, seguro de vida, seguro de hogar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

//Tuve que usar AI porque no entiendo Tailwind mucho, inge
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderSesion from "./Provider/ProviderSesion";
import ProviderPresupuesto from "./Provider/ProviderPresupuesto";
import ProviderGasto from "./Provider/ProviderGasto";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Administrador de Gastos",
  description: "Examen Desarrollo Web II",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProviderSesion>
          <ProviderPresupuesto>
             <ProviderGasto>
                {children}
             </ProviderGasto>
          </ProviderPresupuesto>
        </ProviderSesion>
      </body>
    </html>
  );
}

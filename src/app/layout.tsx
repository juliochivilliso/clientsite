import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Fira_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TRIAX SERVICES — Portal Interno",
  description: "Plataforma de Gestión Integrada para telecomunicaciones e IoT. Gestión de contratos, inventario, telemetría y facturación multi-tenant.",
  icons: {
    icon: "/logo_triax_pgi_2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Theme script removed to prevent hydration mismatches and refresh loops. We will rely on ThemeProvider. */}
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

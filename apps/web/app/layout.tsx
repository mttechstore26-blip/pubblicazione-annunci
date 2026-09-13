import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Annunci Subito + Vinted",
  description: "Crea e pubblica annunci su Subito e Vinted in pochi tocchi",
};

// Queste impostazioni servono per far sembrare l'app una vera app quando
// la aggiungi alla schermata Home dell'iPhone (niente barra di Safari,
// niente zoom accidentale).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}

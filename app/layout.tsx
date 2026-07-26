import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viengphone Vongsyprasom, Esq. | Vongsyprasom Law, P.A.",
  description:
    "Viengphone Vongsyprasom, Esq. — U.S. Immigration, DUI Defense, and Auto Accident & Personal Injury Attorney in Tampa, FL. Bilingual in English and Lao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

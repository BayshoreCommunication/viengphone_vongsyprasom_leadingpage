import type { Metadata } from "next";
import "./globals.css";

const title = "Viengphone Vongsyprasom, Esq. | Vongsyprasom Law, P.A.";
const description =
  "Viengphone Vongsyprasom, Esq. — U.S. Immigration, DUI Defense, and Auto Accident & Personal Injury Attorney in Tampa, FL. Bilingual in English and Lao.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vienlaw.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.vienlaw.com",
    siteName: "Vongsyprasom Law, P.A.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

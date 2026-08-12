import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shamashamash.ru";
const title = "Групповая практика экстатического транса с Amash | Шамаш";
const description =
  "Групповая практика экстатического транса с Amash. Путешествие внутрь себя под ритм бубна. Встречи в Москве, запись через Telegram и VK.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Шамаш",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Внутреннее путешествие под ритм бубна | Шамаш",
    description,
    url: "/",
    siteName: "Шамаш",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Шамаш — групповая практика экстатического транса с Amash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Внутреннее путешествие под ритм бубна | Шамаш",
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  category: "wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

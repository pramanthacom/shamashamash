import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shamashamash.ru";
const title = "Групповая практика экстатического транса с Amash | Шамаш";
const description =
  "Групповая практика экстатического транса с Amash. Путешествие внутрь себя под ритм бубна. Встречи в Москве, запись через Telegram и VK.";
const yandexMetrika = `
  (function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=111604645', 'ym');

  ym(111604645, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer:document.referrer, url:location.href, accurateTrackBounce:true, trackLinks:true});
`;

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
      <head>
        <script id="yandex-metrika" type="text/javascript" dangerouslySetInnerHTML={{ __html: yandexMetrika }} />
      </head>
      <body>
        {children}
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/111604645" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}

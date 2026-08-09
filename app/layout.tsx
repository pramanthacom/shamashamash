import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("host") ?? "127.0.0.1:5173";
  const forwardedProtocol = headerStore.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.includes("localhost") || host.startsWith("127.") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Шамаш — внутреннее путешествие под ритм",
    description:
      "Групповое трансовое погружение под повторяющийся ритм — без требования верить и без готовых толкований.",
    openGraph: {
      title: "Внутреннее путешествие под ритм бубна",
      description:
        "Групповая практика экстатического транса — ритм, тело и личное намерение.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1728,
          height: 909,
          alt: "Шамаш — внутреннее путешествие под ритм",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Внутреннее путешествие под ритм бубна",
      description:
        "Групповая практика экстатического транса — ритм, тело и личное намерение.",
      images: [`${origin}/og.png`],
    },
  };
}

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

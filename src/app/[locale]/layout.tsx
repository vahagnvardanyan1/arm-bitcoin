import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";

import { getMessages } from "next-intl/server";

import Header from "@/components/Header";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/providers/ThemeProvider";
import "../globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "hy" | "ru")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={roboto.variable}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

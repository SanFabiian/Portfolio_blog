import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import "@/styles/globals.scss";
import "@/styles/index.scss";

import { Navbar } from "@/components/layout";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: {
      default: "SanFabiian",
      template: "%s | SanFabiian",
    },
    description: t("description"),
    metadataBase: new URL("https://sanfabiian.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en": "/en",
        "es": "/es",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
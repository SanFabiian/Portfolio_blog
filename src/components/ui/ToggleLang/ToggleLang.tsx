"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";

import es from "@/assets/es.png"
import en from "@/assets/en.png"

import styles from "./ToggleLang.module.scss";

export function ToggleLang() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function toggleLang(nextLocale: "en" | "es") {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }
    return (
        <button className={styles.toggle}
            onClick={() => toggleLang(locale === "en" ? "es" : "en")}
          >
            <Image src={locale === "en" ? es : en} alt={locale === "en" ? "ES" : "EN"} className={styles.flag}/>
        </button>
    )
}
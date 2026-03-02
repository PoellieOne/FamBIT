export const DEFAULT_LOCALE = "en" as const;
export const SUPPORTED_LOCALES = ["en", "es"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const OFFICIAL_LINKS = {
  x: "https://x.com/FamBIT_Sol",
  telegram: "https://t.me/FamBIT_Official",
  pumpfun: "https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump"
} as const;

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const [, firstSegment] = pathname.split("/");
  return firstSegment === "es" ? "es" : DEFAULT_LOCALE;
}

export function getPathWithoutLocale(pathname: string): string {
  if (pathname === "/es") {
    return "/";
  }

  if (pathname.startsWith("/es/")) {
    return pathname.slice(3);
  }

  return pathname || "/";
}

export function localizedPath(locale: Locale, basePath: string): string {
  const normalizedPath = basePath === "" ? "/" : basePath;

  if (locale === DEFAULT_LOCALE) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return "/es";
  }

  return `/es${normalizedPath}`;
}

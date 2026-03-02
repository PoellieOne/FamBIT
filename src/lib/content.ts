import enCommunity from "../content/en/community.json";
import enHome from "../content/en/home.json";
import enRoadmap from "../content/en/roadmap.json";
import enSafety from "../content/en/safety.json";
import enSite from "../content/en/site.json";
import esCommunity from "../content/es/community.json";
import esHome from "../content/es/home.json";
import esRoadmap from "../content/es/roadmap.json";
import esSafety from "../content/es/safety.json";
import esSite from "../content/es/site.json";
import type { Locale } from "./i18n";

const siteByLocale = {
  en: enSite,
  es: esSite
};

const homeByLocale = {
  en: enHome,
  es: esHome
};

const safetyByLocale = {
  en: enSafety,
  es: esSafety
};

const communityByLocale = {
  en: enCommunity,
  es: esCommunity
};

const roadmapByLocale = {
  en: enRoadmap,
  es: esRoadmap
};

export function getSiteContent(locale: Locale) {
  return siteByLocale[locale];
}

export function getHomeContent(locale: Locale) {
  return homeByLocale[locale];
}

export function getSafetyContent(locale: Locale) {
  return safetyByLocale[locale];
}

export function getCommunityContent(locale: Locale) {
  return communityByLocale[locale];
}

export function getRoadmapContent(locale: Locale) {
  return roadmapByLocale[locale];
}

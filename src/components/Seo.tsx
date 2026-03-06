import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME } from "../seo";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImagePath?: string;
  ogType?: "website" | "article";
  robots?: string;
  jsonLd?: object;
};

const DEFAULT_ROBOTS =
  "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";
const DEFAULT_OG_TYPE: NonNullable<SeoProps["ogType"]> = "website";
const DEFAULT_LOCALE = "es_MX";
const DEFAULT_TWITTER_CARD = "summary_large_image";

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "https://www.payrollingtech.com";

function toAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = SITE_URL.replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

function upsertMetaByName(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) {
    el.setAttribute("content", content);
    return;
  }
  const created = document.createElement("meta");
  created.setAttribute("name", name);
  created.setAttribute("content", content);
  document.head.appendChild(created);
}

function upsertMetaByProperty(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) {
    el.setAttribute("content", content);
    return;
  }
  const created = document.createElement("meta");
  created.setAttribute("property", property);
  created.setAttribute("content", content);
  document.head.appendChild(created);
}

function upsertLinkRel(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  const el = document.head.querySelector<HTMLLinkElement>(selector);
  if (el) {
    el.setAttribute("href", href);
    return;
  }
  const created = document.createElement("link");
  created.setAttribute("rel", rel);
  created.setAttribute("href", href);
  document.head.appendChild(created);
}

function upsertJsonLd(data: object) {
  const id = "json-ld-seo";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath,
  ogImagePath,
  ogType = DEFAULT_OG_TYPE,
  robots = DEFAULT_ROBOTS,
  jsonLd,
}: SeoProps) {
  const location = useLocation();

  const canonicalUrl = toAbsoluteUrl(canonicalPath ?? location.pathname);
  const keywordsContent = (keywords ?? []).join(", ");
  const ogImageUrl = toAbsoluteUrl(ogImagePath ?? DEFAULT_OG_IMAGE_PATH);

  useEffect(() => {
    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);

    if (keywordsContent) {
      upsertMetaByName("keywords", keywordsContent);
    }

    upsertLinkRel("canonical", canonicalUrl);

    if (jsonLd) {
      upsertJsonLd(jsonLd);
    }

    upsertMetaByProperty("og:type", ogType);
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:locale", DEFAULT_LOCALE);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", ogImageUrl);

    upsertMetaByName("twitter:card", DEFAULT_TWITTER_CARD);
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", ogImageUrl);
  }, [
    canonicalUrl,
    description,
    keywordsContent,
    ogImageUrl,
    robots,
    title,
    jsonLd,
  ]);

  return null;
}

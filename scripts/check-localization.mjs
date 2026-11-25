import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const origin = "https://aurea-beauty-studio-gamma.vercel.app";
const routes = { en: "/", ru: "/ru", ro: "/ro" };
const expected = {
  en: ["AURÉ — Beauty Studio", "Discover AURÉ", "Beauty<br/>in balance.", "The art of natural beauty.", "A moment to reconnect.", "Curated for you.", "Begin your journey to radiant skin.", "Timeless Beauty"],
  ru: ["AURÉ — Студия красоты", "Откройте для себя AURÉ", "Красота<br/>в гармонии.", "Искусство естественной красоты.", "Мгновение для себя.", "Подобрано для вас.", "Первый шаг к сияющей коже.", "Красота вне времени"],
  ro: ["AURÉ — Studio de frumusețe", "Descoperă AURÉ", "Frumusețe<br/>în echilibru.", "Arta frumuseții naturale.", "Un moment în care te regăsești.", "Alese cu grijă pentru tine.", "Primul pas spre un ten luminos.", "Frumusețe atemporală"],
};
const sitemap = readFileSync("out/sitemap.xml", "utf8");

for (const [locale, path] of Object.entries(routes)) {
  const html = readFileSync(locale === "en" ? "out/index.html" : `out${path}.html`, "utf8");
  const [head, body] = html.split("</head>");
  const content = body.split("<script")[0];
  const [title, description, ...sections] = expected[locale];
  assert.ok(head.includes(`<html lang="${locale}"`), `${path}: html lang`);
  assert.ok(head.includes(`<title>${title}</title>`), `${path}: title`);
  assert.ok(head.includes(`<meta name="description" content="${description}`), `${path}: description`);
  const canonical = head.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(canonical && new URL(canonical).href === `${origin}${path}`, `${path}: canonical`);
  assert.deepEqual([...head.matchAll(/property="og:image" content="([^"]+)"/g)].map((match) => match[1]), [`${origin}/images/og-image.jpg`], `${path}: one shared OG image`);
  assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`), `${path}: sitemap`);
  for (const [lang, target] of Object.entries({ ...routes, "x-default": "/" })) {
    const alternate = head.match(new RegExp(`<link rel="alternate" hreflang="${lang}" href="([^"]+)"`, "i"))?.[1];
    assert.ok(alternate && new URL(alternate).href === `${origin}${target}`, `${path}: hreflang ${lang}`);
    if (lang === "x-default") continue;
    const link = content.match(new RegExp(`<a href="${target}"[^>]*hreflang="${lang}"[^>]*>`, "i"))?.[0];
    assert.ok(link?.includes("aria-label="), `${path}: accessible switch to ${lang}`);
    assert.equal(link.includes('aria-current="page"'), lang === locale, `${path}: active language`);
  }
  for (const text of [...sections, "IVACOV FLOW", 'src="/videos/aure-film.mp4"', 'href="mailto:hello@example.com"']) {
    assert.ok(content.includes(text), `${path}: ${text}`);
  }
}

console.log("Static localization checks passed for /, /ru and /ro.");

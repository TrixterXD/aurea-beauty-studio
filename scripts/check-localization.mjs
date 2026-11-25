import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const origin = "https://aurea-beauty-studio-gamma.vercel.app";
const routes = { en: "/en/", ru: "/ru/", ro: "/ro/" };
const ogLocales = { en: "en_US", ru: "ru_RU", ro: "ro_RO" };
const expected = {
  en: ["AURÉ — Beauty Studio", "Discover AURÉ", "Beauty<br/>in balance.", "The art of natural beauty.", "A moment to reconnect.", "Curated for you.", "Begin your journey to radiant skin.", "Timeless Beauty"],
  ru: ["AURÉ — Студия красоты", "Откройте для себя AURÉ", "Красота<br/>в гармонии.", "Искусство естественной красоты.", "Мгновение для себя.", "Подобрано для вас.", "Первый шаг к сияющей коже.", "Красота вне времени"],
  ro: ["AURÉ — Studio de frumusețe", "Descoperă AURÉ", "Frumusețe<br/>în echilibru.", "Arta frumuseții naturale.", "Un moment în care te regăsești.", "Alese cu grijă pentru tine.", "Primul pas spre un ten luminos.", "Frumusețe atemporală"],
};
const sitemap = readFileSync("out/sitemap.xml", "utf8");

const notFoundHead = readFileSync("out/404.html", "utf8").split("</head>")[0];
assert.match(notFoundHead, /<meta name="robots" content="noindex(?:, follow)?"/, "404: noindex, with follow allowed");
assert.doesNotMatch(notFoundHead, /(?:og:|twitter:|rel="canonical"|hreflang=)/i, "404: no social or locale metadata");
assert.equal(readFileSync("out/404/index.html", "utf8").split("</head>")[0], notFoundHead, "404: both export paths agree");

for (const path of ["/favicon.svg", "/images/og-image.jpg", "/opengraph-image.jpg", "/opengraph-image.png"]) {
  assert.deepEqual(readFileSync(`out${path}`), readFileSync(`public${path}`), `${path}: unchanged in export`);
}

for (const [path, locale] of [["/", "en"], ...Object.entries(routes).map(([lang, route]) => [route, lang])]) {
  const html = readFileSync(`out${path}index.html`, "utf8");
  const [head, body] = html.split("</head>");
  const content = body.split("<script")[0];
  const [title, description, ...sections] = expected[locale];
  assert.ok(head.includes(`<html lang="${locale}"`), `${path}: html lang`);
  assert.ok(head.includes(`<title>${title}</title>`), `${path}: title`);
  const pageDescription = head.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(pageDescription?.startsWith(description), `${path}: description`);
  assert.ok(head.includes('<meta name="robots" content="noindex, follow"'), `${path}: robots`);
  assert.ok(head.includes('<link rel="icon" href="/favicon.svg"'), `${path}: favicon`);
  const canonical = `${origin}${routes[locale]}`;
  assert.equal(head.match(/<link rel="canonical" href="([^"]+)"/)?.[1], canonical, `${path}: canonical`);
  assert.equal(head.match(/property="og:url" content="([^"]+)"/)?.[1], canonical, `${path}: OG URL`);
  assert.ok(head.includes(`<meta property="og:locale" content="${ogLocales[locale]}"`), `${path}: OG locale`);
  for (const field of ['property="og', 'name="twitter']) {
    assert.ok(head.includes(`${field}:title" content="${title}"`), `${path}: ${field} title`);
    assert.ok(head.includes(`${field}:description" content="${pageDescription}"`), `${path}: ${field} description`);
    assert.deepEqual([...head.matchAll(new RegExp(`${field}:image" content="([^"]+)"`, "g"))].map((match) => match[1]), [`${origin}/images/og-image.jpg`], `${path}: ${field} image`);
  }
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${path}: sitemap`);
  for (const [lang, target] of Object.entries({ ...routes, "x-default": routes.ro })) {
    const alternate = head.match(new RegExp(`<link rel="alternate" hreflang="${lang}" href="([^"]+)"`, "i"))?.[1];
    assert.equal(alternate, `${origin}${target}`, `${path}: hreflang ${lang}`);
    if (lang === "x-default") continue;
    const link = content.match(new RegExp(`<a href="${target}"[^>]*hreflang="${lang}"[^>]*>`, "i"))?.[0];
    assert.ok(link?.includes("aria-label="), `${path}: accessible switch to ${lang}`);
    assert.equal(link.includes('aria-current="page"'), lang === locale, `${path}: active language`);
  }
  for (const text of [...sections, "IVACOV FLOW", 'src="/videos/aure-film.mp4"', 'href="mailto:hello@example.com"']) {
    assert.ok(content.includes(text), `${path}: ${text}`);
  }
}

console.log("Static localization, metadata and asset checks passed for /, /en/, /ru/, /ro/ and 404.html.");

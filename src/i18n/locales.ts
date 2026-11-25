export const locales = {
  en: { path: "/en/", name: "English" },
  ru: { path: "/ru/", name: "Русский" },
  ro: { path: "/ro/", name: "Română" },
} as const;

export type Locale = keyof typeof locales;

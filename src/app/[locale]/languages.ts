import { notFound } from "next/navigation";
import en from "../../i18n/en";
import ro from "../../i18n/ro";
import ru from "../../i18n/ru";

const dictionaries = { en, ru, ro };
export const languages = ["en", "ru", "ro"] as const;

export async function localizedContent(params: Promise<{ locale: string }>) {
  const { locale: value } = await params;
  const locale = languages.find((language) => language === value);
  if (!locale) notFound();

  return { locale, copy: dictionaries[locale] };
}

import { notFound } from "next/navigation";
import ro from "../../i18n/ro";
import ru from "../../i18n/ru";

const dictionaries = { ru, ro };
export const languages = ["ru", "ro"] as const;

export async function localizedContent(params: Promise<{ locale: string }>) {
  const { locale: value } = await params;
  const locale = languages.find((language) => language === value);
  if (!locale) notFound();

  return { locale, copy: dictionaries[locale] };
}

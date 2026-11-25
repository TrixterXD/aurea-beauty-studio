import SiteLayout, { siteMetadata } from "../_site";
import { languages, localizedContent } from "./languages";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
  const { locale, copy } = await localizedContent(params);
  return siteMetadata(locale, copy.seo);
}

export default async function Layout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale, copy } = await localizedContent(params);
  return <SiteLayout locale={locale} copy={copy}>{children}</SiteLayout>;
}

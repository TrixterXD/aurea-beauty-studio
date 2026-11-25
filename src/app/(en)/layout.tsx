import en from "../../i18n/en";
import SiteLayout, { siteMetadata } from "../_site";

export const metadata = siteMetadata("en", en.seo);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en" copy={en}>{children}</SiteLayout>;
}

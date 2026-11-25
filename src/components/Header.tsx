import type { Dictionary } from "../i18n/en";
import { locales, type Locale } from "../i18n/locales";
import styles from "./Header.module.css";

export default function Header({ locale, copy, nav }: { locale: Locale; copy: Dictionary["header"]; nav: Dictionary["nav"] }) {
  return (
    <header className={styles.header}>
      <div className={styles.infoBar}>
        <div className={styles.infoInner}>
          <p>{copy.hours}</p>
          <p>{copy.appointment}</p>
          <nav className={styles.languageSwitcher} aria-label={copy.languages}>
            {Object.entries(locales).map(([lang, { path, name }]) => (
              <a
                key={lang}
                href={path}
                hrefLang={lang}
                lang={lang}
                aria-label={name}
                aria-current={locale === lang ? "page" : undefined}
              >
                {lang.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label={copy.backToTop}>
          <span>AURÉ</span>
          <span className={styles.logoSubtitle}>{copy.studio}</span>
        </a>
        <nav className={styles.nav} aria-label={copy.navigation}>
          <a href="#philosophy">{nav.philosophy}</a>
          <a href="#treatments">{nav.treatments}</a>
          <a href="#contact">{nav.contact}</a>
        </nav>
        <a className={styles.cta} href="#contact">
          {copy.cta}
        </a>
      </div>
    </header>
  );
}

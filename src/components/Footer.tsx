import type { Dictionary } from "../i18n/en";
import styles from "./Footer.module.css";

export default function Footer({ copy, nav }: { copy: Dictionary["footer"]; nav: Dictionary["nav"] }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.logo}>AURÉ</p>
          <p className={styles.copyright}>© 2026 AURÉ</p>
        </div>
        <p className={styles.tagline}>{copy.tagline}</p>
        <nav className={styles.navigation} aria-label={copy.navigation}>
          <a href="#philosophy">{nav.philosophy}</a>
          <a href="#treatments">{nav.treatments}</a>
          <a href="#contact">{nav.contact}</a>
        </nav>
        <div className={styles.credit}>
          <p className={styles.creditLabel}>{copy.credit}</p>
          <p className={styles.studio}>IVACOV FLOW</p>
        </div>
      </div>
    </footer>
  );
}

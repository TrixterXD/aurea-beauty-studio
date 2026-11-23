import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="AUREA — back to top">
          AUREA
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#philosophy">Philosophy</a>
          <a href="#treatments">Treatments</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.cta} href="#contact">
          BOOK NOW
        </a>
      </div>
    </header>
  );
}

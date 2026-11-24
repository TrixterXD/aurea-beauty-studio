import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <p className={styles.logo}>AUREA</p>
            <p className={styles.tagline}>Beauty in balance.</p>
          </div>
          <nav className={styles.navigation} aria-label="Footer navigation">
            <a href="#philosophy">Philosophy</a>
            <a href="#treatments">Treatments</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 AUREA</p>
          <p>Concept Project by Ivacov Flow</p>
        </div>
      </div>
    </footer>
  );
}

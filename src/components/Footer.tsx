import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.logo}>AURÉ</p>
          <p className={styles.copyright}>© 2026 AURÉ</p>
        </div>
        <p className={styles.tagline}>Timeless Beauty</p>
        <nav className={styles.navigation} aria-label="Footer navigation">
          <a href="#philosophy">Philosophy</a>
          <a href="#treatments">Treatments</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className={styles.credit}>
          <p className={styles.creditLabel}>Concept Project by</p>
          <p className={styles.studio}>IVACOV FLOW</p>
        </div>
      </div>
    </footer>
  );
}

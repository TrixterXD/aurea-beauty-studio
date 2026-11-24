import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.infoBar}>
        <div className={styles.infoInner}>
          <p>MON – SAT 9:00 AM – 8:00 PM</p>
          <p>BOOKING: BY APPOINTMENT</p>
        </div>
      </div>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="AURÉ — back to top">
          <span>AURÉ</span>
          <span className={styles.logoSubtitle}>BEAUTY STUDIO</span>
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

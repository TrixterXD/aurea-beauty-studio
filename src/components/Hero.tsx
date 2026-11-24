import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Beauty<br />in balance.
          </h1>
          <p className={styles.description}>
            A refined approach to natural beauty and timeless care.
          </p>
          <a className={styles.cta} href="#treatments">
            EXPLORE TREATMENTS
          </a>
        </div>
      </div>
    </section>
  );
}

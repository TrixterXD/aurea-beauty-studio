import type { Dictionary } from "../i18n/en";
import styles from "./Hero.module.css";

export default function Hero({ copy }: { copy: Dictionary["hero"] }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            {copy.title[0]}<br />{copy.title[1]}
          </h1>
          <p className={styles.description}>
            {copy.description}
          </p>
          <a className={styles.cta} href="#treatments">
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

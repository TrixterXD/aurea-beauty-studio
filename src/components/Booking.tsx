import type { Dictionary } from "../i18n/en";
import styles from "./Booking.module.css";

export default function Booking({ copy }: { copy: Dictionary["booking"] }) {
  return (
    <section
      id="contact"
      className={styles.booking}
      aria-labelledby="booking-title"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="booking-title" className={styles.title}>
            {copy.title}
          </h2>
          <p className={styles.description}>{copy.description}</p>
          <a
            className={styles.cta}
            href="mailto:hello@example.com"
            aria-describedby="booking-demo"
          >
            {copy.cta}
          </a>
          <p id="booking-demo" className={styles.note}>{copy.note}</p>
        </div>
      </div>
    </section>
  );
}

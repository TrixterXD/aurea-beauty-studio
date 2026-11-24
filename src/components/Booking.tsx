import styles from "./Booking.module.css";

export default function Booking() {
  return (
    <section
      id="contact"
      className={styles.booking}
      aria-labelledby="booking-title"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>YOUR MOMENT OF BALANCE</p>
          <h2 id="booking-title" className={styles.title}>
            Begin your journey to radiant skin.
          </h2>
          <p className={styles.description}>
            Discover personalized care designed around you.
          </p>
          <a
            className={styles.cta}
            href="mailto:hello@example.com"
            aria-describedby="booking-demo"
          >
            BOOK A CONSULTATION
          </a>
          <p id="booking-demo" className={styles.note}>
            Demo contact: hello@example.com — not a real studio address.
          </p>
        </div>
      </div>
    </section>
  );
}

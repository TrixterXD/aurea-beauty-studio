import Image from "next/image";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className={styles.philosophy}
      aria-labelledby="philosophy-title"
    >
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image
            src="/images/philosophy.webp"
            alt="A sunlit studio interior with arched doorways, flowers and a treatment chair."
            fill
            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 96px) / 2), (max-width: 1280px) calc((100vw - 160px) / 2), 560px"
            unoptimized
          />
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>OUR PHILOSOPHY</p>
          <h2 id="philosophy-title" className={styles.title}>
            The art of natural beauty.
          </h2>
          <p className={styles.description}>
            At AURÉ, we believe true beauty begins with balance. Every treatment
            is designed to nurture your skin, restore your confidence, and
            celebrate your natural individuality.
          </p>
        </div>
      </div>
    </section>
  );
}

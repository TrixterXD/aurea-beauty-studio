import Image from "next/image";
import type { Dictionary } from "../i18n/en";
import styles from "./Philosophy.module.css";

export default function Philosophy({ copy }: { copy: Dictionary["philosophy"] }) {
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
            alt={copy.imageAlt}
            fill
            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 96px) / 2), (max-width: 1280px) calc((100vw - 160px) / 2), 560px"
            unoptimized
          />
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="philosophy-title" className={styles.title}>
            {copy.title}
          </h2>
          <p className={styles.description}>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}

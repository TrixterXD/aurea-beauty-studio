import Image from "next/image";
import type { Dictionary } from "../i18n/en";
import styles from "./Treatments.module.css";

const treatments = ["facial-rituals", "skin-renewal", "sculpting-massage"] as const;

export default function Treatments({ copy }: { copy: Dictionary["treatments"] }) {
  return (
    <section
      id="treatments"
      className={styles.treatments}
      aria-labelledby="treatments-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 id="treatments-title" className={styles.title}>
          {copy.title}
        </h2>
        <div className={styles.grid}>
          {treatments.map((id) => {
            const treatment = copy.cards[id];
            return (
              <article className={styles.card} key={id}>
                <div className={styles.image}>
                  <Image
                    src={`/images/${id}.webp`}
                    alt={treatment.alt}
                    fill
                    sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 112px) / 3), (max-width: 1280px) calc((100vw - 144px) / 3), 379px"
                    unoptimized
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{treatment.title}</h3>
                  <p className={styles.description}>{treatment.description}</p>
                  <a
                    className={styles.link}
                    href="#contact"
                    aria-label={`${copy.ctaLabel}: ${treatment.title}`}
                  >
                    {copy.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

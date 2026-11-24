import Image from "next/image";
import styles from "./Treatments.module.css";

const treatments = [
  {
    title: "Facial Rituals",
    description: "Personalized treatments to nourish and revitalize your skin.",
    image: "/images/facial-rituals.webp",
    alt: "A nourishing facial mask being applied during a treatment.",
  },
  {
    title: "Skin Renewal",
    description: "Gentle care designed to restore your natural radiance.",
    image: "/images/skin-renewal.webp",
    alt: "A dropper dispensing serum into a skincare bottle.",
  },
  {
    title: "Sculpting Massage",
    description:
      "Relaxing techniques to release tension and enhance your natural glow.",
    image: "/images/sculpting-massage.webp",
    alt: "A relaxing facial massage with gentle sculpting techniques.",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      className={styles.treatments}
      aria-labelledby="treatments-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>OUR TREATMENTS</p>
        <h2 id="treatments-title" className={styles.title}>
          Curated for you.
        </h2>
        <div className={styles.grid}>
          {treatments.map((treatment) => (
            <article className={styles.card} key={treatment.title}>
              <div className={styles.image}>
                <Image
                  src={treatment.image}
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
                  aria-label={`Book treatment: ${treatment.title}`}
                >
                  BOOK TREATMENT <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

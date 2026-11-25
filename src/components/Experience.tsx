"use client";

import { useRef, useState, type MouseEvent } from "react";
import type { Dictionary } from "../i18n/en";
import styles from "./Experience.module.css";

export default function Experience({ copy }: { copy: Dictionary["experience"] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  async function play(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const video = videoRef.current;
    if (!video) return;

    setFailed(false);
    try {
      if (video.error) video.load();
      await video.play();
      if (document.activeElement === button) video.focus();
      setStarted(true);
    } catch {
      setFailed(true);
    }
  }

  return (
    <section className={styles.experience} aria-labelledby="experience-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="experience-title" className={styles.title}>
            {copy.title}
          </h2>
        </div>
        <div className={styles.media}>
          <div className={styles.frame}>
            <video
              ref={videoRef}
              src="/videos/aure-film.mp4"
              poster="/images/aure-film-poster.webp"
              preload="none"
              playsInline
              controls={started}
              tabIndex={started ? 0 : -1}
              aria-label={copy.videoLabel}
              onError={() => setFailed(true)}
            >
              {copy.videoFallback}
            </video>
            {!started && (
              <button
                className={styles.play}
                type="button"
                aria-label={copy.playLabel}
                onClick={play}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4v16l13-8Z" fill="currentColor" />
                </svg>
              </button>
            )}
          </div>
          <p className={styles.error} role="status">
            {failed && copy.error}
          </p>
        </div>
        <p className={styles.description}>{copy.description}</p>
      </div>
    </section>
  );
}

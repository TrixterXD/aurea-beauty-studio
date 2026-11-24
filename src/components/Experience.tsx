"use client";

import { useRef, useState, type MouseEvent } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
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
          <p className={styles.eyebrow}>THE AURÉ EXPERIENCE</p>
          <h2 id="experience-title" className={styles.title}>
            A moment to reconnect.
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
              aria-label="The AURÉ experience film"
              onError={() => setFailed(true)}
            >
              Your browser does not support video playback.
            </video>
            {!started && (
              <button
                className={styles.play}
                type="button"
                aria-label="Play the AURÉ experience film with sound"
                onClick={play}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4v16l13-8Z" fill="currentColor" />
                </svg>
              </button>
            )}
          </div>
          <p className={styles.error} role="status">
            {failed && "The film couldn’t be played. Please try again or reload the page."}
          </p>
        </div>
        <p className={styles.description}>
          Discover the quiet beauty of slowing down. A ritual created just for you.
        </p>
      </div>
    </section>
  );
}

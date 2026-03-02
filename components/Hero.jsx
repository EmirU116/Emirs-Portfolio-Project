'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const roles = [
  'Software Developer',
  'Game Programmer',
  'Cloud Engineer',
  'Backend Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />

      <div className={styles.content}>
        <p className={styles.greeting}>Hi there, I&apos;m</p>
        <h1 className={styles.name}>Emir Ulusoy</h1>

        <div className={styles.roleRow}>
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.summary}>
          Software Developer with a background in game programming and hands-on experience
          across backend development, cloud infrastructure, and CI/CD automation.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get In Touch
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/emirulusoy-46b22124a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialChip}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EmirU116"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialChip}
          >
            GitHub
          </a>
          <a href="mailto:Emirulu01@hotmail.com" className={styles.socialChip}>
            Email
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span />
      </div>
    </section>
  );
}

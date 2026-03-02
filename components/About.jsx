'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '4', label: 'Projects Shipped' },
  { value: '15+', label: 'Technologies' },
  { value: 'AZ-204', label: 'Azure Cert In Progress' },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`${styles.about} ${visible ? styles.visible : ''}`}>
      <p className={styles.label}>Get to know me</p>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I&apos;m a Software Developer with a background in game programming and hands-on
            experience across backend development, cloud infrastructure, and CI/CD automation.
            Strong foundation in <strong>C# and .NET</strong>, with practical exposure to{' '}
            <strong>Azure and AWS</strong>, including serverless architectures,
            Infrastructure as Code (Bicep), and event-driven systems.
          </p>
          <p>
            I&apos;m experienced in delivering end-to-end technical solutions — from gameplay
            systems and backend APIs to cloud deployment and DevOps pipelines. Comfortable
            working in <strong>Agile teams</strong>, collaborating cross-functionally,
            and taking ownership of features from development through production.
          </p>

          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <span>Stockholm, Sweden</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🎓</span>
              <span>Game Programming Diploma — Forsbergsskola</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📧</span>
              <a href="mailto:Emirulu01@hotmail.com">Emirulu01@hotmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🔗</span>
              <a
                href="https://www.linkedin.com/in/emirulusoy-46b22124a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

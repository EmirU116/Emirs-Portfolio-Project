'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: 'Game Programmer Intern',
    company: 'Ion Game Design',
    location: 'Stockholm',
    period: 'Jan 2024 – Oct 2024',
    type: 'tech',
    bullets: [
      'Contributed to the digitalization of three physical board games into production-ready digital titles using Unity (C#)',
      'Implemented platform-specific integrations for iOS and macOS including App Tracking Transparency using Objective-C/C bridged with Unity',
      'Integrated Steam SDK, Firebase services, and Unity Cloud for analytics, deployment, and live testing',
      'Resolved AWS infrastructure issues by configuring EC2 instances and Load Balancers with proper SSL/TLS setup',
      'Designed and developed a custom Shopify-based subscription platform ("Biblion") using Node.js, GraphQL, and Liquid',
      'Acted as the sole web developer, collaborating with UI/UX designers and stakeholders under production timelines',
    ],
  },
];

const education = [
  {
    degree: 'Game Programming Diploma',
    school: 'Forsbergsskola',
    period: 'Aug 2021 – Oct 2024',
    bullets: [
      'Specialized in C# (Unity) and C++ (Unreal Engine 5)',
      'Worked in collaborative, Agile team environments across multiple group projects',
      'Applied Git-based version control in multi-developer projects',
    ],
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <p className={styles.label}>My Journey</p>
      <h2 className={styles.title}>Experience & Education</h2>

      {/* Work Experience */}
      <h3 className={styles.subheading}>Work Experience</h3>
      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className={`${styles.item} ${exp.type === 'tech' ? styles.featured : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={styles.dot} />
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.role}>{exp.role}</h4>
                  <p className={styles.company}>
                    {exp.company}
                    {exp.location ? ` — ${exp.location}` : ''}
                  </p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 className={`${styles.subheading} ${styles.subheadingSpaced}`}>Education</h3>
      <div className={styles.timeline}>
        {education.map((edu, i) => (
          <div key={i} className={styles.item} style={{ transitionDelay: `${(experiences.length + i) * 0.1}s` }}>
            <div className={styles.dot} />
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.role}>{edu.degree}</h4>
                  <p className={styles.company}>{edu.school}</p>
                </div>
                <span className={styles.period}>{edu.period}</span>
              </div>
              <ul className={styles.bullets}>
                {edu.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Certification badge */}
      <div className={styles.certRow}>
        <div className={styles.certBadge}>
          <span className={styles.certIcon}>☁️</span>
          <div>
            <p className={styles.certTitle}>Microsoft Azure Developer Associate</p>
            <p className={styles.certSub}>AZ-204 — Currently In Progress</p>
          </div>
          <span className={styles.certStatus}>In Progress</span>
        </div>
      </div>
    </section>
  );
}

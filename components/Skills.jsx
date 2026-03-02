'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '{ }',
    skills: ['C# (primary)', 'C++', 'Python', 'JavaScript'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Platforms',
    icon: '⚡',
    skills: ['.NET 8+', 'ASP.NET Core', 'React', 'Express', 'Unity', 'Unreal Engine 5'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'Azure Functions',
      'Azure Service Bus',
      'Azure Event Grid',
      'Cosmos DB',
      'Azure Key Vault',
      'AWS EC2',
      'AWS Load Balancer',
      'GitHub Actions',
      'Jenkins',
      'Bicep (IaC)',
      'Firebase',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & APIs',
    icon: '🔗',
    skills: ['REST APIs', 'GraphQL', 'Event-Driven Architecture', 'Serverless Architecture'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: '🛠',
    skills: ['Git', 'GitHub', 'Visual Studio', 'Rider', 'VS Code', 'Xcode'],
  },
];

export default function Skills() {
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
      id="skills"
      ref={ref}
      className={`${styles.skills} ${visible ? styles.visible : ''}`}
    >
      <p className={styles.label}>What I work with</p>
      <h2 className={styles.title}>Skills & Expertise</h2>

      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <div
            key={cat.id}
            className={styles.category}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.catHeader}>
              <span className={styles.catIcon}>{cat.icon}</span>
              <h3 className={styles.catTitle}>{cat.title}</h3>
            </div>
            <div className={styles.badges}>
              {cat.skills.map((skill) => (
                <span key={skill} className={styles.badge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

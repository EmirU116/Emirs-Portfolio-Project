'use client';

import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Event-Driven Payment API',
    description:
      'Serverless, event-driven payment architecture using Azure Functions with asynchronous communication through Event Grid and Service Bus. Cosmos DB for scalable NoSQL storage, Key Vault for secrets, Bicep for IaC, and GitHub Actions for CI/CD.',
    technologies: ['Azure Functions', 'Event Grid', 'Service Bus', 'Cosmos DB', 'Key Vault', 'Bicep', 'GitHub Actions'],
    category: 'cloud',
    status: 'in-progress',
    link: '#',
  },
  {
    id: 2,
    title: 'SK8 Escape — 2D Mobile Game',
    description:
      'Developed and published an endless runner on Google Play. Integrated Firebase for database storage, analytics, and crash reporting. Focused on gameplay performance, stability, and iterative improvements using data insights.',
    technologies: ['Unity', 'C#', 'Firebase', 'Google Play'],
    category: 'game',
    link: '#',
  },
  {
    id: 3,
    title: 'The Harrowing Void',
    description:
      'A 3D horror puzzle game featuring sophisticated AI behavior systems with vision, hearing, and detection mechanics. Built puzzle logic and visual effects systems. Developed in a team-based Agile environment.',
    technologies: ['Unreal Engine 5', 'C++', 'Agile/Scrum'],
    category: 'game',
    link: '#',
  },
  {
    id: 4,
    title: 'Biblion — Subscription Platform',
    description:
      'Custom Shopify-based subscription platform for physical board games. Built full-stack with Node.js backend API integrations, GraphQL for data querying, and Liquid templates. Delivered solo as the only web developer.',
    technologies: ['Shopify', 'Node.js', 'GraphQL', 'Liquid'],
    category: 'web',
    link: '#',
  },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'cloud', label: 'Cloud / DevOps' },
  { key: 'game', label: 'Game Dev' },
  { key: 'web', label: 'Web' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.projects} ${visible ? styles.visible : ''}`}
    >
      <p className={styles.label}>What I&apos;ve built</p>
      <h2 className={styles.title}>Featured Projects</h2>

      <div className={styles.filters}>
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.filterBtn} ${activeFilter === key ? styles.activeFilter : ''}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  );
}

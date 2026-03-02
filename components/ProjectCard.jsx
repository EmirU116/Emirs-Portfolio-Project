import styles from './ProjectCard.module.css';

const categoryColors = {
  cloud: { bg: 'rgba(99,102,241,0.08)', color: '#818cf8', border: 'rgba(99,102,241,0.2)' },
  game:  { bg: 'rgba(16,185,129,0.08)', color: '#34d399', border: 'rgba(16,185,129,0.2)' },
  web:   { bg: 'rgba(245,158,11,0.08)', color: '#fbbf24', border: 'rgba(245,158,11,0.2)' },
};

const categoryLabels = {
  cloud: 'Cloud / DevOps',
  game: 'Game Dev',
  web: 'Web',
};

export default function ProjectCard({ project, delay = 0 }) {
  const { title, description, technologies, category, status, link } = project;
  const catStyle = categoryColors[category] || {};

  return (
    <div className={styles.card} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.cardTop}>
        <div className={styles.badges}>
          {category && (
            <span
              className={styles.categoryBadge}
              style={{
                background: catStyle.bg,
                color: catStyle.color,
                borderColor: catStyle.border,
              }}
            >
              {categoryLabels[category]}
            </span>
          )}
          {status === 'in-progress' && (
            <span className={styles.statusBadge}>In Progress</span>
          )}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        {link && link !== '#' && (
          <a
            href={link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.technologies}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className={styles.link}>
        View Project →
      </a>
    </div>
  );
}

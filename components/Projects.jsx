import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'A brief description of your first project and the technologies used.',
    technologies: ['React', 'Next.js', 'CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'A brief description of your second project and the technologies used.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'A brief description of your third project and the technologies used.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

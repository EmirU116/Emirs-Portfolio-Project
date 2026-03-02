import styles from './Skills.module.css';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'CSS/SCSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills & Expertise</h2>
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <ul className={styles.skillsList}>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

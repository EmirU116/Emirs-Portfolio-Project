import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <p>
          Hi! I'm a passionate developer with a love for creating beautiful,
          functional web applications. With a strong foundation in modern web technologies,
          I focus on writing clean, maintainable code and delivering exceptional user experiences.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge with the community.
        </p>
      </div>
    </section>
  );
}

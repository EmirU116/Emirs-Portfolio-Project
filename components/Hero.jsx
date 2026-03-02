import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>
          I'm a passionate developer showcasing my projects and skills
        </p>
        <a href="#projects" className={styles.cta}>
          View My Work
        </a>
      </div>
    </section>
  );
}

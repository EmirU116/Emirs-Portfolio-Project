import Link from 'next/link';
import styles from './BlogCard.module.css';

export default function BlogCard({ post }) {
  const { slug, title, date, description, tags } = post;
  const formatted = date
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.date}>{formatted}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
      <span className={styles.readMore}>Read post →</span>
    </Link>
  );
}

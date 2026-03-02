import { getAllPosts } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog | Emir Ulu',
  description: 'Learning notes on Azure, cloud development, and game dev.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.label}>Learning Notes</p>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Notes on Azure, cloud architecture, and things I&apos;m building.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet — check back soon.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}

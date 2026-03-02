import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import styles from './page.module.css';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} | Emir Ulu`,
    description: post.description || '',
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const formatted = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <main className={styles.main}>
      <Link href="/blog" className={styles.back}>← Back to Blog</Link>

      <article className={styles.article}>
        <header className={styles.header}>
          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          <h1 className={styles.title}>{post.title}</h1>
          {post.description && (
            <p className={styles.description}>{post.description}</p>
          )}
          <p className={styles.date}>{formatted}</p>
        </header>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}

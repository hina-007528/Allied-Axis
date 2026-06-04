import { Link } from 'react-router-dom';
import BlogCardMedia from './BlogCardMedia';

export default function BlogFeaturedCard({ post, overlay }) {
  const readLabel = post.readTime ? `${post.readTime} min read` : '8 min read';

  return (
    <Link to={`/blog/${post.slug}`} className="blog-featured interactive-card">
      <BlogCardMedia
        featured
        index={1}
        overlay={overlay}
        src={post.src}
        fit={post.fit}
        objectPosition={post.objectPosition}
        alt=""
      />
      <div className="blog-featured-body">
        <div className="blog-featured-meta">
          <span className="blog-tag">{post.categoryLabel}</span>
          <span className="blog-featured-date">
            {post.date} · {readLabel}
          </span>
        </div>
        <h2 className="blog-featured-title">{post.title}</h2>
        <p className="blog-featured-excerpt">{post.excerpt}</p>
        <span className="blog-read-link">Read Article →</span>
      </div>
    </Link>
  );
}

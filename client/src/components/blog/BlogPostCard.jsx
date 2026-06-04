import { Link } from 'react-router-dom';
import BlogCardMedia from './BlogCardMedia';

export default function BlogPostCard({ post, index, overlay }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card interactive-card">
      <BlogCardMedia
        index={index}
        overlay={overlay}
        src={post.src}
        fit={post.fit}
        objectPosition={post.objectPosition}
        alt=""
      />
      <div className="blog-card-body">
        <span className="blog-tag">{post.categoryLabel}</span>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <span className="blog-card-date">{post.date}</span>
          <span className="blog-read-link blog-read-link--sm">Read →</span>
        </div>
      </div>
    </Link>
  );
}

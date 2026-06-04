import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import BlogCardMedia from '../components/motion/BlogCardMedia';
import { useBlogs } from '../context/SiteDataContext';
import { getBlogCover } from '../utils/blogCover';
import DataLoading from '../components/common/DataLoading';

export default function BlogPost() {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();
  const blog = blogs.find((b) => b.slug === slug);
  const cover = blog ? getBlogCover(blog.slug, blog.category) : null;

  if (loading && !blog) {
    return <DataLoading />;
  }

  if (!blog) {
    return (
      <section
        className="section"
        style={{
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h2>Article not found</h2>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: 20 }}>
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO title={blog.title} description={blog.excerpt} canonical={`/blog/${blog.slug}`} />
      <section className="blog-post-header">
        <div className="container blog-post">
          <BlogCardMedia
            featured
            src={cover.src}
            fit={cover.fit}
            objectPosition={cover.objectPosition}
            alt={blog.title}
          />
          <div className="blog-post-eyebrow">
            <Link to="/blog" className="blog-post-back">
              ← Back to Blog
            </Link>
            <span className="blog-tag">{blog.categoryLabel}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.15, marginTop: 12 }}>
            {blog.title}
          </h1>
          <div className="blog-post-meta">
            <span>By Maryam Fatima</span>
            <span>{blog.date}</span>
            <span>{blog.readTime} min read</span>
          </div>
        </div>
      </section>
      <section className="blog-post-content">
        <div className="container blog-post" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </section>
    </>
  );
}

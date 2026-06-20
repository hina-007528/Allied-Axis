import { useEffect, useMemo } from 'react';
import SEO from '../components/common/SEO';
import useInView from '../hooks/useInView';
import { useBlogs, usePageContent } from '../context/SiteDataContext';
import { getBlogCover } from '../utils/blogCover';
import BlogPageHero from '../components/blog/BlogPageHero';
import BlogFeaturedCard from '../components/blog/BlogFeaturedCard';
import BlogPostCard from '../components/blog/BlogPostCard';
import DataLoading from '../components/common/DataLoading';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

const catOverlays = {
  'about-allied-axis': 'rgba(160, 72, 45, 0.58)',
  'case-study': 'rgba(59, 130, 246, 0.55)',
  'industry-guide': 'rgba(124, 58, 237, 0.52)',
  'thought-leadership': 'rgba(168, 72, 52, 0.55)',
  education: 'rgba(20, 184, 166, 0.52)',
};

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.06);
  return (
    <div ref={ref} className={`fade-in ${visible ? ' visible' : ''}`}>
      {children}
    </div>
  );
}

export default function Blog() {
  const { blogs, loading } = useBlogs();
  const { content: page } = usePageContent('blog-page');

  const blogsWithImages = useMemo(
    () => blogs.map((b) => ({ ...b, ...getBlogCover(b.slug, b.category) })),
    [blogs]
  );

  const [featured, ...gridPosts] = blogsWithImages;

  useEffect(() => {
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [blogs.length]);

  if (loading && !blogs.length) {
    return <DataLoading />;
  }

  return (
    <div className="blog-page">
      <SEO
        title="Blog"
        description="B2B growth insights, case studies, industry guides, and strategic frameworks from Allied Axis."
        canonical="/blog"
      />

      <BlogPageHero hero={page?.blogHeroContent} />

      <section className="section section-gray blog-list-section">
        <div className="container">
          {featured && (
            <FadeSection>
              <BlogFeaturedCard
                post={featured}
                overlay={catOverlays[featured.category]}
              />
            </FadeSection>
          )}

          <div className="blog-grid">
            {gridPosts.map((post) => (
              <FadeSection key={post.slug}>
                <BlogPostCard post={post} overlay={catOverlays[post.category]} />
              </FadeSection>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
          <Link to="/testimonials" className="btn btn-hero-primary">
            Read Client Testimonials <FaArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useMemo } from 'react';
import SEO from '../components/common/SEO';
import useInView from '../hooks/useInView';
import { usePageContent, useTestimonials } from '../context/SiteDataContext';
import TestimonialsPageHero from '../components/testimonials/TestimonialsPageHero';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import TestimonialsClosingCta from '../components/testimonials/TestimonialsClosingCta';
import DataLoading from '../components/common/DataLoading';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

export default function Testimonials() {
  const { testimonials, loading } = useTestimonials();
  const { content: page } = usePageContent('testimonials-page');
  const [sectionRef, inView] = useInView(0.04);

  const { featured, rowThree, gridSix, bottomSingle } = useMemo(() => {
    const featuredItem = testimonials.find((t) => t.featured) || testimonials[2];
    return {
      featured: featuredItem,
      rowThree: testimonials.filter((t) => [1, 2, 4].includes(Number(t.id))),
      gridSix: testimonials.filter((t) => [1, 2, 4, 5, 6, 7].includes(Number(t.id))),
      bottomSingle: testimonials.find((t) => Number(t.id) === 8),
    };
  }, [testimonials]);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView, testimonials.length]);

  if (loading && !testimonials.length) {
    return <DataLoading />;
  }

  return (
    <div className="testimonials-page">
      <SEO
        title="Client Results & Testimonials"
        description="Real client testimonials and verified results from Allied Axis — across UAE, UK, and global markets."
        canonical="/testimonials"
      />

      <TestimonialsPageHero page={page} />

      <section ref={sectionRef} className="section section-gray testimonials-cards-section">
        <div className="container">
          {featured && (
            <FadeSection>
              <TestimonialCard testimonial={featured} variant="featured" />
            </FadeSection>
          )}

          <div className="testi-ref-row-three">
            {rowThree.map((t) => (
              <FadeSection key={t.id}>
                <TestimonialCard testimonial={t} />
              </FadeSection>
            ))}
          </div>

          <div className="testi-ref-grid-six">
            {gridSix.map((t) => (
              <FadeSection key={`grid-${t.id}`}>
                <TestimonialCard testimonial={t} />
              </FadeSection>
            ))}
          </div>

          {bottomSingle && (
            <FadeSection className="testi-ref-bottom-wrap">
              <TestimonialCard testimonial={bottomSingle} variant="centered" />
            </FadeSection>
          )}
        </div>
      </section>

      <TestimonialsClosingCta cta={page?.testimonialsClosingCta} />
    </div>
  );
}

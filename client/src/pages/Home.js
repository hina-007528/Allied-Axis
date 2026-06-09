import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaBrain, FaGlobe, FaRocket, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';
import HomeProofCard from '../components/home/HomeProofCard';
import HomeTestimonialCard from '../components/home/HomeTestimonialCard';
import HomeWhySection from '../components/home/HomeWhySection';
import { whyTrustBrands, whyFeaturePillars } from '../data/homeContent';
import WebsiteAuditBanner from '../components/home/WebsiteAuditBanner';
import ClientLogos from '../components/home/ClientLogos';
import StatsBar from '../components/common/StatsBar';
import SEO from '../components/common/SEO';
import DataLoading from '../components/common/DataLoading';
import useInView from '../hooks/useInView';
import HeroBackground from '../components/home/HeroBackground';
import HeroVisual from '../components/home/HeroVisual';
import ServiceHoverCard from '../components/motion/ServiceHoverCard';
import {
  useFaqs,
  usePageContent,
  useServices,
  useSiteData,
  useTestimonials,
} from '../context/SiteDataContext';
import { withResolvedIcons } from '../utils/resolveIcon';

const iconColors = [
  { bg: 'rgba(124,58,237,0.12)', color: '#7c3aed' },
  { bg: 'rgba(224,92,38,0.12)', color: '#e05c26' },
  { bg: 'rgba(16,185,129,0.12)', color: '#10b981' },
  { bg: 'rgba(245,158,11,0.12)', color: '#f59e0b' },
];

const homeSrvIcons = [
  <FaPalette key="1" />,
  <FaBrain key="2" />,
  <FaGlobe key="3" />,
  <span key="4" className="srv-icon-ad">Ad</span>,
];

const homeMetrics = [
  { value: '15+', label: 'BUSINESSES SCALED', sub: 'Across UAE · UK · Pakistan' },
  { value: '500+', label: 'QUALIFIED LEADS / WEEK', sub: 'Via AI-powered outreach' },
  { value: '18mo+', label: 'CLIENT RETENTION', sub: 'Average engagement duration' },
  { value: '45%', label: 'AVG CONVERSION INCREASE', sub: 'Within first 90 days' },
  { value: '80%', label: 'LESS PROSPECTING TIME', sub: 'Through AI automation' },
];

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useInView(0.1);
  return <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>{children}</div>;
}

function ProcessSteps({ steps }) {
  const [ref, visible] = useInView(0.25, { once: false });
  return (
    <div ref={ref} className={`process-steps${visible ? ' is-active' : ''}`}>
      <div className="process-line" aria-hidden="true">
        <span className="process-line-track" />
        <span className="process-line-fill" />
      </div>
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
        <div className="process-step" key={i}>
          <div className="step-icon" style={{ background: s.iconBg, color: s.iconColor, borderColor: `${s.iconColor}40` }}>
            {Icon ? <Icon aria-hidden /> : null}
          </div>
          <div className="step-body">
            <div className="step-num" style={{ color: s.iconColor }}>{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </div>
      );
      })}
    </div>
  );
}

function FAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0);
  if (!faqs?.length) return null;
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-aside">
            <span className="sec-label">FAQ</span>
            <h2 className="sec-heading faq-aside-heading">Quick<br />Answers</h2>
            <p className="faq-aside-note">Can&apos;t find your answer here? Reach out and we&apos;ll respond within 24 hours.</p>
            <Link to="/contact" className="faq-aside-cta">
              Ask Us Anything
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ flex: 1 }}>{f.q}</span>
                  <span className="faq-toggle">{openIdx === i ? '−' : '+'}</span>
                </button>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { loading: siteLoading } = useSiteData();
  const { content: home } = usePageContent('home-content');
  const { services } = useServices();
  const { testimonials } = useTestimonials();
  const { faqs } = useFaqs();

  const whyIntro = home?.whyIntro ?? '';
  const whyItems = useMemo(() => withResolvedIcons(home?.whyItems ?? []), [home]);
  const processSteps = useMemo(() => withResolvedIcons(home?.processSteps ?? []), [home]);
  const growthBuildCards = useMemo(() => withResolvedIcons(home?.growthBuildCards ?? []), [home]);
  const homeProofCards = home?.homeProofCards ?? [];
  const featuredTestimonials = testimonials.filter((t) => t.isFeatured).slice(0, 3);

  if (siteLoading && !home) {
    return <DataLoading />;
  }

  return (
    <>
      <SEO
        title="AI-Powered Revenue Systems for B2B Growth"
        description="Allied Axis builds AI-powered revenue systems for growth-focused B2B businesses across UAE, UK & Pakistan. Strategy-first execution from brand identity to lead generation."
        keywords="AI marketing agency UAE, B2B lead generation, digital growth agency, revenue systems"
        canonical="/"
      />

      {/* HERO */}
      <section className="hero hero--reference">
        <div className="hero-grid" aria-hidden="true" />
        <HeroBackground />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-pill hero-pill--ref">
                <span className="hero-pill-dot" aria-hidden="true" />
                Where Strategy Meets Scalable Growth
              </div>
              <h1 className="hero-title">
                <span className="hero-title-line hero-title-white">Struggling to get leads?</span>
                <span className="hero-title-line hero-title-accent">Brand invisible online?</span>
                <span className="hero-title-line hero-title-white">Wasting money on ads?</span>
              </h1>
              <p className="hero-sub">
                We build AI-Powered digital systems that convert qualified leads and turn your brand
                into a client-attracting machine.
              </p>
              <div className="hero-btns">
                <a
                  href="https://wa.me/971585882972?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-hero-primary"
                >
                  Book a free Consultation
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
                <Link to="/services" className="btn btn-hero-ghost">
                  Explore Services
                </Link>
              </div>
              <div className="hero-trust">
                <div className="hero-trust-item">
                  <FaRocket aria-hidden />
                  <span><strong>15+</strong> Businesses Scaled</span>
                </div>
                <div className="hero-trust-item">
                  <FaGlobeAmericas aria-hidden />
                  <span><strong>3</strong> Active Markets</span>
                </div>
                <div className="hero-trust-item">
                  <FaShieldAlt aria-hidden />
                  <span><strong>100%</strong> Client Retention</span>
                </div>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Logo strip + What We Do (reference: directly below hero) */}
      <div className="home-after-hero">
        <ClientLogos />
        <section className="home-services section section-center">
          <div className="container">
            <FadeSection>
              <div className="home-services-head">
                <span className="sec-label">What We Do</span>
                <h2 className="sec-heading">Services built to <span className="accent">grow your business</span></h2>
                <p className="sec-sub center">From brand identity to lead generation and AI marketing, we handle the full digital ecosystem.</p>
              </div>
            </FadeSection>
            <div className="services-grid home-services-grid">
              {services.slice(0, 4).map((s, i) => (
                <FadeSection key={s.id}>
                  <ServiceHoverCard className="srv-card--home">
                    <span className="srv-num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="srv-icon" style={{ background: iconColors[i].bg, color: iconColors[i].color }}>
                      {homeSrvIcons[i]}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.shortDescription}</p>
                    <Link to="/services" className="srv-link">Learn more →</Link>
                  </ServiceHoverCard>
                </FadeSection>
              ))}
            </div>
            <p className="home-view-all">
              <Link to="/services">View all services →</Link>
            </p>
          </div>
        </section>

        <HomeWhySection
          intro={whyIntro}
          whyItems={whyItems}
          trustBrands={home?.whyTrustBrands ?? whyTrustBrands}
          featurePillars={home?.whyFeaturePillars ?? whyFeaturePillars}
        />

        {/* HOW WE WORK — directly after Why (reference) */}
        <section className="section section-dark home-process process-section">
          <div className="container">
            <FadeSection>
              <span className="sec-label">How We Work</span>
              <h2 className="sec-heading">
                From Zero to <span className="accent">Revenue System</span>
              </h2>
              <p className="home-process-sub">
                A proven 5-step process — from initial audit to a fully operational AI-powered growth engine.
              </p>
            </FadeSection>
            <ProcessSteps steps={processSteps} />
          </div>
        </section>

        {/* WHAT WE BUILD — heading → cards → CTA (reference order) */}
        <section className="section section-dark home-growth-build">
          <div className="container home-growth-build-inner">
            <header className="home-growth-build-head">
              <span className="sec-label">What We Build</span>
              <h2 className="sec-heading home-growth-build-title">
                Your Complete <span className="accent">Growth Infrastructure</span>
              </h2>
            </header>

            <div className="growth-build-cards-block">
              <div className="growth-build-grid">
                {growthBuildCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <ServiceHoverCard
                      key={card.title}
                      variant="why"
                      className="growth-build-card"
                    style={{
                      '--card-accent': card.iconBg,
                      '--card-glow': card.glow,
                    }}
                    >
                      <div className="growth-build-icon">
                        {Icon ? <Icon aria-hidden /> : null}
                      </div>
                      <h3>{card.title}</h3>
                      <ul className="growth-build-list" style={{ '--bullet-color': card.color }}>
                        {card.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </ServiceHoverCard>
                  );
                })}
              </div>
            </div>

            <div className="home-growth-build-cta">
              <Link to="/contact" className="btn btn-hero-primary">
                Build My Growth System
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <p className="home-growth-build-note">
                Free strategy call - No commitment - Results in 14 days
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* METRICS — blue band (reference) */}
      <section className="home-metrics-band" aria-label="Key metrics">
        <div className="container">
          <StatsBar items={homeMetrics} className="stats-bar--5 stats-bar--home" />
        </div>
      </section>

      {/* PROOF OF WORK */}
      <section className="section home-proof-section">
        <div className="container">
          <FadeSection className="home-proof-head">
            <span className="sec-label">Proof of Work</span>
            <h2 className="sec-heading">Real Results. <span className="accent">Real Clients.</span></h2>
            <p className="sec-sub center">Verified outcomes from real growth infrastructure — no fluff, no vanity metrics.</p>
          </FadeSection>
          <div className="home-proof-grid">
            {homeProofCards.map((card) => (
              <FadeSection key={card.slug}>
                <HomeProofCard card={card} />
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + FREE AUDIT (reference) */}
      <section className="section home-testimonials">
        <div className="container">
          <FadeSection>
            <div className="home-testimonials-head">
              <span className="sec-label">Testimonials</span>
              <h2 className="sec-heading">
                Trusted by Clients. <span className="accent">Proven by Results.</span>
              </h2>
              <p className="sec-sub center">
                Don&apos;t take our word for it — here&apos;s what our clients say.
              </p>
            </div>
          </FadeSection>
          <div className="home-testi-grid">
            {featuredTestimonials.map((t, i) => (
              <FadeSection key={t.id}>
                <HomeTestimonialCard testimonial={t} index={i} />
              </FadeSection>
            ))}
          </div>
          <FadeSection>
            <WebsiteAuditBanner />
          </FadeSection>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} />
    </>
  );
}

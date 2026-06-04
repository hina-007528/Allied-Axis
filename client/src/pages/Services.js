import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import useInView from '../hooks/useInView';
import ServicesPageHero from '../components/services/ServicesPageHero';
import ServicesPillarsIntro from '../components/services/ServicesPillarsIntro';
import ServicesCatalogGrid from '../components/services/ServicesCatalogGrid';
import ServicesIndividualSection from '../components/services/ServicesIndividualSection';
import ServicesProductionSection from '../components/services/ServicesProductionSection';
import ServicesRetainersSection from '../components/services/ServicesRetainersSection';
import ServicesImportantNotesSection from '../components/services/ServicesImportantNotesSection';
import ServicesClosingCta from '../components/services/ServicesClosingCta';
import { launchPackages } from '../data/services';

const colors = ['#7c3aed', '#e05c26', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'];

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>{children}</div>;
}

export default function Services() {
  return (
    <div className="services-page">
      <SEO title="Our Services" description="AI Lead Gen, Paid Media, Brand Strategy, Website Development, SEO, CRM, Social Media — complete digital growth services from Allied Axis." canonical="/services" />

      <ServicesPageHero />
      <ServicesPillarsIntro />
      <ServicesCatalogGrid />
      <ServicesIndividualSection />
      <ServicesProductionSection />

      <section className="section section-gray services-launch-section">
        <div className="container">
          <header className="services-launch-header">
            <span className="sec-label">Launch Packages</span>
            <h2 className="sec-heading">
              Bundled services to <span className="accent">get started fast</span>
            </h2>
          </header>
          <div className="packages-grid">
            {launchPackages.map((pkg, i) => (
              <FadeSection key={i}>
                <div className="package-card interactive-card">
                  <h3 style={{ fontSize: 20, marginBottom: 4 }}>{pkg.name}</h3>
                  {pkg.description && (
                    <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>{pkg.description}</p>
                  )}
                  <ul className="package-list">
                    {pkg.items.map((item, ii) => (
                      <li key={ii}>
                        <FaCheck className="srv-check" style={{ color: '#10b981' }} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="srv-inquire" style={{ color: colors[i % colors.length], marginTop: 16 }}>
                    Inquire Now →
                  </Link>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <ServicesRetainersSection />
      <ServicesImportantNotesSection />
      <ServicesClosingCta />
    </div>
  );
}

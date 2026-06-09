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
            {launchPackages.map((pkg) => (
              <FadeSection key={pkg.name}>
                <div
                  className="package-card interactive-card"
                  style={{ '--pkg-accent': pkg.accent }}
                >
                  <h3 className="package-card-title">{pkg.name}</h3>
                  {pkg.description && (
                    <p className="package-card-desc">{pkg.description}</p>
                  )}
                  <ul className="package-list">
                    {pkg.items.map((item) => (
                      <li key={item}>
                        <FaCheck className="package-check" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="package-get-started">
                    Get Started
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

import useInView from '../../hooks/useInView';
import { publicImageSrc as publicSrc } from '../../utils/publicImageSrc';
import { useClientLogos } from '../../context/SiteDataContext';
import DataLoading from '../common/DataLoading';

function LogoCell({ logo, showDivider }) {
  return (
    <div className="logos-bar-cell">
      <img
        src={publicSrc(logo.src)}
        alt={`${logo.name} logo`}
        className="logos-bar-img"
        loading="lazy"
        decoding="async"
      />
      {showDivider ? <span className="logos-bar-divider" aria-hidden="true" /> : null}
    </div>
  );
}

function LogoRow({ logos, ariaHidden = false }) {
  return (
    <div className="logos-bar-row" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo, i) => (
        <LogoCell key={`${logo.name}-${i}`} logo={logo} showDivider={i < logos.length - 1} />
      ))}
    </div>
  );
}

export default function ClientLogos() {
  const [ref, visible] = useInView(0.08);
  const { logos, loading } = useClientLogos();

  if (loading || !logos.length) {
    return <DataLoading minHeight="120px" />;
  }

  return (
    <section
      ref={ref}
      className={`logos-bar fade-in${visible ? ' visible' : ''}`}
      aria-label="Partner logos"
    >
      <div className="logos-bar-viewport">
        <div className="logos-bar-track">
          <LogoRow logos={logos} />
          <LogoRow logos={logos} ariaHidden />
        </div>
      </div>
    </section>
  );
}

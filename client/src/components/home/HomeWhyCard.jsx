import ServiceHoverCard from '../motion/ServiceHoverCard';
import HomeWhyGraph from './HomeWhyGraph';

const GRAPH_BY_TITLE = {
  'Systems Over Services': 'ecosystem',
  'AI-Powered Systems': 'compound',
  'End-to-End Solution': 'stacked',
  'International Experience': 'markets',
};

export default function HomeWhyCard({ item }) {
  const Icon = item.icon;
  const graphType = item.graph || GRAPH_BY_TITLE[item.title] || 'ecosystem';

  return (
    <ServiceHoverCard
      variant="why"
      className="why-card--home interactive-card"
      style={{
        '--card-accent': item.color,
        '--card-glow': item.color,
        '--card-beam-accent': item.color,
      }}
    >
      <span className="why-card-topline" aria-hidden="true" />
      <HomeWhyGraph type={graphType} accent={item.color} />
      <div className="why-card-foot">
        <div className="why-icon" style={{ background: item.bg, color: item.color }}>
          {Icon ? <Icon aria-hidden /> : null}
        </div>
        <div className="why-card-foot-text">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </ServiceHoverCard>
  );
}

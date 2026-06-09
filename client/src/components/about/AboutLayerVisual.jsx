import AboutLayer04Visual from './AboutLayer04Visual';
import AboutLayer05Visual from './AboutLayer05Visual';
import {
  Layer01Svg,
  Layer02Svg,
  Layer03Svg,
  Layer06Svg,
} from './AboutLayerSvgs';

const VISUALS = {
  foundation: Layer01Svg,
  brand: Layer02Svg,
  leads: Layer03Svg,
  content: AboutLayer04Visual,
  performance: AboutLayer05Visual,
  retention: Layer06Svg,
};

export default function AboutLayerVisual({ type = 'foundation' }) {
  const Visual = VISUALS[type] || VISUALS.foundation;
  return (
    <div className="about-layer-visual">
      <Visual />
    </div>
  );
}

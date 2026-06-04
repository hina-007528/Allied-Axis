import * as FaIcons from 'react-icons/fa';

const ALIASES = {
  bolt: 'FaBolt',
  microchip: 'FaMicrochip',
  layers: 'FaLayerGroup',
  compass: 'FaCompass',
  search: 'FaSearch',
  map: 'FaMap',
  rocket: 'FaRocket',
  chart: 'FaChartBar',
  linkedin: 'FaLinkedin',
  bullhorn: 'FaBullhorn',
  globe: 'FaGlobe',
  envelope: 'FaEnvelope',
  palette: 'FaPalette',
  brain: 'FaBrain',
  briefcase: 'FaBriefcase',
  plane: 'FaPlane',
  bullseye: 'FaBullseye',
  mail: 'FaEnvelope',
};

export function resolveIcon(icon) {
  if (!icon) return null;
  if (typeof icon === 'function') return icon;
  if (typeof icon !== 'string') return null;

  const key = ALIASES[icon] || (icon.startsWith('Fa') ? icon : `Fa${icon.charAt(0).toUpperCase()}${icon.slice(1)}`);
  return FaIcons[key] || null;
}

export function withResolvedIcons(items = []) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => ({
    ...item,
    icon: resolveIcon(item.icon),
  }));
}

/** Render a react-icon from DB string key or component reference. */
export function RenderIcon({ icon, ...props }) {
  const Icon = resolveIcon(icon);
  if (!Icon) return null;
  return <Icon {...props} />;
}

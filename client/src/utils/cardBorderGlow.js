/** Card border track (neutral gray) + animated runner (orange OR card accent color). */

const NS = 'http://www.w3.org/2000/svg';
const DEFAULT_ORANGE = '#f05a28';
const DEFAULT_ORANGE_RGB = [240, 90, 40];

const CARD_SELECTOR = [
  '.srv-card',
  '.why-card',
  '.testi-card',
  '.case-card',
  '.blog-card',
  '.team-card',
  '.stat-card',
  '.method-card',
  '.package-card',
  '.contact-info-card',
  '.contact-form-card',
  '.testi-full',
  '.testi-ref-card',
  '.blog-featured',
  '.newsletter',
  '.team-core-card',
  '.team-lead-card',
  '.team-hiring-perk',
  '.b2b-service-card',
  '.b2b-why-card',
  '.b2b-problem-card',
  '.b2b-solution-card',
  '.b2b-proof-card',
  '.perk-card',
  '.capability-card',
  '.solution-card',
  '.partnership-card',
  '.about-market-card',
  '.about-industry-card',
  '.about-method-card',
  '.about-founder-block',
  '.about-solution-card',
  '.about-mv-card',
  '.about-why-win-card',
  '.about-engagement-stat',
  '.srv-catalog-card',
  '.srv-individual-card',
  '.srv-production-card',
  '.portfolio-spotlight',
  '.portfolio-case-card',
  '.home-proof-card',
  '.about-proof-card',
  '.portfolio-stat-card',
  '.portfolio-solution-card',
  '.card-beam',
  '.growth-build-card',
  '.why-card--home',
].join(', ');

const ACCENT_CSS_VARS = [
  '--card-beam-accent',
  '--beam-accent',
  '--proof-accent',
  '--testi-accent',
  '--srv-accent',
  '--srv-prod-accent',
  '--case-accent',
];

const CONTENT_COLOR_PROPS = ['color', 'backgroundColor', 'borderTopColor'];

function borderRadiusPx(el, w, h) {
  const raw = getComputedStyle(el).borderRadius.split(' ')[0];
  const n = parseFloat(raw);
  const r = Number.isFinite(n) ? n : 12;
  return Math.min(r, w / 2, h / 2);
}

function roundedRectPath(w, h, r) {
  const rad = Math.max(0, Math.min(r, w / 2, h / 2));
  return [
    `M ${rad} 0`,
    `H ${w - rad}`,
    `A ${rad} ${rad} 0 0 1 ${w} ${rad}`,
    `V ${h - rad}`,
    `A ${rad} ${rad} 0 0 1 ${w - rad} ${h}`,
    `H ${rad}`,
    `A ${rad} ${rad} 0 0 1 0 ${h - rad}`,
    `V ${rad}`,
    `A ${rad} ${rad} 0 0 1 ${rad} 0`,
    'Z',
  ].join(' ');
}

/** @returns {[number, number, number] | null} */
export function parseRgbString(str) {
  if (!str || str === 'transparent') return null;
  const s = String(str).trim().toLowerCase();

  const hex = s.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const n = parseInt(h.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  const rgb = s.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  if (rgb) {
    return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  }
  return null;
}

function resolveCssColor(colorValue, contextEl) {
  if (!colorValue) return null;
  const v = colorValue.trim();
  if (v === 'neutral' || v === 'default') return null;

  const probe = document.createElement('span');
  probe.style.color = v;
  probe.style.display = 'none';
  contextEl.appendChild(probe);
  const rgb = parseRgbString(getComputedStyle(probe).color);
  probe.remove();
  return rgb;
}

/** True for black, white, and grey tones only. */
export function isNeutralRgb([r, g, b]) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max - min < 20) return true;
  const sat = max === 0 ? 0 : (max - min) / max;
  return sat < 0.16;
}

/** Allied Axis brand orange — counts as neutral for beam (use orange runner). */
function isBrandOrangeRgb([r, g, b]) {
  return r >= 175 && r <= 255 && g >= 45 && g <= 150 && b >= 0 && b <= 100;
}

function colorSaturation([r, g, b]) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function rgbDistance(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);
}

function pickDominantChromatic(colors) {
  if (!colors.length) return null;
  let best = colors[0];
  let bestScore = -1;
  for (const c of colors) {
    const score = colorSaturation(c);
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }
  return best;
}

function defaultOrangeRgb() {
  return parseRgbString(DEFAULT_ORANGE) || DEFAULT_ORANGE_RGB;
}

function readExplicitAccent(card) {
  const beamVar = getComputedStyle(card).getPropertyValue('--card-beam-accent').trim();
  if (beamVar === 'neutral') return { forceOrange: true };
  if (beamVar) {
    const rgb = resolveCssColor(beamVar, card);
    if (rgb && !isNeutralRgb(rgb)) return { rgb };
  }

  const data = card.getAttribute('data-beam-accent');
  if (data === 'neutral') return { forceOrange: true };
  if (data) {
    const rgb = resolveCssColor(data, card);
    if (rgb && !isNeutralRgb(rgb)) return { rgb };
  }

  for (const varName of ACCENT_CSS_VARS) {
    if (varName === '--card-beam-accent') continue;
    const raw = getComputedStyle(card).getPropertyValue(varName).trim();
    if (!raw || raw === 'neutral') continue;
    const rgb = resolveCssColor(raw, card);
    if (rgb && !isNeutralRgb(rgb) && !isBrandOrangeRgb(rgb)) return { rgb };
  }

  return null;
}

/** Scan visible card content for non-neutral colors (excluding brand orange). */
function readAccentFromCardContent(card) {
  const chromatic = [];
  const elements = card.querySelectorAll(
    'h1,h2,h3,h4,h5,h6,p,span,strong,em,a,label,button,li,svg,path,i,[class*="tag"],[class*="metric"],[class*="star"],[class*="num"],[class*="accent"],[class*="icon"],[class*="pill"],[class*="label"],[class*="value"]'
  );

  for (const el of elements) {
    if (el.closest('.card-border-beam')) continue;
    if (el.classList.contains('card-border-beam')) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 1 && rect.height < 1) continue;

    const st = getComputedStyle(el);
    for (const prop of CONTENT_COLOR_PROPS) {
      const rgb = parseRgbString(st[prop]);
      if (!rgb || isNeutralRgb(rgb) || isBrandOrangeRgb(rgb)) continue;
      const dup = chromatic.some((c) => rgbDistance(c, rgb) < 28);
      if (!dup) chromatic.push(rgb);
    }
  }

  return pickDominantChromatic(chromatic);
}

/**
 * Orange runner: card content is only black / white / grey (and brand-orange hints).
 * Themed runner: card has another chromatic color (green, purple, blue, pink, etc.).
 */
export function resolveCardBeamRunnerColor(card) {
  const explicit = readExplicitAccent(card);
  if (explicit?.forceOrange) return defaultOrangeRgb();
  if (explicit?.rgb) return explicit.rgb;

  const fromContent = readAccentFromCardContent(card);
  if (fromContent) return fromContent;

  return defaultOrangeRgb();
}

function rgbToHex([r, g, b]) {
  const h = (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

function lightenRgb([r, g, b], amount = 0.22) {
  return [r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount];
}

function glowFromRgb([r, g, b], alpha = 0.75) {
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
}

function buildBorderLayer(card, index, borderMeta, runnerRgb) {
  const runnerHex = rgbToHex(runnerRgb);
  const runnerHover = rgbToHex(lightenRgb(runnerRgb));

  const layer = document.createElement('div');
  layer.className = 'card-border-beam';
  layer.setAttribute('aria-hidden', 'true');
  layer.style.setProperty('--beam-delay', `${(index % 12) * 0.3}s`);
  layer.style.setProperty('--beam-track-color', borderMeta.color);
  layer.style.setProperty('--beam-track-width', `${borderMeta.width}px`);
  layer.style.setProperty('--beam-runner-color', runnerHex);
  layer.style.setProperty('--beam-runner-color-hover', runnerHover);
  layer.style.setProperty('--beam-runner-glow', glowFromRgb(runnerRgb));

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'card-border-beam__svg');

  const track = document.createElementNS(NS, 'path');
  track.setAttribute('class', 'card-border-beam__track');

  const runner = document.createElementNS(NS, 'path');
  runner.setAttribute('class', 'card-border-beam__runner');
  runner.setAttribute('pathLength', '1');
  runner.style.stroke = runnerHex;

  svg.appendChild(track);
  svg.appendChild(runner);
  layer.appendChild(svg);

  const update = () => {
    const w = card.clientWidth;
    const h = card.clientHeight;
    if (w < 8 || h < 8) return;

    const borderWidth = borderMeta.width;
    const pad = borderWidth / 2;
    const iw = w - borderWidth;
    const ih = h - borderWidth;
    const r = borderRadiusPx(card, iw, ih);
    const d = roundedRectPath(iw, ih, r);
    const offset = `translate(${pad}, ${pad})`;

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    track.setAttribute('d', d);
    track.setAttribute('transform', offset);
    runner.setAttribute('d', d);
    runner.setAttribute('transform', offset);
  };

  update();

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(update);
    ro.observe(card);
  }

  return layer;
}

function shouldSkip(el) {
  if (el.classList.contains('hero-stat-ring')) return true;
  if (el.classList.contains('hero-metric-card')) return true;
  if (el.closest('.card-hover-video')) return true;
  if (el.closest('.hero-visual-orbit')) return true;
  return false;
}

export function initCardBorderGlow(root = document) {
  root.querySelectorAll('.faq-item > .card-border-beam').forEach((el) => el.remove());

  root.querySelectorAll(CARD_SELECTOR).forEach((card, index) => {
    if (shouldSkip(card)) return;

    const existing = card.querySelector(':scope > .card-border-beam');
    if (existing) existing.remove();

    if (card.classList.contains('card-border-beam-host')) {
      card.classList.remove('card-border-beam-host');
    }

    const styles = getComputedStyle(card);
    let trackColor = styles.borderTopColor;
    if (!trackColor || trackColor === 'transparent' || trackColor === 'rgba(0, 0, 0, 0)') {
      trackColor = 'rgba(15, 23, 42, 0.1)';
    }

    const borderMeta = {
      width: parseFloat(styles.borderTopWidth) || 1,
      color: trackColor,
    };

    const runnerRgb = resolveCardBeamRunnerColor(card);

    card.classList.add('card-border-beam-host');
    card.dataset.beamColor = rgbToHex(runnerRgb);
    card.insertBefore(buildBorderLayer(card, index, borderMeta, runnerRgb), card.firstChild);
  });
}

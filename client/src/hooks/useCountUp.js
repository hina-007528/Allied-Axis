import { useEffect, useState } from 'react';

/** Parse stat strings like "485+", "77%", "18mo", "9.2/10", "AED 8M+" */
export function parseStatValue(value) {
  const str = String(value).trim();
  let prefix = '';
  let rest = str;
  const aed = str.match(/^AED\s*(.+)$/i);
  if (aed) {
    prefix = 'AED ';
    rest = aed[1].trim();
  }
  const match = rest.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix, end: 0, suffix: rest || str, decimals: 0 };
  const numStr = match[1];
  return {
    prefix,
    end: parseFloat(numStr),
    suffix: match[2] || '',
    decimals: numStr.includes('.') ? (numStr.split('.')[1]?.length || 1) : 0,
  };
}

export default function useCountUp(target, active, duration = 1800, delay = 0) {
  const { prefix, end, suffix, decimals } = parseStatValue(target);
  const zeroDisplay = `${prefix}0${suffix}`;
  const [display, setDisplay] = useState(zeroDisplay);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplay(zeroDisplay);
      setComplete(false);
      return undefined;
    }

    const startTime = performance.now();
    let frameId;
    let cancelled = false;

    const tick = (now) => {
      if (cancelled) return;
      const elapsed = now - startTime - delay;
      if (elapsed < 0) {
        frameId = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      if (progress >= 1) {
        setDisplay(target);
        setComplete(true);
        return;
      }
      const eased = 1 - (1 - progress) ** 3;
      const current = eased * end;
      const formatted = decimals > 0 ? current.toFixed(decimals) : String(Math.round(current));
      setDisplay(`${prefix}${formatted}${suffix}`);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [active, end, duration, delay, target, prefix, suffix, decimals, zeroDisplay]);

  return { display, complete };
}

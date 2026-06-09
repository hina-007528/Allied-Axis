import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function wrapTextNode(text, container) {
  const parts = text.split(/(\s+)/);
  parts.forEach((part) => {
    if (!part) return;
    if (/^\s+$/.test(part)) {
      container.appendChild(document.createTextNode(part));
      return;
    }
    const mask = document.createElement('span');
    mask.className = 'split-mask';
    mask.setAttribute('aria-hidden', 'true');
    const word = document.createElement('span');
    word.className = 'split-word';
    word.textContent = part;
    mask.appendChild(word);
    container.appendChild(mask);
  });
}

function splitNode(node, container) {
  if (node.nodeType === Node.TEXT_NODE) {
    wrapTextNode(node.textContent, container);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.tagName === 'BR') {
      container.appendChild(document.createElement('br'));
      return;
    }
    const clone = node.cloneNode(false);
    [...node.childNodes].forEach((child) => splitNode(child, clone));
    container.appendChild(clone);
  }
}

function revealWords(words) {
  gsap.set(words, { y: '0%', opacity: 1, clearProps: 'transform,opacity' });
}

function isHeadingInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function initSplitHeadings() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectors = '.sec-heading:not(.about-page-title), .hero h1, .hero-title, .home-why-title, .page-header h1:not(.about-page-title)';

  document.querySelectorAll(selectors).forEach((el) => {
    if (el.dataset.luxurySplit === '1') return;
    el.dataset.luxurySplit = '1';

    const wrapper = document.createElement('div');
    wrapper.className = 'split-heading-inner';
    [...el.childNodes].forEach((node) => splitNode(node, wrapper));
    el.innerHTML = '';
    el.appendChild(wrapper);

    const words = el.querySelectorAll('.split-word');
    if (!words.length) return;

    if (reducedMotion) {
      revealWords(words);
      return;
    }

    const inView = isHeadingInView(el);
    gsap.set(words, { y: '110%', opacity: 0, force3D: true });

    const tweenConfig = {
      y: '0%',
      opacity: 1,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.04,
      force3D: true,
    };

    if (inView) {
      gsap.to(words, tweenConfig);
    } else {
      gsap.to(words, {
        ...tweenConfig,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    }

    window.setTimeout(() => revealWords(words), 2500);
  });
}

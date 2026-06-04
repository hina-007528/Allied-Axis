import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

const POPULAR = [
  'B2B lead generation',
  'UAE tourism',
  'AI marketing',
  'Case study',
  'HR consulting',
  'Education enrolment',
];

function matchScore(post, query) {
  const q = query.trim().toLowerCase();
  if (!q) return 1;
  const title = post.title.toLowerCase();
  const excerpt = post.excerpt.toLowerCase();
  const category = post.categoryLabel.toLowerCase();
  if (title.includes(q)) return 4;
  if (title.split(/\s+/).some((w) => w.startsWith(q))) return 3;
  if (category.includes(q)) return 2;
  if (excerpt.includes(q)) return 1;
  return 0;
}

export default function BlogSearch({ blogs, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) {
      const popularPosts = POPULAR.map((term) => {
        const hit = blogs.find(
          (b) =>
            b.title.toLowerCase().includes(term.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(term.toLowerCase())
        );
        return hit ? { type: 'post', post: hit, label: hit.title } : { type: 'term', term, label: term };
      }).filter(Boolean);
      return popularPosts.slice(0, 6);
    }
    return blogs
      .map((post) => ({ post, score: matchScore(post, q) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ post }) => ({ type: 'post', post, label: post.title }));
  }, [blogs, value]);

  const flatItems = suggestions;

  const close = useCallback(() => {
    setOpen(false);
    setHighlight(-1);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [close]);

  const selectTerm = (term) => {
    onChange(term);
    inputRef.current?.focus();
    setHighlight(-1);
  };

  const onKeyDown = (e) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => (h < flatItems.length - 1 ? h + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => (h > 0 ? h - 1 : flatItems.length - 1));
    } else if (e.key === 'Enter' && highlight >= 0 && flatItems[highlight]) {
      e.preventDefault();
      const item = flatItems[highlight];
      if (item.type === 'term') selectTerm(item.term);
      else close();
    }
  };

  const showPanel = open && (flatItems.length > 0 || value.trim());

  return (
    <div className="blog-search-wrap" ref={wrapRef}>
      <input
        ref={inputRef}
        type="search"
        className="blog-search"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen(true)}
        onKeyDown={onKeyDown}
        autoComplete="off"
        aria-expanded={showPanel}
        aria-controls="blog-search-suggestions"
        aria-autocomplete="list"
        role="combobox"
      />
      {showPanel && (
        <div id="blog-search-suggestions" className="blog-search-suggestions" role="listbox">
          <p className="blog-search-suggestions__label">
            {value.trim() ? 'Matching articles' : 'Popular searches'}
          </p>
          <ul>
            {flatItems.length === 0 && value.trim() && (
              <li className="blog-search-suggestions__empty">No articles match &ldquo;{value}&rdquo;</li>
            )}
            {flatItems.map((item, i) => {
              const active = i === highlight;
              if (item.type === 'term') {
                return (
                  <li key={item.term} role="option" aria-selected={active}>
                    <button
                      type="button"
                      className={`blog-search-suggestions__item${active ? ' is-active' : ''}`}
                      onMouseEnter={() => setHighlight(i)}
                      onClick={() => selectTerm(item.term)}
                    >
                      <span className="blog-search-suggestions__icon" aria-hidden>⌕</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              }
              return (
                <li key={item.post.slug} role="option" aria-selected={active}>
                  <Link
                    to={`/blog/${item.post.slug}`}
                    className={`blog-search-suggestions__item${active ? ' is-active' : ''}`}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={close}
                  >
                    <span className="blog-search-suggestions__thumb">
                      <img src={item.post.src} alt="" loading="lazy" />
                    </span>
                    <span className="blog-search-suggestions__text">
                      <span className="blog-search-suggestions__title">{item.post.title}</span>
                      <span className="blog-search-suggestions__meta">{item.post.categoryLabel}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

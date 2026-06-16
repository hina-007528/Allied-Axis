/** Testimonials page — metrics, themes, and layout slots match reference UI */
const T_IMG = '/images/testimonials';

const testimonials = [
  {
    id: 1,
    quote:
      'From zero digital presence to revenue in 14 days. Maryam delivered 18 deliverables in one month — the results speak for themselves.',
    author: 'Sarah Al-Maktoum',
    role: 'Founder',
    company: 'UAE Tourism Startup',
    location: 'Dubai',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '14', label: 'days to revenue' },
    theme: 'orange',
    avatarIndex: 0,
    avatar: `${T_IMG}/avatar-01.jpg`,
    image: `${T_IMG}/tourism-dubai.jpg`,
    isFeatured: true,
  },
  {
    id: 2,
    quote:
      '20% improvement in campaign efficiency. Maryam brought real structure and strategy. Highly recommended for businesses seeking structured, scalable growth.',
    author: 'James Whitfield',
    role: 'Managing Director',
    company: 'UK Digital Agency',
    location: 'United Kingdom',
    countryCode: 'GB',
    rating: 5,
    metric: { value: '20%', label: 'efficiency gain' },
    theme: 'green',
    avatarIndex: 1,
    avatar: `${T_IMG}/avatar-02.jpg`,
    image: `${T_IMG}/digital-agency.jpg`,
    isFeatured: true,
  },
  {
    id: 3,
    quote:
      '500+ qualified leads in one week. The AI-powered system Maryam built has completely transformed how we generate business. Exceptional work.',
    author: 'Amira Hassan',
    role: 'CEO',
    company: 'Global B2B Commodities Firm',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '500+', label: 'qualified leads in one week' },
    theme: 'purple',
    avatarIndex: 2,
    avatar: `${T_IMG}/avatar-03.jpg`,
    image: `${T_IMG}/b2b-trade.jpg`,
    featured: true,
    isFeatured: true,
  },
  {
    id: 4,
    quote:
      'The system built for us is still running 18 months later. Productivity up 30%, 15+ clients managed seamlessly.',
    author: 'David Chen',
    role: 'Managing Partner',
    company: 'UAE HR Consulting Firm',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '18mo+', label: 'system still running' },
    theme: 'gold',
    avatarIndex: 3,
    avatar: `${T_IMG}/avatar-04.jpg`,
    image: `${T_IMG}/hr-consulting.jpg`,
  },
  {
    id: 5,
    quote:
      "Allied Axis didn't just give us leads — they built a system that continuously finds the right opportunities. We've won contracts we would never have known about.",
    author: 'Omar Khalid',
    role: 'Commercial Director',
    company: 'UAE Contracting Company',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: 'AED 8M+', label: 'new contracts won' },
    theme: 'blue',
    avatarIndex: 4,
    avatar: `${T_IMG}/avatar-05.jpg`,
    image: `${T_IMG}/construction.jpg`,
  },
  {
    id: 6,
    quote:
      "We used to rely on expensive bidding portals and old contacts. Now clients find us — and they trust us because our compliance and track record are visible upfront.",
    author: 'Rajesh Menon',
    role: 'Operations Director',
    company: 'Manpower Supply Company',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: 'AED 12M+', label: 'in new contracts' },
    theme: 'purple',
    avatarIndex: 5,
    avatar: `${T_IMG}/avatar-06.jpg`,
    image: `${T_IMG}/manpower.jpg`,
  },
  {
    id: 7,
    quote:
      "Allied Axis didn't just build our website — they built our entire brand and sales engine. We've gone from zero to consistent monthly revenue in six months.",
    author: 'Layla Farouk',
    role: 'Founder',
    company: 'UAE Clothing Brand',
    location: 'UAE & GCC',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '500+', label: 'customers in month one' },
    theme: 'pink',
    avatarIndex: 6,
    avatar: `${T_IMG}/avatar-07.jpg`,
    image: `${T_IMG}/fashion-retail.jpg`,
  },
  {
    id: 8,
    quote:
      'Our website used to lose parents before they even inquired. Allied Axis fixed the funnel, automated our follow-up, and built a referral system that actually works.',
    author: 'Dr. Helen Brooks',
    role: 'Admissions Director',
    company: 'Private School',
    location: 'Pakistan',
    countryCode: 'PK',
    rating: 5,
    metric: { value: '40%', label: 'more inquiries' },
    theme: 'teal',
    avatarIndex: 7,
    avatar: `${T_IMG}/avatar-08.jpg`,
    image: `${T_IMG}/education.jpg`,
  },
];

export const TESTIMONIAL_THEME_COLORS = {
  orange: '#f05a28',
  green: '#10b981',
  gold: '#ca8a04',
  purple: '#7c3aed',
  blue: '#3b82f6',
  pink: '#ec4899',
  teal: '#14b8a6',
};

export const TESTIMONIAL_AVATARS = [
  `${T_IMG}/avatar-01.jpg`,
  `${T_IMG}/avatar-02.jpg`,
  `${T_IMG}/avatar-03.jpg`,
  `${T_IMG}/avatar-04.jpg`,
  `${T_IMG}/avatar-05.jpg`,
  `${T_IMG}/avatar-06.jpg`,
  `${T_IMG}/avatar-07.jpg`,
  `${T_IMG}/avatar-08.jpg`,
];

export function getTestimonialAvatar(testimonial) {
  if (testimonial?.avatar) return testimonial.avatar;
  const i = testimonial?.avatarIndex ?? 0;
  return TESTIMONIAL_AVATARS[i % TESTIMONIAL_AVATARS.length];
}

export function getTestimonialImage(testimonial) {
  return testimonial?.image || null;
}

export function getTestimonialById(id) {
  return testimonials.find((t) => t.id === id);
}

/** Ensure each testimonial appears once (by id, legacyId, or quote). */
export function dedupeTestimonials(list) {
  const seen = new Set();
  return list.filter((t) => {
    const key = t._id ?? t.id ?? t.legacyId ?? t.quote;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getTestimonialDisplayName(testimonial) {
  const { author, role } = testimonial ?? {};
  if (!author) return '';
  if (role && author !== role) return `${author}, ${role}`;
  return author;
}

export default testimonials;

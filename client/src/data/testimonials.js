/** Testimonials page — metrics, themes, and layout slots match reference UI */
const testimonials = [
  {
    id: 1,
    quote:
      'From zero digital presence to revenue in 14 days. Maryam delivered 18 deliverables in one month — the results speak for themselves.',
    author: 'Founder',
    company: 'UAE Tourism Startup',
    location: 'Dubai',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '14', label: 'days to revenue' },
    theme: 'orange',
    avatarIndex: 0,
    isFeatured: true,
  },
  {
    id: 2,
    quote:
      '20% improvement in campaign efficiency. Maryam brought real structure and strategy. Highly recommended for businesses seeking structured, scalable growth.',
    author: 'Director',
    company: 'UK Digital Agency',
    location: 'United Kingdom',
    countryCode: 'GB',
    rating: 5,
    metric: { value: '20%', label: 'efficiency gain' },
    theme: 'green',
    avatarIndex: 1,
    isFeatured: true,
  },
  {
    id: 3,
    quote:
      '500+ qualified leads in one week. The AI-powered system Maryam built has completely transformed how we generate business. Exceptional work.',
    author: 'CEO',
    company: 'Global B2B Commodities Firm',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '500+', label: 'qualified leads in one week' },
    theme: 'purple',
    avatarIndex: 2,
    featured: true,
    isFeatured: true,
  },
  {
    id: 4,
    quote:
      'The system built for us is still running 18 months later. Productivity up 30%, 15+ clients managed seamlessly.',
    author: 'Partner',
    company: 'UAE HR Consulting Firm',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '18mo+', label: 'system still running' },
    theme: 'gold',
    avatarIndex: 3,
  },
  {
    id: 5,
    quote:
      "Allied Axis didn't just give us leads — they built a system that continuously finds the right opportunities. We've won contracts we would never have known about.",
    author: 'Commercial Director',
    company: 'UAE Contracting Company',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: 'AED 8M+', label: 'new contracts won' },
    theme: 'blue',
    avatarIndex: 4,
  },
  {
    id: 6,
    quote:
      "We used to rely on expensive bidding portals and old contacts. Now clients find us — and they trust us because our compliance and track record are visible upfront.",
    author: 'Operations Director',
    company: 'Manpower Supply Company',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: 'AED 12M+', label: 'in new contracts' },
    theme: 'purple',
    avatarIndex: 5,
  },
  {
    id: 7,
    quote:
      "Allied Axis didn't just build our website — they built our entire brand and sales engine. We've gone from zero to consistent monthly revenue in six months.",
    author: 'Founder',
    company: 'UAE Clothing Brand',
    location: 'UAE & GCC',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '500+', label: 'customers in month one' },
    theme: 'pink',
    avatarIndex: 6,
  },
  {
    id: 8,
    quote:
      'Our website used to lose parents before they even inquired. Allied Axis fixed the funnel, automated our follow-up, and built a referral system that actually works.',
    author: 'Admissions Director',
    company: 'Private School',
    location: 'UAE',
    countryCode: 'AE',
    rating: 5,
    metric: { value: '25%', label: 'more enrollments' },
    theme: 'teal',
    avatarIndex: 7,
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
  'https://i.pravatar.cc/96?img=12',
  'https://i.pravatar.cc/96?img=32',
  'https://i.pravatar.cc/96?img=47',
  'https://i.pravatar.cc/96?img=15',
  'https://i.pravatar.cc/96?img=33',
  'https://i.pravatar.cc/96?img=68',
  'https://i.pravatar.cc/96?img=51',
  'https://i.pravatar.cc/96?img=26',
];

export function getTestimonialById(id) {
  return testimonials.find((t) => t.id === id);
}

export default testimonials;

import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, ogImage }) {
  const siteName = 'Allied Axis';
  const baseUrl = 'https://alliedaxis.digital';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — AI-Powered Revenue Systems for B2B Growth`;
  const desc = description || 'Allied Axis builds AI-powered revenue systems for growth-focused B2B businesses across UAE, UK & Pakistan. Strategy-first execution from brand identity to lead generation.';
  const img = ogImage || `${baseUrl}/images/og.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

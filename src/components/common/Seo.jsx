import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { organization } from '../../constants/organization.js';
import { defaultSeo } from '../../data/seo.js';

function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${defaultSeo.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: organization.name,
    alternateName: organization.shortName,
    url: defaultSeo.siteUrl,
    logo: absoluteUrl(defaultSeo.image),
    image: absoluteUrl(defaultSeo.image),
    description: defaultSeo.description,
    email: organization.email,
    telephone: organization.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address,
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
  };
}

function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultSeo.siteName,
    alternateName: organization.shortName,
    url: defaultSeo.siteUrl,
    inLanguage: 'en-PK',
    publisher: {
      '@type': 'Organization',
      name: organization.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(defaultSeo.image),
      },
    },
  };
}

export default function Seo({
  title = defaultSeo.title,
  description = defaultSeo.description,
  path,
  image = defaultSeo.image,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const location = useLocation();
  const canonicalUrl = absoluteUrl(path ?? location.pathname);
  const imageUrl = absoluteUrl(image);
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
  const structuredData = [organizationJsonLd(), websiteJsonLd(), jsonLd].filter(Boolean);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={defaultSeo.keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={defaultSeo.siteName} />
      <meta property="og:locale" content={defaultSeo.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${organization.shortName} logo`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

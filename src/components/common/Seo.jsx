import { Helmet } from 'react-helmet-async';
import { defaultSeo } from '../../data/seo.js';

export default function Seo({ title = defaultSeo.title, description = defaultSeo.description, type = 'website' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={defaultSeo.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
}

export const articles = [
  {
    slug: 'systematic-inequality',
    title: 'Systematic Inequality',
    seoTitle: 'Systematic Inequality | CLAP Article by Riaz Anjum',
    subtitle: 'Constitutional Promises, Minority Rights and the Struggle for Equal Citizenship in Pakistan',
    author: 'Riaz Anjum, Advocate High Court, President CLAP',
    authorName: 'Riaz Anjum',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
    excerpt:
      'Systematic Inequality is a CLAP article by Advocate Riaz Anjum on Pakistan constitutional promises, minority rights, religious freedom, and equal citizenship.',
    keywords:
      'Systematic Inequality CLAP, Systematic Inequality, CLAP article, Riaz Anjum, Christian Lawyers Association in Pakistan, minority rights Pakistan, constitutional equality Pakistan, religious freedom Pakistan, equal citizenship Pakistan',
    path: '/articles/systematic-inequality',
    source: '/articles/systematic-inequality/systematic-inequality.md',
    image: '/articles/systematic-inequality/feature%20image.jfif',
    imageAlt: 'Systematic Inequality article by CLAP President Riaz Anjum',
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug) ?? null;
}
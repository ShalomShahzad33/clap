import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import ArticleContent from '../components/common/ArticleContent.jsx';
import Button from '../components/common/Button.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { getArticleBySlug } from '../data/articles.js';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [content, setContent] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!article) return;

    let active = true;
    setFailed(false);
    fetch(article.source)
      .then((response) => {
        if (!response.ok) throw new Error('Article not found');
        return response.text();
      })
      .then((text) => {
        if (active) setContent(text);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const canonicalUrl = `https://www.clappakistan.org${article.path}`;
  const imageUrl = `https://www.clappakistan.org${article.image}`;

  return (
    <>
      <Seo
        title={article.seoTitle}
        description={article.excerpt}
        path={article.path}
        image={article.image}
        imageAlt={article.imageAlt}
        type="article"
        keywords={article.keywords}
        author={article.authorName}
        publishedTime={article.datePublished}
        modifiedTime={article.dateModified}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
            headline: article.title,
            alternativeHeadline: article.subtitle,
            name: `${article.title} - CLAP`,
            description: article.excerpt,
            image: [imageUrl],
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            inLanguage: 'en-PK',
            articleSection: 'Legal analysis',
            keywords: article.keywords,
            author: {
              '@type': 'Person',
              name: article.authorName,
              jobTitle: 'President CLAP',
              affiliation: {
                '@type': 'Organization',
                name: 'Christian Lawyers Association in Pakistan',
                alternateName: 'CLAP',
                url: 'https://www.clappakistan.org/',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Christian Lawyers Association in Pakistan',
              alternateName: 'CLAP',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.clappakistan.org/logo.png',
              },
            },
            url: canonicalUrl,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.clappakistan.org/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Articles',
                item: 'https://www.clappakistan.org/articles',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: canonicalUrl,
              },
            ],
          },
        ]}
      />
      <PageHero eyebrow="CLAP Article" title={article.title} description={article.subtitle} />
      <section className="py-20">
        <Container className="max-w-4xl">
          <Button to="/articles" variant="text" className="mb-8 justify-start px-0">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Articles
          </Button>
          <img
            src={article.image}
            alt={article.imageAlt}
            className="mb-8 max-h-[520px] w-full rounded-lg object-contain"
          />
          <article className="rounded-lg border border-clap-border bg-white/[0.04] p-6 shadow-soft sm:p-8">
            <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-clap-sky">{article.author}</p>
            {failed ? (
              <p className="leading-8 text-clap-muted">This article could not be loaded right now.</p>
            ) : content ? (
              <ArticleContent content={content} />
            ) : (
              <p className="leading-8 text-clap-muted">Loading article...</p>
            )}
          </article>
        </Container>
      </section>
    </>
  );
}
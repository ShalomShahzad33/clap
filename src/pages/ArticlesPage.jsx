import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { articles } from '../data/articles.js';
import { pageSeo } from '../data/seo.js';

export default function ArticlesPage() {
  return (
    <>
      <Seo {...pageSeo.articles} />
      <PageHero
        eyebrow="Articles"
        title="Legal writing, analysis, and public advocacy."
        description="Articles from CLAP leadership on constitutional rights, minority protections, human rights, and equal citizenship in Pakistan."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={article.path}
                className="focus-ring overflow-hidden rounded-lg border border-clap-border bg-white/[0.04] shadow-soft transition hover:border-clap-sky/60 hover:bg-white/[0.06]"
              >
                <img src={article.image} alt={article.imageAlt} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-clap-sky">Article</p>
                  <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-clap-text">{article.title}</h2>
                  <p className="mt-2 text-lg font-semibold text-clap-text">{article.subtitle}</p>
                  <p className="mt-4 text-sm font-semibold text-clap-sky">{article.author}</p>
                  <p className="mt-4 leading-7 text-clap-muted">{article.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clap-sky">
                    Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
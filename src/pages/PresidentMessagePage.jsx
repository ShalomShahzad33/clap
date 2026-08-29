import Button from '../components/common/Button.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { cabinetMembers } from '../data/cabinet.js';
import { presidentMessage } from '../data/presidentMessage.js';
import { pageSeo } from '../data/seo.js';

const president = cabinetMembers.find((member) => member.slug === 'riaz-anjum');

export default function PresidentMessagePage() {
  return (
    <>
      <Seo
        {...pageSeo.presidentMessage}
        image={president?.image ?? '/logo.png'}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: presidentMessage.title,
          description: pageSeo.presidentMessage.description,
          author: {
            '@type': 'Person',
            name: presidentMessage.name,
            jobTitle: 'President',
            image: president?.image ? `https://www.clappakistan.org${president.image}` : undefined,
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
          url: 'https://www.clappakistan.org/president-message',
        }}
      />
      <PageHero
        eyebrow="President Message"
        title={presidentMessage.title}
        description="A message from Riaz Anjum, President of Christian Lawyers Association in Pakistan."
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            {president?.image && (
              <img
                className="h-auto w-full rounded-lg border border-clap-border bg-clap-navy object-contain shadow-soft"
                src={president.image}
                alt={`Portrait of ${president.name}`}
              />
            )}
            <div className="mt-5 rounded-lg border border-clap-border bg-white/[0.04] p-5">
              <h2 className="font-serif text-2xl font-bold text-clap-text">{presidentMessage.name}</h2>
              <div className="mt-3 text-sm font-semibold leading-7 text-clap-sky">
                {presidentMessage.signature.slice(1).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <Button to="/our-cabinet/riaz-anjum" variant="text" className="mt-4 justify-start px-0">
                View full profile
              </Button>
            </div>
          </aside>

          <article className="rounded-lg border border-clap-border bg-white/[0.04] p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 text-lg leading-8 text-clap-text">
              {presidentMessage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-clap-border pt-6 text-sm font-semibold leading-7 text-clap-sky">
              {presidentMessage.signature.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
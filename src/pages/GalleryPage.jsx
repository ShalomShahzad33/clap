import { Link } from 'react-router-dom';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { galleryFolders } from '../data/gallery.js';
import { pageSeo } from '../data/seo.js';

export default function GalleryPage() {
  return (
    <>
      <Seo {...pageSeo.gallery} />
      <PageHero
        eyebrow="Gallery"
        title="Moments from CLAP programs and service."
        description="Photographs from CLAP events, legal awareness programs, community service, and organizational meetings."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {galleryFolders.map((folder) => (
              <Link
                key={folder.id}
                to={folder.path}
                className="focus-ring overflow-hidden rounded-lg border border-clap-border bg-white/[0.04] shadow-soft"
              >
                <img
                  className="h-72 w-full bg-clap-navy object-contain"
                  src={folder.coverImage}
                  alt={folder.coverAlt}
                />
                <div className="p-5">
                  <h2 className="font-serif text-2xl font-bold text-clap-text">{folder.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

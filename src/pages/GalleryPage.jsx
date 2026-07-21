import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { galleryItems } from '../data/gallery.js';
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
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => (
              <div key={item.id} className="mb-6 break-inside-avoid">
                <img
                  className="h-auto w-full"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

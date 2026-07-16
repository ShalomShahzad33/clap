import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { galleryFolders } from '../data/gallery.js';
import { pageSeo } from '../data/seo.js';

const oathTakingFolder = galleryFolders.find((folder) => folder.id === 'oath-taking-ceremony');

export default function GalleryFolderPage() {
  return (
    <>
      <Seo title={`${oathTakingFolder.title} | ${pageSeo.gallery.title}`} description={pageSeo.gallery.description} />
      <PageHero
        eyebrow="Gallery"
        title={oathTakingFolder.title}
        description="Photographs from the CLAP Oath Taking Ceremony."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {oathTakingFolder.items.map((item) => (
              <img
                key={item.id}
                className="h-auto max-h-[520px] w-full object-contain"
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

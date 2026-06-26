import { useMemo, useState } from 'react';
import Container from '../components/common/Container.jsx';
import GalleryCard from '../components/common/GalleryCard.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { galleryCategories, galleryItems } from '../data/gallery.js';
import { pageSeo } from '../data/seo.js';
import { cn } from '../utils/cn.js';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredItems = useMemo(
    () => (activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <Seo {...pageSeo.gallery} />
      <PageHero
        eyebrow="Gallery"
        title="Moments from CLAP programs and service."
        description="A lightbox-ready gallery structure for future official photographs, currently using descriptive placeholder records."
      />
      <section className="py-20">
        <Container>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Gallery categories">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={cn(
                  'focus-ring rounded-md border border-clap-border px-4 py-2 text-sm font-semibold text-clap-muted transition hover:text-clap-text',
                  activeCategory === category && 'border-clap-gold bg-clap-gold text-clap-navy hover:text-clap-navy',
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <GalleryCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

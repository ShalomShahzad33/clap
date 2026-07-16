import { useState } from 'react';
import Container from '../components/common/Container.jsx';
import GalleryCard from '../components/common/GalleryCard.jsx';
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

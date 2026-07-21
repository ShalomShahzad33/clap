import { Navigate, useParams } from 'react-router-dom';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import { getGalleryFolderById } from '../data/gallery.js';
import { pageSeo } from '../data/seo.js';

export default function GalleryFolderPage() {
  const { folderId } = useParams();
  const folder = getGalleryFolderById(folderId);

  if (!folder) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo title={`${folder.title} | ${pageSeo.gallery.title}`} description={pageSeo.gallery.description} />
      <PageHero eyebrow="Gallery" title={folder.title} description="Photographs from CLAP events and community moments." />
      <section className="py-20">
        <Container>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {folder.items.map((item) => (
              <div key={item.id} className="mb-6 break-inside-avoid">
                <img className="h-auto w-full" src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

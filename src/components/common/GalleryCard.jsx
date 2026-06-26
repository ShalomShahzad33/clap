import Card from './Card.jsx';
import ImagePlaceholder from './ImagePlaceholder.jsx';

export default function GalleryCard({ item }) {
  return (
    <Card interactive className="p-3">
      <ImagePlaceholder label={item.alt} />
      <div className="p-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-clap-gold">{item.category}</p>
        <h3 className="mt-2 font-serif text-lg font-bold text-clap-text">{item.title}</h3>
      </div>
    </Card>
  );
}

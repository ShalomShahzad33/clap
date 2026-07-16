import Card from './Card.jsx';
import ImagePlaceholder from './ImagePlaceholder.jsx';

export default function GalleryCard({ item }) {
  return (
    <Card interactive className="overflow-hidden p-0">
      {item.src ? (
        <img className="aspect-[4/3] w-full object-cover" src={item.src} alt={item.alt} loading="lazy" />
      ) : (
        <ImagePlaceholder label={item.alt} />
      )}
      <div className="p-4">
        <h3 className="font-serif text-lg font-bold text-clap-text">{item.title}</h3>
      </div>
    </Card>
  );
}

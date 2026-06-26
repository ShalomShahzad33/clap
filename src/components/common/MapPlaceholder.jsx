import { MapPinned } from 'lucide-react';

export default function MapPlaceholder() {
  return (
    <div className="flex min-h-80 items-center justify-center rounded-lg border border-clap-border bg-clap-elevated p-6 text-center">
      <div>
        <MapPinned className="mx-auto mb-4 h-10 w-10 text-clap-gold" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold text-clap-text">Map Location</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-clap-muted">
          Google Maps integration can be connected here once the official office location and embed key are confirmed.
        </p>
      </div>
    </div>
  );
}

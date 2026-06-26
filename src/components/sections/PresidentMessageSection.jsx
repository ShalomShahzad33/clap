import { Quote } from 'lucide-react';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { presidentMessage } from '../../data/presidentMessage.js';

export default function PresidentMessageSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader eyebrow="President Message" title={presidentMessage.title} />
          <Card className="relative overflow-hidden">
            <Quote className="mb-5 h-9 w-9 text-clap-gold" aria-hidden="true" />
            <p className="font-serif text-2xl leading-10 text-clap-text">{presidentMessage.quote}</p>
            <p className="mt-6 text-sm font-semibold text-clap-gold">{presidentMessage.name}</p>
            {presidentMessage.isPlaceholder && (
              <p className="mt-3 text-xs uppercase tracking-widest text-clap-muted">Placeholder content</p>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}

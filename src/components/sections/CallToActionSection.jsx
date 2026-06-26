import { ArrowRight } from 'lucide-react';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';

export default function CallToActionSection() {
  return (
    <section className="bg-clap-slate py-16">
      <Container>
        <div className="grid gap-6 rounded-lg border border-clap-border bg-clap-navy p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-black text-clap-text">Join the work for justice and dignity.</h2>
            <p className="mt-3 max-w-2xl text-clap-muted">
              Contact CLAP for membership inquiries, collaboration, legal awareness activities, and community service.
            </p>
          </div>
          <Button to="/contact">
            Contact CLAP <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

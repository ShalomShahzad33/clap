import Button from '../components/common/Button.jsx';
import Container from '../components/common/Container.jsx';
import Seo from '../components/common/Seo.jsx';
import { pageSeo } from '../data/seo.js';

export default function NotFoundPage() {
  return (
    <>
      <Seo {...pageSeo.notFound} />
      <section className="min-h-[60vh] py-24">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-clap-gold">404</p>
          <h1 className="mt-4 font-serif text-4xl font-black text-clap-text">Page not found</h1>
          <p className="mt-4 text-clap-muted">The requested CLAP page does not exist or has moved.</p>
          <Button to="/" className="mt-8">
            Return Home
          </Button>
        </Container>
      </section>
    </>
  );
}

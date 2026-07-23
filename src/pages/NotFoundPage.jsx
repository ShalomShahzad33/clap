import { ArrowRight, Home, Mail, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import Container from '../components/common/Container.jsx';
import Seo from '../components/common/Seo.jsx';
import { navigationLinks } from '../constants/navigation.js';
import { pageSeo } from '../data/seo.js';

export default function NotFoundPage() {
  const helpfulLinks = navigationLinks.filter((link) => link.path !== '/');

  return (
    <>
      <Seo {...pageSeo.notFound} />
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-clap-border">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.84),rgba(0,0,0,0.56)),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.78)),url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-16">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-clap-border bg-white/5 px-4 py-2 text-sm font-semibold text-clap-sky">
                <Scale className="h-4 w-4" aria-hidden="true" />
                Page Not Found
              </div>
              <p className="mt-8 font-serif text-8xl font-black leading-none text-clap-sky sm:text-9xl">404</p>
              <h1 className="mt-6 max-w-3xl font-serif text-4xl font-black leading-tight text-clap-text sm:text-5xl">
                This page is outside the record.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-clap-muted">
                The link may be outdated, mistyped, or moved during a site update. Use the links below to continue with CLAP pages that are available.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/">
                  <Home className="h-4 w-4" aria-hidden="true" />
                  Return Home
                </Button>
                <Button to="/contact" variant="secondary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact CLAP
                </Button>
              </div>
            </div>

            <nav className="rounded-lg border border-clap-border bg-white/[0.04] p-6 shadow-soft" aria-label="Helpful pages">
              <h2 className="font-serif text-2xl font-bold text-clap-text">Helpful pages</h2>
              <div className="mt-5 grid gap-3">
                {helpfulLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="focus-ring flex items-center justify-between rounded-md border border-clap-border bg-white/5 px-4 py-3 text-sm font-semibold text-clap-muted transition hover:border-clap-sky/60 hover:text-clap-text"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-clap-sky" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </Container>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import Container from '../common/Container.jsx';
import { navigationLinks } from '../../constants/navigation.js';
import { organization } from '../../constants/organization.js';

export default function Footer() {
  return (
    <footer className="border-t border-clap-border bg-clap-slate">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-black text-clap-text">{organization.shortName}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-clap-muted">{organization.summary}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-clap-gold">Quick Links</h2>
          <nav className="mt-4 grid gap-2" aria-label="Footer navigation">
            {navigationLinks.map((link) => (
              <Link key={link.path} to={link.path} className="focus-ring rounded-md text-sm text-clap-muted hover:text-clap-text">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-clap-gold">Contact</h2>
          <div className="mt-4 grid gap-2 text-sm text-clap-muted">
            <a className="focus-ring rounded-md hover:text-clap-text" href={`mailto:${organization.email}`}>
              {organization.email}
            </a>
            <a className="focus-ring rounded-md hover:text-clap-text" href={`tel:${organization.phone.replaceAll(' ', '')}`}>
              {organization.phone}
            </a>
            <span>{organization.address}</span>
          </div>
        </div>
      </Container>
      <Container className="border-t border-clap-border py-5 text-sm text-clap-muted">
        <p>© {new Date().getFullYear()} {organization.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}

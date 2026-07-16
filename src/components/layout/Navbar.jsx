import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu.jsx';
import Container from '../common/Container.jsx';
import { navigationLinks } from '../../constants/navigation.js';
import { organization } from '../../constants/organization.js';
import { cn } from '../../utils/cn.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-clap-border bg-clap-navy lg:bg-clap-navy/90 lg:backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <img className="h-12 w-12 rounded-md object-contain" src="/logo.png" alt={`${organization.shortName} logo`} />
          <span className="hidden max-w-64 font-serif text-lg font-black leading-tight text-clap-text sm:block">
            {organization.name}
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'focus-ring rounded-md px-4 py-2 text-sm font-semibold text-clap-muted transition hover:text-clap-text',
                  isActive && 'bg-white/5 text-clap-gold',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-clap-border text-clap-text lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>
      <AnimatePresence>
        {open && <MobileMenu pathname={location.pathname} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

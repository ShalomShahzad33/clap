import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { mobileMenuPanel } from '../../animations/variants.js';
import { navigationLinks } from '../../constants/navigation.js';
import { organization } from '../../constants/organization.js';
import { cn } from '../../utils/cn.js';

export default function MobileMenu({ pathname, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-clap-navy/75 lg:hidden" id="mobile-navigation">
      <motion.div
        className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-clap-border bg-clap-slate p-5 shadow-soft"
        variants={mobileMenuPanel}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={onClose}>
            <img className="h-11 w-11 rounded-md object-contain" src="/logo.png" alt={`${organization.shortName} logo`} />
            <span className="font-serif text-lg font-black text-clap-text">{organization.shortName}</span>
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-clap-border"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="mt-10 grid gap-2" aria-label="Mobile navigation">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={cn(
                'focus-ring rounded-md px-4 py-3 text-base font-semibold text-clap-muted',
                pathname === link.path && 'bg-white/5 text-clap-gold',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}

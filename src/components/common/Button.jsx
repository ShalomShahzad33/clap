import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

const variants = {
  primary: 'bg-clap-gold text-clap-navy hover:bg-clap-goldSoft',
  secondary: 'border border-clap-border bg-white/5 text-clap-text hover:border-clap-gold/60 hover:bg-white/10',
  text: 'text-clap-gold hover:text-clap-goldSoft',
};

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = cn(
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition',
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

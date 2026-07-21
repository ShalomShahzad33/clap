import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

const variants = {
  primary: 'bg-clap-sky text-clap-navy hover:bg-clap-skySoft',
  secondary: 'border border-clap-sky/60 bg-white/5 text-clap-text hover:bg-clap-sky/10',
  text: 'text-clap-sky hover:text-clap-skySoft',
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

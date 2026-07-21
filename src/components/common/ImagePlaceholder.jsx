import { Scale } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={cn(
        'flex min-h-56 items-center justify-center overflow-hidden rounded-lg border border-clap-border bg-gradient-to-br from-clap-elevated via-clap-slate to-clap-navy',
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-3 text-center text-clap-muted">
        <Scale className="h-10 w-10 text-clap-sky" aria-hidden="true" />
        <span className="px-5 text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}

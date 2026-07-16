import ImagePlaceholder from './ImagePlaceholder.jsx';
import { cn } from '../../utils/cn.js';

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
}

export default function MemberPortrait({ member, size = 'card' }) {
  const isLarge = size === 'detail';

  if (member.image) {
    return (
      <img
        className={cn(
          'rounded-lg border border-clap-border object-cover',
          isLarge ? 'aspect-[4/5] w-full max-w-sm' : 'h-20 w-20 shrink-0',
        )}
        src={member.image}
        alt={`Portrait of ${member.name}`}
      />
    );
  }

  if (isLarge) {
    return <ImagePlaceholder label={`Portrait of ${member.name}`} className="aspect-[4/5] min-h-80 w-full max-w-sm" />;
  }

  return (
    <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-clap-border bg-clap-navy text-xl font-bold text-clap-gold md:mb-0">
      {getInitials(member.name)}
    </div>
  );
}

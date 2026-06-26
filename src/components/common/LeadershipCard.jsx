import Card from './Card.jsx';

export default function LeadershipCard({ member, featured = false }) {
  return (
    <Card className={featured ? 'md:flex md:items-center md:gap-6' : ''} interactive>
      <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-clap-border bg-clap-navy text-xl font-bold text-clap-gold md:mb-0">
        {member.name
          .split(' ')
          .map((part) => part[0])
          .join('')
          .slice(0, 2)}
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold text-clap-text">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-clap-gold">{member.role}</p>
        <p className="mt-3 text-sm text-clap-muted">{member.location}</p>
      </div>
    </Card>
  );
}

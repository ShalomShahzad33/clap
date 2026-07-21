import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import MemberPortrait from './MemberPortrait.jsx';

export default function LeadershipCard({ member, featured = false }) {
  return (
    <Link to={`/our-cabinet/${member.slug}`} className="focus-ring block rounded-lg">
      <Card className={featured ? 'md:flex md:items-center md:gap-6' : ''} interactive>
        <MemberPortrait member={member} />
        <div>
          <h3 className="font-serif text-xl font-bold text-clap-text">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-clap-sky">{member.role}</p>
          <p className="mt-3 text-sm text-clap-muted">{member.location}</p>
          <p className="mt-4 text-sm font-semibold text-clap-sky">View profile</p>
        </div>
      </Card>
    </Link>
  );
}

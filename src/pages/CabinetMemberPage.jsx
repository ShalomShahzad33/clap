import { ArrowLeft } from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import Container from '../components/common/Container.jsx';
import MemberPortrait from '../components/common/MemberPortrait.jsx';
import Seo from '../components/common/Seo.jsx';
import { getCabinetMemberBySlug } from '../data/cabinet.js';

export default function CabinetMemberPage() {
  const { slug } = useParams();
  const member = getCabinetMemberBySlug(slug);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={`${member.name} | Our Cabinet | CLAP`}
        description={`${member.role} of Christian Lawyers Association in Pakistan.`}
      />
      <section className="py-20">
        <Container className="max-w-5xl">
          <Button to="/our-cabinet" variant="text" className="mb-8 justify-start px-0">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Our Cabinet
          </Button>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start">
            <MemberPortrait member={member} size="detail" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-clap-sky">{member.group}</p>
              <h1 className="mt-3 font-serif text-4xl font-black text-clap-text">{member.name}</h1>
              <p className="mt-2 text-lg font-semibold text-clap-sky">{member.role}</p>
              <p className="mt-2 text-sm text-clap-muted">{member.location}</p>

              <div className="mt-8 grid gap-4 border-t border-clap-border pt-8 text-base leading-8 text-clap-muted">
                {member.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

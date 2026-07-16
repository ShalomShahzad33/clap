import Container from '../common/Container.jsx';
import LeadershipCard from '../common/LeadershipCard.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { cabinetMembers } from '../../data/cabinet.js';

const groups = ['President', 'Vice Presidents', 'General Secretary', 'Joint Secretary', 'Finance Secretary', 'Executive Members'];

export default function CabinetSection() {
  return (
    <section className="py-20">
      <Container className="grid gap-12">
        {groups.map((group) => {
          const members = cabinetMembers.filter((member) => member.group === group);
          return (
            <div key={group}>
              <SectionHeader title={group} />
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {members.map((member, index) => (
                  <LeadershipCard key={member.slug} member={member} featured={group === 'President'} />
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

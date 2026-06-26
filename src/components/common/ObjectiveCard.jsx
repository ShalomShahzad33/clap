import Card from './Card.jsx';

export default function ObjectiveCard({ objective }) {
  const Icon = objective.icon;

  return (
    <Card interactive>
      <Icon className="mb-5 h-8 w-8 text-clap-gold" aria-hidden="true" />
      <h3 className="font-serif text-xl font-bold text-clap-text">{objective.title}</h3>
      <p className="mt-3 text-sm leading-6 text-clap-muted">{objective.description}</p>
    </Card>
  );
}

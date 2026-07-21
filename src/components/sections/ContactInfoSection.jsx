import Card from '../common/Card.jsx';
import { contactMethods } from '../../data/contact.js';

export default function ContactInfoSection() {
  return (
    <div className="grid gap-4">
      {contactMethods.map((method) => {
        const Icon = method.icon;
        const content = (
          <Card className="flex items-start gap-4">
            <Icon className="mt-1 h-6 w-6 shrink-0 text-clap-sky" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-clap-sky">{method.label}</h2>
              <p className="mt-2 text-clap-muted">{method.value}</p>
            </div>
          </Card>
        );
        return method.href ? (
          <a key={method.label} href={method.href} className="focus-ring rounded-lg">
            {content}
          </a>
        ) : (
          <div key={method.label}>{content}</div>
        );
      })}
    </div>
  );
}

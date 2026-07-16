import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { presidentMessage } from '../../data/presidentMessage.js';
import { cn } from '../../utils/cn.js';

export default function PresidentMessageSection() {
  const [expanded, setExpanded] = useState(false);
  const previewCount = presidentMessage.previewParagraphCount ?? 2;
  const hasMore = presidentMessage.paragraphs.length > previewCount;
  const visibleParagraphs = expanded ? presidentMessage.paragraphs : presidentMessage.paragraphs.slice(0, previewCount);

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow="President Message" title={presidentMessage.title} />
          <Card className="relative overflow-hidden">
            <div className="grid gap-4 text-lg leading-8 text-clap-text">
              {visibleParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {hasMore && (
              <Button
                type="button"
                variant="text"
                className="mt-4 justify-start px-0"
                aria-expanded={expanded}
                onClick={() => setExpanded((current) => !current)}
              >
                {expanded ? 'Read less' : 'Read more'}
                <ChevronDown className={cn('h-4 w-4 transition', expanded && 'rotate-180')} aria-hidden="true" />
              </Button>
            )}

            {expanded && (
              <div className="mt-8 border-t border-clap-border pt-6 text-sm leading-7 text-clap-gold">
                {presidentMessage.signature.map((line) => (
                  <p key={line} className="font-semibold">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}

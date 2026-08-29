function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

export default function ArticleContent({ content }) {
  const lines = content.split('\n');
  const elements = [];
  let listItems = [];

  function flushList() {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`list-${elements.length}`} className="my-6 list-disc space-y-2 pl-6 text-clap-muted">
        {listItems.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line === '---') {
      flushList();
      elements.push(<hr key={`hr-${index}`} className="my-8 border-clap-border" />);
      return;
    }

    if (line.startsWith('* ')) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={index} className="font-serif text-4xl font-black leading-tight text-clap-text sm:text-5xl">
          {renderInline(line.slice(2))}
        </h1>,
      );
      return;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={index} className="mt-10 font-serif text-3xl font-bold leading-tight text-clap-text">
          {renderInline(line.slice(3))}
        </h2>,
      );
      return;
    }

    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={index} className="my-6 border-l-4 border-clap-sky bg-white/[0.04] px-5 py-4 text-lg font-semibold leading-8 text-clap-text">
          {renderInline(line.slice(2))}
        </blockquote>,
      );
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      elements.push(
        <p key={index} className="leading-8 text-clap-muted">
          {renderInline(line)}
        </p>,
      );
      return;
    }

    elements.push(
      <p key={index} className="leading-8 text-clap-muted">
        {renderInline(line)}
      </p>,
    );
  });

  flushList();

  return <div className="grid gap-5">{elements}</div>;
}
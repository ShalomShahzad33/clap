export default function FormField({ id, label, error, as = 'input', className = '', ...props }) {
  const Field = as;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-clap-text">
        {label}
      </label>
      <Field
        id={id}
        className="focus-ring w-full rounded-md border border-clap-border bg-clap-navy/70 px-4 py-3 text-clap-text placeholder:text-clap-muted"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-clap-skySoft">
          {error}
        </p>
      )}
    </div>
  );
}

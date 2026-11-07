export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${light ? "text-primary" : "text-secondary"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-3 text-base ${light ? "text-white/80" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

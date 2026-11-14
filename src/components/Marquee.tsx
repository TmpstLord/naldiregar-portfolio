export default function Marquee({ items }: { items: string[] }) {
  // Daftar digandakan supaya animasi drift berulang tanpa putus
  const row = [...items, ...items];

  return (
    <div
      role="group"
      className="drift-wrap overflow-hidden border-y border-[var(--line)] bg-[var(--deck)] py-6"
      aria-label={`Teknologi utama: ${items.join(", ")}`}
    >
      <div className="drift flex w-max" aria-hidden>
        {row.map((tech, i) => (
          <span
            key={i}
            className="display flex items-center pr-12 text-4xl sm:text-6xl"
          >
            {tech}
            <span
              aria-hidden
              className="ml-12 h-2.5 w-2.5 shrink-0 rotate-45 bg-[var(--bolt)] sm:h-3 sm:w-3"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

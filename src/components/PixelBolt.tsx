// Ikon kilat bergaya pixel, digambar dari kotak 1x1 supaya tajam di semua ukuran.
const BOLT = [
  "....XX",
  "...XX.",
  "..XX..",
  ".XXXXX",
  "...XX.",
  "..XX..",
  ".XX...",
  ".X....",
];

export default function PixelBolt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 6 8"
      shapeRendering="crispEdges"
      aria-hidden
      className={className}
      fill="var(--bolt)"
    >
      {BOLT.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "X" ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
          ) : null,
        ),
      )}
    </svg>
  );
}

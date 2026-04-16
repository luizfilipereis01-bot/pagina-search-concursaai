export function Scanlines() {
  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none mix-blend-overlay"
      style={{
        background: "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 3px)",
      }}
      aria-hidden="true"
    />
  );
}

export function Noise() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      }}
      aria-hidden="true"
    />
  );
}

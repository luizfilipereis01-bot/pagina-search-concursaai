export function VideoShowcase() {
  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            Veja na pratica!
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-5 tracking-tight mt-2">
            Veja a IA <span className="gradient-text">em execucao</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[620px] mx-auto">
            Essa e a IA que vai te colocar na lista de aprovados!
          </p>
        </div>

        <div className="relative max-w-[380px] mx-auto mt-12">
          {/* Glow effects */}
          <div className="absolute w-[120px] h-[120px] bg-y400 rounded-full blur-[80px] opacity-35 -top-8 -left-10 pointer-events-none" />
          <div className="absolute w-[120px] h-[120px] bg-c400 rounded-full blur-[80px] opacity-35 -bottom-8 -right-10 pointer-events-none" />
          
          <div className="relative aspect-[9/16] w-full bg-bg-card border border-border-accent rounded-[22px] overflow-hidden shadow-[0_0_40px_rgba(243,230,0,0.12),0_0_40px_rgba(248,124,86,0.08),0_30px_80px_rgba(0,0,0,0.5)] z-10">
            <iframe
              src="https://www.youtube.com/embed/YCcv0o6CghA?autoplay=0&mute=1&loop=1&playlist=YCcv0o6CghA&controls=1&rel=0&modestbranding=1&playsinline=1"
              title="Concursa AI — Demonstracao"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

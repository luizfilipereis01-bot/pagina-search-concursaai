import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export function FinalCTA() {
  return (
    <section className="py-32 text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(243,230,0,0.08),transparent_60%)] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="font-mono text-[0.75rem] text-muted tracking-widest mb-4">
          PRONTO PARA COMECAR?
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4 tracking-tight">
          Sua aprovacao comeca com{" "}
          <span className="gradient-text">inteligencia artificial</span>
        </h2>
        <p className="text-lg text-text-secondary mb-10 max-w-[560px] mx-auto leading-relaxed">
          Pare de estudar no escuro. Deixe a IA mostrar o caminho mais rapido para o seu cargo publico.
        </p>
        <Link
          href="https://pay.hub.la/YY70fYb2WcWVNJwNKXFV/?utm_source=search&utm_campaign=search"
          className="group inline-flex items-center gap-2.5 px-11 py-6 bg-gradient-to-br from-y400 to-y500 text-n900 font-mono font-bold text-base rounded-lg uppercase tracking-wider relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(243,230,0,0.35)] transition-all"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          COMECAR AGORA!
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

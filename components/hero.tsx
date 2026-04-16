"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SearchIcon, MicIcon, CameraIcon, StarIcon, ChipIcon, PulseIcon } from "./icons";
import { TypedSearch } from "./typed-search";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 lg:pb-0 relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(243,230,0,0.18),transparent)] rounded-full blur-[120px] opacity-30 -top-36 -right-24 animate-orb-float" />
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(248,124,86,0.15),transparent)] rounded-full blur-[120px] opacity-30 -bottom-24 -left-36 animate-orb-float [animation-delay:-5s]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-y400/5 border border-border-accent rounded-md font-mono text-[0.72rem] text-y400 mb-7 tracking-wide">
              <span className="w-2 h-2 bg-[#9FE870] rounded-full animate-pulse-glow shadow-[0_0_10px_#9FE870]" />
              STATUS: <span className="text-[#9FE870]">MELHOR IA PARA CONCURSO PUBLICO</span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.08] mb-6 tracking-tight text-n100">
              Passe no{" "}
              <span className="gradient-text">proximo concurso</span> que fizer, utilizando essa{" "}
              <span className="glitch relative inline-block" data-text="IA">IA</span>{" "}
              feita para <span className="gradient-text">concurseiros!</span>
            </h1>

            <p className="text-lg text-text-secondary mb-9 leading-relaxed max-w-[520px] mx-auto lg:mx-0">
              Funciona para <strong className="text-y400">Qualquer Banca</strong> • Funciona para{" "}
              <strong className="text-y400">Qualquer Concurso</strong> •{" "}
              <strong className="text-c400">100x mais potente</strong> que o ChatGPT
            </p>

            <div className="flex flex-wrap gap-3.5 mb-11 justify-center lg:justify-start">
              <Link
                href="https://pay.hub.la/YY70fYb2WcWVNJwNKXFV/?utm_source=search&utm_campaign=search"
                className="group inline-flex items-center gap-2.5 px-10 py-5 bg-gradient-to-br from-y400 to-y500 text-n900 font-mono font-bold text-[0.95rem] rounded-lg uppercase tracking-wider relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(243,230,0,0.35)] transition-all"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                COMECAR AGORA!
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex gap-9 justify-center lg:justify-start">
              <div className="border-l-2 border-y400 pl-4">
                <div className="text-2xl font-extrabold text-y400 font-mono">+5.000</div>
                <div className="text-[0.72rem] text-muted font-mono uppercase tracking-widest mt-0.5">usuarios ativos</div>
              </div>
              <div className="border-l-2 border-y400 pl-4">
                <div className="text-2xl font-extrabold text-y400 font-mono">100%</div>
                <div className="text-[0.72rem] text-muted font-mono uppercase tracking-widest mt-0.5">bancas hackeadas</div>
              </div>
              <div className="border-l-2 border-y400 pl-4">
                <div className="text-2xl font-extrabold text-y400 font-mono">+40 mil</div>
                <div className="text-[0.72rem] text-muted font-mono uppercase tracking-widest mt-0.5">questoes</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex flex-col items-center">
            {/* Floating chips */}
            <div className="absolute -top-4 right-5 lg:right-8 px-3.5 py-2.5 bg-bg-card border border-border-accent rounded-lg font-mono text-[0.72rem] text-y400 shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex items-center gap-2 animate-float z-20">
              <ChipIcon className="w-4 h-4" />
              AI.ENGINE
            </div>
            <div className="absolute -bottom-4 left-5 lg:left-8 px-3.5 py-2.5 bg-bg-card border border-border-accent rounded-lg font-mono text-[0.72rem] text-c400 shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex items-center gap-2 animate-float [animation-delay:-3s] z-20">
              <PulseIcon className="w-4 h-4" />
              BUSCA.IA
            </div>

            {/* Evandro Image */}
            <Image
              src="/images/evandro.png"
              alt="Evandro Guedes — mentor do Concursa AI"
              width={380}
              height={500}
              className="w-full max-w-[380px] h-auto relative z-10 -mb-8 animate-evandro-float drop-shadow-[0_20px_40px_rgba(248,124,86,0.25)]"
              priority
            />

            {/* Search Box */}
            <div className="w-full max-w-[540px] bg-gradient-to-br from-bg-card to-[#1a1712] border border-border-accent rounded-2xl p-8 lg:p-10 relative glow-y glow-c shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-y400 via-transparent to-c400 opacity-30 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              
              <div className="text-center mb-7">
                <Image
                  src="/images/logomarca.png"
                  alt="Concursa AI"
                  width={320}
                  height={80}
                  className="max-w-[320px] w-full h-auto mx-auto drop-shadow-[0_4px_20px_rgba(243,230,0,0.15)]"
                />
              </div>

              <div className="flex items-center gap-3 bg-black/35 border border-border-accent rounded-full px-4 py-3 relative overflow-hidden group hover:border-y400 hover:shadow-[0_0_0_3px_rgba(243,230,0,0.08)] transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-y400/6 to-transparent -translate-x-full animate-search-shine pointer-events-none" />
                <SearchIcon className="w-5 h-5 text-y400 shrink-0" />
                <div className="flex-1 font-sans text-[0.95rem] text-foreground whitespace-nowrap overflow-hidden text-ellipsis min-h-[22px] flex items-center">
                  <TypedSearch />
                </div>
                <div className="flex items-center gap-2.5 shrink-0 pl-2 border-l border-border">
                  <MicIcon className="w-[18px] h-[18px] text-muted cursor-pointer hover:text-y400 transition-colors hidden sm:block" />
                  <CameraIcon className="w-[18px] h-[18px] text-muted cursor-pointer hover:text-y400 transition-colors hidden sm:block" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-br from-y400/12 to-c400/12 border border-border-accent rounded-full font-sans text-[0.72rem] font-semibold text-y400 cursor-pointer whitespace-nowrap">
                    <StarIcon className="w-3 h-3" />
                    Modo IA
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                <span className="font-mono text-[0.68rem] text-muted uppercase tracking-widest mr-1">Em alta:</span>
                {["PRF 2026", "INSS", "Petrobras", "Cebraspe"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 bg-y400/5 border border-border rounded-full font-mono text-[0.72rem] text-y400 hover:bg-y400/10 hover:border-border-accent transition-all cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

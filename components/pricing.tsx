"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, LockIcon, StarIcon, PhoneIcon, UsersIcon, CalendarIcon } from "./icons";
import { useInView } from "./use-in-view";

const commonFeatures = [
  "Planejador de Estudos com IA",
  "Gerador de Resumos Completos",
  "Simulados por Banca",
  "Flashcards Inteligentes",
  "Gerador de Questoes",
  "Painel de Desempenho",
  "Tutor IA 24 horas",
  "Conteudo de Todas as Disciplinas",
];

const eliteBonuses = [
  { icon: StarIcon, text: "1 ano completo de acesso a plataforma" },
  { icon: PhoneIcon, text: "Acesso ao numero privado do mentor de estudos" },
  { icon: UsersIcon, text: "Mentorias de suporte da plataforma seg, qua e sex" },
  { icon: CalendarIcon, text: "Mentorias coletivas todo mes com Evandro Guedes" },
];

export function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section id="preco" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            INVESTIMENTO
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight mt-2">
            Escolha o plano ideal para <span className="gradient-text">sua aprovacao</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-7 mt-16 max-w-[1000px] mx-auto items-stretch">
          {/* Plano Trimestral */}
          <div
            className="p-9 bg-gradient-to-b from-bg-card to-[#1a1712] border border-border-accent rounded-2xl text-center relative overflow-hidden shadow-[0_0_40px_rgba(243,230,0,0.12),0_20px_60px_rgba(0,0,0,0.4)] flex flex-col"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-y400 via-c400 to-y400 bg-[size:200%_auto] animate-shimmer" />
            
            <div className="-mx-9 -mt-9 mb-6 px-5 pt-6 bg-gradient-to-b from-y400/5 to-transparent border-b border-border flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,rgba(243,230,0,0.1),transparent_70%)] pointer-events-none" />
              <Image
                src="/images/oferta-trimestral.png"
                alt="Oferta Plano Trimestral"
                width={400}
                height={220}
                className="max-w-full h-auto max-h-[220px] object-contain relative z-10 drop-shadow-[0_12px_28px_rgba(0,0,0,0.4)] hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-c400/10 border border-c400/25 rounded-md font-mono text-[0.68rem] text-c400 tracking-widest uppercase mb-6 self-center">
              <span className="w-1.5 h-1.5 bg-c400 rounded-full animate-blink" />
              PLANO TRIMESTRAL
            </div>

            <div className="text-base text-muted line-through font-mono mb-1.5">de R$ 1.302,00</div>
            <div className="text-[0.92rem] text-text-secondary mb-1">por apenas 3x de</div>
            <div className="text-[3.4rem] font-black font-mono gradient-text tracking-tight mb-1">R$ 73,51</div>
            <div className="text-[0.78rem] text-muted font-mono mb-8">ou R$ 197,00 a vista</div>

            <ul className="text-left mb-8 flex flex-col gap-2.5 font-mono text-[0.82rem]">
              {commonFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-text-secondary">
                  <CheckIcon className="w-[18px] h-[18px] text-y400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="https://pay.hub.la/YY70fYb2WcWVNJwNKXFV/?utm_source=search&utm_campaign=search"
              className="mt-auto group inline-flex items-center justify-center gap-2.5 w-full px-10 py-5 bg-gradient-to-br from-y400 to-y500 text-n900 font-mono font-bold text-[0.95rem] rounded-lg uppercase tracking-wider relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(243,230,0,0.35)] transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              QUERO O TRIMESTRAL!
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-4 text-[0.72rem] text-muted flex items-center justify-center gap-1.5 font-mono tracking-wide">
              <LockIcon className="w-3.5 h-3.5" />
              Acesso imediato apos a compra
            </div>
          </div>

          {/* Plano Elite */}
          <div
            className="p-9 bg-gradient-to-b from-bg-card to-[#1a1712] border-2 border-y400 rounded-2xl text-center relative overflow-hidden shadow-[0_0_50px_rgba(243,230,0,0.18),0_20px_60px_rgba(0,0,0,0.5)] flex flex-col scale-[1.02] md:scale-100 lg:scale-[1.02]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-y400 via-c400 to-y400 bg-[size:200%_auto] animate-shimmer" />
            
            {/* Popular badge */}
            <div className="absolute top-4 -right-11 rotate-[35deg] bg-gradient-to-r from-y400 to-c400 text-n900 font-extrabold text-[0.68rem] tracking-widest py-1.5 px-12 font-mono uppercase shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-20">
              Mais Escolhido
            </div>

            <div className="-mx-9 -mt-9 mb-6 px-5 pt-6 bg-gradient-to-b from-y400/10 to-transparent border-b border-border flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,rgba(243,230,0,0.1),transparent_70%)] pointer-events-none" />
              <Image
                src="/images/oferta-elite.png"
                alt="Oferta Plano Elite"
                width={400}
                height={220}
                className="max-w-full h-auto max-h-[220px] object-contain relative z-10 drop-shadow-[0_12px_28px_rgba(0,0,0,0.4)] hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-c400/10 border border-c400/25 rounded-md font-mono text-[0.68rem] text-c400 tracking-widest uppercase mb-6 self-center">
              <span className="w-1.5 h-1.5 bg-c400 rounded-full animate-blink" />
              PLANO ELITE — 1 ANO
            </div>

            <div className="text-base text-muted line-through font-mono mb-1.5">de R$ 997,00</div>
            <div className="text-[0.92rem] text-text-secondary mb-1">por apenas 12x de</div>
            <div className="text-[3.4rem] font-black font-mono gradient-text tracking-tight mb-1">R$ 53,26</div>
            <div className="text-[0.78rem] text-muted font-mono mb-8">ou R$ 449,90 a vista</div>

            <ul className="text-left mb-4 flex flex-col gap-2.5 font-mono text-[0.82rem]">
              {commonFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-text-secondary">
                  <CheckIcon className="w-[18px] h-[18px] text-y400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Bonus section */}
            <div className="font-mono text-[0.68rem] text-c400 tracking-widest uppercase font-bold flex items-center justify-center gap-2 mb-3 pt-4 border-t border-dashed border-border-accent">
              <span className="flex-1 h-px bg-c400/30" />
              Bonus Exclusivos
              <span className="flex-1 h-px bg-c400/30" />
            </div>

            <ul className="text-left mb-8 flex flex-col gap-2.5 font-mono text-[0.82rem]">
              {eliteBonuses.map((bonus) => (
                <li key={bonus.text} className="flex items-start gap-3 text-y400">
                  <bonus.icon className="w-[18px] h-[18px] text-c400 shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: bonus.text.replace(/^([^a-z]*[a-z]+[^a-z]*)/i, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>

            <Link
              href="https://pay.hub.la/x7l9XUK89sJOMhyu4RVY?utm_source=search&utm_campaign=search"
              className="mt-auto group inline-flex items-center justify-center gap-2.5 w-full px-10 py-5 bg-gradient-to-br from-y400 to-y500 text-n900 font-mono font-bold text-[0.95rem] rounded-lg uppercase tracking-wider relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(243,230,0,0.35)] transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              QUERO O PLANO ELITE!
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-4 text-[0.72rem] text-muted flex items-center justify-center gap-1.5 font-mono tracking-wide">
              <LockIcon className="w-3.5 h-3.5" />
              Acesso imediato apos a compra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

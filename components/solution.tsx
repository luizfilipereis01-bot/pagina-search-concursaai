"use client";

import { LockIcon, BoltIcon, TrophyIcon } from "./icons";
import { useInView } from "./use-in-view";

const steps = [
  {
    number: "PASSO 01",
    icon: LockIcon,
    title: "Faca seu login",
    description: "Acesse a plataforma em segundos e tenha todas as ferramentas de Inteligencia Artificial a sua disposicao imediatamente.",
    code: "Acesso liberado",
  },
  {
    number: "PASSO 02",
    icon: BoltIcon,
    title: "Use as ferramentas",
    description: "Gere resumos, flashcards, simulados e questoes com IA. Planeje seus estudos com base na sua rotina real.",
    code: "8 ferramentas ativas",
  },
  {
    number: "PASSO 03",
    icon: TrophyIcon,
    title: "Seja aprovado",
    description: "Siga o plano gerado pela IA e domine os conteudos que mais caem. A IA ajusta a rota conforme seu desempenho.",
    code: "Resultado: APROVADO",
  },
];

export function Solution() {
  const { ref, inView } = useInView();

  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            ESSA E A NOVA FORMA DE SER APROVADO!
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-5 tracking-tight mt-2">
            Esses sao os 3 passos para <span className="gradient-text">conquistar sua aprovacao!</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[620px] mx-auto">
            A Inteligencia Artificial e o que vai definir quem estara na lista de aprovados daqueles que terao que estudar mais um ano!
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 mt-16 max-w-[460px] md:max-w-none mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-8 bg-bg-card border border-border rounded-[14px] overflow-hidden hover:border-border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(243,230,0,0.12)] transition-all group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-y400 to-c400 opacity-30 group-hover:opacity-100 transition-opacity" />
              
              <div className="font-mono text-[0.68rem] font-bold tracking-widest text-y400 uppercase mb-5">
                {step.number}
              </div>
              
              <div className="w-[52px] h-[52px] bg-gradient-to-br from-y400/10 to-c400/10 border border-border-accent rounded-xl flex items-center justify-center text-y400 mb-5">
                <step.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-bold font-mono mb-2.5">{step.title}</h3>
              <p className="text-[0.88rem] text-text-secondary leading-relaxed">{step.description}</p>
              
              <div className="mt-4 px-3 py-2.5 bg-black/30 border border-border rounded-md font-mono text-[0.72rem] text-syn-fn">
                {"✓"} {step.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

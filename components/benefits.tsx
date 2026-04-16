"use client";

import { ShieldIcon, ClockIcon, TargetIcon, CalendarIcon, BoltIcon, HomeIcon } from "./icons";
import { useInView } from "./use-in-view";

const benefits = [
  {
    icon: ShieldIcon,
    title: "Estabilidade Financeira",
    description: "Conquiste a seguranca de um cargo publico com salario garantido e previsivel.",
  },
  {
    icon: ClockIcon,
    title: "10x Mais Rapido",
    description: "Memorize conteudos muito mais rapido com flashcards inteligentes e resumos otimizados.",
  },
  {
    icon: TargetIcon,
    title: "Estude o que Cai",
    description: "A IA identifica os assuntos mais cobrados para voce focar no que realmente importa.",
  },
  {
    icon: CalendarIcon,
    title: "Planejamento Realista",
    description: "Cronograma que respeita sua rotina de trabalho, familia e tempo disponivel.",
  },
  {
    icon: BoltIcon,
    title: "Saia na Frente",
    description: "Use tecnologia que 99% dos concurseiros ainda nao conhecem — saia na frente.",
  },
  {
    icon: HomeIcon,
    title: "Realize Seus Sonhos",
    description: "Casa propria, viagens, independencia — tudo comeca com a aprovacao.",
  },
];

export function Benefits() {
  const { ref, inView } = useInView();

  return (
    <section id="beneficios" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            RESULTADOS!
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight mt-2">
            O que voce conquista com o <span className="gradient-text">Concursa AI</span>
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="p-8 bg-bg-card border border-border rounded-[14px] hover:border-border-accent hover:-translate-y-1 transition-all"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 border border-border-accent rounded-xl flex items-center justify-center mb-4 text-y400 bg-y400/5">
                <benefit.icon className="w-[22px] h-[22px]" />
              </div>
              <h3 className="text-base font-bold font-mono mb-2">{benefit.title}</h3>
              <p className="text-[0.84rem] text-text-secondary leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

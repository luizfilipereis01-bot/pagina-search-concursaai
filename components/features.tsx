"use client";

import Image from "next/image";
import { CalendarIcon, FileTextIcon, TargetIcon, CardsIcon, HelpCircleIcon, BarChartIcon, CpuIcon, BookIcon } from "./icons";
import { useInView } from "./use-in-view";

const features = [
  {
    icon: CalendarIcon,
    name: "Planejador de Estudos com IA",
    description: "Cronograma 100% personalizado com base no seu tempo, metas e nivel de preparacao. A IA organiza tudo automaticamente.",
    tag: "Automatico",
    mockup: "/images/mockups/mockup-planejador.webp",
  },
  {
    icon: FileTextIcon,
    name: "Gerador de Resumos Completos",
    description: "Resumos prontos e atualizados em segundos. Qualquer materia, qualquer concurso, direto ao ponto — sem enrolacao.",
    tag: "Instantaneo",
    mockup: "/images/mockups/mockup-resumos.webp",
  },
  {
    icon: TargetIcon,
    name: "Simulados por Banca",
    description: "Provas simuladas no estilo exato da banca do seu concurso. A IA identifica os padroes de cobranca historicos.",
    tag: "Padroes da Banca",
    mockup: "/images/mockups/mockup-simulados.webp",
  },
  {
    icon: CardsIcon,
    name: "Flashcards Inteligentes",
    description: "Decore leis, formulas e detalhes dificeis com flashcards gerados automaticamente no nivel ideal para voce.",
    tag: "Memorizacao",
    mockup: "/images/mockups/mockup-flashcards.webp",
  },
  {
    icon: HelpCircleIcon,
    name: "Gerador de Questoes",
    description: "Questoes focadas no conteudo mais cobrado. A IA detecta assuntos frequentes e gera questoes na hora.",
    tag: "Alta Frequencia",
    mockup: "/images/mockups/mockup-questoes.webp",
  },
  {
    icon: BarChartIcon,
    name: "Painel de Desempenho",
    description: "Acompanhe sua evolucao em tempo real, identifique pontos fracos e compare sua nota com a media dos aprovados.",
    tag: "Tempo Real",
    mockup: "/images/mockups/mockup-desempenho.webp",
  },
  {
    icon: CpuIcon,
    name: "Tutor IA 24 horas",
    description: "Tire duvidas, peca explicacoes e tenha um professor particular disponivel 24 horas por dia, 7 dias por semana.",
    tag: "Sempre Online",
    mockup: "/images/mockups/mockup-tutor.webp",
  },
  {
    icon: BookIcon,
    name: "Conteudo de Todas as Disciplinas",
    description: "Base completa com conteudos claros e organizados, gerados especificamente para o seu concurso.",
    tag: "Cobertura Total",
    mockup: "/images/mockups/mockup-disciplinas.webp",
  },
];

export function Features() {
  const { ref, inView } = useInView();

  return (
    <section id="funcionalidades" className="py-24 bg-bg-dark-2 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(243,230,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(243,230,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            FUNCIONALIDADES!
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-5 tracking-tight mt-2">
            Essas sao todas as funcionalidades que voce vai receber na <span className="gradient-text">Concursa AI</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[620px] mx-auto">
            Todas essas funcionalidades em 1 so lugar!
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="p-7 bg-bg-card border border-border rounded-[14px] overflow-hidden hover:border-border-accent hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(243,230,0,0.12)] transition-all group flex flex-col relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-y400 to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
              
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-11 h-11 bg-gradient-to-br from-y400/10 to-c400/10 border border-border-accent rounded-xl flex items-center justify-center shrink-0 text-y400">
                  <feature.icon className="w-[22px] h-[22px]" />
                </div>
                <h3 className="text-base font-bold font-mono tracking-tight">{feature.name}</h3>
              </div>
              
              <p className="text-[0.86rem] text-text-secondary leading-relaxed mb-3">{feature.description}</p>
              
              <span className="inline-block self-start px-2.5 py-1 font-mono text-[0.65rem] text-y400 bg-y400/5 border border-y400/15 rounded tracking-wide uppercase">
                {feature.tag}
              </span>

              <div className="relative mt-4 -mx-7 -mb-7 pt-4 px-5 bg-gradient-to-b from-transparent via-y400/[0.03] to-c400/5 border-t border-border min-h-[200px] flex items-end justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,rgba(243,230,0,0.08),transparent_70%)] pointer-events-none" />
                <Image
                  src={feature.mockup}
                  alt={feature.name}
                  width={400}
                  height={220}
                  className="max-w-full h-auto max-h-[220px] object-contain relative z-10 drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

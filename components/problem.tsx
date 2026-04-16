"use client";

import { XIcon } from "./icons";
import { useInView } from "./use-in-view";

const painPoints = [
  "Estuda horas sem saber o que realmente cai na prova",
  "Nao consegue manter uma rotina consistente de estudos",
  "Fica perdido entre dezenas de materiais e apostilas",
  "Trabalha o dia inteiro e acha que nao tem tempo",
  "Ja tentou varias vezes e nunca foi aprovado",
];

export function Problem() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-gradient-to-b from-bg-dark to-bg-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-[rgba(255,59,48,0.4)] bg-[rgba(255,59,48,0.08)] rounded-md font-mono text-[0.78rem] text-[#ff3b30] font-bold tracking-wide mb-3.5">
              <span className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full animate-blink shadow-[0_0_10px_#ff3b30]" />
              ATENCAO!
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-5 tracking-tight">
              Se o metodo tradicional fosse realmente o melhor,{" "}
              <span className="gradient-text">por que so a minoria passa?</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[620px]">
              Tem gente que nunca muda a forma de estudar e mesmo assim espera resultados diferentes...
            </p>
          </div>

          <ul ref={ref} className="flex flex-col gap-3 font-mono">
            {painPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3.5 px-5 py-4 bg-c400/5 border border-c400/15 border-l-[3px] border-l-c400 rounded-md text-[0.86rem] text-text-secondary hover:bg-c400/10 hover:translate-x-1 transition-all"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-[rgba(255,59,48,0.14)] border border-[rgba(255,59,48,0.4)] inline-flex items-center justify-center text-[#ff3b30] mt-0.5">
                  <XIcon className="w-3 h-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

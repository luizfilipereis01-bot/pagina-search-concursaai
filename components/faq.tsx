"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    question: "O que e o Concursa AI?",
    answer: "O Concursa AI e a primeira inteligencia artificial desenvolvida exclusivamente para concurso publico. Ele gera resumos, flashcards, simulados personalizados, planeja seus estudos e identifica padroes de questoes da sua banca.",
  },
  {
    question: "Funciona para qualquer concurso?",
    answer: "Sim. O Concursa AI identifica os padroes de qualquer banca do Brasil — CESPE, FCC, FGV, VUNESP, e todas as outras — e gera conteudo personalizado para o concurso que voce esta se preparando.",
  },
  {
    question: "Preciso ter experiencia com tecnologia?",
    answer: "Nao. Apesar da interface ter cara de produto tech, o Concursa AI foi pensado para ser simples e intuitivo. Basta fazer login e comecar a usar as ferramentas. Nao e necessario nenhum conhecimento tecnico.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Desde o primeiro dia voce ja consegue gerar resumos, flashcards e simulados. A maioria dos usuarios reporta melhora significativa na organizacao e desempenho em menos de 2 semanas.",
  },
  {
    question: "Como recebo o acesso apos a compra?",
    answer: "Imediatamente apos a confirmacao do pagamento, voce recebe o acesso no seu e-mail e ja pode comecar a usar todas as ferramentas do Concursa AI.",
  },
  {
    question: "O Concursa AI e melhor que o ChatGPT?",
    answer: "Para concurso publico, sim. O ChatGPT e uma IA generica. O Concursa AI foi treinado e otimizado especificamente para concurso publico brasileiro, com ferramentas dedicadas como simulados por banca, planejador de estudos e identificacao de padroes de cobranca.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            DUVIDAS FREQUENTES
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight mt-2">
            Perguntas <span className="gradient-text">respondidas</span>
          </h2>
        </div>

        <div className="max-w-[820px] mx-auto mt-16 flex flex-col gap-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-bg-card border rounded-xl overflow-hidden transition-all ${
                activeIndex === index ? "border-border-accent shadow-[0_0_40px_rgba(243,230,0,0.12)]" : "border-border"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 bg-transparent border-none text-foreground font-mono text-[0.92rem] font-semibold cursor-pointer text-left transition-colors hover:text-y400 gap-4"
              >
                {faq.question}
                <ChevronDownIcon
                  className={`w-5 h-5 text-muted shrink-0 transition-transform ${
                    activeIndex === index ? "rotate-180 text-y400" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-80" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-[0.88rem] text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

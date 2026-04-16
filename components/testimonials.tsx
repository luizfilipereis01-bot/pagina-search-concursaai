"use client";

import { useInView } from "./use-in-view";

const testimonials = [
  {
    stars: 5,
    text: "O planejador mudou minha vida. Trabalho 8h por dia e achava impossivel estudar — a IA organizou tudo pra mim.",
    initials: "MR",
    name: "Mariana R.",
    role: "Aprovada — TRT",
  },
  {
    stars: 5,
    text: "Os simulados sao identicos ao padrao Cebraspe. Nivel de precisao absurdo. Recomendo 100%.",
    initials: "LC",
    name: "Lucas C.",
    role: "Concurseiro — PRF",
  },
  {
    stars: 5,
    text: "Em 3 semanas meu desempenho disparou. Os flashcards sao viciantes e muito eficientes.",
    initials: "AS",
    name: "Ana S.",
    role: "Concurseira — Area Fiscal",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="depoimentos" className="py-24 bg-bg-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-border-accent bg-y400/5 rounded-md font-mono text-[0.72rem] text-y400 tracking-widest uppercase mb-3.5">
            <span className="w-1.5 h-1.5 bg-y400 rounded-full animate-blink shadow-[0_0_8px_var(--color-y400)]" />
            DEPOIMENTOS
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight mt-2">
            Veja o que dizem os <span className="gradient-text">nossos alunos</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-5 mt-16 max-w-[500px] md:max-w-none mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-7 bg-bg-card border border-border rounded-[14px] hover:border-border-accent transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
              }}
            >
              <div className="text-y400 text-[0.9rem] tracking-widest mb-3.5">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="text-[0.88rem] text-text-secondary leading-relaxed mb-5">
                <span className="text-y400 font-bold">{'"'}</span> {testimonial.text}
              </p>
              <div className="flex items-center gap-3 pt-3.5 border-t border-dashed border-border">
                <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-y400 to-c400 flex items-center justify-center font-extrabold text-[0.82rem] text-n900 font-mono">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-[0.86rem] font-mono">{testimonial.name}</div>
                  <div className="text-[0.7rem] text-muted font-mono uppercase tracking-wide">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

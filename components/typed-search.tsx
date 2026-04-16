"use client";

import { useState, useEffect } from "react";

const queries = [
  "Quando sai o proximo concurso da PRF?",
  "Concurso da Petrobras 2026",
  "Hackear Banca Cebraspe",
  "Hackear Banca FGV",
  "Hackear Banca FCC",
  "Como passar no concurso do INSS",
  "Gere 40 resumos completos sobre Direito Penal",
  "O que mais cai na prova do INSS",
];

export function TypedSearch() {
  const [displayText, setDisplayText] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const query = queries[queryIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < query.length) {
          setDisplayText(query.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(query.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setQueryIndex((queryIndex + 1) % queries.length);
        }
      }
    }, isDeleting ? 22 : 45 + Math.random() * 55);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, queryIndex]);

  return (
    <>
      <span className="text-foreground">{displayText}</span>
      <span className="inline-block w-0.5 h-[18px] bg-y400 ml-0.5 animate-blink shadow-[0_0_8px_var(--color-y400)]" />
    </>
  );
}

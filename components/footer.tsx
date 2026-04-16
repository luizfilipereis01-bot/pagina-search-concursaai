import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 pb-8 border-t border-border bg-bg-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start gap-10 mb-10">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logomarca.png"
                alt="Concursa AI"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[0.82rem] text-muted max-w-[300px] mt-3 leading-relaxed font-mono">
              A primeira IA do Brasil desenvolvida exclusivamente para concurso publico.
            </p>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-widest text-muted mb-4 font-mono">Produto</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#funcionalidades" className="text-text-secondary text-[0.84rem] font-mono hover:text-y400 transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#preco" className="text-text-secondary text-[0.84rem] font-mono hover:text-y400 transition-colors">
                  Preco
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-text-secondary text-[0.84rem] font-mono hover:text-y400 transition-colors">
                  Duvidas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-widest text-muted mb-4 font-mono">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#" className="text-text-secondary text-[0.84rem] font-mono hover:text-y400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary text-[0.84rem] font-mono hover:text-y400 transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary text-[0.84rem] font-mono hover:text-y400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-[0.74rem] text-muted font-mono">
          © 2026 Concursa AI — EG Educacao Digital. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

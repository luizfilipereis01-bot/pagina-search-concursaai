"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, ArrowRightIcon } from "./icons";

const navLinks = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#preco", label: "Preco" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-3.5 bg-bg-dark/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logomarca.png"
            alt="Concursa AI"
            width={160}
            height={40}
            className="h-10 w-auto transition-transform hover:scale-[1.04]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-secondary font-mono text-[0.82rem] font-medium hover:text-y400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://pay.hub.la/YY70fYb2WcWVNJwNKXFV/?utm_source=search&utm_campaign=search"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-y400 to-y500 text-n900 font-mono font-bold text-[0.78rem] rounded-lg uppercase tracking-wide hover:shadow-[0_8px_32px_rgba(243,230,0,0.35)] hover:-translate-y-0.5 transition-all"
            >
              Comecar
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden border border-border text-foreground p-2 rounded-md font-mono"
          aria-label="Menu"
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-dark/95 backdrop-blur-xl border-b border-border p-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary font-mono text-sm font-medium hover:text-y400 transition-colors block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="https://pay.hub.la/YY70fYb2WcWVNJwNKXFV/?utm_source=search&utm_campaign=search"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-br from-y400 to-y500 text-n900 font-mono font-bold text-sm rounded-lg uppercase tracking-wide"
              >
                Comecar Agora
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

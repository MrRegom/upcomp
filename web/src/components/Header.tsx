"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Close, Menu } from "./Icons";

const NAV = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#desarrollo", label: "Desarrollo" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#clientes", label: "Clientes" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect
          x="1.1"
          y="1.1"
          width="29.8"
          height="29.8"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.55"
        />
        <path
          d="M7.5 21.5 13.5 15.5 17.5 19.5 24 12"
          fill="none"
          stroke="var(--color-brand-bright)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4 11.6h5v5"
          fill="none"
          stroke="var(--color-brand-bright)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[1.15rem] font-extrabold tracking-[-0.02em]">
        UPCOMP
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-dark text-dark-text transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-dark-line),0_8px_24px_-16px_rgba(0,0,0,.6)]" : ""
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="text-dark-text transition-opacity hover:opacity-80"
          aria-label="UpComp — inicio"
        >
          <Logo />
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-2 text-[0.875rem] text-dark-text/75 transition-colors hover:text-dark-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden items-center gap-2 bg-brand-bright px-4 py-2.5 text-[0.85rem] font-semibold text-dark transition-colors hover:bg-white sm:inline-flex"
          >
            Cotizar proyecto
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="-mr-1.5 inline-flex h-11 w-11 items-center justify-center text-dark-text lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col bg-dark lg:hidden">
          <div className="shell flex h-16 shrink-0 items-center justify-between">
            <Logo className="text-dark-text" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-1.5 inline-flex h-11 w-11 items-center justify-center text-dark-text"
              aria-label="Cerrar menú"
            >
              <Close className="h-6 w-6" />
            </button>
          </div>

          <nav
            className="shell flex flex-1 flex-col justify-center gap-1 pb-24"
            aria-label="Principal móvil"
          >
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-dark-line py-5 font-display text-[1.75rem] font-bold tracking-[-0.02em] text-dark-text"
              >
                <span className="font-mono text-[0.7rem] font-normal text-brand-bright">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-7 inline-flex items-center justify-center gap-2 bg-brand-bright px-5 py-4 font-display text-[1rem] font-bold text-dark"
            >
              Cotizar proyecto
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

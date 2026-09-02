"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { pilares } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./Icons";

export function Pilares() {
  const [activo, setActivo] = useState(0);
  const pilar = pilares[activo];

  return (
    <section id="soluciones" className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="max-w-[54ch]">
            <p className="eyebrow">El portafolio</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
              Cuatro pilares, una sola operación
            </h2>
            <p className="mt-5 text-[1.05rem] text-ink-2">
              No son cuatro negocios separados. Son las etapas de lo mismo: elegir
              bien, ponerlo a funcionar, construir lo que falta y sostenerlo en el
              tiempo.
            </p>
          </div>
        </Reveal>

        {/* Selector de pilar */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Pilares del portafolio"
            className="thin-scroll mt-12 -mx-[max(1.15rem,4vw)] flex snap-x gap-px overflow-x-auto bg-line px-[max(1.15rem,4vw)] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4"
          >
            {pilares.map((p, i) => {
              const on = i === activo;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="panel-pilar"
                  type="button"
                  onClick={() => setActivo(i)}
                  className={`relative flex min-w-[15rem] snap-start flex-col items-start gap-2 px-5 py-5 text-left transition-colors duration-300 sm:min-w-0 ${
                    on
                      ? "bg-ink text-paper"
                      : "bg-paper text-ink hover:bg-ground"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-[0.68rem] tracking-[0.12em] ${
                        on ? "text-brand-bright" : "text-muted"
                      }`}
                    >
                      {p.n}
                    </span>
                    {p.nuevo && (
                      <span
                        className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase ${
                          on
                            ? "text-brand-bright"
                            : "bg-brand-wash px-1.5 py-0.5 text-brand-deep"
                        }`}
                      >
                        Nuevo
                      </span>
                    )}
                  </span>
                  <span className="font-display text-[1.02rem] leading-tight font-bold tracking-[-0.01em]">
                    {p.nombre}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          id="panel-pilar"
          role="tabpanel"
          className="border-x border-b border-line bg-ground px-5 py-9 sm:px-8 sm:py-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pilar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              className="grid gap-x-14 gap-y-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <h3 className="text-[1.35rem] sm:text-[1.6rem]">{pilar.titular}</h3>
                <p className="mt-4 text-[0.95rem] text-ink-2">{pilar.intro}</p>
                <a
                  href="#contacto"
                  className="group mt-6 inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-[0.9rem] font-semibold text-brand-deep"
                >
                  Conversar sobre esto
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <ul className="grid gap-px self-start bg-line sm:grid-cols-2 lg:col-span-8">
                {pilar.items.map((it) => (
                  <li key={it.titulo} className="bg-paper px-5 py-5">
                    <h4 className="font-display text-[0.98rem] font-bold">
                      {it.titulo}
                    </h4>
                    <p className="mt-1.5 text-[0.88rem] text-muted">{it.texto}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

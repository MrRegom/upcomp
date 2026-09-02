"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { capacidades, pilares } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRight, Brain, Chat, Cloud, Plug } from "./Icons";

const ICONO = {
  servidor: Cloud,
  bot: Chat,
  ia: Brain,
  integracion: Plug,
} as const;

const pilarSoftware = pilares.find((p) => p.id === "software")!;

export function Desarrollo() {
  const [abierta, setAbierta] = useState<string | null>("servidor");

  return (
    <section id="desarrollo" className="bg-ground py-20 lg:py-28">
      <div className="shell">
        {/* ---------- Encabezado ---------- */}
        <Reveal>
          <div className="grid gap-x-14 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">Desarrollo y software</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
                {pilarSoftware.titular}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-14">
              <p className="text-[1.05rem] text-ink-2">{pilarSoftware.intro}</p>
            </div>
          </div>
        </Reveal>

        {/* ---------- Las cuatro líneas de desarrollo ---------- */}
        <Reveal delay={60}>
          <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {pilarSoftware.items.map((it, i) => (
              <li key={it.titulo} className="bg-paper px-5 py-6">
                <span className="font-mono text-[0.68rem] tracking-[0.12em] text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.02rem] font-bold">
                  {it.titulo}
                </h3>
                <p className="mt-2 text-[0.88rem] text-muted">{it.texto}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Capacidades nuevas ---------- */}
        <Reveal delay={100}>
          <div className="mt-20 rule-top">
            <p className="eyebrow">Servicios gestionados</p>
            <div className="mt-4 grid gap-x-14 gap-y-5 lg:grid-cols-12">
              <h3 className="text-[clamp(1.6rem,3.4vw,2.35rem)] lg:col-span-6">
                Infraestructura, atención e inteligencia artificial
              </h3>
              <p className="text-[1rem] text-ink-2 lg:col-span-6 lg:pt-2">
                Cuatro servicios con modelo de suscripción, pensados para que la
                empresa use la tecnología sin tener que administrarla.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 grid gap-px bg-line lg:grid-cols-2">
            {capacidades.map((c) => {
              const Icono = ICONO[c.id as keyof typeof ICONO];
              const on = abierta === c.id;
              return (
                <div key={c.id} className="bg-paper">
                  <button
                    type="button"
                    onClick={() => setAbierta(on ? null : c.id)}
                    aria-expanded={on}
                    className="flex w-full items-start gap-4 px-5 py-6 text-left transition-colors hover:bg-ground sm:px-6"
                  >
                    <span
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
                        on
                          ? "border-brand bg-brand text-paper"
                          : "border-line-2 text-brand"
                      }`}
                    >
                      <Icono className="h-5 w-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-display text-[1.08rem] font-bold">
                          {c.nombre}
                        </span>
                        <span className="font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">
                          {c.modelo}
                        </span>
                      </span>
                      <span className="mt-1 block text-[0.92rem] text-ink-2">
                        {c.claim}
                      </span>
                    </span>

                    <span
                      className={`mt-1 font-mono text-[1.1rem] leading-none text-muted transition-transform duration-300 ${
                        on ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.32,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-5 py-5 sm:px-6">
                          <p className="max-w-[54ch] text-[0.92rem] text-ink-2">
                            {c.texto}
                          </p>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {c.detalle.map((d) => (
                              <li
                                key={d}
                                className="border border-line bg-ground px-2.5 py-1.5 text-[0.8rem] text-muted"
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ---------- El argumento: el software vende el hardware ---------- */}
        <Reveal delay={60}>
          <div className="mt-16 border border-line bg-paper px-5 py-8 sm:px-9 sm:py-10">
            <div className="grid gap-x-14 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow">Por qué encaja</p>
                <h3 className="mt-4 text-[1.5rem] sm:text-[1.85rem]">
                  La IA privada corre sobre el equipo que ya vendemos
                </h3>
                <p className="mt-4 text-[0.95rem] text-ink-2">
                  Un modelo local necesita una máquina capaz de sostenerlo. Es
                  exactamente la workstation que UpComp selecciona, configura y
                  respalda todos los días.
                </p>
              </div>

              {/* Cadena hardware → software → hardware */}
              <div className="lg:col-span-7">
                <ol className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      k: "Catálogo actual",
                      v: "Workstation de alto cómputo",
                      d: "Threadripper · RTX 5090 · memoria ECC",
                    },
                    {
                      k: "Capa nueva",
                      v: "IA local y privada",
                      d: "Los datos no salen de la empresa",
                    },
                    {
                      k: "Resultado",
                      v: "Soporte y siguiente equipo",
                      d: "Crece el uso, crece la infraestructura",
                    },
                  ].map((n, i) => (
                    <li
                      key={n.k}
                      className="relative border border-line bg-ground px-4 py-4"
                    >
                      <span className="font-mono text-[0.63rem] tracking-[0.11em] text-brand uppercase">
                        {n.k}
                      </span>
                      <p className="mt-2 font-display text-[0.95rem] leading-snug font-bold">
                        {n.v}
                      </p>
                      <p className="mt-1.5 text-[0.8rem] text-muted">{n.d}</p>
                      {i < 2 && (
                        <ArrowRight
                          className="absolute top-1/2 -right-3 hidden h-4 w-4 -translate-y-1/2 bg-ground text-brand sm:block"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 border-t border-line pt-4 font-mono text-[0.7rem] tracking-[0.08em] text-muted uppercase">
                  El software vuelve a vender hardware
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

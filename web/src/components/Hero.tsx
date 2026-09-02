"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { etapas } from "@/lib/data";
import { ArrowRight, Check } from "./Icons";

const CLIENTES_DESTACADOS = "Armada de Chile · Fresenius Kabi · Marimaca Copper";
const PARTNERS_DESTACADOS = "Dell · Lenovo · HP · Cisco · Fortinet";

export function Hero() {
  const [activa, setActiva] = useState(0);
  const [intervenido, setIntervenido] = useState(false);

  // Avanza solo hasta que la persona toma control.
  useEffect(() => {
    if (intervenido) return;
    const t = setInterval(() => setActiva((i) => (i + 1) % etapas.length), 4200);
    return () => clearInterval(t);
  }, [intervenido]);

  const elegir = (i: number) => {
    setIntervenido(true);
    setActiva(i);
  };

  const etapa = etapas[activa];

  return (
    <section id="top" className="pt-16">
      {/* ---------------- Parte clara ---------------- */}
      <div className="shell grid gap-x-16 gap-y-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="eyebrow">Portafolio corporativo 2026</p>

          <h1 className="mt-5 text-[clamp(2.35rem,6.2vw,4.15rem)]">
            Un solo partner para toda tu operación tecnológica
          </h1>

          <p className="mt-6 max-w-[52ch] text-[1.075rem] text-ink-2 sm:text-[1.15rem]">
            Equipamiento especializado, servicios TI, software a medida y
            financiamiento. Desde elegir el equipo correcto hasta construir el
            sistema que lo conecta con el resto del negocio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2.5 bg-ink px-6 py-4 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-brand-deep"
            >
              Cotizar proyecto
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#soluciones"
              className="inline-flex items-center justify-center gap-2.5 border border-line-2 px-6 py-4 text-[0.95rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ground"
            >
              Ver el portafolio
            </a>
          </div>
        </div>

        {/* Ficha técnica — registro de hoja de datos, no tarjeta decorativa */}
        <aside className="lg:col-span-5">
          <div className="border-t-2 border-ink pt-5">
            <p className="eyebrow">Ficha</p>
            <dl className="mt-4 divide-y divide-line">
              {[
                ["Cobertura", "Proyectos y soporte en todo Chile"],
                ["Clientes", CLIENTES_DESTACADOS],
                ["Partners", PARTNERS_DESTACADOS],
                ["Modalidad", "Compra directa o financiamiento evaluado"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                  <dt className="font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase">
                    {k}
                  </dt>
                  <dd className="text-[0.9rem] text-ink-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      {/* ---------------- Franja oscura: la operación ---------------- */}
      <div className="grid-bg bg-dark text-dark-text">
        <div className="shell py-14 lg:py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <p className="eyebrow eyebrow-dark">La operación completa</p>
            <p className="font-mono text-[0.68rem] tracking-[0.08em] text-dark-muted uppercase">
              Toca una etapa
            </p>
          </div>

          {/* Cuatro etapas conectadas */}
          <div className="mt-7 grid gap-px bg-dark-line sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e, i) => {
              const activo = i === activa;
              return (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => elegir(i)}
                  aria-pressed={activo}
                  className={`group relative flex flex-col items-start gap-2 px-5 py-5 text-left transition-colors duration-300 ${
                    activo
                      ? "bg-dark-3"
                      : "bg-dark hover:bg-dark-2"
                  }`}
                >
                  {/* Riel superior: el pulso recorre la cadena */}
                  <span className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-dark-line">
                    <span
                      className="flow-track absolute inset-0"
                      style={{ ["--flow-delay" as string]: `${i * 0.35}s` }}
                    />
                  </span>

                  <span
                    className={`font-mono text-[0.68rem] tracking-[0.12em] transition-colors ${
                      activo ? "text-brand-bright" : "text-dark-muted"
                    }`}
                  >
                    {e.n}
                  </span>
                  <span className="font-display text-[1.05rem] font-bold tracking-[-0.01em]">
                    {e.nombre}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel de detalle */}
          <div className="relative mt-px min-h-[13.5rem] bg-dark-2 px-5 py-7 sm:px-7 sm:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={etapa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                className="grid gap-x-12 gap-y-6 lg:grid-cols-12"
              >
                <div className="lg:col-span-6">
                  <h2 className="font-display text-[1.4rem] font-bold tracking-[-0.015em] sm:text-[1.7rem]">
                    {etapa.titular}
                  </h2>
                  <p className="mt-3 max-w-[46ch] text-[0.95rem] text-dark-muted">
                    {etapa.descripcion}
                  </p>
                </div>

                <ul className="space-y-2.5 lg:col-span-6">
                  {etapa.puntos.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.92rem]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
                      <span className="text-dark-text/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { clientes, partners, verticales } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Clientes() {
  const [filtro, setFiltro] = useState<string>("Todas");

  const visibles =
    filtro === "Todas" ? clientes : clientes.filter((c) => c.vertical === filtro);

  // Solo mostramos filtros que efectivamente tienen clientes detrás.
  const disponibles = verticales.filter(
    (v) => v === "Todas" || clientes.some((c) => c.vertical === v),
  );

  return (
    <section id="clientes" className="bg-ground py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="grid gap-x-14 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">Experiencia</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
                Organizaciones que confían en nuestro trabajo
              </h2>
            </div>
            <p className="text-[1.02rem] text-ink-2 lg:col-span-6 lg:pt-16">
              Acompañamos a empresas e instituciones en adquisición de
              equipamiento, soporte, renovación tecnológica, networking e
              infraestructura crítica.
            </p>
          </div>
        </Reveal>

        {/* Filtro por industria */}
        <Reveal delay={60}>
          <div
            className="thin-scroll mt-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar clientes por industria"
          >
            {disponibles.map((v) => {
              const on = v === filtro;
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => setFiltro(v)}
                  aria-pressed={on}
                  className={`border px-3.5 py-2 text-[0.83rem] transition-colors ${
                    on
                      ? "border-ink bg-ink text-paper"
                      : "border-line-2 bg-paper text-ink-2 hover:border-ink"
                  }`}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grilla de clientes.
            Sin AnimatePresence a propósito: con mode="popLayout" los nodos que
            salían quedaban retenidos en el DOM y el filtro no surtía efecto.
            Con `layout` a secas React quita el nodo y motion reacomoda el resto. */}
        <motion.ul
          layout
          className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibles.map((c) => (
            <motion.li
              key={c.nombre}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.26, ease: [0.22, 0.61, 0.36, 1] }}
              className="flex flex-col justify-between gap-6 bg-paper px-5 py-6"
            >
              <div>
                <h3 className="font-display text-[1.1rem] font-bold">
                  {c.nombre}
                </h3>
                <p className="mt-1.5 text-[0.88rem] text-muted">{c.descriptor}</p>
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.11em] text-brand uppercase">
                {c.vertical}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {visibles.length === 0 && (
          <p className="mt-8 border border-line bg-paper px-5 py-6 text-[0.9rem] text-muted">
            No hay clientes publicados en esta industria todavía.
          </p>
        )}

        {/* Nota honesta sobre casos con detalle */}
        <Reveal>
          <p className="mt-6 border-l-2 border-flag bg-flag-wash px-4 py-3 text-[0.85rem] text-ink-2">
            <strong className="font-semibold">Casos de éxito en preparación.</strong>{" "}
            Publicar un caso con detalle de desafío, solución y resultado requiere
            autorización de cada cliente. Es el siguiente paso de contenido.
          </p>
        </Reveal>

        {/* Partners */}
        <Reveal delay={60}>
          <div className="mt-16 rule-top">
            <p className="eyebrow">Ecosistema tecnológico</p>
            <h3 className="mt-4 text-[1.4rem] sm:text-[1.7rem]">
              Alianzas y tecnologías que integramos
            </h3>
            <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12">
              {partners.map((p) => (
                <li
                  key={p}
                  className="font-display text-[1rem] font-bold text-ink/50 transition-colors hover:text-ink sm:text-[1.15rem]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

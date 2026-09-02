"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  plataformas,
  preguntasConfigurador,
  type Plataforma,
} from "@/lib/data";
import { ArrowRight, Check, Cpu } from "./Icons";

type Respuestas = Record<string, string>;

const ID_PLATAFORMAS = plataformas.map((p) => p.id);

export function Configurador() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<Respuestas>({});

  const total = preguntasConfigurador.length;
  const terminado = paso >= total;

  /** Suma los pesos de cada respuesta dada. */
  const puntajes = useMemo(() => {
    const acc: Record<Plataforma["id"], number> = {
      threadripper: 0,
      intel: 0,
      ryzen: 0,
    };
    for (const preg of preguntasConfigurador) {
      const elegida = respuestas[preg.id];
      if (!elegida) continue;
      const op = preg.opciones.find((o) => o.id === elegida);
      if (!op) continue;
      for (const id of ID_PLATAFORMAS) acc[id] += op.peso[id];
    }
    return acc;
  }, [respuestas]);

  const maximo = Math.max(1, ...ID_PLATAFORMAS.map((id) => puntajes[id]));

  const ganadora = useMemo(() => {
    const ordenadas = [...plataformas].sort(
      (a, b) => puntajes[b.id] - puntajes[a.id],
    );
    return ordenadas[0];
  }, [puntajes]);

  const responder = (idPregunta: string, idOpcion: string) => {
    setRespuestas((r) => ({ ...r, [idPregunta]: idOpcion }));
    // Pequeña pausa para que se vea el estado seleccionado antes de avanzar.
    window.setTimeout(() => setPaso((p) => p + 1), 260);
  };

  const reiniciar = () => {
    setRespuestas({});
    setPaso(0);
  };

  const pregunta = terminado ? null : preguntasConfigurador[paso];
  const respondidas = Object.keys(respuestas).length;

  return (
    <section id="herramientas" className="grid-bg bg-dark py-20 text-dark-text lg:py-28">
      <div className="shell">
        <div className="max-w-[56ch]">
          <p className="eyebrow eyebrow-dark">Herramienta</p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
            ¿Qué workstation necesita realmente tu equipo?
          </h2>
          <p className="mt-5 text-[1.02rem] text-dark-muted">
            Una workstation no debería definirse solo por procesador o tarjeta
            gráfica. Responde tres preguntas y verás qué plataforma calza con la
            carga de trabajo real.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-dark-line lg:grid-cols-12">
          {/* ---------- Preguntas ---------- */}
          <div className="bg-dark-2 px-5 py-7 sm:px-8 sm:py-9 lg:col-span-7">
            {/* Progreso */}
            <div className="flex items-center gap-3">
              {preguntasConfigurador.map((p, i) => {
                const hecha = Boolean(respuestas[p.id]);
                const actual = i === paso && !terminado;
                return (
                  <div key={p.id} className="flex flex-1 items-center gap-3">
                    <span
                      className={`font-mono text-[0.66rem] tracking-[0.1em] transition-colors ${
                        hecha || actual ? "text-brand-bright" : "text-dark-muted"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`h-0.5 flex-1 transition-colors duration-500 ${
                        hecha ? "bg-brand-bright" : "bg-dark-line"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-7 min-h-[21rem]">
              <AnimatePresence mode="wait">
                {pregunta ? (
                  <motion.div
                    key={pregunta.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <h3 className="font-display text-[1.3rem] font-bold sm:text-[1.55rem]">
                      {pregunta.titulo}
                    </h3>
                    <p className="mt-2 text-[0.9rem] text-dark-muted">
                      {pregunta.ayuda}
                    </p>

                    <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {pregunta.opciones.map((op) => {
                        const on = respuestas[pregunta.id] === op.id;
                        return (
                          <button
                            key={op.id}
                            type="button"
                            onClick={() => responder(pregunta.id, op.id)}
                            className={`flex flex-col items-start gap-1 border px-4 py-3.5 text-left transition-all duration-200 ${
                              on
                                ? "border-brand-bright bg-brand-bright/10"
                                : "border-dark-line bg-dark hover:border-dark-muted"
                            }`}
                          >
                            <span className="font-display text-[0.95rem] font-bold">
                              {op.label}
                            </span>
                            {op.nota && (
                              <span className="text-[0.8rem] text-dark-muted">
                                {op.nota}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {paso > 0 && (
                      <button
                        type="button"
                        onClick={() => setPaso((p) => Math.max(0, p - 1))}
                        className="mt-6 font-mono text-[0.72rem] tracking-[0.08em] text-dark-muted uppercase transition-colors hover:text-dark-text"
                      >
                        ← Volver
                      </button>
                    )}
                  </motion.div>
                ) : (
                  /* ---------- Resultado ---------- */
                  <motion.div
                    key="resultado"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <p className="eyebrow eyebrow-dark">Plataforma sugerida</p>
                    <h3 className="mt-3 font-display text-[1.5rem] font-bold sm:text-[1.85rem]">
                      {ganadora.nombre}
                    </h3>
                    <p className="mt-1 font-mono text-[0.72rem] tracking-[0.1em] text-brand-bright uppercase">
                      {ganadora.etiqueta}
                    </p>
                    <p className="mt-4 max-w-[48ch] text-[0.95rem] text-dark-muted">
                      {ganadora.resumen}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {ganadora.paraQuien.map((p) => (
                        <li key={p} className="flex gap-3 text-[0.9rem]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
                          <span className="text-dark-text/85">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border border-dark-line bg-dark p-4">
                      <p className="font-mono text-[0.65rem] tracking-[0.11em] text-dark-muted uppercase">
                        Equipo de referencia en catálogo
                      </p>
                      <p className="mt-2 flex gap-3 text-[0.88rem] leading-relaxed">
                        <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
                        <span>{ganadora.equipoRef}</span>
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="#contacto"
                        className="group inline-flex items-center justify-center gap-2.5 bg-brand-bright px-5 py-3.5 text-[0.9rem] font-semibold text-dark transition-colors hover:bg-white"
                      >
                        Cotizar esta plataforma
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                      <button
                        type="button"
                        onClick={reiniciar}
                        className="inline-flex items-center justify-center border border-dark-line px-5 py-3.5 text-[0.9rem] font-semibold transition-colors hover:border-dark-muted"
                      >
                        Empezar de nuevo
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---------- Lectura en vivo ---------- */}
          <aside className="bg-dark-2 px-5 py-7 sm:px-8 sm:py-9 lg:col-span-5">
            <p className="font-mono text-[0.66rem] tracking-[0.11em] text-dark-muted uppercase">
              Cálculo en curso
            </p>

            <div className="mt-6 space-y-5">
              {plataformas.map((p) => {
                const valor = puntajes[p.id];
                const pct = respondidas === 0 ? 0 : (valor / maximo) * 100;
                const lider = terminado && p.id === ganadora.id;
                return (
                  <div key={p.id}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span
                        className={`font-display text-[0.92rem] font-bold transition-colors ${
                          lider ? "text-brand-bright" : "text-dark-text/80"
                        }`}
                      >
                        {p.nombre}
                      </span>
                      <span className="tabular font-mono text-[0.75rem] text-dark-muted">
                        {valor}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 bg-dark-line">
                      <motion.div
                        className={`h-full ${
                          lider ? "bg-brand-bright" : "bg-dark-muted/60"
                        }`}
                        initial={false}
                        animate={{ width: `${pct}%` }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 border-t border-dark-line pt-5 text-[0.82rem] leading-relaxed text-dark-muted">
              Esta recomendación es orientativa. Antes de cotizar revisamos
              software, memoria, GPU, almacenamiento, refrigeración, disponibilidad
              y garantía aplicable.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

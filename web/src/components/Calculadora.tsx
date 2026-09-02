"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { planesPTG } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRight, Check } from "./Icons";

/**
 * Tramos por volumen. Son de EJEMPLO para la demo — reemplazar por la
 * política comercial real de UpComp antes de publicar.
 */
const TRAMOS = [
  { desde: 1, descuento: 0 },
  { desde: 11, descuento: 0.05 },
  { desde: 51, descuento: 0.1 },
  { desde: 201, descuento: 0.15 },
];

const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function Calculadora() {
  const [usuarios, setUsuarios] = useState(25);
  const [planId, setPlanId] = useState<"estandar" | "premium">("estandar");

  const plan = planesPTG.find((p) => p.id === planId)!;

  const { descuento, porUsuario, mensual, anual } = useMemo(() => {
    const tramo = [...TRAMOS].reverse().find((t) => usuarios >= t.desde)!;
    const unitario = Math.round(plan.refPorUsuario * (1 - tramo.descuento));
    const mes = unitario * usuarios;
    return {
      descuento: tramo.descuento,
      porUsuario: unitario,
      mensual: mes,
      anual: mes * 12,
    };
  }, [usuarios, plan]);

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="max-w-[54ch]">
            <p className="eyebrow">Herramienta</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
              Puesto de trabajo gestionado
            </h2>
            <p className="mt-5 text-[1.05rem] text-ink-2">
              Hardware y servicios en un solo bundle: preparación, soporte,
              garantía, continuidad y renovación planificada. Mueve el número de
              usuarios para ver cómo se estructura.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid gap-px bg-line lg:grid-cols-12">
            {/* ---------- Controles ---------- */}
            <div className="bg-ground px-5 py-8 sm:px-8 lg:col-span-7">
              {/* Usuarios */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="usuarios"
                    className="font-display text-[1.05rem] font-bold"
                  >
                    Usuarios a cubrir
                  </label>
                  <output
                    htmlFor="usuarios"
                    className="tabular font-display text-[1.9rem] leading-none font-extrabold text-brand-deep"
                  >
                    {usuarios}
                  </output>
                </div>

                <input
                  id="usuarios"
                  type="range"
                  min={1}
                  max={300}
                  step={1}
                  value={usuarios}
                  onChange={(e) => setUsuarios(Number(e.target.value))}
                  className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-none bg-line-2 accent-[var(--color-brand)]"
                  style={{ accentColor: "var(--color-brand)" }}
                />

                <div className="mt-2 flex justify-between font-mono text-[0.68rem] text-muted">
                  <span>1</span>
                  <span>300</span>
                </div>

                {/* Atajos */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[10, 25, 50, 100, 200].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setUsuarios(n)}
                      className={`border px-3 py-1.5 font-mono text-[0.75rem] transition-colors ${
                        usuarios === n
                          ? "border-brand bg-brand text-paper"
                          : "border-line-2 bg-paper text-ink-2 hover:border-ink"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Plan */}
              <fieldset className="mt-10">
                <legend className="font-display text-[1.05rem] font-bold">
                  Nivel de servicio
                </legend>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {planesPTG.map((p) => {
                    const on = p.id === planId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlanId(p.id)}
                        aria-pressed={on}
                        className={`border px-4 py-4 text-left transition-all ${
                          on
                            ? "border-brand bg-brand-wash"
                            : "border-line-2 bg-paper hover:border-ink"
                        }`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-display text-[1rem] font-bold">
                            {p.nombre}
                          </span>
                          {on && <Check className="h-4 w-4 text-brand-deep" />}
                        </span>
                        <span className="mt-1 block text-[0.85rem] text-muted">
                          {p.descripcion}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {plan.incluye.map((i) => (
                    <li key={i} className="flex gap-2.5 text-[0.87rem] text-ink-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                      {i}
                    </li>
                  ))}
                </ul>
              </fieldset>
            </div>

            {/* ---------- Estimación ---------- */}
            <aside className="bg-dark px-5 py-8 text-dark-text sm:px-8 lg:col-span-5">
              <p className="font-mono text-[0.66rem] tracking-[0.11em] text-dark-muted uppercase">
                Estimación referencial
              </p>

              <motion.p
                key={mensual}
                initial={{ opacity: 0.35, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="tabular mt-4 font-display text-[clamp(2rem,5vw,2.9rem)] leading-none font-extrabold"
              >
                {clp.format(mensual)}
              </motion.p>
              <p className="mt-2 text-[0.85rem] text-dark-muted">
                mensual · {usuarios} {usuarios === 1 ? "usuario" : "usuarios"} ·
                plan {plan.nombre}
              </p>

              <dl className="mt-7 divide-y divide-dark-line border-y border-dark-line">
                {[
                  ["Por usuario", clp.format(porUsuario)],
                  [
                    "Ajuste por volumen",
                    descuento === 0 ? "—" : `−${Math.round(descuento * 100)}%`,
                  ],
                  ["Proyección anual", clp.format(anual)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-[0.85rem] text-dark-muted">{k}</dt>
                    <dd className="tabular font-mono text-[0.85rem]">{v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#contacto"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 bg-brand-bright px-5 py-3.5 text-[0.9rem] font-semibold text-dark transition-colors hover:bg-white"
              >
                Pedir propuesta formal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="mt-5 border-t border-dark-line pt-4 text-[0.78rem] leading-relaxed text-dark-muted">
                <strong className="font-semibold text-dark-text">
                  Valores de ejemplo para esta demo.
                </strong>{" "}
                Las tarifas y los tramos por volumen están pendientes de
                definición comercial. La propuesta final depende del equipamiento,
                el alcance del servicio y el plazo.
              </p>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

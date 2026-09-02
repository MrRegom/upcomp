"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  cargos,
  empresa,
  necesidades,
  plazos,
  tramosUsuarios,
} from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRight, Check, Mail, WhatsApp } from "./Icons";

type Datos = {
  necesidad: string;
  cargo: string;
  usuarios: string;
  plazo: string;
  nombre: string;
  compania: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const VACIO: Datos = {
  necesidad: "",
  cargo: "",
  usuarios: "",
  plazo: "",
  nombre: "",
  compania: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const PASOS = ["Necesidad", "Contexto", "Datos"] as const;

const inputCls =
  "w-full border border-line-2 bg-paper px-3.5 py-3 text-[0.92rem] text-ink outline-none transition-colors placeholder:text-muted-2 focus:border-brand";

const labelCls = "block text-[0.8rem] font-semibold text-ink-2";

function Chips({
  opciones,
  valor,
  onChange,
  nombre,
}: {
  opciones: readonly string[];
  valor: string;
  onChange: (v: string) => void;
  nombre: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={nombre}>
      {opciones.map((o) => {
        const on = o === valor;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={on}
            className={`border px-3.5 py-2 text-[0.85rem] transition-colors ${
              on
                ? "border-brand bg-brand-wash font-semibold text-brand-deep"
                : "border-line-2 bg-paper text-ink-2 hover:border-ink"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Contacto() {
  const [paso, setPaso] = useState(0);
  const [d, setD] = useState<Datos>(VACIO);
  const [enviado, setEnviado] = useState(false);

  const set = <K extends keyof Datos>(k: K, v: Datos[K]) =>
    setD((prev) => ({ ...prev, [k]: v }));

  const puedeAvanzar =
    paso === 0
      ? Boolean(d.necesidad)
      : paso === 1
        ? Boolean(d.cargo && d.usuarios && d.plazo)
        : Boolean(d.nombre.trim() && d.compania.trim() && d.email.trim());

  /** Resumen legible que viaja a WhatsApp o al correo. */
  const resumen = useMemo(() => {
    const etiqueta =
      necesidades.find((n) => n.id === d.necesidad)?.label ?? d.necesidad;
    return [
      `Solicitud desde upcomp.cl`,
      ``,
      `Necesidad: ${etiqueta}`,
      `Cargo: ${d.cargo}`,
      `Usuarios: ${d.usuarios}`,
      `Plazo: ${d.plazo}`,
      ``,
      `Nombre: ${d.nombre}`,
      `Empresa: ${d.compania}`,
      `Email: ${d.email}`,
      d.telefono ? `Teléfono: ${d.telefono}` : null,
      d.mensaje ? `` : null,
      d.mensaje ? `Detalle: ${d.mensaje}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
  }, [d]);

  const linkWhatsApp = `https://wa.me/${empresa.telefonoRaw.replace("+", "")}?text=${encodeURIComponent(resumen)}`;
  const linkCorreo = `mailto:${empresa.email}?subject=${encodeURIComponent(
    `Solicitud web — ${d.compania || "empresa"}`,
  )}&body=${encodeURIComponent(resumen)}`;

  return (
    <section id="contacto" className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* ---------- Columna izquierda ---------- */}
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
              Cuéntanos qué necesita tu empresa
            </h2>
            <p className="mt-5 text-[1.02rem] text-ink-2">
              Tres pasos. Mientras más contexto entregues, más precisa será la
              recomendación técnica y comercial que preparemos.
            </p>

            <dl className="mt-10 divide-y divide-line border-t border-line">
              {[
                ["Correo", empresa.email, `mailto:${empresa.email}`],
                ["Teléfono", empresa.telefono, `tel:${empresa.telefonoRaw}`],
                ["Oficina", `${empresa.direccion}. ${empresa.ciudad}`, null],
              ].map(([k, v, href]) => (
                <div key={k as string} className="grid grid-cols-[5.5rem_1fr] gap-4 py-3.5">
                  <dt className="font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase">
                    {k}
                  </dt>
                  <dd className="text-[0.9rem] text-ink-2">
                    {href ? (
                      <a
                        href={href as string}
                        className="underline decoration-line-2 underline-offset-4 transition-colors hover:text-brand-deep"
                      >
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ---------- Formulario ---------- */}
          <div className="lg:col-span-7">
            <div className="border border-line bg-ground">
              {/* Progreso */}
              <div className="flex border-b border-line">
                {PASOS.map((p, i) => {
                  const hecho = i < paso || enviado;
                  const actual = i === paso && !enviado;
                  return (
                    <div
                      key={p}
                      className={`flex flex-1 items-center gap-2.5 px-4 py-3.5 text-[0.8rem] transition-colors ${
                        actual
                          ? "bg-paper font-semibold text-ink"
                          : "text-muted"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center font-mono text-[0.65rem] ${
                          hecho
                            ? "bg-brand text-paper"
                            : actual
                              ? "bg-ink text-paper"
                              : "bg-line-2 text-paper"
                        }`}
                      >
                        {hecho ? <Check className="h-3 w-3" /> : i + 1}
                      </span>
                      <span className="hidden sm:inline">{p}</span>
                    </div>
                  );
                })}
              </div>

              <div className="px-5 py-7 sm:px-7">
                <AnimatePresence mode="wait">
                  {enviado ? (
                    /* ---------- Resumen y envío ---------- */
                    <motion.div
                      key="listo"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-display text-[1.3rem] font-bold">
                        Solicitud lista
                      </h3>
                      <p className="mt-2 text-[0.92rem] text-ink-2">
                        Revisa el resumen y elige por dónde prefieres enviarla.
                      </p>

                      <pre className="thin-scroll mt-5 max-h-56 overflow-auto border border-line bg-paper px-4 py-4 font-mono text-[0.78rem] leading-relaxed whitespace-pre-wrap text-ink-2">
                        {resumen}
                      </pre>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={linkWhatsApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2.5 bg-brand px-5 py-3.5 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-brand-deep"
                        >
                          <WhatsApp className="h-4.5 w-4.5" />
                          Enviar por WhatsApp
                        </a>
                        <a
                          href={linkCorreo}
                          className="inline-flex flex-1 items-center justify-center gap-2.5 border border-line-2 px-5 py-3.5 text-[0.9rem] font-semibold text-ink transition-colors hover:border-ink"
                        >
                          <Mail className="h-4.5 w-4.5" />
                          Enviar por correo
                        </a>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                        <p className="max-w-[42ch] text-[0.78rem] text-muted">
                          En el prototipo el formulario todavía no guarda en un CRM:
                          abre WhatsApp o el correo con los datos ya escritos.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setD(VACIO);
                            setPaso(0);
                            setEnviado(false);
                          }}
                          className="font-mono text-[0.72rem] tracking-[0.08em] text-muted uppercase transition-colors hover:text-ink"
                        >
                          Empezar de nuevo
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={paso}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.26, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      {/* Paso 1 */}
                      {paso === 0 && (
                        <>
                          <h3 className="font-display text-[1.2rem] font-bold">
                            ¿Qué necesitas resolver?
                          </h3>
                          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                            {necesidades.map((n) => {
                              const on = d.necesidad === n.id;
                              return (
                                <button
                                  key={n.id}
                                  type="button"
                                  onClick={() => set("necesidad", n.id)}
                                  aria-pressed={on}
                                  className={`border px-4 py-3.5 text-left text-[0.92rem] transition-colors ${
                                    on
                                      ? "border-brand bg-brand-wash font-semibold text-brand-deep"
                                      : "border-line-2 bg-paper text-ink-2 hover:border-ink"
                                  }`}
                                >
                                  {n.label}
                                </button>
                              );
                            })}
                          </div>
                        </>
                      )}

                      {/* Paso 2 */}
                      {paso === 1 && (
                        <div className="space-y-7">
                          <div>
                            <p className={labelCls}>Tu rol en la empresa</p>
                            <div className="mt-3">
                              <Chips
                                opciones={cargos}
                                valor={d.cargo}
                                onChange={(v) => set("cargo", v)}
                                nombre="Cargo"
                              />
                            </div>
                          </div>
                          <div>
                            <p className={labelCls}>Usuarios o equipos involucrados</p>
                            <div className="mt-3">
                              <Chips
                                opciones={tramosUsuarios}
                                valor={d.usuarios}
                                onChange={(v) => set("usuarios", v)}
                                nombre="Usuarios"
                              />
                            </div>
                          </div>
                          <div>
                            <p className={labelCls}>Plazo estimado</p>
                            <div className="mt-3">
                              <Chips
                                opciones={plazos}
                                valor={d.plazo}
                                onChange={(v) => set("plazo", v)}
                                nombre="Plazo"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Paso 3 */}
                      {paso === 2 && (
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="nombre" className={labelCls}>
                              Nombre *
                            </label>
                            <input
                              id="nombre"
                              className={`${inputCls} mt-2`}
                              value={d.nombre}
                              onChange={(e) => set("nombre", e.target.value)}
                              autoComplete="name"
                            />
                          </div>
                          <div>
                            <label htmlFor="compania" className={labelCls}>
                              Empresa *
                            </label>
                            <input
                              id="compania"
                              className={`${inputCls} mt-2`}
                              value={d.compania}
                              onChange={(e) => set("compania", e.target.value)}
                              autoComplete="organization"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className={labelCls}>
                              Correo corporativo *
                            </label>
                            <input
                              id="email"
                              type="email"
                              inputMode="email"
                              className={`${inputCls} mt-2`}
                              value={d.email}
                              onChange={(e) => set("email", e.target.value)}
                              autoComplete="email"
                            />
                          </div>
                          <div>
                            <label htmlFor="telefono" className={labelCls}>
                              Teléfono
                            </label>
                            <input
                              id="telefono"
                              type="tel"
                              inputMode="tel"
                              className={`${inputCls} mt-2`}
                              value={d.telefono}
                              onChange={(e) => set("telefono", e.target.value)}
                              autoComplete="tel"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="mensaje" className={labelCls}>
                              Detalle (opcional)
                            </label>
                            <textarea
                              id="mensaje"
                              rows={3}
                              className={`${inputCls} mt-2 resize-y`}
                              value={d.mensaje}
                              onChange={(e) => set("mensaje", e.target.value)}
                              placeholder="Software que usan, equipos a renovar, procesos a automatizar…"
                            />
                          </div>
                        </div>
                      )}

                      {/* Navegación */}
                      <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-5">
                        <button
                          type="button"
                          onClick={() => setPaso((p) => Math.max(0, p - 1))}
                          disabled={paso === 0}
                          className="font-mono text-[0.72rem] tracking-[0.08em] text-muted uppercase transition-colors hover:text-ink disabled:invisible"
                        >
                          ← Volver
                        </button>

                        <button
                          type="button"
                          disabled={!puedeAvanzar}
                          onClick={() =>
                            paso === PASOS.length - 1
                              ? setEnviado(true)
                              : setPaso((p) => p + 1)
                          }
                          className="group inline-flex items-center gap-2.5 bg-ink px-5 py-3.5 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:bg-line-2"
                        >
                          {paso === PASOS.length - 1 ? "Revisar solicitud" : "Continuar"}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

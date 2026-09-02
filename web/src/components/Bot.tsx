"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { empresa } from "@/lib/data";
import { Chat, Close, WhatsApp } from "./Icons";

/* ---------------------------------------------------------------- */
/*  Guion del asistente                                              */
/*  Árbol simple: cada nodo responde y ofrece los siguientes pasos.  */
/* ---------------------------------------------------------------- */

type Nodo = {
  respuesta: string[];
  opciones: { label: string; ir: string }[];
  /** Cierra la conversación ofreciendo derivación a una persona. */
  derivar?: boolean;
};

const GUION: Record<string, Nodo> = {
  inicio: {
    respuesta: [
      "Hola. Soy el asistente de UpComp.",
      "¿Qué necesitas resolver hoy?",
    ],
    opciones: [
      { label: "Equipamiento para mi empresa", ir: "equipamiento" },
      { label: "Soporte y continuidad TI", ir: "soporte" },
      { label: "Un sistema a medida", ir: "software" },
      { label: "Servidor o IA privada", ir: "infra" },
    ],
  },
  equipamiento: {
    respuesta: [
      "Trabajamos cinco frentes: workstations, notebooks corporativos, servidores, salas de reunión y redes.",
      "Antes de cotizar revisamos software, carga de trabajo, memoria, GPU, almacenamiento y garantía.",
    ],
    opciones: [
      { label: "Necesito una workstation potente", ir: "workstation" },
      { label: "Renovar equipos de oficina", ir: "puesto" },
      { label: "Hablar con un ejecutivo", ir: "derivar" },
    ],
  },
  workstation: {
    respuesta: [
      "Para eso tenemos un configurador en esta misma página: tres preguntas y te sugiere la plataforma según la carga real.",
      "Está en la sección Herramientas.",
    ],
    opciones: [
      { label: "Ir al configurador", ir: "#herramientas" },
      { label: "Prefiero que me contacten", ir: "derivar" },
    ],
  },
  puesto: {
    respuesta: [
      "El Puesto de Trabajo Gestionado junta equipo, preparación, soporte, garantía y renovación en un solo servicio mensual.",
      "Hay una calculadora en esta página para estimar según cantidad de usuarios.",
    ],
    opciones: [
      { label: "Ver la calculadora", ir: "#herramientas" },
      { label: "Quiero una propuesta", ir: "derivar" },
    ],
  },
  soporte: {
    respuesta: [
      "Ofrecemos mesa de ayuda, mantención preventiva y correctiva, gestión de garantías y continuidad operacional.",
      "Puede ser por incidente o como servicio permanente.",
    ],
    opciones: [
      { label: "Servicio permanente", ir: "derivar" },
      { label: "Tengo un problema puntual", ir: "derivar" },
    ],
  },
  software: {
    respuesta: [
      "Desarrollamos cuando la plataforma estándar no resuelve el proceso real: aplicaciones y portales, automatización, integraciones con APIs y analítica interna.",
      "¿De qué se trata lo tuyo?",
    ],
    opciones: [
      { label: "Automatizar un proceso manual", ir: "derivar" },
      { label: "Integrar dos sistemas", ir: "derivar" },
      { label: "Un portal o backoffice", ir: "derivar" },
    ],
  },
  infra: {
    respuesta: [
      "Tres opciones: servidor gestionado en nube o privado, bots de WhatsApp para atención, e inteligencia artificial local donde los datos no salen de la empresa.",
      "La IA privada corre sobre las mismas workstations que seleccionamos y respaldamos.",
    ],
    opciones: [
      { label: "IA privada me interesa", ir: "derivar" },
      { label: "Quiero un bot como este", ir: "bot" },
      { label: "Servidor gestionado", ir: "derivar" },
    ],
  },
  bot: {
    respuesta: [
      "Este asistente es justamente una demo del producto: atención automatizada que responde, califica y deriva a una persona con el contexto ya recogido.",
      "En producción va sobre la API oficial de WhatsApp Business.",
    ],
    opciones: [{ label: "Quiero uno para mi empresa", ir: "derivar" }],
  },
  derivar: {
    respuesta: [
      "Perfecto. Te dejo con el equipo comercial y les paso lo que conversamos.",
    ],
    opciones: [],
    derivar: true,
  },
};

type Mensaje = { de: "bot" | "yo"; texto: string };

export function Bot() {
  const [abierto, setAbierto] = useState(false);
  const [nodo, setNodo] = useState<string>("inicio");
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [escribiendo, setEscribiendo] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const actual = GUION[nodo];

  // El saludo se dispara al abrir, que es un evento — no algo que sincronizar
  // desde un efecto.
  const alternar = () => {
    if (abierto) {
      setAbierto(false);
      return;
    }
    setAbierto(true);
    if (mensajes.length > 0) return;

    setEscribiendo(true);
    window.setTimeout(() => {
      setEscribiendo(false);
      setMensajes(GUION.inicio.respuesta.map((texto) => ({ de: "bot", texto })));
    }, 650);
  };

  // Mantener el scroll abajo
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [mensajes, escribiendo]);

  const elegir = (label: string, ir: string) => {
    setMensajes((m) => [...m, { de: "yo", texto: label }]);

    // Los destinos con # son anclas de la propia página, no nodos del guion.
    if (ir.startsWith("#")) {
      setAbierto(false);
      window.setTimeout(() => {
        document.querySelector(ir)?.scrollIntoView({ behavior: "smooth" });
      }, 220);
      return;
    }

    setEscribiendo(true);
    window.setTimeout(() => {
      setEscribiendo(false);
      setNodo(ir);
      setMensajes((m) => [
        ...m,
        ...GUION[ir].respuesta.map((texto) => ({ de: "bot" as const, texto })),
      ]);
    }, 750);
  };

  const reiniciar = () => {
    setNodo("inicio");
    setMensajes(GUION.inicio.respuesta.map((texto) => ({ de: "bot", texto })));
  };

  const traspaso = encodeURIComponent(
    "Hola, vengo del sitio de UpComp. Estuve conversando con el asistente y me gustaría hablar con un ejecutivo.",
  );

  return (
    <>
      {/* Lanzador */}
      <button
        type="button"
        onClick={alternar}
        aria-label={abierto ? "Cerrar asistente" : "Abrir asistente UpComp"}
        aria-expanded={abierto}
        className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center bg-brand text-paper shadow-[0_8px_28px_-8px_rgba(13,20,18,.55)] transition-colors hover:bg-brand-deep sm:right-6 sm:bottom-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={abierto ? "x" : "chat"}
            initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 25, scale: 0.8 }}
            transition={{ duration: 0.18 }}
          >
            {abierto ? (
              <Close className="h-6 w-6" />
            ) : (
              <Chat className="h-6 w-6" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-x-3 bottom-22 z-40 flex max-h-[min(34rem,72vh)] flex-col overflow-hidden border border-line bg-paper shadow-[0_20px_60px_-20px_rgba(13,20,18,.45)] sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[24rem]"
            role="dialog"
            aria-label="Asistente UpComp"
          >
            {/* Cabecera */}
            <div className="flex items-center gap-3 border-b border-line bg-dark px-4 py-3.5 text-dark-text">
              <span className="flex h-9 w-9 items-center justify-center bg-brand-bright text-dark">
                <Chat className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[0.95rem] leading-tight font-bold">
                  Asistente UpComp
                </p>
                <p className="font-mono text-[0.62rem] tracking-[0.1em] text-dark-muted uppercase">
                  Demo · responde al instante
                </p>
              </div>
              <button
                type="button"
                onClick={reiniciar}
                className="font-mono text-[0.62rem] tracking-[0.08em] text-dark-muted uppercase transition-colors hover:text-dark-text"
              >
                Reiniciar
              </button>
            </div>

            {/* Conversación */}
            <div
              ref={scrollRef}
              className="thin-scroll flex-1 space-y-2.5 overflow-y-auto bg-ground px-4 py-4"
            >
              {mensajes.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className={`flex ${m.de === "yo" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] px-3.5 py-2.5 text-[0.87rem] leading-relaxed ${
                      m.de === "yo"
                        ? "bg-brand text-paper"
                        : "border border-line bg-paper text-ink-2"
                    }`}
                  >
                    {m.texto}
                  </p>
                </motion.div>
              ))}

              {escribiendo && (
                <div className="flex justify-start">
                  <span className="flex gap-1 border border-line bg-paper px-3.5 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted-2"
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          delay: i * 0.18,
                        }}
                      />
                    ))}
                  </span>
                </div>
              )}
            </div>

            {/* Opciones */}
            <div className="border-t border-line bg-paper px-3.5 py-3.5">
              {actual.derivar ? (
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${empresa.telefonoRaw.replace("+", "")}?text=${traspaso}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-brand px-4 py-3 text-[0.87rem] font-semibold text-paper transition-colors hover:bg-brand-deep"
                  >
                    <WhatsApp className="h-4 w-4" />
                    Continuar por WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setAbierto(false);
                      window.setTimeout(
                        () =>
                          document
                            .querySelector("#contacto")
                            ?.scrollIntoView({ behavior: "smooth" }),
                        220,
                      );
                    }}
                    className="border border-line-2 px-4 py-3 text-[0.87rem] font-semibold text-ink transition-colors hover:border-ink"
                  >
                    Prefiero dejar mis datos
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {actual.opciones.map((o) => (
                    <button
                      key={o.label}
                      type="button"
                      disabled={escribiendo}
                      onClick={() => elegir(o.label, o.ir)}
                      className="border border-line-2 px-3 py-2 text-left text-[0.82rem] text-ink-2 transition-colors hover:border-brand hover:bg-brand-wash hover:text-brand-deep disabled:opacity-45"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

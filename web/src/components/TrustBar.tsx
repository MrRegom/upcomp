import { clientes } from "@/lib/data";

/**
 * Barra de confianza. Va inmediatamente después del hero: la lección de
 * las webs enterprise es abrir con prueba, no con catálogo de servicios.
 */
export function TrustBar() {
  // Duplicamos la lista para que la marquesina cierre sin salto.
  const fila = [...clientes, ...clientes];

  return (
    <section
      className="border-b border-line bg-ground py-9"
      aria-label="Clientes de UpComp"
    >
      <p className="shell font-mono text-[0.68rem] tracking-[0.13em] text-muted uppercase">
        Empresas e instituciones que confían en UpComp
      </p>

      <div className="marquee-mask mt-6 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-x-12 sm:gap-x-16">
          {fila.map((c, i) => (
            <li
              key={`${c.nombre}-${i}`}
              className="font-display text-[1.05rem] font-bold whitespace-nowrap text-ink/45 sm:text-[1.2rem]"
              aria-hidden={i >= clientes.length}
            >
              {c.nombre}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

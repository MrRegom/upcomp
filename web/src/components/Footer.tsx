import { empresa } from "@/lib/data";
import { Logo } from "./Header";
import { Mail, Phone, Pin } from "./Icons";

const COLUMNAS = [
  {
    titulo: "Soluciones",
    items: [
      ["Workstations y alto cómputo", "#soluciones"],
      ["Notebooks corporativos", "#soluciones"],
      ["Servidores e infraestructura", "#soluciones"],
      ["Networking y videoconferencia", "#soluciones"],
    ],
  },
  {
    titulo: "Desarrollo",
    items: [
      ["Software a medida", "#desarrollo"],
      ["Integraciones y APIs", "#desarrollo"],
      ["Bots de WhatsApp", "#desarrollo"],
      ["IA local y privada", "#desarrollo"],
    ],
  },
  {
    titulo: "Herramientas",
    items: [
      ["Configurador de workstation", "#herramientas"],
      ["Puesto de trabajo gestionado", "#herramientas"],
      ["Clientes por industria", "#clientes"],
      ["Cotizar proyecto", "#contacto"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* Marca */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-[38ch] text-[0.9rem] text-dark-muted">
              {empresa.tesis}
            </p>

            <ul className="mt-7 space-y-3 text-[0.88rem]">
              <li>
                <a
                  href={`mailto:${empresa.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-brand-bright"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-bright" />
                  {empresa.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${empresa.telefonoRaw}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-brand-bright"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-bright" />
                  {empresa.telefono}
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-muted">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
                <span>
                  {empresa.direccion}
                  <br />
                  {empresa.ciudad}
                </span>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-8">
            {COLUMNAS.map((col) => (
              <nav key={col.titulo} aria-label={col.titulo}>
                <h3 className="font-mono text-[0.66rem] tracking-[0.13em] text-brand-bright uppercase">
                  {col.titulo}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[0.88rem] text-dark-muted transition-colors hover:text-dark-text"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-dark-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] text-dark-muted">
            © {new Date().getFullYear()} {empresa.nombre}. Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-[0.7rem] tracking-[0.08em] text-dark-muted uppercase">
            Prototipo de propuesta · no publicado
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Set de iconos de línea. Trazo 1.5, esquinas vivas: registro técnico,
 * no el redondeo genérico.
 */

type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="m4.5 12.5 5 5L19.5 7" />
  </svg>
);

export const Cpu = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="7" y="7" width="10" height="10" />
    <rect x="3.5" y="3.5" width="17" height="17" />
    <path d="M10 3.5V1M14 3.5V1M10 23v-2.5M14 23v-2.5M3.5 10H1M3.5 14H1M23 10h-2.5M23 14h-2.5" />
  </svg>
);

export const Server = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="4" width="18" height="6" />
    <rect x="3" y="14" width="18" height="6" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

export const Laptop = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M5 5h14v10H5z" />
    <path d="M2 19h20l-1.5-4h-17z" />
  </svg>
);

export const Network = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="9" y="2" width="6" height="5" />
    <rect x="2" y="17" width="6" height="5" />
    <rect x="16" y="17" width="6" height="5" />
    <path d="M12 7v5M5 17v-2.5h14V17" />
  </svg>
);

export const Video = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="2" y="6" width="13" height="12" />
    <path d="m15 11 7-4v10l-7-4z" />
  </svg>
);

export const Wrench = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M15.5 3a5.5 5.5 0 0 0-5 7.7L3 18.2 5.8 21l7.5-7.5A5.5 5.5 0 1 0 15.5 3Z" />
  </svg>
);

export const Headset = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="2" y="13" width="4" height="7" />
    <rect x="18" y="13" width="4" height="7" />
    <path d="M20 20v1a2 2 0 0 1-2 2h-4" />
  </svg>
);

export const Shield = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10v-6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Cloud = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M6.5 19A4.5 4.5 0 0 1 6 10.1a6 6 0 0 1 11.6-1.6A4 4 0 0 1 18 19z" />
  </svg>
);

export const Chat = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3 4h18v13H8l-5 4z" />
    <path d="M8 9h8M8 12.5h5" />
  </svg>
);

export const Brain = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 4.5a3 3 0 0 0-5.7-1.3A3 3 0 0 0 3.6 8 3 3 0 0 0 5 13.4 3 3 0 0 0 8.8 18a3 3 0 0 0 3.2 2.5z" />
    <path d="M12 4.5a3 3 0 0 1 5.7-1.3A3 3 0 0 1 20.4 8 3 3 0 0 1 19 13.4 3 3 0 0 1 15.2 18a3 3 0 0 1-3.2 2.5z" />
    <path d="M12 4.5v16" />
  </svg>
);

export const Plug = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M9 2v6M15 2v6" />
    <path d="M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6z" />
    <path d="M12 17v5" />
  </svg>
);

export const Chart = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M7 15l4-5 3 3 5-7" />
  </svg>
);

export const Window = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" />
    <path d="M3 9h18M7 6.5h.01M9.5 6.5h.01" />
  </svg>
);

export const Flow = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="2" y="4" width="6" height="5" />
    <rect x="16" y="15" width="6" height="5" />
    <path d="M5 9v5.5a3 3 0 0 0 3 3h8" />
    <path d="m13.5 15 2.5 2.5-2.5 2.5" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="2.5" y="5" width="19" height="14" />
    <path d="m3 6 9 6.5L21 6" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M6 3h4l2 5-2.5 1.5a12 12 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const WhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.45 1.32 4.95L2 22.5l5.78-1.42a9.86 9.86 0 0 0 4.26.96h.01c5.46 0 9.91-4.45 9.91-9.92 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.17h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.76.83-3.02-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.26 8.25Z" />
  </svg>
);

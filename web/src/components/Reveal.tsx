"use client";

import { useCallback, useState, type ReactNode } from "react";

/**
 * Revelado al entrar en viewport, sin librería.
 * El CSS vive en globals.css bajo [data-reveal].
 *
 * Usa un ref callback en vez de useEffect: el observer se engancha cuando el
 * nodo entra al DOM y se limpia cuando sale (React 19 admite devolver la
 * función de limpieza desde un ref callback).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** ms de retraso, para escalonar grupos */
  delay?: number;
  className?: string;
}) {
  const [shown, setShown] = useState(false);

  const ref = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el || shown) return;

      // Si el navegador no soporta IO, mostramos sin animación.
      if (typeof IntersectionObserver === "undefined") {
        setShown(true);
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setShown(true);
              io.disconnect();
            }
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
      );

      io.observe(el);
      return () => io.disconnect();
    },
    [shown],
  );

  return (
    <div
      ref={ref}
      data-reveal
      data-shown={shown}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={className}
    >
      {children}
    </div>
  );
}

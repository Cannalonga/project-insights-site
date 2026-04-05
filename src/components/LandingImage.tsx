"use client";

import { useEffect, useRef, useState } from "react";

type LandingImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function LandingImage({ src, alt, className, imageClassName }: LandingImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openedAtRef = useRef(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    openedAtRef.current = Date.now();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeIfBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (Date.now() - openedAtRef.current < 180) {
      return;
    }

    setIsOpen(false);
  };

  return (
    <>
      <div className={className}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-[inherit]"
          aria-label={`Ampliar imagem: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`h-full w-full rounded-[inherit] object-cover object-center transition duration-200 group-hover:scale-[1.01] ${imageClassName ?? ""}`.trim()}
          />
          <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[rgba(16,37,32,0.72)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100">
            Ampliar
          </span>
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(12,24,21,0.82)] p-4 sm:p-8"
          onClick={closeIfBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.1)] text-lg font-semibold text-white transition hover:bg-[rgba(255,255,255,0.18)]"
            aria-label="Fechar imagem ampliada"
          >
            ×
          </button>

          <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.04)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <img src={src} alt={alt} className="max-h-[92vh] w-full object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}

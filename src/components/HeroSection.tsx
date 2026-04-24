import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";
import { siteConfig } from "@/lib/site-config";

const compatibilityBadges = [
  "MS Project (.mpp)",
  "Primavera P6 (.xer)",
  "Desktop offline-first",
];

const trustStrip = [
  {
    title: "Clareza",
    description: "Leitura executiva para entender o que exige atenção agora.",
  },
  {
    title: "Produtividade",
    description: "Menos tempo interpretando cronograma, mais tempo decidindo.",
  },
  {
    title: "Confiabilidade",
    description: "Mostra quando a base sustenta a decisão e quando não sustenta.",
  },
];

export function HeroSection() {
  return (
    <section id="topo" className="section-shell pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="section-card relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(12,122,107,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute -right-18 top-16 h-56 w-56 rounded-full bg-[rgba(231,239,231,0.78)] blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[rgba(12,122,107,0.14)] bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] shadow-[0_10px_20px_rgba(15,32,28,0.06)]">
              Desktop offline-first para cronogramas
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-[4.6rem] lg:leading-[0.94]">
              Leitura executiva de cronogramas para{" "}
              <span className="text-[var(--accent-emphasis)]">decidir com mais clareza</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-[1.08rem]">
              Importe arquivos <strong className="text-[var(--foreground)]">.mpp</strong> e{" "}
              <strong className="text-[var(--foreground)]">.xer</strong>, identifique inconsistências e leve para a
              reunião uma leitura executiva confiável, sem depender de nuvem.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {compatibilityBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex rounded-full border border-[rgba(21,44,38,0.12)] bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] shadow-[0_10px_20px_rgba(15,32,28,0.05)]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.demoDownloadUrl}
                className="primary-button min-w-[240px] sm:px-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar demo
              </a>
              <a href="#compatibilidade" className="secondary-button min-w-[220px] sm:px-7">
                Ver compatibilidade
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Comece pela compatibilidade, veja a leitura acontecer e só então avance para a análise completa.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustStrip.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.35rem] border p-4 ${
                    index === 1
                      ? "border-[rgba(12,122,107,0.16)] bg-[rgba(245,251,249,0.98)] shadow-[0_18px_32px_rgba(12,122,107,0.08)]"
                      : "border-[rgba(21,44,38,0.12)] bg-[rgba(255,255,255,0.86)] shadow-[0_16px_28px_rgba(15,32,28,0.06)]"
                  }`}
                >
                  <p className="text-[15px] font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[rgba(12,122,107,0.18)] via-transparent to-[rgba(210,220,196,0.34)] blur-2xl" />
            <div className="relative rounded-[2rem] border border-[rgba(21,44,38,0.1)] bg-[var(--surface-strong)] p-5 shadow-[0_28px_70px_rgba(15,32,28,0.16)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Preview</p>
                  <h2 className="mt-2 text-xl font-semibold">Leitura executiva do projeto</h2>
                </div>
                <span className="rounded-full border border-[rgba(12,122,107,0.12)] bg-[rgba(237,247,245,0.92)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                  Desktop
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white shadow-[0_18px_36px_rgba(15,32,28,0.08)]">
                <LandingImage
                  src={landingAssets.heroPreview}
                  alt="Tela principal do Project Insights com leitura executiva simplificada do cronograma"
                  className="aspect-[16/9] w-full"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[rgba(21,44,38,0.12)] bg-[rgba(255,255,255,0.96)] p-4 shadow-[0_16px_30px_rgba(15,32,28,0.08)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ação</p>
                  <p className="mt-2 text-base font-semibold">Onde o cronograma pede atenção</p>
                </div>
                <div className="rounded-2xl border border-[rgba(12,122,107,0.14)] bg-[rgba(245,251,249,0.98)] p-4 shadow-[0_16px_30px_rgba(12,122,107,0.08)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Confiança</p>
                  <p className="mt-2 text-base font-semibold">O que a base sustenta de verdade</p>
                </div>
                <div className="rounded-2xl border border-[rgba(49,95,132,0.14)] bg-[rgba(247,250,253,0.98)] p-4 shadow-[0_16px_30px_rgba(49,95,132,0.08)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Saída</p>
                  <p className="mt-2 text-base font-semibold">PDF, JSON estruturado e CSV</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[rgba(12,122,107,0.12)] bg-[linear-gradient(180deg,rgba(238,240,227,0.88),rgba(244,249,244,0.92))] p-4 text-sm leading-6 text-[var(--foreground)] shadow-[0_14px_28px_rgba(15,32,28,0.06)]">
                A demo deixa claro o valor da leitura. A licença completa leva essa confiança para a rotina técnica da
                equipe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

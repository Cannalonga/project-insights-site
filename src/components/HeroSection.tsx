import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";
import { siteConfig } from "@/lib/site-config";

const heroSignals = [
  { value: "Confiabilidade", label: "para saber quando a leitura sustenta decisão" },
  { value: "Inconsistências", label: "para identificar problemas reais no cronograma" },
  { value: "Saída executiva", label: "com PDF, JSON estruturado e CSV" },
];

export function HeroSection() {
  return (
    <section id="topo" className="section-shell pt-10 pb-22 sm:pt-14 sm:pb-26">
      <div className="section-card relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(12,122,107,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute -right-18 top-16 h-56 w-56 rounded-full bg-[rgba(231,239,231,0.78)] blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[rgba(12,122,107,0.14)] bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] shadow-[0_10px_20px_rgba(15,32,28,0.06)]">
              Desktop offline para leitura executiva de cronogramas
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-[4.4rem] lg:leading-[0.96]">
              Leitura executiva de cronogramas para{" "}
              <span className="text-[var(--accent-emphasis)]">tomada de decisão</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-[1.08rem]">
              Importe arquivos do MS Project (.mpp) e Oracle Primavera P6 (.xer), identifique inconsistências, avalie
              a confiabilidade e gere saída executiva pronta para reunião.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Compatível com MS Project e Primavera P6
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Para engenheiros e planejadores de obra
            </p>
            <p className="mt-3 max-w-2xl text-base font-semibold text-[var(--foreground)]">
              Entenda rápido onde agir, no que confiar e o que levar para a reunião.
            </p>

            <div className="mt-4 grid gap-2 text-sm font-semibold sm:grid-cols-3">
              <div className="rounded-[1rem] border border-[rgba(12,122,107,0.18)] bg-[rgba(237,247,245,0.98)] px-4 py-3 text-[var(--accent-strong)] shadow-[0_10px_22px_rgba(12,122,107,0.08)]">
                Trimestral - R$297
              </div>
              <div className="rounded-[1rem] border border-[rgba(49,95,132,0.16)] bg-[rgba(245,249,253,0.95)] px-4 py-3 text-[var(--analysis)] shadow-[0_10px_20px_rgba(49,95,132,0.06)]">
                Semestral - R$537
              </div>
              <div className="rounded-[1rem] border border-[rgba(21,44,38,0.1)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-[var(--foreground)] shadow-[0_10px_20px_rgba(15,32,28,0.04)]">
                Anual - R$997
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.demoDownloadUrl}
                className="primary-button min-w-[240px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar demo e testar
              </a>
              <a href="#como-funciona" className="secondary-button min-w-[220px]">
                Ver como funciona
              </a>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Teste no seu cronograma e veja em minutos o que sustenta decisão.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Escolha o ciclo ideal depois da demo: entrada rápida no trimestral ou mais continuidade nos planos
              seguintes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal, index) => (
                <div
                  key={signal.value}
                  className={`rounded-[1.35rem] border p-4 ${
                    index === 0
                      ? "border-[rgba(12,122,107,0.18)] bg-[rgba(255,255,255,0.94)] shadow-[0_18px_32px_rgba(12,122,107,0.1)]"
                      : "border-[rgba(21,44,38,0.12)] bg-[rgba(255,255,255,0.82)] shadow-[0_16px_28px_rgba(15,32,28,0.07)]"
                  }`}
                >
                  <p className="text-[15px] font-semibold text-[var(--foreground)]">{signal.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{signal.label}</p>
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
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Problema</p>
                  <p className="mt-2 text-base font-semibold">Onde o cronograma pede ação</p>
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

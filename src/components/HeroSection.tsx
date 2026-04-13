import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";
import { siteConfig } from "@/lib/site-config";

const heroSignals = [
  { value: "Confiabilidade", label: "para saber quando a leitura sustenta decisao" },
  { value: "Inconsistencias", label: "para identificar problemas reais no cronograma" },
  { value: "Saida executiva", label: "com PDF, JSON estruturado e CSV" },
];

export function HeroSection() {
  return (
    <section id="topo" className="section-shell pt-10 pb-22 sm:pt-14 sm:pb-26">
      <div className="section-card relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(45,93,81,0.16),transparent_58%)]" />
        <div className="pointer-events-none absolute -right-18 top-16 h-56 w-56 rounded-full bg-[rgba(231,239,231,0.72)] blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[rgba(45,93,81,0.14)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] shadow-[0_8px_18px_rgba(15,32,28,0.05)]">
              Desktop offline para leitura executiva de cronogramas
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-[4.4rem] lg:leading-[0.96]">
              Leitura executiva de cronogramas para tomada de decisao
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-[1.08rem]">
              Importe arquivos do MS Project (.mpp) e Oracle Primavera P6 (.xer), identifique inconsistencias, avalie
              a confiabilidade e gere saida executiva pronta para reuniao.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Compativel com MS Project e Primavera P6
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Para engenheiros e planejadores de obra
            </p>
            <p className="mt-3 text-base font-medium text-[var(--foreground)]">
              Leitura pronta para reuniao com foco em risco, consistencia e decisao
            </p>

            <div className="mt-3 grid gap-2 text-sm font-semibold sm:grid-cols-3">
              <div className="rounded-[1rem] border border-[rgba(45,93,81,0.16)] bg-[rgba(238,240,227,0.9)] px-4 py-3 text-[var(--accent-strong)]">
                Trimestral — R$297
              </div>
              <div className="rounded-[1rem] border border-[rgba(49,95,132,0.12)] bg-[rgba(255,255,255,0.78)] px-4 py-3 text-[var(--analysis)]">
                Semestral — R$537
              </div>
              <div className="rounded-[1rem] border border-[rgba(21,44,38,0.08)] bg-[rgba(255,255,255,0.78)] px-4 py-3 text-[var(--foreground)]">
                Anual — R$997
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.demoDownloadUrl}
                className="primary-button min-w-[220px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar versao demo
              </a>
              <a
                href={siteConfig.buyUrl}
                className="secondary-button min-w-[220px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar licenca
              </a>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Aplicativo leve, instalacao simples em poucos cliques.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Plano trimestral como entrada mais direta. Opcoes semestrais e anuais para quem quer mais continuidade de uso.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal, index) => (
                <div
                  key={signal.value}
                  className={`rounded-[1.35rem] border p-4 shadow-[0_12px_24px_rgba(15,32,28,0.05)] ${
                    index === 0
                      ? "border-[rgba(45,93,81,0.14)] bg-[rgba(255,255,255,0.86)]"
                      : "border-[var(--border)] bg-[rgba(255,255,255,0.72)]"
                  }`}
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">{signal.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[rgba(45,93,81,0.18)] via-transparent to-[rgba(210,220,196,0.3)] blur-2xl" />
            <div className="relative rounded-[2rem] border border-[rgba(21,44,38,0.08)] bg-[var(--surface-strong)] p-5 shadow-[0_28px_70px_rgba(15,32,28,0.14)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Preview</p>
                  <h2 className="mt-2 text-xl font-semibold">Leitura executiva do projeto</h2>
                </div>
                <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
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
                <div className="rounded-2xl border border-[rgba(21,44,38,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,32,28,0.04)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Problema</p>
                  <p className="mt-2 text-base font-semibold">Onde o cronograma pede acao</p>
                </div>
                <div className="rounded-2xl border border-[rgba(21,44,38,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,32,28,0.04)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Confianca</p>
                  <p className="mt-2 text-base font-semibold">O que a base sustenta de verdade</p>
                </div>
                <div className="rounded-2xl border border-[rgba(21,44,38,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,32,28,0.04)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Saida</p>
                  <p className="mt-2 text-base font-semibold">PDF, JSON estruturado e CSV</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[rgba(45,93,81,0.08)] bg-[var(--warm)] p-4 text-sm leading-6 text-[var(--foreground)]">
                A demo mostra a leitura acontecendo. A licenca completa amplia a leitura executiva, a exportacao e a confianca para reunioes tecnicas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

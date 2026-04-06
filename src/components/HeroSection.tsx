import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";
import { siteConfig } from "@/lib/site-config";

const heroSignals = [
  { value: "Clareza rápida", label: "para chegar na reunião sabendo onde agir" },
  { value: "Comparação clara", label: "para mostrar o que mudou entre versões" },
  { value: "Uso profissional", label: "com demo e licença completa" },
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
              Desktop offline para leitura executiva de cronogramas MPP
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-[4.4rem] lg:leading-[0.96]">
              LEITURA EXECUTIVA DE CRONOGRAMAS MPP
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-[1.15rem]">
              Pare de abrir o MPP para tentar descobrir sozinho onde o projeto travou.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-[1.08rem]">
              O Project Insights transforma cronogramas em leitura executiva clara, mostra riscos reais, compara
              versões e leva você direto para a decisão, sem navegar tarefa por tarefa.
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Para engenheiros e planejadores de obra
            </p>
            <p className="mt-3 text-base font-medium text-[var(--foreground)]">
              Leve uma decisão pronta para a reunião em minutos
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Identifique atrasos, riscos e decisões em segundos
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
                Baixar versão demo
              </a>
              <a
                href={siteConfig.buyUrl}
                className="secondary-button min-w-[220px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar licença
              </a>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Aplicativo leve, instalação simples em poucos cliques.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Plano trimestral como entrada mais direta. Opções semestrais e anuais para quem quer mais continuidade.
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
                  <p className="mt-2 text-base font-semibold">Onde o projeto pede acao</p>
                </div>
                <div className="rounded-2xl border border-[rgba(21,44,38,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,32,28,0.04)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Evolucao</p>
                  <p className="mt-2 text-base font-semibold">O que mudou entre versoes</p>
                </div>
                <div className="rounded-2xl border border-[rgba(21,44,38,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,32,28,0.04)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Saida</p>
                  <p className="mt-2 text-base font-semibold">PDF executivo pronto para compartilhar</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[rgba(45,93,81,0.08)] bg-[var(--warm)] p-4 text-sm leading-6 text-[var(--foreground)]">
                A demo mostra a leitura acontecendo. A licenca completa leva essa clareza para a reuniao e para a decisao.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

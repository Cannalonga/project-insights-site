import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";

export function MockupSection() {
  return (
    <section id="demonstracao" className="section-shell py-24">
      <div className="section-card soft-grid overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Demonstração</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A demo mostra valor sem exigir esforço.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Uma imagem principal, duas provas complementares e texto curto. O objetivo é mostrar leitura, risco e
            prioridade mais rápido.
          </p>
          <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
            Validado com cronogramas reais de obra e uso em campo
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,248,0.98),rgba(244,247,240,0.92))] p-5 shadow-[0_22px_54px_rgba(19,37,32,0.08)]">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Leitura executiva</p>
            <h3 className="mt-3 text-2xl font-semibold">Status, risco e prioridade em uma única visão.</h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              Entenda o momento do projeto sem abrir tarefa por tarefa para montar o raciocínio.
            </p>

            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[var(--border)] shadow-[0_18px_36px_rgba(15,32,28,0.08)]">
              <LandingImage
                src={landingAssets.heroPreview}
                alt="Tela simplificada do Project Insights com leitura executiva do cronograma"
                className="aspect-[16/9] w-full"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.25rem] border border-[rgba(21,44,38,0.12)] bg-white/92 p-4 shadow-[0_12px_24px_rgba(15,32,28,0.05)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ação</p>
                <p className="mt-2 text-sm font-semibold leading-6">Onde o cronograma pede atenção</p>
              </div>
              <div className="rounded-[1.25rem] border border-[rgba(12,122,107,0.14)] bg-[rgba(245,251,249,0.98)] p-4 shadow-[0_12px_24px_rgba(12,122,107,0.06)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Confiança</p>
                <p className="mt-2 text-sm font-semibold leading-6">O que a base sustenta de verdade</p>
              </div>
              <div className="rounded-[1.25rem] border border-[rgba(49,95,132,0.14)] bg-[rgba(247,250,253,0.98)] p-4 shadow-[0_12px_24px_rgba(49,95,132,0.06)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Saída</p>
                <p className="mt-2 text-sm font-semibold leading-6">PDF, JSON estruturado e CSV</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="mock-panel">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Tarefas que pedem atenção</p>
              <h3 className="mt-4 text-xl font-semibold">Fica claro onde o cronograma está pressionando.</h3>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white">
                <LandingImage
                  src={landingAssets.alertsPreview}
                  alt="Tela do Project Insights com alertas e leitura executiva do cronograma"
                  className="aspect-[16/10] w-full"
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Em vez de interpretar manualmente, você enxerga rápido onde a reunião precisa focar.
              </p>
            </div>

            <div className="mock-panel">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Top 3 decisão</p>
              <h3 className="mt-4 text-xl font-semibold">A reunião já começa sabendo o que priorizar.</h3>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[rgba(49,95,132,0.12)] bg-white">
                <LandingImage
                  src={landingAssets.decisionPreview}
                  alt="Tela do Project Insights destacando as tres principais decisões"
                  className="aspect-[16/10] w-full"
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                O app encurta o caminho entre análise e ação, sem conversa dispersa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

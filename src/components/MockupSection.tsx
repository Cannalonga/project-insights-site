import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";

export function MockupSection() {
  return (
    <section id="demonstracao" className="section-shell py-24">
      <div className="section-card soft-grid overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Demonstração</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A demo mostra valor logo na primeira leitura.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Cada tela prova um tipo de valor: clareza, risco, prioridade, comparação e capacidade de recuperação. A
            imagem faz o trabalho pesado. O texto só orienta o olhar.
          </p>
          <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
            Validado com cronogramas reais de obra e uso em campo
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
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

            <div className="mt-5 rounded-[1.4rem] border border-[rgba(49,95,132,0.12)] bg-white/88 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Alertas inteligentes</p>
              <p className="mt-2 text-lg font-semibold">Risco visível antes da reunião.</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Veja onde o cronograma pressiona e leve a conversa direto para o ponto crítico.
              </p>
            </div>

            <LandingImage
              src={landingAssets.alertsPreview}
              alt="Tela do Project Insights com alertas e leitura executiva do cronograma"
              className="mt-4 overflow-hidden rounded-[1.5rem] border border-[var(--border)] shadow-[0_18px_36px_rgba(15,32,28,0.08)]"
              imageClassName="object-top"
            />
          </div>

          <div className="grid gap-4">
            <div className="mock-panel">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Tarefas que pedem atenção</p>
              <h3 className="mt-4 text-xl font-semibold">Fica claro onde o cronograma está pressionando.</h3>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white">
                <LandingImage
                  src={landingAssets.attentionPreview}
                  alt="Tela do Project Insights destacando tarefas que pedem atenção"
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

            <div className="mock-panel">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Capacidade de recuperação</p>
              <h3 className="mt-4 text-xl font-semibold">Você entende se ainda há espaço para reagir.</h3>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[rgba(45,93,81,0.12)] bg-white">
                <LandingImage
                  src={landingAssets.recoveryPreview}
                  alt="Tela do Project Insights mostrando capacidade de recuperação do cronograma"
                  className="aspect-[16/10] w-full"
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                A comparação deixa mais fácil enxergar margem de reação antes que o risco vire fato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

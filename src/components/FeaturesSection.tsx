const valueItems = [
  "Leitura executiva de status, risco e prioridade sem depender de planilhas paralelas",
  "Identificação de inconsistências no cronograma antes de levar a reunião adiante",
  "Avaliação da confiabilidade da leitura para sustentar a decisão com mais segurança",
  "Comparação entre versões do cronograma para acompanhar mudanças com clareza",
];

const supportPoints = [
  "Uso local e offline, sem depender de infraestrutura externa.",
  "Exportação executiva em PDF, JSON estruturado e CSV quando a rotina exige repasse técnico.",
  "Formato pensado para leitura rápida, alinhamento e continuidade operacional.",
];

export function FeatureSection() {
  return (
    <section id="prova" className="section-shell py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Licença completa</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          A licença transforma leitura em decisão
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          O foco aqui é deixar claro o que o produto entrega antes do fechamento comercial. O valor precisa aparecer
          primeiro, para que a compra venha como consequência.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="feature-card border-[rgba(45,93,81,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,240,227,0.86))]">
          <div className="inline-flex rounded-full bg-[rgba(12,122,107,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Valor percebido
          </div>

          <div className="mt-6 grid gap-3">
            {valueItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-[rgba(21,44,38,0.1)] bg-white/92 px-4 py-4 text-base leading-7 text-[var(--foreground)] shadow-[0_10px_20px_rgba(15,32,28,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-7 text-[var(--muted)]">
            A entrega foi pensada para rotina técnica, leitura executiva e tomada de decisão sem excesso de ruído.
          </p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">Como a leitura ajuda</p>
          <h3 className="mt-4 text-2xl font-semibold">Menos suposição. Mais decisão com base técnica.</h3>
          <div className="mt-6 space-y-3">
            {supportPoints.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[var(--border)] bg-white/88 px-4 py-4 text-base leading-7 text-[var(--foreground)]"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

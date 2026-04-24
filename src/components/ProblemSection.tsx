const painPoints = [
  "Muito detalhe e pouca clareza sobre o que realmente pede atenção.",
  "A leitura manual consome tempo antes mesmo da reunião começar.",
  "Comparar versões ainda gera dúvida sobre avanço, parada ou degradação.",
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">O problema</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            O cronograma está ali. A confiabilidade da leitura nem sempre.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Quando a decisão depende de navegação manual, ela chega mais tarde do que deveria. O que falta não é mais
            tela. É leitura executiva com contexto para saber onde agir e no que não confiar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {painPoints.map((item) => (
            <article key={item} className="feature-card min-h-[170px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--warm)] text-sm font-semibold text-[var(--accent-strong)]">
                !
              </div>
              <p className="mt-5 text-base leading-7 text-[var(--foreground)]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

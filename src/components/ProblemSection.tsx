const painPoints = [
  "Cronogramas MPP trazem muito detalhe e pouca leitura rápida do que realmente importa.",
  "Status executivo costuma depender de interpretação manual, lenta e inconsistente.",
  "Explicar risco, atraso e prioridade para reunião ainda toma mais tempo do que deveria.",
  "Comparar versões do projeto nem sempre revela, com clareza, onde houve avanço ou estagnação.",
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">O problema</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            O cronograma existe, mas a leitura executiva nem sempre chega junto.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Quando a análise depende de abrir o MPP e navegar tarefa por tarefa, a decisão chega tarde. O que falta não
            é dado. é clareza para priorizar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((item) => (
            <article key={item} className="feature-card min-h-[190px]">
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

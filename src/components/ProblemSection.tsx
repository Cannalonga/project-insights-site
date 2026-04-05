const painPoints = [
  "Cronogramas MPP trazem muito detalhe e pouca clareza sobre o que realmente importa.",
  "A reuniao perde tempo quando o status depende de leitura manual e interpretacao longa.",
  "Risco e prioridade nem sempre ficam claros logo na primeira abertura do arquivo.",
  "Comparar versoes do projeto ainda costuma gerar duvida sobre onde houve avanco ou parada.",
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">O problema</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            O cronograma esta ali. A clareza para decidir nem sempre.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Quando tudo depende de abrir o MPP e navegar tarefa por tarefa, a decisao chega tarde. O que falta nao e
            dado. E leitura clara para saber onde agir.
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

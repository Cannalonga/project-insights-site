const trustPoints = [
  {
    title: "Quando a base sustenta leitura",
    tone: "accent",
    items: [
      "O sistema organiza risco, inconsistencias e prioridade em leitura executiva.",
      "A saida pode seguir para PDF, JSON estruturado e CSV com contexto tecnico.",
      "A decisao chega com mais clareza sobre o que agir primeiro.",
    ],
  },
  {
    title: "Quando a base nao sustenta leitura confiavel",
    tone: "muted",
    items: [
      "O sistema nao inventa dados para completar o que o cronograma nao entrega.",
      "Nao forca analise como se baseline, progresso ou consistencia existissem quando nao existem.",
      "Nao mascara ausencia de informacao para parecer mais preciso do que realmente e.",
    ],
  },
];

export function DifferentialsSection() {
  return (
    <section id="antes-depois" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">Confiabilidade</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Nem todo cronograma sustenta uma analise confiavel
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            O diferencial do Project Insights nao e inventar seguranca. E mostrar com honestidade quando a leitura pode sustentar decisao e quando a base ainda esta fraca.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {trustPoints.map((column) => (
            <article
              key={column.title}
              className={`feature-card ${
                column.tone === "accent"
                  ? "border-[rgba(45,93,81,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(238,240,227,0.94))]"
                  : "bg-[rgba(255,255,255,0.72)]"
              }`}
            >
              <h3 className="text-2xl font-semibold">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[var(--foreground)]">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className={`mt-2 h-2.5 w-2.5 rounded-full ${
                        column.tone === "accent" ? "bg-[var(--accent-strong)]" : "bg-[var(--accent)]"
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

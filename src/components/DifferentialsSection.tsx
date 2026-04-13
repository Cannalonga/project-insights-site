const trustPoints = [
  {
    title: "Quando a base sustenta leitura",
    tone: "accent",
    items: [
      "O sistema organiza risco, inconsistências e prioridade em leitura executiva.",
      "A saída pode seguir para PDF, JSON estruturado e CSV com contexto técnico.",
      "A decisão chega com mais clareza sobre o que agir primeiro.",
    ],
  },
  {
    title: "Quando a base não sustenta leitura confiável",
    tone: "muted",
    items: [
      "O sistema não inventa dados para completar o que o cronograma não entrega.",
      "Não força análise como se baseline, progresso ou consistência existissem quando não existem.",
      "Não mascara ausência de informação para parecer mais preciso do que realmente é.",
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
            Nem todo cronograma sustenta uma análise confiável
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            O diferencial do Project Insights não é inventar segurança. É mostrar com honestidade quando a leitura pode
            sustentar decisão e quando a base ainda está fraca.
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

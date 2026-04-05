const beforeAfter = [
  {
    title: "Antes",
    tone: "muted",
    items: [
      "Abrir o MPP e tentar entender o cenario manualmente.",
      "Montar a reuniao com leitura espalhada em varias telas.",
      "Perder tempo para descobrir risco, prioridade e proximo passo.",
    ],
  },
  {
    title: "Depois",
    tone: "accent",
    items: [
      "Chegar na reuniao com uma leitura clara de status, risco e prioridade.",
      "Mostrar o que mudou entre versoes sem interpretacao demorada.",
      "Saber onde agir com mais seguranca.",
    ],
  },
];

export function DifferentialsSection() {
  return (
    <section id="antes-depois" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">Antes vs depois</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            O ganho nao e so analisar. E decidir com clareza.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            O Project Insights reduz o tempo entre abrir o cronograma e entrar na reuniao sabendo o que importa.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {beforeAfter.map((column) => (
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

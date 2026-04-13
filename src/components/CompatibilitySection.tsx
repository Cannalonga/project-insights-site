const compatibilityItems = [
  {
    title: "MS Project (.mpp)",
    bullets: ["Leitura estável", "Validado em campo"],
  },
  {
    title: "Primavera P6 (.xer)",
    bullets: ["Leitura integrada", "Análise baseada na qualidade real dos dados"],
  },
];

export function CompatibilitySection() {
  return (
    <section id="compatibilidade" className="section-shell py-20">
      <div className="section-card px-6 py-8 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Compatibilidade</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Compatível com MS Project e Primavera P6
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            O Project Insights lê cronogramas dos dois ecossistemas sem prometer além do que o arquivo realmente
            sustenta.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {compatibilityItems.map((item, index) => (
            <article
              key={item.title}
              className={`feature-card min-h-[220px] ${
                index === 1 ? "border-[rgba(12,122,107,0.14)] bg-[rgba(250,253,252,0.95)]" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              <div className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.15rem] border border-[var(--border)] bg-white/88 px-4 py-3 text-base font-medium text-[var(--foreground)]"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-base leading-7 text-[var(--muted)]">
          O sistema respeita os limites reais das informações disponíveis no cronograma.
        </p>
      </div>
    </section>
  );
}

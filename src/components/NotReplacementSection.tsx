const boundaries = [
  "Nao e ferramenta de planejamento",
  "Nao substitui MS Project ou Primavera",
  "Nao substitui BI",
  "Nao inventa dados",
];

export function NotReplacementSection() {
  return (
    <section id="o-que-nao-e" className="section-shell py-20">
      <div className="section-card px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow">O que nao e</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Posicionamento claro para uso profissional
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              O Project Insights entra depois do cronograma pronto, para leitura executiva, consistencia e decisao.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {boundaries.map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-[var(--border)] bg-white/76 px-5 py-5 text-base leading-7 text-[var(--foreground)]"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

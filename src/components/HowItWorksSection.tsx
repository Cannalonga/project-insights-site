const steps = [
  {
    title: "Carregue o cronograma (.mpp ou .xer)",
    description: "Abra o app e escolha o cronograma para leitura.",
  },
  {
    title: "Receba a leitura executiva",
    description: "O Project Insights mostra status, risco, confiabilidade e onde agir com muito menos ruido.",
  },
  {
    title: "Leve para a reuniao",
    description: "Use a leitura para alinhar acao, prioridade e proximo passo com mais seguranca.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-shell py-20">
      <div className="section-card px-6 py-8 sm:px-8 lg:px-10">
        <p className="eyebrow">Como funciona</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tres passos para sair do arquivo e chegar na decisao.
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] border border-[var(--border)] bg-white/72 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

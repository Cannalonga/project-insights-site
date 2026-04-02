const features = [
  {
    title: "Leitura executiva de MPP",
    description: "Converte cronogramas em visão objetiva de status, risco e situação geral do projeto.",
  },
  {
    title: "Comparação entre versões",
    description: "Mostra evolução real entre base e atual, com gap, avanço e tarefas de maior impacto.",
  },
  {
    title: "Curva S",
    description: "Apresenta avanço planejado, executado e real com leitura clara para acompanhamento.",
  },
  {
    title: "Ação prioritária",
    description: "Destaca a frente que mais influencia a recuperação do cronograma neste momento.",
  },
  {
    title: "PDF executivo",
    description: "Gera saída pronta para reunião, coordenação, diretoria e circulação interna.",
  },
  {
    title: "Funcionamento local e offline",
    description: "Mantém a análise no ambiente do usuário, sem depender de nuvem para operar.",
  },
];

export function FeatureSection() {
  return (
    <section id="recursos" className="section-shell py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Recursos principais</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Recursos desenhados para leitura profissional de cronograma.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="h-12 w-12 rounded-2xl bg-[var(--soft)]" />
            <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

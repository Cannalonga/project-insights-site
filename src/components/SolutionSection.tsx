const solutions = [
  "Leitura executiva do cronograma com foco em status, risco e prioridade.",
  "Comparação entre versões para entender evolução real do projeto.",
  "Ação prioritária destacada a partir do impacto operacional.",
  "PDF executivo pronto para alinhamento com gestores e coordenação.",
];

export function SolutionSection() {
  return (
    <section id="solucao" className="section-shell py-20">
      <div className="section-card px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">A solução</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              O Project Insights transforma o cronograma em leitura clara, sem ruído técnico.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Em vez de navegar por detalhes operacionais para montar um diagnóstico, você carrega o MPP e recebe uma
              leitura executiva pronta para decisão.
            </p>
          </div>

          <div className="grid gap-4">
            {solutions.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white/70 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

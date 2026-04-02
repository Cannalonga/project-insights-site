const differentials = [
  "Sem depender de nuvem para operar.",
  "Leitura pronta para decisão, não apenas para navegação técnica.",
  "Uso profissional real para análise, reunião e acompanhamento.",
  "Clareza para mostrar status e prioridade sem montar explicação manual.",
];

export function DifferentialsSection() {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Feito para uso profissional de verdade, não para parecer um dashboard genérico.
          </h2>
        </div>

        <div className="grid gap-3">
          {differentials.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white/72 p-5">
              <div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent)]" />
              <p className="text-base leading-7 text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

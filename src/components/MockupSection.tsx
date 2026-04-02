export function MockupSection() {
  return (
    <section className="section-shell py-20">
      <div className="section-card soft-grid overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Prova visual</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Uma interface desenhada para mostrar o que importa rapidamente.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[#f9faf5] p-5 shadow-[0_20px_50px_rgba(19,37,32,0.08)]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="mock-panel">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Status geral</p>
                <p className="mt-4 text-3xl font-semibold">Crítico</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Pressão sobre prazo e impacto relevante no cronograma.</p>
              </div>
              <div className="mock-panel">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Score</p>
                <p className="mt-4 text-3xl font-semibold">34</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Leitura consolidada da saúde do projeto.</p>
              </div>
              <div className="mock-panel">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Prazo</p>
                <p className="mt-4 text-3xl font-semibold">Atrasado</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Desvio relevante abaixo do ritmo esperado.</p>
              </div>
              <div className="mock-panel">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Gap</p>
                <p className="mt-4 text-3xl font-semibold">8,4%</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Evolução clara entre base e atual.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="mock-panel">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Curva S</p>
                  <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                    Projeto completo
                  </span>
                </div>
                <div className="mt-6 h-48 rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(47,93,80,0.09),rgba(255,255,255,0))] p-4">
                  <div className="flex h-full items-end gap-2">
                    <div className="h-[24%] w-full rounded-t-2xl bg-[rgba(47,93,80,0.12)]" />
                    <div className="h-[38%] w-full rounded-t-2xl bg-[rgba(47,93,80,0.18)]" />
                    <div className="h-[52%] w-full rounded-t-2xl bg-[rgba(47,93,80,0.22)]" />
                    <div className="h-[63%] w-full rounded-t-2xl bg-[rgba(47,93,80,0.28)]" />
                    <div className="h-[72%] w-full rounded-t-2xl bg-[rgba(47,93,80,0.36)]" />
                    <div className="h-[84%] w-full rounded-t-2xl bg-[rgba(47,93,80,0.48)]" />
                  </div>
                </div>
              </div>

              <div className="mock-panel">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ação prioritária</p>
                <p className="mt-4 text-xl font-semibold">4.1.2 - Liberação final</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Se você fizer apenas uma coisa agora, trate esta frente. Ela concentra uma das maiores alavancas de
                  recuperação do projeto.
                </p>
                <div className="mt-5 rounded-[1.25rem] bg-[var(--warm)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Risco da inação</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                    O atraso tende a se espalhar para marcos seguintes e reduzir a capacidade de reação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="mock-panel">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Comparação</p>
              <h3 className="mt-4 text-xl font-semibold">Evolução entre versões</h3>
              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-[var(--border)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Base</p>
                  <p className="mt-2 text-2xl font-semibold">61,8%</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Atual</p>
                  <p className="mt-2 text-2xl font-semibold">70,2%</p>
                </div>
              </div>
            </div>

            <div className="mock-panel">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">PDF executivo</p>
              <h3 className="mt-4 text-xl font-semibold">Saída pronta para compartilhar</h3>
              <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[#f9faf5] p-5">
                <div className="h-2 w-24 rounded-full bg-[var(--soft)]" />
                <div className="mt-4 h-2 w-full rounded-full bg-[var(--soft)]" />
                <div className="mt-2 h-2 w-10/12 rounded-full bg-[var(--soft)]" />
                <div className="mt-6 grid gap-3">
                  <div className="h-20 rounded-2xl bg-white" />
                  <div className="h-20 rounded-2xl bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

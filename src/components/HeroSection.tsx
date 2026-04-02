export function HeroSection() {
  return (
    <section id="topo" className="section-shell pt-8 pb-20 sm:pt-12 sm:pb-24">
      <div className="section-card overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow">Leitura executiva de cronogramas MPP</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Transforme cronogramas MPP em leitura executiva clara, acionável e pronta para decisão.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              O Project Insights converte cronogramas do Microsoft Project em diagnóstico executivo, comparação entre
              versões, ação prioritária e PDF pronto para análise profissional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta-final" className="primary-button">
                Solicitar acesso
              </a>
              <a href="#como-funciona" className="secondary-button">
                Ver como funciona
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2">Desktop local</span>
              <span className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2">Funciona offline</span>
              <span className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2">Pronto para reuniões</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[rgba(47,93,80,0.12)] via-transparent to-[rgba(210,220,196,0.34)] blur-2xl" />
            <div className="relative rounded-[2rem] border border-[var(--border)] bg-[#f9faf5] p-5 shadow-[0_24px_60px_rgba(19,37,32,0.12)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Preview</p>
                  <h2 className="mt-2 text-xl font-semibold">Painel executivo do projeto</h2>
                </div>
                <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                  Projeto completo
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="mock-panel">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Status geral</p>
                  <p className="mt-3 text-3xl font-semibold">Atenção</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Cronograma abaixo do ritmo esperado, com necessidade de resposta imediata nas frentes críticas.
                  </p>
                </div>
                <div className="mock-panel">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ação prioritária</p>
                  <p className="mt-3 text-lg font-semibold">3.2.4 - Montagem final</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Maior alavanca de avanço no curto prazo e impacto direto na recuperação do cronograma.
                  </p>
                </div>
                <div className="mock-panel sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Comparação entre versões</p>
                    <span className="rounded-full bg-[var(--warm)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                      Gap 8,4%
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Base</p>
                      <p className="mt-2 text-2xl font-semibold">62%</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Atual</p>
                      <p className="mt-2 text-2xl font-semibold">70,4%</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">PDF executivo</p>
                      <p className="mt-2 text-base font-semibold">Pronto para distribuição</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

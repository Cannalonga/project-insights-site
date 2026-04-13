export function StructuredDataSection() {
  return (
    <section id="dados-estruturados" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">Dados estruturados para BI</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Saida pronta para integrar com sua leitura analitica
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            O app entrega JSON estruturado e CSV para apoiar fluxos de BI, sem se confundir com a camada analitica ou com a visualizacao final.
          </p>
        </div>

        <div className="grid gap-4">
          <article className="feature-card">
            <h3 className="text-2xl font-semibold">Exportacao para uso tecnico</h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              JSON estruturado para integracoes e CSV para tratamento em ferramentas analiticas e paineis ja existentes.
            </p>
          </article>

          <article className="feature-card border-[rgba(49,95,132,0.12)] bg-[rgba(232,240,247,0.72)]">
            <h3 className="text-2xl font-semibold">Sem prometer o papel do BI</h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              O Project Insights nao substitui seu BI. Ele organiza a saida do cronograma para acelerar analise e decisao.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

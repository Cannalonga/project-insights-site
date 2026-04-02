export function FinalCTASection() {
  return (
    <section id="cta-final" className="section-shell py-20">
      <div className="section-card bg-[linear-gradient(135deg,rgba(47,93,80,0.08),rgba(255,255,255,0.92))] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Próximo passo</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Leve cronogramas para uma leitura executiva que já nasce pronta para decisão.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Se você quer entender mais rápido o que está acontecendo no projeto e reduzir o esforço de interpretação
            manual, o Project Insights foi feito para isso.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#topo" className="primary-button">
            Quero conhecer o Project Insights
          </a>
          <a href="mailto:contato@vitrineweb.online" className="secondary-button">
            Solicitar acesso
          </a>
        </div>
      </div>
    </section>
  );
}

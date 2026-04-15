import { siteConfig } from "@/lib/site-config";

export function ValidationBeforePurchaseSection() {
  return (
    <section id="validacao-real" className="section-shell py-18">
      <div className="section-card border-[rgba(12,122,107,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,247,243,0.9))] px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow">Validação sem risco</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Antes de contratar, veja isso na prática
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Se você trabalha com MS Project ou Primavera, pode validar o Project Insights com um cronograma real.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Envie um cronograma e eu faço uma análise real para você.
            </p>
          </div>

          <div className="grid gap-4">
            <article className="rounded-[1.7rem] border border-[rgba(21,44,38,0.1)] bg-white/88 p-6 shadow-[0_18px_34px_rgba(15,32,28,0.06)]">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Você vai ver</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                <li>- onde está o atraso de verdade</li>
                <li>- quais atividades mais impactam o resultado</li>
                <li>- se existe capacidade de recuperação</li>
                <li>- o que precisa ser feito primeiro</li>
              </ul>
            </article>

            <article className="rounded-[1.7rem] border border-[rgba(49,95,132,0.14)] bg-[rgba(232,240,247,0.72)] p-6 shadow-[0_16px_30px_rgba(49,95,132,0.06)]">
              <p className="text-base leading-7 text-[var(--foreground)]">Sem compromisso.</p>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                Se fizer sentido, você segue. Se não fizer, já sai com um diagnóstico.
              </p>
              <div className="mt-5 rounded-[1.2rem] border border-[rgba(12,122,107,0.14)] bg-[rgba(255,255,255,0.72)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  <span aria-hidden="true">🔒</span>
                  Seus dados são tratados com segurança
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  <li>- o cronograma é usado apenas para a análise solicitada</li>
                  <li>- nenhum dado é armazenado ou compartilhado</li>
                  <li>- os arquivos são descartados após o uso</li>
                </ul>
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Contato</p>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="mt-2 inline-flex text-base font-medium text-[var(--accent-strong)] hover:text-[var(--foreground)]"
              >
                {siteConfig.supportEmail}
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

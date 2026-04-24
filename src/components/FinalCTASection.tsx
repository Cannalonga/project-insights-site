import { siteConfig } from "@/lib/site-config";

const alternativePlans = [
  {
    title: "Trimestral",
    price: "R$297",
    description: "Entrada direta para validar no ritmo real da operação.",
    href: siteConfig.plans.trimestral.buyUrl,
  },
  {
    title: "Anual",
    price: "R$997",
    description: "Menor custo por período para uso contínuo na rotina.",
    href: siteConfig.plans.anual.buyUrl,
  },
];

const trustTags = ["Sem contrato", "Ativação rápida", "Suporte por email"];

export function FinalCTASection() {
  return (
    <section id="oferta" className="section-shell py-22">
      <div className="section-card bg-[linear-gradient(135deg,rgba(12,122,107,0.08),rgba(255,255,255,0.96))] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="eyebrow">Fechamento</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Escolha o ciclo certo e feche com clareza
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              O semestral costuma equilibrar continuidade e custo para quem já decidiu trazer a leitura executiva para
              a rotina. Se preferir outro ciclo, os caminhos continuam disponíveis logo ao lado.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {trustTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full border border-[rgba(21,44,38,0.14)] bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
              Se quiser confirmar detalhes antes da compra, fale direto por email.
            </p>

            <a href={`mailto:${siteConfig.supportEmail}`} className="secondary-button mt-5">
              Tirar dúvida por email
            </a>
          </div>

          <div id="cta-final" className="space-y-4">
            <article className="rounded-[2rem] border border-[rgba(12,122,107,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,247,243,0.94))] p-6 shadow-[0_28px_62px_rgba(12,122,107,0.14)]">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full border border-[rgba(12,122,107,0.16)] bg-[rgba(237,247,245,0.98)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                  Melhor equilíbrio
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Plano recomendado
                </p>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Semestral</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">R$537</h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Continuidade com custo melhor equilibrado para quem quer incorporar a leitura executiva à operação.
              </p>

              <div className="mt-6">
                <a
                  href={siteConfig.plans.semestral.buyUrl}
                  className="primary-button w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar semestral
                </a>
              </div>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Quer outro ciclo? Veja as opções menores logo abaixo sem perder a referência principal.
              </p>
            </article>

            <div className="grid gap-3 sm:grid-cols-2">
              {alternativePlans.map((plan) => (
                <article
                  key={plan.title}
                  className="rounded-[1.5rem] border border-[rgba(21,44,38,0.1)] bg-white/88 p-5 shadow-[0_14px_28px_rgba(15,32,28,0.05)]"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">{plan.title}</p>
                    <span className="text-lg font-semibold text-[var(--accent-strong)]">{plan.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{plan.description}</p>
                  <a
                    href={plan.href}
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--accent-strong)] underline decoration-[rgba(12,122,107,0.24)] underline-offset-4 hover:text-[var(--accent-emphasis)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escolher este ciclo
                  </a>
                </article>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-[rgba(21,44,38,0.1)] bg-white/82 px-5 py-4 text-sm leading-6 text-[var(--muted)] shadow-[0_14px_28px_rgba(15,32,28,0.05)]">
              <p>Sem contrato. Ativação rápida após o pagamento.</p>
              <p className="mt-2">
                Suporte direto por email em{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-medium text-[var(--foreground)] hover:text-[var(--accent-strong)]"
                >
                  {siteConfig.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

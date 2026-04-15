import { siteConfig } from "@/lib/site-config";

const planCards = [
  {
    title: "Trimestral",
    price: "R$297",
    description: "Ideal após teste inicial.",
    cta: "Comprar trimestral",
    href: siteConfig.plans.trimestral.buyUrl,
    tone: "primary",
    badge: null,
  },
  {
    title: "Semestral",
    price: "R$537",
    description: "Para quem já validou e quer acompanhar evolução.",
    cta: "Comprar semestral",
    href: siteConfig.plans.semestral.buyUrl,
    tone: "recommended",
    badge: "Melhor equilíbrio",
  },
  {
    title: "Anual",
    price: "R$997",
    description: "Para uso contínuo na operação.",
    cta: "Comprar anual",
    href: siteConfig.plans.anual.buyUrl,
    tone: "premium",
    badge: null,
  },
];

export function FinalCTASection() {
  return (
    <section id="oferta" className="section-shell py-22">
      <div className="section-card bg-[linear-gradient(135deg,rgba(12,122,107,0.08),rgba(255,255,255,0.96))] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="eyebrow">Fechamento</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Escolha seu plano e comece agora
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Baixe a demo ou avance direto para a licença completa. Escolha o ciclo que melhor acompanha sua operação e
              finalize a compra pelo plano desejado.
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Também é possível validar com um cronograma real antes da contratação.
            </p>

            <div className="mt-6 grid gap-3 text-base text-[var(--foreground)]">
              <div className="rounded-[1.5rem] border border-[rgba(49,95,132,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(232,240,247,0.78))] p-5 shadow-[0_14px_28px_rgba(49,95,132,0.06)]">
                <strong>Versão demo</strong>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  Mostra a leitura acontecendo e ajuda você a validar se o produto faz sentido para sua rotina técnica.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(12,122,107,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(238,247,243,0.88))] p-5 shadow-[0_14px_28px_rgba(12,122,107,0.08)]">
                <strong>Licença completa</strong>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  Libera a leitura completa, a avaliação de confiabilidade e a exportação executiva para uso recorrente.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
              Sem fidelidade. Renove de acordo com a necessidade da operação.
            </p>
          </div>

          <div id="cta-final" className="space-y-5">
            <div className="grid gap-4 lg:grid-cols-3">
              {planCards.map((plan) => (
                <article
                  key={plan.title}
                  className={`rounded-[1.9rem] border p-6 ${
                    plan.tone === "recommended"
                      ? "border-[rgba(12,122,107,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,247,243,0.94))] shadow-[0_28px_62px_rgba(12,122,107,0.14)]"
                      : plan.tone === "primary"
                        ? "border-[rgba(45,93,81,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,240,227,0.92))] shadow-[0_22px_48px_rgba(15,32,28,0.1)]"
                        : "border-[rgba(21,44,38,0.1)] bg-white/90 shadow-[0_22px_48px_rgba(15,32,28,0.08)]"
                  }`}
                >
                  <div className="min-h-[30px]">
                    {plan.badge ? (
                      <span className="inline-flex rounded-full border border-[rgba(12,122,107,0.16)] bg-[rgba(237,247,245,0.98)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">{plan.title}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">{plan.price}</h3>
                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[var(--muted)]">{plan.description}</p>

                  <div className="mt-6">
                    <a
                      href={plan.href}
                      className={`${plan.tone === "recommended" ? "primary-button" : "secondary-button"} w-full`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-[rgba(21,44,38,0.1)] bg-white/82 px-5 py-4 text-sm leading-6 text-[var(--muted)] shadow-[0_14px_28px_rgba(15,32,28,0.05)]">
              <p>Sem contrato, ativação imediata.</p>
              <p>Ativação simples e suporte direto por email.</p>
              <p className="mt-2">Liberação rápida da licença após o pagamento.</p>
              <p className="mt-2">
                Envie um email para:{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-medium text-[var(--foreground)] hover:text-[var(--accent-strong)]"
                >
                  {siteConfig.supportEmail}
                </a>
              </p>
              <p className="mt-2">com:</p>
              <ul className="mt-1 space-y-1">
                <li>- Nome</li>
                <li>- Plano escolhido</li>
                <li>- Email para ativação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

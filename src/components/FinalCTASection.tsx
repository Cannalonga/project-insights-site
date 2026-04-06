import { siteConfig } from "@/lib/site-config";

const planCards = [
  {
    title: "Trimestral",
    price: "R$297",
    description: "Ideal para começar rápido e validar o uso no ritmo real da obra.",
    cta: "Comprar e ativar agora",
    href: siteConfig.plans.trimestral.buyUrl,
    external: siteConfig.plans.trimestral.hasMercadoPagoUrl,
    tone: "primary",
  },
  {
    title: "Semestral",
    price: "R$537",
    description: "Mais continuidade para acompanhar ciclos com mais previsibilidade.",
    cta: "Comprar semestral",
    href: siteConfig.plans.semestral.buyUrl,
    external: siteConfig.plans.semestral.hasMercadoPagoUrl,
    tone: "secondary",
  },
  {
    title: "Anual",
    price: "R$997",
    description: "Melhor custo para quem já decidiu incorporar a leitura executiva à rotina.",
    cta: "Comprar anual",
    href: siteConfig.plans.anual.buyUrl,
    external: siteConfig.plans.anual.hasMercadoPagoUrl,
    tone: "premium",
  },
];

export function FinalCTASection() {
  return (
    <section id="oferta" className="section-shell py-22">
      <div className="section-card bg-[linear-gradient(135deg,rgba(45,93,81,0.09),rgba(255,255,255,0.94))] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
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

            <div className="mt-6 grid gap-3 text-base text-[var(--foreground)]">
              <div className="rounded-[1.5rem] border border-[rgba(49,95,132,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(232,240,247,0.72))] p-5 shadow-[0_12px_24px_rgba(15,32,28,0.05)]">
                <strong>Versão demo</strong>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  Mostra a leitura acontecendo e ajuda você a validar se o produto faz sentido para sua rotina.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(45,93,81,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(238,240,227,0.86))] p-5 shadow-[0_12px_24px_rgba(15,32,28,0.05)]">
                <strong>Licença completa</strong>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  Libera a leitura completa, o PDF executivo e o uso recorrente com mais segurança na decisão.
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
                  className={`rounded-[1.9rem] border p-6 shadow-[0_26px_58px_rgba(15,32,28,0.1)] ${
                    plan.tone === "primary"
                      ? "border-[rgba(45,93,81,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,240,227,0.92))]"
                      : plan.tone === "secondary"
                        ? "border-[rgba(49,95,132,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(232,240,247,0.78))]"
                        : "border-[rgba(21,44,38,0.08)] bg-white/88"
                  }`}
                >
                  {plan.title === "Trimestral" ? (
                    <span className="inline-flex rounded-full border border-[rgba(45,93,81,0.16)] bg-[rgba(255,255,255,0.78)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      Mais usado para começar
                    </span>
                  ) : null}
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">{plan.title}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">{plan.price}</h3>
                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[var(--muted)]">{plan.description}</p>

                  <div className="mt-6">
                    <a
                      href={plan.href}
                      className={`${plan.tone === "primary" ? "primary-button" : "secondary-button"} w-full`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-[rgba(21,44,38,0.08)] bg-white/72 px-5 py-4 text-sm leading-6 text-[var(--muted)]">
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

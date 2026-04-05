import { siteConfig } from "@/lib/site-config";

const fullLicenseItems = [
  "Acesso completo ao Project Insights",
  "Leitura executiva de status, risco e evolucao",
  "Comparacao entre versoes do cronograma",
  "Acao prioritaria destacada para decisao",
  "Exportacao em PDF executivo",
  "Uso local e offline",
];

const planOptions = [
  {
    title: "Trimestral",
    price: "R$297",
    description: "Ideal para comecar a usar o Project Insights no ritmo real da operacao.",
    tone: "primary",
    cta: "Comprar trimestral",
    href: siteConfig.plans.trimestral.buyUrl,
    external: siteConfig.plans.trimestral.hasMercadoPagoUrl,
  },
  {
    title: "Semestral",
    price: "R$537",
    description: "Mais continuidade para acompanhar ciclos de obra com melhor previsibilidade.",
    tone: "secondary",
    cta: "Comprar semestral",
    href: siteConfig.plans.semestral.buyUrl,
    external: siteConfig.plans.semestral.hasMercadoPagoUrl,
  },
  {
    title: "Anual",
    price: "R$997",
    description: "Melhor custo para equipes e profissionais que ja decidiram incorporar a leitura executiva a rotina.",
    tone: "neutral",
    cta: "Comprar anual",
    href: siteConfig.plans.anual.buyUrl,
    external: siteConfig.plans.anual.hasMercadoPagoUrl,
  },
];

export function FeatureSection() {
  return (
    <section id="prova" className="section-shell py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Licenca completa</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Escolha o plano que faz sentido para sua operacao</h2>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          O trimestral segue como entrada principal. O semestral e o anual ampliam previsibilidade e continuidade sem
          mudar a experiencia do produto.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="feature-card border-[rgba(45,93,81,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(238,240,227,0.82))]">
          <div className="inline-flex rounded-full bg-[rgba(45,93,81,0.14)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Planos
          </div>

          <div className="mt-6 grid gap-3">
            {planOptions.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-[1.35rem] border p-4 ${
                  plan.tone === "primary"
                    ? "border-[rgba(45,93,81,0.16)] bg-[rgba(238,240,227,0.92)]"
                    : plan.tone === "secondary"
                      ? "border-[rgba(49,95,132,0.12)] bg-[rgba(232,240,247,0.74)]"
                      : "border-[var(--border)] bg-white/84"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-semibold text-[var(--foreground)]">{plan.title}</p>
                  <span className="text-base font-semibold text-[var(--accent-strong)]">{plan.price}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{plan.description}</p>
                <div className="mt-4">
                  <a
                    href={plan.href}
                    className="primary-button min-w-[200px]"
                    target={plan.external ? "_blank" : undefined}
                    rel={plan.external ? "noreferrer" : undefined}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-7 text-[var(--muted)]">Sem fidelidade. Escolha o ciclo que fizer mais sentido para voce.</p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">O que voce recebe</p>
          <h3 className="mt-4 text-2xl font-semibold">A licenca transforma leitura em decisao.</h3>
          <div className="mt-6 grid gap-3">
            {fullLicenseItems.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[var(--border)] bg-white/82 px-4 py-3 text-base text-[var(--foreground)]">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-[1.25rem] border border-[rgba(49,95,132,0.12)] bg-[var(--analysis-soft)] px-4 py-4 text-[var(--analysis)]">
              Clareza para decidir sem se perder no MPP
            </div>
            <div className="rounded-[1.25rem] border border-[rgba(45,93,81,0.12)] bg-[var(--warm)] px-4 py-4 text-[var(--accent-strong)]">
              Leitura pronta para reuniao, alinhamento e acao
            </div>
            <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/76 px-4 py-4 text-[var(--foreground)]">
              Compra direta preparada para Mercado Pago por ciclo
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

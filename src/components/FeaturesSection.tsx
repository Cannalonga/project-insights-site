import { siteConfig } from "@/lib/site-config";

const fullLicenseItems = [
  "Leitura executiva de status, risco e prioridade",
  "Identificação de inconsistências no cronograma",
  "Avaliação da confiabilidade da leitura",
  "Comparação entre versões do cronograma",
  "Exportação em PDF executivo, JSON estruturado e CSV",
  "Uso local e offline",
];

const planOptions = [
  {
    title: "Trimestral",
    price: "R$297",
    description: "Ideal para começar a usar o Project Insights no ritmo real da operação.",
    tone: "primary",
    cta: "Comprar trimestral",
    href: siteConfig.plans.trimestral.buyUrl,
    badge: null,
  },
  {
    title: "Semestral",
    price: "R$537",
    description: "Mais continuidade para acompanhar ciclos de obra com melhor previsibilidade.",
    tone: "secondary",
    cta: "Comprar semestral",
    href: siteConfig.plans.semestral.buyUrl,
    badge: "Mais escolhido",
  },
  {
    title: "Anual",
    price: "R$997",
    description: "Melhor custo para equipes e profissionais que já decidiram incorporar a leitura executiva à rotina.",
    tone: "neutral",
    cta: "Comprar anual",
    href: siteConfig.plans.anual.buyUrl,
    badge: null,
  },
];

export function FeatureSection() {
  return (
    <section id="prova" className="section-shell py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Licença completa</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Escolha o plano que faz sentido para sua operação
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          O trimestral segue como entrada principal. O semestral assume o destaque visual por equilibrar continuidade,
          previsibilidade e custo com mais força comercial.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="feature-card border-[rgba(45,93,81,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,240,227,0.86))]">
          <div className="inline-flex rounded-full bg-[rgba(12,122,107,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Planos
          </div>

          <div className="mt-6 grid gap-3">
            {planOptions.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-[1.35rem] border p-4 ${
                  plan.tone === "primary"
                    ? "border-[rgba(45,93,81,0.16)] bg-[rgba(238,240,227,0.92)] shadow-[0_12px_22px_rgba(15,32,28,0.06)]"
                    : plan.tone === "secondary"
                      ? "border-[rgba(12,122,107,0.18)] bg-[rgba(242,250,248,0.96)] shadow-[0_18px_32px_rgba(12,122,107,0.12)]"
                      : "border-[var(--border)] bg-white/90 shadow-[0_10px_20px_rgba(15,32,28,0.05)]"
                }`}
              >
                <div className="min-h-[26px]">
                  {plan.badge ? (
                    <span className="inline-flex rounded-full border border-[rgba(12,122,107,0.16)] bg-[rgba(237,247,245,0.98)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="text-lg font-semibold text-[var(--foreground)]">{plan.title}</p>
                  <span
                    className={`text-base font-semibold ${
                      plan.tone === "secondary" ? "text-[var(--accent-emphasis)]" : "text-[var(--accent-strong)]"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{plan.description}</p>
                <div className="mt-4">
                  <a
                    href={plan.href}
                    className={`${plan.tone === "secondary" ? "primary-button" : "secondary-button"} min-w-[200px]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-7 text-[var(--muted)]">
            Sem fidelidade. Escolha o ciclo que fizer mais sentido para você.
          </p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">O que você recebe</p>
          <h3 className="mt-4 text-2xl font-semibold">A licença transforma leitura em decisão.</h3>
          <div className="mt-6 grid gap-3">
            {fullLicenseItems.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[var(--border)] bg-white/88 px-4 py-3 text-base text-[var(--foreground)]">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-[1.25rem] border border-[rgba(49,95,132,0.14)] bg-[var(--analysis-soft)] px-4 py-4 font-medium text-[var(--analysis)]">
              Clareza para decidir sem se perder no cronograma
            </div>
            <div className="rounded-[1.25rem] border border-[rgba(12,122,107,0.14)] bg-[var(--warm)] px-4 py-4 font-medium text-[var(--accent-strong)]">
              Leitura pronta para reunião, alinhamento e ação
            </div>
            <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/82 px-4 py-4 font-medium text-[var(--foreground)]">
              Exportação executiva e dados estruturados para uso técnico
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

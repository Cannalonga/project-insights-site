import { LandingImage } from "@/components/LandingImage";
import { landingAssets } from "@/lib/landing-assets";
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

            <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-[rgba(21,44,38,0.1)] bg-white/88 shadow-[0_18px_34px_rgba(15,32,28,0.08)]">
              <LandingImage
                src={landingAssets.mppIllustration}
                alt="Exemplo ilustrativo de cronograma no MS Project"
                className="aspect-[16/10] w-full"
                imageClassName="object-contain bg-white"
              />
              <div className="border-t border-[rgba(21,44,38,0.08)] px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  Exemplo ilustrativo de cronograma (MS Project)
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Visual familiar para quem já trabalha com cronogramas no MS Project.
                </p>
              </div>
            </div>
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

            <article className="rounded-[1.9rem] border border-[rgba(12,122,107,0.22)] bg-[linear-gradient(180deg,rgba(241,249,245,0.98),rgba(255,255,255,0.94))] p-7 shadow-[0_22px_42px_rgba(12,122,107,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Teste gratuito
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                Valide sem compromisso
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                Se fizer sentido, você segue. Se não fizer, já sai com um diagnóstico.
              </p>
              <div className="mt-6 rounded-[1.6rem] border border-[rgba(12,122,107,0.18)] bg-[linear-gradient(135deg,rgba(232,247,242,0.98),rgba(241,248,253,0.96))] p-6 shadow-[0_18px_34px_rgba(12,122,107,0.1)]">
                <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(12,122,107,0.16)] bg-white/88 text-lg shadow-[0_10px_20px_rgba(12,122,107,0.12)]"
                  >
                    🔒
                  </span>
                  Segurança dos dados
                </p>
                <h4 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  Seus dados estão protegidos
                </h4>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--foreground)]">
                  <li className="rounded-[1rem] border border-[rgba(12,122,107,0.1)] bg-white/72 px-4 py-3">
                    O cronograma é usado apenas para a análise solicitada.
                  </li>
                  <li className="rounded-[1rem] border border-[rgba(12,122,107,0.1)] bg-white/72 px-4 py-3">
                    Nenhum dado é armazenado ou compartilhado.
                  </li>
                  <li className="rounded-[1rem] border border-[rgba(12,122,107,0.1)] bg-white/72 px-4 py-3">
                    Os arquivos são descartados após o uso.
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Contato</p>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="mt-2 inline-flex rounded-full border border-[rgba(12,122,107,0.16)] bg-white/86 px-4 py-2 text-base font-medium text-[var(--accent-strong)] shadow-[0_10px_20px_rgba(12,122,107,0.08)] hover:text-[var(--foreground)]"
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

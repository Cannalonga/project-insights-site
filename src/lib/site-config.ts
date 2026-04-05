const supportEmail = "contato@vitrineweb.online";

const demoDownloadUrl =
  process.env.NEXT_PUBLIC_PROJECT_INSIGHTS_DEMO_URL?.trim() || "/downloads/project-insights-demo-setup.exe";

const trimestralUrl = process.env.NEXT_PUBLIC_PROJECT_INSIGHTS_MP_TRIMESTRAL_URL?.trim() ?? "";
const semestralUrl = process.env.NEXT_PUBLIC_PROJECT_INSIGHTS_MP_SEMESTRAL_URL?.trim() ?? "";
const anualUrl = process.env.NEXT_PUBLIC_PROJECT_INSIGHTS_MP_ANUAL_URL?.trim() ?? "";

const buildPlanFallback = (planLabel: string) =>
  `mailto:${supportEmail}?subject=${encodeURIComponent(`Comprar licença ${planLabel} Project Insights`)}`;

export const siteConfig = {
  demoDownloadUrl,
  supportEmail,
  plans: {
    trimestral: {
      price: "R$297",
      buyUrl: trimestralUrl || buildPlanFallback("trimestral"),
      hasMercadoPagoUrl: trimestralUrl.length > 0,
    },
    semestral: {
      price: "R$537",
      buyUrl: semestralUrl || buildPlanFallback("semestral"),
      hasMercadoPagoUrl: semestralUrl.length > 0,
    },
    anual: {
      price: "R$997",
      buyUrl: anualUrl || buildPlanFallback("anual"),
      hasMercadoPagoUrl: anualUrl.length > 0,
    },
  },
  buyUrl: trimestralUrl || buildPlanFallback("trimestral"),
  hasMercadoPagoUrl: trimestralUrl.length > 0,
};

const supportEmail = "canna.vendasonline@gmail.com";

const demoDownloadUrl =
  process.env.NEXT_PUBLIC_PROJECT_INSIGHTS_DEMO_URL?.trim() || "/downloads/project-insights-demo-setup.exe";

export const mercadoPago = {
  trimestralUrl: "https://mpago.la/2q4KHpK",
  semestralUrl: "https://mpago.la/2Si7zyt",
  anualUrl: "https://mpago.la/2EcEoPp",
} as const;

const buildPlanFallback = (planLabel: string) =>
  `mailto:${supportEmail}?subject=${encodeURIComponent(`Comprar licença ${planLabel} Project Insights`)}`;

const resolvePurchaseUrl = (url: string | undefined, planLabel: string) => url?.trim() || buildPlanFallback(planLabel);

export const siteConfig = {
  demoDownloadUrl,
  supportEmail,
  plans: {
    trimestral: {
      price: "R$297",
      buyUrl: resolvePurchaseUrl(mercadoPago.trimestralUrl, "trimestral"),
      hasMercadoPagoUrl: Boolean(mercadoPago.trimestralUrl?.trim()),
    },
    semestral: {
      price: "R$537",
      buyUrl: resolvePurchaseUrl(mercadoPago.semestralUrl, "semestral"),
      hasMercadoPagoUrl: Boolean(mercadoPago.semestralUrl?.trim()),
    },
    anual: {
      price: "R$997",
      buyUrl: resolvePurchaseUrl(mercadoPago.anualUrl, "anual"),
      hasMercadoPagoUrl: Boolean(mercadoPago.anualUrl?.trim()),
    },
  },
  buyUrl: resolvePurchaseUrl(mercadoPago.trimestralUrl, "trimestral"),
  hasMercadoPagoUrl: Boolean(mercadoPago.trimestralUrl?.trim()),
};

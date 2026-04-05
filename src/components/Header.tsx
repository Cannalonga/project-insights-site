import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Problema", href: "#problema" },
  { label: "Solucao", href: "#solucao" },
  { label: "Demonstracao", href: "#demonstracao" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Licenca", href: "#oferta" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(248,246,240,0.78)] backdrop-blur-2xl">
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <a href="#topo" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[var(--foreground)]">
          <span className="inline-flex h-9 items-center rounded-full border border-[rgba(49,95,132,0.12)] bg-[var(--analysis-soft)] px-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--analysis)]">
            PI
          </span>
          <span>Project Insights</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.demoDownloadUrl}
            className="secondary-button px-5 py-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar versao demo
          </a>
          <a
            href={siteConfig.buyUrl}
            className="primary-button px-5 py-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar licenca
          </a>
        </div>
      </div>
    </header>
  );
}

const navItems = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(244,244,239,0.84)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <a href="#topo" className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          Project Insights
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cta-final" className="primary-button px-5 py-2.5">
          Solicitar acesso
        </a>
      </div>
    </header>
  );
}

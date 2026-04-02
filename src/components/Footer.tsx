export function Footer() {
  return (
    <footer className="section-shell pb-10">
      <div className="flex flex-col gap-5 border-t border-black/8 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-[var(--foreground)]">Project Insights</p>
          <p className="mt-1">Leitura executiva de cronogramas MPP para decisão profissional.</p>
        </div>
        <div className="flex flex-col gap-2 text-left sm:items-end">
          <a href="mailto:contato@vitrineweb.online" className="hover:text-[var(--foreground)]">
            contato@vitrineweb.online
          </a>
          <span>{new Date().getFullYear()} Project Insights</span>
        </div>
      </div>
    </footer>
  );
}

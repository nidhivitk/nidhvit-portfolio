import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/70 text-white shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="group relative text-xl font-bold tracking-tight">
          <span className="relative z-10">Nidhivit Kunaputipo</span>
          <span className="absolute -inset-x-2 -inset-y-1 -z-0 rounded-lg bg-emerald-300/10 opacity-0 transition duration-300 group-hover:opacity-100" />
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <nav className="rounded-full border border-white/15 bg-white/5 p-1">
            <ul className="flex items-center gap-1">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/85 transition hover:bg-white/10 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DarkModeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <button
            className="rounded-md border border-white/30 px-3 py-2 text-lg transition hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="animate-slide-down border-t border-white/15 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav>
            <ul className="flex flex-col gap-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium tracking-wide text-white/90 transition hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-white"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

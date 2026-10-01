import Link from "next/link";

export const navItems = [
  { label: "Watchlist", href: "/watchlist" },
  { label: "Chart", href: "/chart" },
  { label: "Portfolio", href: "/portfolio" },
] as const;

export default function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-white/10 p-4">
      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

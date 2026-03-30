import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-xs text-taupe py-3">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" className="hover:text-burgundy transition-colors">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-cream-dark">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-burgundy transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

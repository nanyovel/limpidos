import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omite href en el último item (página actual)
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /**
   * "light": para usar sobre fondos oscuros/gradient-brand (texto claro)
   * "dark": para usar sobre fondos blancos (texto oscuro)
   */
  variant?: "light" | "dark";
}

export function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isLight ? "text-brand-400" : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`font-medium ${
                    isLight ? "text-white" : "text-brand-900"
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isLight
                      ? "text-brand-300 hover:text-white"
                      : "text-slate-500 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Genera el JSON-LD BreadcrumbList a partir del MISMO array que se renderiza
 * visualmente, para que el schema nunca pueda desalinearse de lo que el
 * usuario realmente ve en la página (requisito de Google para breadcrumbs).
 */
export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  siteUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteUrl}${item.href}` : undefined,
    })),
  };
}

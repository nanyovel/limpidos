// components/blog/ServiceCTA.tsx
import Link from "next/link";

export function CTAService({
  title = "¿Está comparando proveedores de limpieza?",
  description = "Conozca todo lo que incluye nuestro servicio de limpieza empresarial y solicite una propuesta personalizada.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="my-8 rounded-2xl gradient-brand p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-white font-display font-bold text-lg mb-1">
          {title}
        </p>
        <p className="text-brand-100 text-sm leading-relaxed">{description}</p>
      </div>
      <Link
        href="/servicios"
        className="btn-white whitespace-nowrap flex-shrink-0 w-full sm:w-auto justify-center"
      >
        Ver servicios
      </Link>
    </div>
  );
}

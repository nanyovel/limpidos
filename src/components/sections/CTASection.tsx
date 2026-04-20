import Link from "next/link";
import { COMPANY } from "@/lib/data";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "¿Cuánto está pagando de más en limpieza?",
  description = "Solicite una cotización gratuita y reciba un análisis comparativo que le muestra exactamente cuánto puede ahorrar su empresa al externalizar con Limpidos.",
  primaryCTA = "Solicitar Cotización Gratuita",
  primaryHref = "/contacto",
}: CTASectionProps) {
  return (
    <section className="py-24 gradient-brand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
          Cotización sin compromiso
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-xl text-brand-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href={primaryHref} className="btn-white text-base px-8 py-4">
            {primaryCTA}
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <a
            href={`tel:${COMPANY.phoneLink}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-base"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {COMPANY.phone}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-brand-300">
          {[
            "Respuesta en menos de 24 horas",
            "Sin contrato de permanencia inicial",
            "Asesor dedicado para su empresa",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-accent-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";

const SITE_URL = "https://limpidos.com";

export const metadata: Metadata = {
  // Alineado con los servicios REALMENTE activos: Oficinas y Hogar.
  // No prometer "industrial" o "post-construcción" hasta que existan en el sitio.
  title: "Servicios de Limpieza para Oficinas y Hogares en RD",
  description:
    "Servicios profesionales de limpieza de oficinas y limpieza de hogar en República Dominicana. Outsourcing con personal capacitado, estándares garantizados y cobertura en Santo Domingo, Santiago, La Altagracia y todo el pais.",

  alternates: { canonical: `${SITE_URL}/servicios` },
};

const iconPaths: Record<string, React.ReactNode> = {
  home: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  ),
  building: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  ),
  factory: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  ),
  hammer: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  ),
  calendar: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  ),
};

const cardColors = [
  "from-brand-900 to-brand-700",
  "from-slate-900 to-brand-900",
  "from-brand-700 to-accent-600",
  "from-brand-800 to-slate-800",
];

export default function ServiciosPage() {
  // Único array fuente para el breadcrumb: se usa tanto para renderizar
  // el componente visual como para generar el schema. Así nunca pueden
  // desalinearse entre sí.
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios" }, // último item, sin href = página actual
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  // Un nodo Service por cada servicio REAL y activo en SERVICES (lib/data.ts).
  // Cada uno referencia al LocalBusiness definido en el layout como "provider",
  // en vez de redefinir la organización desde cero.
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": SERVICES.map((service) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/servicios#${service.id}-service`,
      name: service.title,
      serviceType: service.title,
      description: service.description,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "Country", name: "Dominican Republic" },
      url: `${SITE_URL}/servicios#${service.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbItems} variant="light" />
          </div>
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Catálogo de servicios
          </span>
          {/* H1 alineado con lo que realmente se entrega debajo: Oficinas y Hogar */}
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Servicios de limpieza para oficinas en Santo Domingo, Santiago, La
            Altagracia y todo el pais.
          </h1>
          <p className="text-xl text-brand-200 max-w-2xl mx-auto mb-10">
            Desde el mantenimiento diario de oficinas corporativas hasta la
            limpieza profunda de su hogar. Cada servicio diseñado para superar
            los estándares del sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-white">
              Solicitar Cotización Gratuita
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
            <Link
              href="#servicios"
              className="btn-secondary border-white/40 text-white hover:bg-white/10 hover:border-white"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-slate-200 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-brand-700 hover:bg-brand-50 transition-colors whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services detail */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {iconPaths[service.icon]}
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-900 mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-brand-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="btn-primary">
                  Cotizar este servicio
                  <svg
                    className="w-4 h-4"
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
                {service.id === "oficinas" && (
                  <Link
                    href="/servicios/limpieza-de-oficinas"
                    className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-4 ml-4"
                  >
                    Leer guía completa
                    <svg
                      className="w-4 h-4"
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
                )}
                {service.id === "hogar" && (
                  <Link
                    href="/servicios/limpieza-de-hogares"
                    className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-4 ml-4"
                  >
                    Leer guía completa
                    <svg
                      className="w-4 h-4"
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
                )}
              </div>

              {/* Visual card */}
              <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div
                  className={`rounded-3xl p-8 bg-gradient-to-br ${cardColors[index]} relative overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-24 translate-x-24" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {iconPaths[service.icon]}
                        </svg>
                      </div>
                      <h3 className="text-white font-display font-bold text-lg">
                        {service.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "Ahorro economico", icon: "💰" },
                        {
                          label: "Reduccion de carga administrativa",
                          icon: "📋",
                        },
                        { label: "Menor riesgo laboral", icon: "⚠️" },
                        { label: "Enfoque en el core del negocio", icon: "🎯" },
                        { label: "Personal capacitado", icon: "👥" },
                        { label: "Gestor asignado", icon: "📞" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-white font-medium text-sm">
                            {item.label}
                          </span>
                          <svg
                            className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0"
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
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
                      <span className="text-white/70 text-sm">
                        Garantía de satisfacción
                      </span>
                      <span className="text-accent-400 font-bold text-sm">
                        100% garantizado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">La diferencia es clara</span>
            <h2 className="section-title mb-4">
              Personal interno vs. Limpidos
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Antes de decidir, compare los dos modelos en los factores que más
              impactan en su empresa.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr>
                  <th className="text-left p-5 text-slate-500 font-medium text-sm border-b border-slate-100 w-1/3">
                    Factor
                  </th>
                  <th className="p-5 text-center border-b border-slate-100 w-1/3">
                    <span className="text-slate-600 font-semibold text-sm">
                      Personal interno
                    </span>
                  </th>
                  <th className="p-5 text-center border-b border-slate-100 w-1/3 bg-brand-50">
                    <span className="text-brand-700 font-bold text-sm flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-brand-600 rounded-full inline-block"></span>
                      Limpidos
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Costo mensual predecible", false, true],
                  [
                    "Eliminación de costos laborales fijos (prestaciones, AFP, ARS, cesantía)",
                    false,
                    true,
                  ],
                  [
                    "Sin gastos de reclutamiento, capacitación ni rotación de personal.",
                    false,
                    true,
                  ],
                  [
                    "No necesita ser gestionado por RRHH (permisos, licencias, vacaciones etc)",
                    false,
                    true,
                  ],
                  [
                    "Cobertura garantizada ante ausencias, licencias o rotación.",
                    false,
                    true,
                  ],
                  [
                    "Reemplazos inmediatos sin afectar la operación.",
                    false,
                    true,
                  ],
                  ["Capacitación continua", false, true],
                  ["Reportes y trazabilidad", false, true],
                  [
                    "Menos exposición a conflictos laborales y contingencias legales.",
                    false,
                    true,
                  ],
                  ["Escala según sus necesidades", false, true],
                ].map(([factor, internal, limpidos], i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                  >
                    <td className="p-5 text-slate-700 text-sm font-medium">
                      {factor as string}
                    </td>
                    <td className="p-5 text-center">
                      {internal ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100">
                          <svg
                            className="w-4 h-4 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="p-5 text-center bg-brand-50/50">
                      {limpidos ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-100">
                          <svg
                            className="w-4 h-4 text-brand-700"
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
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Cuál de nuestros servicios necesita su empresa?"
        description="Cuéntenos su caso y le enviamos una propuesta detallada con precios transparentes en menos de 24 horas."
      />
    </>
  );
}

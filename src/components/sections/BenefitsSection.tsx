const BENEFITS = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Reducción de costos operativos",
    description:
      "Eliminamos los costos ocultos del personal interno: cargas sociales, vacaciones, bajas médicas, capacitaciones y equipos. Paga una tarifa fija y predecible.",
    highlight: "Ahorro economico promedio del 15–20%",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Cero gestión de personal",
    description:
      "Olvídese de contratar, capacitar, supervisar y gestionar al personal de limpieza. Limpidos asume la responsabilidad patronal completa y resuelve cualquier incidencia.",
    highlight: "Libere tiempo de RRHH y Operaciones",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Estándares profesionales garantizados",
    description:
      "Personal especializado con formación continua y protocolos documentados. La calidad es consistente en cada visita, todos los días.",
    highlight: "Garantía de satisfacción 100%",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Mayor productividad del equipo",
    description:
      "Un entorno de trabajo limpio, ordenado y saludable reduce el ausentismo, mejora el bienestar y potencia el rendimiento de sus colaboradores.",
    highlight: "Ambiente de trabajo de primer nivel",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: "Cumplimiento normativo automático",
    description:
      "Nuestros protocolos cumplen con todas las normativas de higiene, salud ocupacional y medioambientales. Su empresa está cubierta ante cualquier inspección.",
    highlight: "Sin preocupaciones regulatorias",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Enfoque en su core business",
    description:
      "La energía de sus líderes merece estar en lo que genera valor real para su empresa. El outsourcing les devuelve tiempo, atención y recursos estratégicos.",
    highlight: "Decisión estratégica, no operativa",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">¿Por qué Limpidos?</span>
          <h2 className="section-title mb-4">
            Beneficios concretos para su empresa
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            No vendemos limpieza, vendemos tranquilidad operativa, ahorro
            comprobable y un entorno de trabajo que eleva su imagen corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`card group ${
                index === 1 ? "lg:border-brand-200 lg:shadow-brand-100/50" : ""
              }`}
            >
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-display font-semibold text-brand-900 text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                {benefit.description}
              </p>
              <span className="text-accent-600 text-xs font-semibold uppercase tracking-wide">
                {benefit.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

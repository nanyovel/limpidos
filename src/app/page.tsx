import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES, SOLUTIONS, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Limpidos — Outsourcing de Limpieza Empresarial | Limpieza de Oficinas e industrias",
  description:
    "Reducimos sus costos operativos con outsourcing de limpieza profesional para empresas. Oficinas, industrias y comercios. Personal capacitado, tecnología de gestión y garantía de satisfacción. Deje la limpieza en manos expertas y enfoque su tiempo en lo que realmente importa.",

  authors: [{ name: "Limpidos SRL" }],

  openGraph: {
    title:
      "Limpidos — Outsourcing de Limpieza Empresarial | Limpieza de Oficinas e industrias",
    description:
      "Nos encargamos de la limpieza de su empresa para que usted pueda enfocarse en lo que realmente importa. Personal capacitado, tecnología de gestión y garantía de satisfacción. Reduzca costos operativos y mejore la productividad con nuestro servicio profesional de limpieza outsourcing.",
    url: "https://limpidos.com",
    siteName: "Limpidos SRL",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpidos — Outsourcing de Limpieza Empresarial",
    description:
      "Limpieza empresarial en Republica Dominicana | Limpieza de oficina | Conserjeria",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://limpidos.com" },
};

const WHY_OUTSOURCE = [
  {
    number: "01",
    title: "Personal interno: el costo oculto",
    description:
      "El salario es solo el 60% del costo real. Cargas sociales, vacaciones, bajas, capacitaciones, equipos y supervisión elevan el costo total entre un 40–70% más.",
  },
  {
    number: "02",
    title: "Estándares que no se pueden improvisar",
    description:
      "La limpieza profesional requiere formación específica, equipos especializados y protocolos documentados. El personal interno rara vez tiene este nivel.",
  },
  {
    number: "03",
    title: "Su tiempo vale demasiado para esto",
    description:
      "Cada hora que sus líderes dedican a gestionar personal de limpieza es una hora que no están en su core business. El outsourcing les devuelve ese tiempo.",
  },
  {
    number: "04",
    title: "Responsabilidad y continuidad garantizadas",
    description:
      "Con Limpidos, las ausencias, bajas y rotación de personal no son su problema. Siempre hay cobertura garantizada, sin interrupciones en el servicio.",
  },
];

const iconPaths: Record<string, React.ReactNode> = {
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
  briefcase: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  cross: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  store: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  ),
  cog: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  ),
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats bar */}
      {/* <div className="bg-brand-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-brand-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <BenefitsSection />

      {/* Why outsource */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">La decisión inteligente</span>
              <h2 className="section-title mb-6">
                ¿Por qué tercerizar la limpieza de su empresa?
              </h2>
              <p className="section-subtitle mb-10">
                Las organizaciones más eficientes del mundo externalizan todo lo
                que no es su competencia central. La limpieza es el ejemplo
                perfecto: impacta en productividad, imagen y costos, pero no
                debería consumir la atención de sus líderes.
              </p>
              <Link href="/contacto" className="btn-primary">
                Calculemos su ahorro potencial
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
            </div>
            <div className="space-y-5">
              {WHY_OUTSOURCE.map((item) => (
                <div key={item.number} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center font-display font-bold text-lg group-hover:bg-brand-700 group-hover:text-white transition-all duration-300">
                    {item.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-brand-900 mb-1 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Nuestros servicios</span>
            <h2 className="section-title mb-4">
              Limpieza profesional para cada necesidad
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Desde oficinas corporativas hasta plantas industriales. Soluciones
              completas adaptadas a cada tipo de empresa.
            </p>
          </div>
          <div className="flex items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/servicios#${service.id}`}
                className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "gradient-brand text-white shadow-xl"
                    : "bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0
                      ? "bg-white/20"
                      : "bg-brand-50 group-hover:bg-brand-600 transition-colors duration-300"
                  }`}
                >
                  <svg
                    className={`w-6 h-6 ${
                      index === 0
                        ? "text-white"
                        : "text-brand-600 group-hover:text-white transition-colors"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {iconPaths[service.icon]}
                  </svg>
                </div>
                <h3
                  className={`font-display font-semibold text-lg mb-2 ${
                    index === 0 ? "text-white" : "text-brand-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    index === 0 ? "text-brand-200" : "text-slate-500"
                  }`}
                >
                  {service.description.slice(0, 90)}…
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/servicios" className="btn-secondary">
              Ver todos los servicios en detalle
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
          </div>
        </div>
      </section>

      {/* Solutions by sector */}
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Por tipo de empresa</span>
            <h2 className="section-title mb-4">Soluciones para cada sector</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Cada industria tiene requisitos específicos de higiene. Adaptamos
              nuestros protocolos a las exigencias reales de su sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {SOLUTIONS.map((sol) => (
              <Link
                key={sol.id}
                href={`/soluciones#${sol.id}`}
                className="card group text-center"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-700 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {iconPaths[sol.icon]}
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-900 mb-1 text-sm">
                  {sol.sector}
                </h3>
                <p className="text-slate-400 text-xs">
                  {sol.challenges.length} desafíos resueltos
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/soluciones" className="btn-secondary">
              Ver soluciones por sector
            </Link>
          </div>
        </div>
      </section> */}

      {/* <TestimonialsSection /> */}

      {/* Trust strip */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
              Lo que nos diferencia
            </p> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: "🛡️",
                label: "Personal con verificación de antecedentes",
              },
              { icon: "📊", label: "Reportes digitales en tiempo real" },
              { icon: "⚡", label: "Soporte de emergencia 24/7" },
              { icon: "✅", label: "Garantía de satisfacción 100%" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="text-slate-600 text-sm font-medium leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

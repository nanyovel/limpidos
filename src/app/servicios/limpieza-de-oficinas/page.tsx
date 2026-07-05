import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";

const SITE_URL = "https://limpidos.com";
const PAGE_URL = `${SITE_URL}/servicios/limpieza-de-oficinas`;

export const metadata: Metadata = {
  title:
    "Empresa de Limpieza de Oficinas en Santo Domingo, Santiago, La Altagracia y todo el pais | Limpidos",
  description:
    "Servicio de limpieza de oficinas en Santo Domingo, Santiago, La Altagracia y todo el pais. Empresa de limpieza para empresas con personal fijo, supervisión y cobertura garantizada.",

  alternates: { canonical: PAGE_URL },
};

const WHAT_INCLUDES = [
  {
    title: "Limpieza diaria de áreas comunes",
    description:
      "Pisos, recepción, salas de reunión y pasillos, listos antes de que su equipo llegue a trabajar.",
  },
  {
    title: "Baños y cocinetas desinfectados",
    description:
      "Reposición de insumos (papel, jabón, desinfectante) incluida en cada visita.",
  },
  {
    title: "Manejo de residuos",
    description:
      "Recolección y disposición de basura de todas las estaciones de trabajo y áreas comunes.",
  },
  {
    title: "Limpieza de vidrios y superficies",
    description:
      "Escritorios, ventanas interiores, puertas de vidrio y superficies de alto contacto.",
  },
  {
    title: "Supervisión de calidad",
    description:
      "Un gestor de cuenta revisa periódicamente el cumplimiento del protocolo acordado.",
  },
  {
    title: "Reportes de cada visita",
    description:
      "Registro digital de la limpieza realizada, disponible para su empresa en todo momento.",
  },
];

const OFFICE_TYPES = [
  {
    title: "Oficinas corporativas",
    description:
      "Empresas de cualquier tamaño con una o varias sedes en Santo Domingo.",
  },
  {
    title: "Espacios de coworking",
    description:
      "Limpieza coordinada con horarios de alta ocupación y múltiples empresas en un mismo espacio.",
  },
  {
    title: "Consultorios y despachos profesionales",
    description:
      "Bufetes, consultorías y oficinas de servicios profesionales con atención a clientes.",
  },
];

const FREQUENCY_OPTIONS = [
  {
    title: "Diario (lunes a viernes y sábado)",
    description:
      "La opción más común para oficinas con operación diaria y alto tráfico de personal.",
  },
  {
    title: "Interdiario",
    description:
      "Para oficinas más pequeñas o con menor ocupación, manteniendo estándares de higiene.",
  },
  {
    title: "Fuera de horario laboral",
    description:
      "Servicio nocturno o de fin de semana para no interrumpir la operación de su empresa.",
  },
];

const OFFICE_FAQS = [
  {
    question:
      "¿La limpieza de oficinas es de lunes a sábado o puede ser diaria completa?",
    answer:
      "Ofrecemos ambas modalidades. La más común entre nuestros clientes corporativos es de lunes a sábado, pero también coordinamos servicio los 7 días si su operación lo requiere.",
  },
  {
    question: "¿El personal es el mismo cada vez o rota?",
    answer:
      "Asignamos un equipo fijo a cada empresa cliente, no personal rotativo. Esto garantiza que conozcan sus instalaciones y sus protocolos específicos desde la primera semana.",
  },
  {
    question: "¿Incluyen los productos de limpieza e insumos de baño?",
    answer:
      "Sí, todos los productos de limpieza, papel higiénico, jabón de manos y desinfectante están incluidos en la tarifa mensual, sin costo adicional.",
  },
  {
    question: "¿Pueden limpiar fuera del horario de oficina?",
    answer:
      "Sí, la mayoría de nuestros clientes prefieren el servicio en horario nocturno o de madrugada, antes de que el personal llegue a trabajar.",
  },
  {
    question: "¿Cuánto cuesta la limpieza de oficinas en Santo Domingo?",
    answer:
      "El costo depende de los metros cuadrados, la frecuencia y el número de baños/áreas comunes. Solicite una cotización gratuita y le enviamos una propuesta ajustada en menos de 24 horas.",
  },
];

export default function LimpiezaDeOficinasPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Limpieza de Oficinas" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Limpieza de Oficinas",
    serviceType: "Limpieza de oficinas",
    description:
      "Servicio profesional de limpieza de oficinas en Santo Domingo, Santiago, La Altagracia y todo el pais con personal fijo, supervisión de calidad y frecuencia diaria o interdiaria.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Santo Domingo" },
      { "@type": "City", name: "Santiago de los Caballeros" },
      { "@type": "AdministrativeArea", name: "La Altagracia" },
    ],
    url: PAGE_URL,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OFFICE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} variant="light" />
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Empresa de limpieza de oficinas
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Servicio de limpieza de oficinas en Santo Domingo, Santiago, La
            Altagracia y todo el pais
          </h1>
          <p className="text-xl text-brand-200 leading-relaxed mb-8 max-w-2xl">
            Empresa de limpieza especializada en oficinas corporativas. Personal
            fijo, supervisión constante y limpieza de lunes a sábado (o el
            horario que su empresa necesite).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </section>

      {/* Intro / contexto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Encontrar una compañía de limpieza confiable para su oficina en
            Santo Domingo, Santiago, La Altagracia y todo el pais puede ser
            difícil: muchas agencias de limpieza envían personal distinto cada
            semana, sin supervisión ni consistencia en el resultado. Limpidos es
            la empresa de limpieza que resuelve exactamente ese problema — un
            servicio de limpieza para empresas diseñado para operar sin que
            usted tenga que gestionarlo.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ya sea que busque una empresa de limpieza de oficinas para el
            mantenimiento diario, o un servicio de aseo y limpieza interdiario
            para un espacio más pequeño, adaptamos la frecuencia y el alcance a
            las necesidades reales de su empresa.
          </p>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">El servicio en detalle</span>
            <h2 className="section-title mb-4">
              Qué incluye la limpieza de oficinas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_INCLUDES.map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-display font-semibold text-brand-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de oficina */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Para cada tipo de espacio</span>
            <h2 className="section-title mb-4">
              Empresa de limpieza para todo tipo de oficinas
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {OFFICE_TYPES.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors"
              >
                <h3 className="font-display font-semibold text-brand-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frecuencias */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Frecuencia del servicio</span>
            <h2 className="section-title mb-4">
              Limpieza de oficinas de lunes a sábado, o a su medida
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {FREQUENCY_OPTIONS.map((item) => (
              <div key={item.title} className="card text-center">
                <h3 className="font-display font-semibold text-brand-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ específico de oficinas */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Dudas frecuentes</span>
            <h2 className="section-title mb-4">
              Preguntas sobre limpieza de oficinas
            </h2>
          </div>
          <FaqAccordion items={OFFICE_FAQS} />
          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
            >
              Ver todas las preguntas frecuentes
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

      <CTASection
        title="Solicite una cotización para la limpieza de su oficina"
        description="Reciba una propuesta detallada con frecuencia, alcance y precio en menos de 24 horas."
      />
    </>
  );
}

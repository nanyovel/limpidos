import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";

const SITE_URL = "https://limpidos.com";
const PAGE_URL = `${SITE_URL}/servicios/limpieza-de-hogares`;

export const metadata: Metadata = {
  title: "Empresa de Limpieza en Higüey, Bávaro y Punta Cana",
  description:
    "Servicio de limpieza de casas a domicilio en La Altagracia. Limpieza general de hogar, lavado de alfombras, colchones y limpieza de piscinas en Higüey, Bávaro y Punta Cana.",
  keywords: [
    "limpieza de casas",
    "limpieza de hogar",
    "limpieza a domicilio",
    "servicio de limpieza a domicilio",
    "servicio de limpieza de casas",
    "limpieza casa",
    "limpieza casas particulares",
    "limpieza domestica",
    "limpieza profunda casa",
    "limpieza profesional de casas",
    "aseo en casa",
    "servicio de aseo a domicilio",
    "limpieza para el hogar",
    "hogar limpio",
    "limpieza casa por horas",
    "precios de limpieza de casas",
    "empresa de limpieza de casas",
    "empresas de limpieza de hogar",
    "limpieza de casas cerca de mi",
    "limpieza de casas a domicilio",
    "lavado de alfombras",
    "limpieza de alfombras",
    "lavado de colchones",
    "limpieza de colchones",
    "limpieza de colchones a domicilio",
    "limpieza de piscinas a domicilio",
    "limpieza piscina",
  ],
  alternates: { canonical: PAGE_URL },
};

const GENERAL_INCLUDES = [
  {
    title: "Limpieza de pisos",
    description:
      "Barrido, trapeado y desinfección de todas las áreas de la casa.",
  },
  {
    title: "Limpieza de baños",
    description:
      "Desinfección completa de inodoros, duchas, lavamanos y azulejos.",
  },
  {
    title: "Limpieza de cocina",
    description:
      "Superficies, estufa, fregadero y desengrase de áreas de cocción.",
  },
  {
    title: "Limpieza de vidrios y ventanas",
    description:
      "Cristales interiores y exteriores accesibles, libres de manchas.",
  },
  {
    title: "Sacudido de muebles y superficies",
    description:
      "Polvo y suciedad superficial en muebles, repisas y superficies de la casa.",
  },
  {
    title: "Organización de espacios",
    description:
      "Orden de habitaciones y áreas comunes según las indicaciones del cliente.",
  },
];

const SPECIALIZED_SERVICES = [
  {
    title: "Lavado de alfombras",
    description:
      "Limpieza profunda de alfombras a domicilio, eliminando manchas y ácaros con equipo especializado.",
  },
  {
    title: "Lavado y desinfección de colchones",
    description:
      "Limpieza de colchones a domicilio para eliminar ácaros, manchas y malos olores, sin necesidad de sacarlo de casa.",
  },
  {
    title: "Limpieza de piscinas",
    description:
      "Limpieza y mantenimiento de piscinas residenciales, incluyendo fondo, paredes y filtros.",
  },
];

const FREQUENCY_OPTIONS = [
  {
    title: "Limpieza por única vez",
    description:
      "Ideal para una limpieza profunda puntual, mudanzas o antes de un evento.",
  },
  {
    title: "Quincenal o semanal",
    description:
      "La opción más común para el mantenimiento regular de la casa.",
  },
  {
    title: "Servicios especializados bajo cita",
    description:
      "Alfombras, colchones y piscinas se coordinan como visitas independientes, según necesidad.",
  },
];

const HOGAR_FAQS = [
  {
    question: "¿En qué zonas ofrecen el servicio de limpieza de hogar?",
    answer:
      "Nuestro servicio de limpieza de hogar está disponible en la provincia La Altagracia: Higüey, Bávaro y Punta Cana. Los servicios especializados (alfombras, colchones y piscinas) están disponibles exclusivamente en esta zona.",
  },
  {
    question:
      "¿El lavado de alfombras y colchones se hace en mi casa o hay que llevarlos a otro lugar?",
    answer:
      "Todo se realiza directamente en su hogar, con equipo profesional portátil. No es necesario sacar la alfombra ni el colchón de la casa.",
  },
  {
    question:
      "¿Puedo contratar solo la limpieza de piscina sin la limpieza general de la casa?",
    answer:
      "Sí, los servicios especializados (alfombras, colchones, piscinas) se pueden contratar de forma independiente a la limpieza general del hogar.",
  },
  {
    question: "¿Traen sus propios productos e insumos de limpieza?",
    answer:
      "Sí, todos los productos y equipos necesarios están incluidos en el servicio, sin costo adicional.",
  },
  {
    question:
      "¿Cuánto cuesta la limpieza de hogar en Higüey, Bávaro o Punta Cana?",
    answer:
      "El costo depende del tamaño de la vivienda, la frecuencia y si incluye algún servicio especializado. Solicite una cotización gratuita y le respondemos en menos de 24 horas.",
  },
];

export default function LimpiezaDeHogarPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Limpieza de Hogar" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  const laAltagracia = { "@type": "AdministrativeArea", name: "La Altagracia" };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Limpieza de Hogar",
        serviceType: "Limpieza de hogar",
        description:
          "Servicio general de limpieza de casas a domicilio en La Altagracia, incluyendo pisos, baños, cocina y vidrios.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: laAltagracia,
        url: PAGE_URL,
      },
      {
        "@type": "Service",
        name: "Lavado de Alfombras",
        serviceType: "Lavado de alfombras",
        description:
          "Limpieza profunda de alfombras a domicilio en La Altagracia.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: laAltagracia,
        url: `${PAGE_URL}#alfombras`,
      },
      {
        "@type": "Service",
        name: "Lavado de Colchones",
        serviceType: "Lavado de colchones",
        description:
          "Limpieza y desinfección de colchones a domicilio en La Altagracia.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: laAltagracia,
        url: `${PAGE_URL}#colchones`,
      },
      {
        "@type": "Service",
        name: "Limpieza de Piscinas",
        serviceType: "Limpieza de piscinas",
        description:
          "Limpieza y mantenimiento de piscinas residenciales en La Altagracia.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: laAltagracia,
        url: `${PAGE_URL}#piscinas`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOGAR_FAQS.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
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
            Empresa de limpieza
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Limpieza en Higüey, Bávaro y Punta Cana
          </h1>
          <p className="text-xl text-brand-200 leading-relaxed mb-8 max-w-2xl">
            Servicio de limpieza de casas u empresas a domicilio en la provincia
            La Altagracia, con opción de lavado de alfombras, colchones y
            limpieza de piscinas.
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

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Encontrar una empresa de limpieza de casas confiable en Higüey,
            Bávaro o Punta Cana no siempre es fácil. Limpidos ofrece un servicio
            de limpieza de hogar a domicilio con personal capacitado, productos
            incluidos y la posibilidad de sumar servicios especializados según
            lo que su casa necesite.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ya sea que busque una limpieza casa por horas, un servicio
            recurrente quincenal, o una limpieza profunda puntual, adaptamos la
            frecuencia y el alcance a lo que su hogar realmente requiere.
          </p>
        </div>
      </section>

      {/* Qué incluye la limpieza general */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Limpieza general de hogar</span>
            <h2 className="section-title mb-4">Qué incluye cada visita</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GENERAL_INCLUDES.map((item) => (
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

      {/* Servicios especializados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Exclusivo en La Altagracia</span>
            <h2 className="section-title mb-4">Servicios especializados</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Además de la limpieza general, ofrecemos estos servicios con
              equipo especializado, disponibles únicamente en Higüey, Bávaro y
              Punta Cana.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {SPECIALIZED_SERVICES.map((item, index) => (
              <div
                key={item.title}
                id={["alfombras", "colchones", "piscinas"][index]}
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
              Limpieza de hogar a su medida
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

      {/* FAQ específico de hogar */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Dudas frecuentes</span>
            <h2 className="section-title mb-4">
              Preguntas sobre limpieza de hogar
            </h2>
          </div>
          <FaqAccordion items={HOGAR_FAQS} />
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
        title="Solicite una cotización para la limpieza de su hogar"
        description="Cuéntenos qué necesita (limpieza general, alfombras, colchones o piscina) y reciba una propuesta en menos de 24 horas."
      />
    </>
  );
}

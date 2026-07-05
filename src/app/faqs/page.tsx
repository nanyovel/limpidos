import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";

const SITE_URL = "https://limpidos.com";

export const metadata: Metadata = {
  // Sin "| Limpidos" incrustado: el template del layout ya lo agrega
  // una sola vez al final. Antes esto duplicaba la marca en el <title>.
  title: "Preguntas Frecuentes sobre Limpieza Empresarial",
  description:
    "Resuelva sus dudas sobre nuestro servicio de limpieza para empresas en República Dominicana: costos, cobertura, contratos, personal y más.",
  keywords: [
    "preguntas frecuentes limpieza empresarial",
    "empresa de limpieza república dominicana",
    "servicio de limpieza para empresas",
    "outsourcing limpieza faq",
  ],
  alternates: { canonical: `${SITE_URL}/faqs` },
};

// Respuestas alineadas EXACTAMENTE con los servicios activos en SERVICES
// (Oficinas y Hogar). No prometer industrias, clínicas, retail o comercios
// hasta que esos servicios existan de verdad en el sitio.
const FAQ_ITEMS = [
  {
    question: "¿Cuánto cuesta el servicio de limpieza para empresas?",
    answer:
      "El costo depende del tamaño de sus instalaciones, la frecuencia del servicio (diario, interdiario o semanal) y el tipo de espacio (oficina u hogar). Ofrecemos una tarifa mensual fija y predecible, sin costos ocultos. Solicite una cotización gratuita y le presentaremos una propuesta ajustada a su empresa en un plazo de 24 a 48 horas.",
  },
  {
    question: "¿En qué ciudades de República Dominicana ofrecen el servicio?",
    answer:
      "Actualmente atendemos empresas en Santo Domingo y Santiago de los Caballeros, con posibilidad de cobertura en zonas cercanas según el volumen del contrato. Si su empresa está en otra provincia, contáctenos para evaluar disponibilidad.",
  },
  {
    question:
      "¿El personal de limpieza está asegurado y contratado legalmente?",
    answer:
      "Sí. Todo nuestro personal está contratado bajo las leyes dominicanas, con sus prestaciones, AFP y ARS al día. Esto significa que su empresa no asume ninguna responsabilidad patronal ni riesgo laboral por el personal de conserjería.",
  },
  {
    question: "¿Puedo contratar el servicio fuera del horario laboral?",
    answer:
      "Sí. La mayoría de nuestros clientes corporativos prefieren el servicio en horario nocturno o de fin de semana para no interrumpir la operación diaria. Coordinamos el horario que mejor se ajuste a su empresa.",
  },
  {
    question: "¿Qué pasa si un empleado de limpieza falta o se enferma?",
    answer:
      "Garantizamos continuidad del servicio. Si el personal asignado a su empresa falta por enfermedad, vacaciones o cualquier otra razón, enviamos un reemplazo capacitado sin costo adicional ni interrupción del servicio.",
  },
  {
    question: "¿Cuánto tiempo toma iniciar el servicio después de contratar?",
    answer:
      "En la mayoría de los casos podemos iniciar el servicio entre 3 y 7 días hábiles después de firmar el contrato, dependiendo del tamaño de las instalaciones y la disponibilidad de personal capacitado.",
  },
  {
    question: "¿Qué tipo de clientes pueden contratar Limpidos?",
    answer:
      "Trabajamos con oficinas corporativas de cualquier tamaño, desde pymes hasta empresas con múltiples sedes, además de servicio de limpieza para hogares. Estamos ampliando gradualmente a nuevos sectores.",
  },
  {
    question: "¿Los productos de limpieza que utilizan son seguros?",
    answer:
      "Sí, utilizamos productos certificados y, cuando aplica, ecológicos, seguros tanto para ambientes de oficina como para el hogar.",
  },
  {
    question: "¿Puedo cancelar o pausar el contrato?",
    answer:
      "Sí, nuestros contratos incluyen condiciones claras de cancelación con previo aviso. No manejamos permanencias forzosas de largo plazo que atrapen a su empresa en el servicio.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Puede escribirnos por WhatsApp al 849-341-9890, enviarnos un correo a ventas@limpidos.com, o llenar el formulario de contacto en nuestro sitio. Un asesor le contactará para agendar una visita de evaluación sin costo.",
  },
];

export default function FaqPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Preguntas Frecuentes" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={breadcrumbItems} variant="light" />
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Resolvemos sus dudas
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-brand-200 max-w-2xl mx-auto">
            Todo lo que necesita saber sobre nuestro servicio de limpieza
            empresarial en República Dominicana antes de contratar.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQ_ITEMS} />

          {/* CTA final */}
          <div className="mt-16 bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-display font-bold text-brand-900 mb-3">
              ¿Tiene otra pregunta?
            </h3>
            <p className="text-slate-500 mb-6 max-w-xl mx-auto">
              Nuestro equipo está listo para atender cualquier duda específica
              sobre su empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="btn-primary justify-center text-sm"
              >
                Solicitar cotización
              </Link>
              <Link
                href={`https://wa.me/${COMPANY.phoneLink}`}
                className="btn-white justify-center text-sm border border-brand-200"
              >
                Escribir por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

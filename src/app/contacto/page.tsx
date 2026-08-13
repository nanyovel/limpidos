import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ui/ContactForm";
import { COMPANY } from "@/lib/data";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";

const SITE_URL = "https://limpidos.com";

export const metadata: Metadata = {
  title: "Solicitar Cotización de Limpieza Empresarial",
  // Alineada con los servicios REALES activos (Oficinas y Hogar), no con
  // sectores que aún no tienen página ni contenido visible en el sitio.
  description:
    "Solicite su cotización gratuita de limpieza de oficinas o limpieza de hogar en República Dominicana. Respuesta garantizada en menos de 2 horas.",
  alternates: { canonical: `${SITE_URL}/contacto` },
};

const CONTACT_ITEMS = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
    label: "Teléfono",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneLink}`,
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
    label: "Dirección",
    value: COMPANY.address,
    // Antes era "#" (enlace muerto). Ahora abre la ubicación real en
    // Google Maps, lo cual también ayuda a señales de SEO local.
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      COMPANY.address,
    )}`,
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Recibimos su solicitud",
    desc: "Nuestro equipo comercial revisa su formulario de inmediato.",
  },
  {
    step: "2",
    title: "Lo contactamos en 2h",
    desc: "Un asesor dedicado se comunica de inmediato para entender sus necesidades.",
  },
  {
    step: "3",
    title: "Diagnóstico de instalaciones",
    desc: "Agendamos una visita o videoconferencia para evaluar sus espacios.",
  },
  {
    step: "4",
    title: "Propuesta personalizada",
    desc: "Recibe una cotización detallada con servicios, frecuencias y precios.",
  },
];

// Solo preguntas ESPECÍFICAS del proceso de contacto/cotización.
// Todo lo demás (garantías, personal, flexibilidad de contrato, etc.)
// ya vive en /faqs — evita duplicar contenido entre las dos páginas.
const CONTACT_FAQS = [
  {
    q: "¿Atienden a pequeñas empresas o solo grandes corporaciones?",
    a: "Trabajamos con todo tipo de empresas. Desde pymes con una sola oficina hasta corporaciones con múltiples sedes. Lo importante es que sea un cliente empresarial, no residencial.",
  },
  {
    q: "¿Necesito agendar una visita antes de recibir una cotización?",
    a: "No es obligatorio para una cotización inicial, pero recomendamos una visita o videollamada breve para ajustar el precio con precisión según sus instalaciones reales.",
  },
  {
    q: "¿La cotización tiene algún costo o compromiso?",
    a: "No. La cotización es completamente gratuita y sin ningún compromiso de contratación.",
  },
];

export default function ContactoPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Contacto" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contacto`,
    name: "Contacto — Limpidos",
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} variant="light" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Cotización gratuita
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Hablemos de cómo podemos ayudar a su empresa
              </h1>
              <p className="text-xl text-brand-200 mb-8 leading-relaxed">
                Complete el formulario y un asesor especializado en limpieza
                empresarial se pondrá en contacto en menos de 2 horas con una
                propuesta a medida.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Dirección" ? "_blank" : undefined}
                    rel={
                      item.label === "Dirección"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-brand-300 text-xs uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-white font-medium text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Próximos pasos</span>
            <h2 className="section-title mb-2">
              ¿Qué pasa después de enviar el formulario?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-brand-700 text-white font-display font-bold text-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-brand-900 mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs — solo preguntas específicas del proceso de contacto.
          Para todo lo demás, enlazamos a /faqs en vez de duplicar contenido. */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-brand-900 hover:bg-slate-50 transition-colors list-none">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
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
    </>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Solicitar Cotización | Contáctenos para Servicios de Limpieza Empresarial",
  description:
    "Solicite su cotización gratuita de limpieza empresarial. Atendemos oficinas, industrias, clínicas y comercios. Respuesta garantizada en menos de 24 horas.",
  alternates: { canonical: "https://limpidos.com/contacto" },
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
    href: "#",
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
    title: "Lo contactamos en 24h",
    desc: "Un asesor dedicado se comunica para entender sus necesidades.",
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

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                empresarial se pondrá en contacto en menos de 24 horas con una
                propuesta a medida.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
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

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "¿Atienden a pequeñas empresas o solo grandes corporaciones?",
                a: "Trabajamos con todo tipo de empresas. Desde pymes con una sola oficina hasta corporaciones con múltiples sedes. Lo importante es que sea un cliente empresarial, no residencial.",
              },
              {
                q: "¿Cuánto tiempo tarda en comenzar el servicio una vez firmado el contrato?",
                a: "Normalmente iniciamos operaciones entre 3 y 7 días hábiles después de la firma del contrato. Este tiempo lo usamos para asignar y preparar el equipo específico para sus instalaciones.",
              },
              {
                q: "¿Qué sucede si el resultado no cumple mis expectativas?",
                a: "Tenemos garantía de satisfacción 100%. Si algo no cumple el estándar acordado, lo corregimos sin costo adicional y sin discusión. Su satisfacción es nuestra prioridad.",
              },
              {
                q: "¿Puedo cambiar la frecuencia o los servicios contratados?",
                a: "Absolutamente. Nuestros contratos son flexibles. Si sus necesidades cambian (nueva sede, temporada alta, obras), adaptamos el servicio con un simple aviso a su gestor de cuenta.",
              },
              {
                q: "¿El personal tiene verificación de antecedentes?",
                a: "Sí. Todo nuestro personal pasa por verificación de antecedentes penales, referencias laborales y capacitación certificada antes de trabajar en las instalaciones de cualquier cliente.",
              },
            ].map((faq, i) => (
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
        </div>
      </section>
    </>
  );
}

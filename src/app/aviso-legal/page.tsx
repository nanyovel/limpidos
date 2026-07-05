import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const SITE_URL = "https://limpidos.com";

export const metadata: Metadata = {
  title: "Aviso Legal | Limpidos",
  description:
    "Consulte el aviso legal de Limpidos. Información sobre el uso del sitio web, propiedad intelectual, condiciones de uso y responsabilidades.",
  alternates: {
    canonical: `${SITE_URL}/aviso-legal`,
  },
};
const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Aviso legal" }, // último item, sin href = página actual
];
export default function AvisoLegalPage() {
  //   const jsonLd = {
  //     "@context": "https://schema.org",
  //     "@type": "WebPage",
  //     name: "Aviso Legal",
  //     url: `${SITE_URL}/aviso-legal`,
  //     description: "Información legal sobre el uso del sitio web de Limpidos.",
  //     isPartOf: {
  //       "@id": `${SITE_URL}/#website`,
  //     },
  //   };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/aviso-legal`,
        url: `${SITE_URL}/aviso-legal`,
        description:
          "Información legal sobre el uso del sitio web de Limpidos.",
        name: "Aviso Legal",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Aviso Legal",
            item: `${SITE_URL}/aviso-legal`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Hero */}

      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbItems} variant="light" />
          </div>
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Información Legal
          </span>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Aviso Legal
          </h1>

          <p className="text-xl text-brand-200 max-w-2xl mx-auto">
            Este documento regula el acceso, navegación y utilización del sitio
            web de Limpidos, así como los derechos y obligaciones de quienes lo
            visitan.
          </p>
        </div>
      </section>

      {/* Contenido */}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Introducción */}

          <div>
            <span className="section-tag">Información General</span>

            <h2 className="section-title mb-6">
              Bienvenido al sitio web de Limpidos
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                El presente Aviso Legal regula el acceso y utilización del sitio
                web <strong>https://limpidos.com</strong>, propiedad de
                <strong> Limpidos</strong>, empresa especializada en outsourcing
                y servicios de limpieza empresarial en República Dominicana.
              </p>

              <p>
                Al acceder a este sitio web, usted acepta las condiciones
                descritas en este documento. Si no está de acuerdo con ellas,
                deberá abstenerse de utilizar este sitio.
              </p>

              <p>
                El objetivo principal del portal consiste en ofrecer información
                sobre nuestros servicios, facilitar la comunicación con clientes
                potenciales y permitir la solicitud de cotizaciones comerciales.
              </p>
            </div>
          </div>

          {/* Titular */}

          {/* Titular */}

          <div>
            <span className="section-tag">1. Titular del sitio web</span>

            <h2 className="section-title mb-6">Información del propietario</h2>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">
                    Nombre comercial
                  </h3>
                  <p className="text-slate-600">{COMPANY.name}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">
                    Razón social
                  </h3>
                  <p className="text-slate-600">
                    Limpidos S.R.L.
                    {/* Nombre legal de la empresa */}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">RNC</h3>
                  <p className="text-slate-600">132-42172-8</p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">
                    Sitio web
                  </h3>
                  <p className="text-slate-600">https://limpidos.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">
                    Correo electrónico
                  </h3>
                  <p className="text-slate-600">{COMPANY.email}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">
                    Teléfono
                  </h3>
                  <p className="text-slate-600">{COMPANY.phone}</p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-semibold text-brand-900 mb-2">
                    Dirección
                  </h3>
                  <p className="text-slate-600">{COMPANY.address}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Objeto */}

          <div>
            <span className="section-tag">2. Objeto del sitio</span>

            <h2 className="section-title mb-6">Finalidad del portal</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Limpidos pone a disposición de empresas, organizaciones y
                potenciales clientes este sitio web con el propósito de
                proporcionar información clara acerca de nuestros servicios de
                limpieza empresarial, outsourcing de personal de limpieza,
                soluciones especializadas y contenido informativo relacionado
                con el sector.
              </p>

              <p>
                La información publicada tiene carácter informativo y comercial,
                pudiendo ser modificada o actualizada sin previo aviso para
                reflejar mejoras en nuestros servicios, procesos o condiciones.
              </p>
            </div>
          </div>

          {/* Condiciones */}

          <div>
            <span className="section-tag">3. Condiciones de uso</span>

            <h2 className="section-title mb-6">Uso correcto del sitio web</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                El usuario se compromete a utilizar este sitio web de forma
                responsable, respetando la legislación vigente y evitando
                cualquier actuación que pueda perjudicar a Limpidos o a
                terceros.
              </p>

              <p>
                Queda prohibido utilizar este sitio para actividades ilícitas,
                distribuir software malicioso, intentar acceder sin autorización
                a nuestros sistemas o emplear el contenido con fines
                fraudulentos.
              </p>

              <p>
                El incumplimiento de estas condiciones podrá dar lugar a la
                suspensión del acceso al sitio y a las acciones legales que
                correspondan.
              </p>
            </div>
          </div>

          {/* Propiedad intelectual */}

          <div>
            <span className="section-tag">4. Propiedad intelectual</span>

            <h2 className="section-title mb-6">
              Derechos sobre los contenidos
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Todo el contenido publicado en este sitio web, incluyendo
                textos, fotografías, logotipos, imágenes, gráficos, diseño,
                documentación técnica, código fuente, elementos visuales y demás
                materiales, es propiedad de Limpidos o se utiliza con la debida
                autorización de sus respectivos titulares.
              </p>

              <p>
                Queda prohibida la reproducción, distribución, modificación,
                publicación o utilización parcial o total de estos contenidos
                sin autorización previa y por escrito de Limpidos.
              </p>

              <p>
                El uso no autorizado podrá dar lugar al ejercicio de las
                acciones legales correspondientes para la protección de los
                derechos de propiedad intelectual e industrial.
              </p>
            </div>
          </div>
          {/* Responsabilidad */}

          <div>
            <span className="section-tag">
              5. Limitación de responsabilidad
            </span>

            <h2 className="section-title mb-6">
              Alcance de nuestra responsabilidad
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Limpidos realiza esfuerzos razonables para mantener la
                información publicada en este sitio web actualizada, precisa y
                completa. Sin embargo, no garantiza que el contenido esté libre
                de errores tipográficos, omisiones o imprecisiones.
              </p>

              <p>
                La información disponible en este sitio tiene carácter
                informativo y no constituye una oferta contractual vinculante,
                salvo que se indique expresamente lo contrario mediante una
                propuesta comercial o contrato formal.
              </p>

              <p>
                Limpidos no será responsable por daños directos o indirectos
                derivados del uso del sitio web, interrupciones del servicio,
                fallos técnicos, incompatibilidades de software, virus
                informáticos u otras circunstancias ajenas a nuestro control
                razonable.
              </p>

              <p>
                El usuario utiliza este sitio bajo su propia responsabilidad y
                acepta que cualquier decisión tomada con base en la información
                publicada será exclusivamente suya.
              </p>
            </div>
          </div>

          {/* Enlaces */}

          <div>
            <span className="section-tag">6. Enlaces externos</span>

            <h2 className="section-title mb-6">Sitios web de terceros</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Este sitio puede contener enlaces hacia páginas web de terceros
                con el propósito de ampliar información o facilitar determinados
                servicios.
              </p>

              <p>
                Dichos enlaces no implican aprobación, respaldo ni asociación
                entre Limpidos y los propietarios de esos sitios.
              </p>

              <p>
                No asumimos responsabilidad por el contenido, disponibilidad,
                políticas de privacidad, medidas de seguridad o funcionamiento
                de páginas web externas.
              </p>

              <p>
                Recomendamos al usuario revisar las políticas legales y de
                privacidad de cualquier sitio que visite fuera de
                https://limpidos.com.
              </p>
            </div>
          </div>

          {/* Protección de datos */}

          <div>
            <span className="section-tag">
              7. Protección de datos personales
            </span>

            <h2 className="section-title mb-6">
              Tratamiento de información personal
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Limpidos respeta la privacidad de todas las personas que
                interactúan con este sitio web.
              </p>

              <p>
                Los datos personales facilitados mediante formularios,
                solicitudes de cotización o cualquier otro medio de contacto
                serán tratados únicamente para responder consultas, preparar
                propuestas comerciales, prestar nuestros servicios o cumplir con
                obligaciones legales.
              </p>

              <p>
                La información relacionada con el tratamiento de datos
                personales, derechos del usuario y medidas de protección se
                encuentra disponible en nuestra Política de Privacidad.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/politica-privacidad" className="btn-secondary">
                Leer Política de Privacidad
              </Link>
            </div>
          </div>

          {/* Cookies */}

          <div>
            <span className="section-tag">8. Cookies</span>

            <h2 className="section-title mb-6">Uso de cookies</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Este sitio utiliza cookies y tecnologías similares para mejorar
                la experiencia de navegación, analizar estadísticas de uso y
                ofrecer determinadas funcionalidades.
              </p>

              <p>
                Algunas cookies son estrictamente necesarias para el
                funcionamiento del sitio, mientras que otras permiten obtener
                información analítica o recordar preferencias del usuario.
              </p>

              <p>
                El visitante puede aceptar, rechazar o configurar determinadas
                cookies según las opciones disponibles en nuestro banner de
                consentimiento.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/politica-cookies" className="btn-secondary">
                Consultar Política de Cookies
              </Link>
            </div>
          </div>

          {/* Legislación */}

          <div>
            <span className="section-tag">9. Legislación aplicable</span>

            <h2 className="section-title mb-6">Jurisdicción</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                El presente Aviso Legal se interpreta de conformidad con las
                leyes vigentes de la República Dominicana.
              </p>

              <p>
                Cualquier controversia relacionada con la utilización del sitio
                web o con la interpretación de este documento será sometida a la
                jurisdicción de los tribunales competentes de la República
                Dominicana, salvo que una norma imperativa disponga otra cosa.
              </p>
            </div>
          </div>

          {/* Actualizaciones */}

          <div>
            <span className="section-tag">
              10. Modificaciones del aviso legal
            </span>

            <h2 className="section-title mb-6">Actualizaciones</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Limpidos podrá modificar el presente Aviso Legal en cualquier
                momento con el objetivo de adaptarlo a cambios legislativos,
                mejoras en el sitio web, incorporación de nuevos servicios o
                modificaciones en nuestros procesos internos.
              </p>

              <p>
                La versión publicada en este sitio será siempre la vigente y
                sustituirá cualquier versión anterior.
              </p>

              <p>
                Recomendamos revisar periódicamente este documento para conocer
                las condiciones aplicables al uso del sitio web.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              <strong>Última actualización:</strong> 4 de julio de 2026
            </p>

            <p className="text-sm text-slate-500 mt-2">
              Si tiene preguntas sobre este Aviso Legal puede escribirnos a{" "}
              <strong>{COMPANY.email}</strong>.
            </p>
          </div>
          {/* CTA */}

          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-display font-bold text-brand-900 mb-4">
              ¿Necesita comunicarse con nosotros?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Si tiene preguntas relacionadas con este Aviso Legal o desea
              obtener más información sobre nuestros servicios, estaremos
              encantados de atenderle.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto" className="btn-primary justify-center">
                Contactarnos
              </Link>

              <Link
                href={`https://wa.me/${COMPANY.phoneLink}`}
                className="btn-white border border-brand-200 justify-center"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

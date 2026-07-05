import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

const SITE_URL = "https://limpidos.com";

export const metadata: Metadata = {
  title: "Política de Cookies | Limpidos",
  description:
    "Conozca cómo Limpidos utiliza cookies y tecnologías similares para mejorar la experiencia de navegación y analizar el uso del sitio web.",
  alternates: {
    canonical: `${SITE_URL}/politica-cookies`,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Información Legal
          </span>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Política de Cookies
          </h1>

          <p className="text-xl text-brand-200 max-w-2xl mx-auto">
            Esta política explica qué son las cookies, cómo las utilizamos en
            nuestro sitio web y las opciones que tiene para administrarlas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <span className="section-tag">Información General</span>

            <h2 className="section-title mb-6">¿Qué son las cookies?</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Las cookies son pequeños archivos de texto que un sitio web
                almacena en su navegador o dispositivo cuando lo visita.
              </p>

              <p>
                Estas tecnologías permiten recordar determinadas preferencias,
                mejorar la experiencia de navegación, mantener el correcto
                funcionamiento del sitio y obtener información estadística sobre
                la utilización de nuestros servicios.
              </p>

              <p>
                Las cookies no permiten acceder al contenido de su equipo ni
                contienen virus o software malicioso.
              </p>
            </div>
          </div>
          <div>
            <span className="section-tag">1. Uso de cookies</span>

            <h2 className="section-title mb-6">¿Por qué utilizamos cookies?</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                En Limpidos utilizamos cookies y tecnologías similares para
                ofrecer una mejor experiencia de navegación, conocer el
                rendimiento de nuestro sitio web y mejorar continuamente
                nuestros contenidos y servicios.
              </p>

              <p>
                Actualmente utilizamos únicamente las cookies necesarias para el
                funcionamiento del sitio y cookies analíticas asociadas a Google
                Analytics, siempre respetando la configuración de consentimiento
                realizada por el visitante.
              </p>

              <p>
                En el futuro podremos incorporar nuevas herramientas de
                análisis, publicidad o personalización. En caso de hacerlo, esta
                política será actualizada para reflejar dichos cambios.
              </p>
            </div>
          </div>
          <div>
            <span className="section-tag">2. Base legal</span>

            <h2 className="section-title mb-6">Consentimiento del usuario</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Las cookies estrictamente necesarias pueden utilizarse porque
                son indispensables para el funcionamiento técnico del sitio web.
              </p>

              <p>
                Las cookies analíticas y cualquier otra cookie no esencial se
                utilizarán únicamente cuando usted otorgue su consentimiento a
                través del banner de cookies disponible en nuestro sitio.
              </p>

              <p>
                Usted podrá modificar o retirar dicho consentimiento en
                cualquier momento utilizando las opciones disponibles en el
                propio sitio web o mediante la configuración de su navegador.
              </p>
            </div>
          </div>
          <div>
            <span className="section-tag">3. Cookies utilizadas</span>

            <h2 className="section-title mb-6">
              Tecnologías utilizadas actualmente
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                A la fecha de esta política, el sitio web de Limpidos utiliza
                las siguientes categorías de cookies y tecnologías:
              </p>
            </div>

            <div className="overflow-x-auto mt-8">
              <table className="w-full border border-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 p-3 text-left">
                      Categoría
                    </th>

                    <th className="border border-slate-200 p-3 text-left">
                      Finalidad
                    </th>

                    <th className="border border-slate-200 p-3 text-left">
                      Proveedor
                    </th>

                    <th className="border border-slate-200 p-3 text-left">
                      Requiere consentimiento
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3">Técnicas</td>

                    <td className="border border-slate-200 p-3">
                      Permiten el funcionamiento básico del sitio web.
                    </td>

                    <td className="border border-slate-200 p-3">Limpidos</td>

                    <td className="border border-slate-200 p-3">No</td>
                  </tr>

                  <tr>
                    <td className="border border-slate-200 p-3">Analíticas</td>

                    <td className="border border-slate-200 p-3">
                      Analizar el uso del sitio mediante Google Analytics.
                    </td>

                    <td className="border border-slate-200 p-3">Google</td>

                    <td className="border border-slate-200 p-3">Sí</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <span className="section-tag">4. Google Analytics</span>

            <h2 className="section-title mb-6">Estadísticas de navegación</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Utilizamos Google Analytics para comprender cómo interactúan los
                visitantes con nuestro sitio web y así mejorar continuamente la
                experiencia de navegación.
              </p>

              <p>
                La información recopilada incluye datos estadísticos como
                páginas visitadas, duración de la visita, tipo de dispositivo,
                navegador, país de acceso y otras métricas agregadas que no
                utilizamos para identificar personalmente a los visitantes.
              </p>
            </div>
          </div>
          <div>
            <span className="section-tag">5. Preferencias del usuario</span>

            <h2 className="section-title mb-6">
              Almacenamiento del consentimiento
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Cuando usted acepta o rechaza las cookies desde el banner de
                consentimiento, dicha preferencia se almacena localmente en su
                navegador mediante <strong>localStorage</strong>.
              </p>

              <p>
                Este almacenamiento únicamente permite recordar su decisión para
                evitar mostrar el aviso en cada visita y no se utiliza con fines
                publicitarios ni para elaborar perfiles de usuario.
              </p>
            </div>
          </div>
          <div>
            <span className="section-tag">6. Cambios futuros</span>

            <h2 className="section-title mb-6">Nuevas herramientas</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Si en el futuro incorporamos herramientas como Google Ads, Meta
                Pixel, LinkedIn Insight Tag, Microsoft Clarity, Hotjar u otras
                tecnologías similares, esta Política de Cookies será actualizada
                para reflejar las nuevas categorías de cookies utilizadas y, en
                su caso, solicitar nuevamente el consentimiento correspondiente.
              </p>
            </div>
          </div>{" "}
          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              7. Gestión de las cookies
            </h2>

            <p>
              Usted puede aceptar, rechazar o modificar el uso de las cookies no
              esenciales mediante el banner de consentimiento mostrado al
              ingresar al sitio web.
            </p>

            <p className="mt-4">
              Asimismo, puede eliminar las cookies ya almacenadas o bloquear su
              uso desde la configuración de su navegador. Tenga presente que
              algunas funcionalidades podrían verse afectadas si deshabilita
              determinadas cookies técnicas.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border border-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 p-3 text-left">
                      Navegador
                    </th>
                    <th className="border border-slate-200 p-3 text-left">
                      Configuración
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3">
                      Google Chrome
                    </td>
                    <td className="border border-slate-200 p-3">
                      Configuración → Privacidad y seguridad → Cookies y otros
                      datos de sitios.
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-slate-200 p-3">
                      Microsoft Edge
                    </td>
                    <td className="border border-slate-200 p-3">
                      Configuración → Cookies y permisos del sitio.
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-slate-200 p-3">
                      Mozilla Firefox
                    </td>
                    <td className="border border-slate-200 p-3">
                      Ajustes → Privacidad y seguridad.
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-slate-200 p-3">Safari</td>
                    <td className="border border-slate-200 p-3">
                      Preferencias → Privacidad.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              8. Cambios en esta política
            </h2>

            <p>
              Limpidos podrá actualizar la presente Política de Cookies cuando
              sea necesario debido a cambios tecnológicos, incorporación de
              nuevas herramientas, modificaciones legales o mejoras en el
              funcionamiento del sitio web.
            </p>

            <p className="mt-4">
              En caso de producirse cambios importantes que afecten la forma en
              que utilizamos las cookies, actualizaremos la fecha de revisión de
              este documento y, cuando resulte necesario, volveremos a solicitar
              su consentimiento.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              <strong>Última actualización:</strong> 4 de julio de 2026
            </p>

            <p className="text-sm text-slate-500 mt-3">
              Si tiene preguntas sobre esta Política de Cookies puede
              escribirnos a <strong>{COMPANY.email}</strong>.
            </p>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-display font-bold text-brand-900 mb-4">
              ¿Tiene alguna consulta?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Si desea obtener más información sobre el uso de cookies o sobre
              cualquier aspecto relacionado con la privacidad de nuestro sitio
              web, estaremos encantados de atenderle.
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

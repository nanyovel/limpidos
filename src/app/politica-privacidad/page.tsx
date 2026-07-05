import { COMPANY } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Limpidos",
  description:
    "Política de privacidad y protección de datos de Limpidos. Información sobre cómo recopilamos, usamos y protegemos sus datos personales.",
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="section-tag">Legal</span>

          <h1 className="section-title">Política de Privacidad</h1>

          <p className="text-slate-400 text-sm mt-2">
            Última actualización: 4 de julio de 2026
          </p>
        </div>

        <div className="space-y-10 text-slate-600 leading-8">
          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              1. Responsable del tratamiento
            </h2>

            <p>
              La presente Política de Privacidad describe la forma en que
              <strong> Limpidos S.R.L.</strong> recopila, utiliza, protege y
              trata los datos personales obtenidos a través del sitio web
              <strong> https://limpidos.com</strong>.
            </p>

            <p className="mt-4">
              Al utilizar este sitio web o enviarnos información mediante
              nuestros formularios de contacto, usted acepta el tratamiento de
              sus datos de acuerdo con lo establecido en esta política.
            </p>

            <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Razón social:</strong> Limpidos S.R.L.
                </li>
                <li>
                  <strong>RNC:</strong> 132-42172-8
                </li>
                <li>
                  <strong>Sitio web:</strong> https://limpidos.com
                </li>
                <li>
                  <strong>Correo:</strong> jperez@limpidos.com
                </li>
                <li>
                  <strong>Teléfono:</strong> +1 (849) 341-9890
                </li>
                <li>
                  <strong>Dirección:</strong> Av. Sarasota esquina Av. Enrique
                  Jiménez Moya, Santo Domingo, República Dominicana.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              2. Datos que recopilamos
            </h2>

            <p>
              Recopilamos únicamente la información que usted decide
              proporcionar de forma voluntaria cuando utiliza nuestros canales
              de contacto.
            </p>

            <p className="mt-4">
              Dependiendo de la interacción, podremos recopilar los siguientes
              datos:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Nombre.</li>

              <li>Correo electrónico.</li>

              <li>Empresa.</li>

              <li>Teléfono.</li>

              <li>Servicio de interés.</li>

              <li>Mensaje enviado mediante el formulario.</li>
            </ul>

            <p className="mt-5">
              Asimismo, recopilamos determinada información técnica de
              navegación, como dirección IP, navegador utilizado, páginas
              visitadas, tiempo de permanencia y estadísticas de uso obtenidas
              mediante Google Analytics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              3. Cómo obtenemos sus datos
            </h2>

            <p>Los datos personales pueden obtenerse a través de:</p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Formulario de contacto.</li>

              <li>Solicitud de cotización.</li>

              <li>Correo electrónico.</li>

              <li>Comunicación telefónica.</li>

              <li>Cookies y herramientas de análisis de navegación.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              4. Finalidad del tratamiento
            </h2>

            <p>
              Utilizamos la información recopilada únicamente para fines
              relacionados con nuestra actividad empresarial.
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Responder consultas realizadas desde el sitio web.</li>

              <li>Preparar cotizaciones comerciales.</li>

              <li>Dar seguimiento a solicitudes de información.</li>

              <li>Comunicarnos con potenciales clientes.</li>

              <li>Gestionar la relación comercial cuando exista.</li>

              <li>
                Mejorar la calidad del sitio web mediante estadísticas de uso.
              </li>

              <li>Cumplir obligaciones legales.</li>
            </ul>

            <p className="mt-5">
              Actualmente Limpidos no envía boletines informativos ni campañas
              de marketing automatizadas. En caso de incorporar estos servicios
              en el futuro, únicamente se realizarán cuando exista el
              consentimiento correspondiente o una base legal que lo permita.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              5. Compartición de información
            </h2>

            <p>
              Limpidos no vende, alquila ni comercializa los datos personales de
              sus usuarios.
            </p>

            <p className="mt-4">
              No obstante, determinados proveedores tecnológicos pueden tratar
              parte de la información cuando resulte necesario para el
              funcionamiento del sitio web o la prestación de servicios, por
              ejemplo:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Google Analytics.</li>

              <li>Servicios de alojamiento web.</li>

              <li>Servicios de correo electrónico.</li>
            </ul>

            <p className="mt-5">
              En el futuro podrían incorporarse nuevas herramientas tecnológicas
              destinadas a mejorar nuestros servicios. Cuando ello implique
              cambios relevantes en el tratamiento de datos personales, esta
              política será actualizada.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              6. Conservación de los datos
            </h2>

            <p>
              Conservaremos los datos personales únicamente durante el tiempo
              necesario para responder la consulta, preparar una propuesta
              comercial, mantener la relación con el cliente o cumplir
              obligaciones legales.
            </p>

            <p className="mt-4">
              Una vez que la información deje de ser necesaria, será eliminada o
              anonimizada cuando resulte posible.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              7. Derechos del titular de los datos
            </h2>

            <p>
              Usted podrá ejercer, cuando corresponda conforme a la legislación
              aplicable, los derechos relacionados con sus datos personales.
            </p>

            <p className="mt-4">Entre ellos se encuentran:</p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Solicitar acceso a los datos personales que conservamos.</li>

              <li>
                Solicitar la actualización o corrección de información inexacta.
              </li>

              <li>
                Solicitar la eliminación de sus datos cuando resulte procedente.
              </li>

              <li>Oponerse al tratamiento de determinada información.</li>

              <li>
                Solicitar la limitación del tratamiento cuando corresponda.
              </li>

              <li>Retirar cualquier consentimiento previamente otorgado.</li>
            </ul>

            <p className="mt-5">
              Para ejercer cualquiera de estos derechos puede escribirnos a
              <strong> jperez@limpidos.com</strong>, indicando claramente su
              solicitud y los datos necesarios para identificarle.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              8. Seguridad de la información
            </h2>

            <p>
              En Limpidos adoptamos medidas técnicas y organizativas razonables
              para proteger la información personal frente a accesos no
              autorizados, pérdida, alteración, divulgación o destrucción.
            </p>

            <p className="mt-4">
              Nuestro sitio utiliza conexiones seguras mediante HTTPS y el
              acceso a la información recibida a través del formulario de
              contacto se limita únicamente a las personas autorizadas para
              atender las solicitudes comerciales.
            </p>

            <p className="mt-4">
              Aunque aplicamos buenas prácticas de seguridad, ningún sistema
              conectado a Internet puede garantizar una protección absoluta
              frente a todos los riesgos existentes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              9. Cookies
            </h2>

            <p>
              Este sitio utiliza cookies y tecnologías similares para mejorar la
              experiencia de navegación y obtener estadísticas de uso mediante
              Google Analytics.
            </p>

            <p className="mt-4">
              Para conocer qué tecnologías utilizamos, cómo funcionan y cómo
              puede administrarlas, le invitamos a consultar nuestra Política de
              Cookies.
            </p>

            <div className="mt-6">
              <Link href="/politica-cookies" className="btn-secondary">
                Consultar Política de Cookies
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              10. Enlaces a sitios de terceros
            </h2>

            <p>
              Nuestro sitio web puede contener enlaces hacia páginas externas
              que pertenecen a terceros.
            </p>

            <p className="mt-4">
              Limpidos no controla el contenido, las políticas de privacidad ni
              las prácticas de dichos sitios web, por lo que recomendamos
              revisar sus respectivos avisos legales antes de proporcionar
              información personal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-4">
              11. Modificaciones de esta política
            </h2>

            <p>
              Podremos actualizar esta Política de Privacidad cuando resulte
              necesario para adaptarla a cambios legales, mejoras en nuestros
              servicios, incorporación de nuevas funcionalidades o
              modificaciones en nuestros procesos internos.
            </p>

            <p className="mt-4">
              La versión publicada en este sitio web será siempre la vigente y
              sustituirá cualquier versión anterior.
            </p>

            <p className="mt-4">
              Recomendamos revisar periódicamente este documento para mantenerse
              informado sobre la forma en que protegemos su información.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              <strong>Última actualización:</strong> 4 de julio de 2026
            </p>

            <p className="text-sm text-slate-500 mt-3">
              Si tiene preguntas relacionadas con esta Política de Privacidad
              puede escribirnos a <strong>jperez@limpidos.com</strong>.
            </p>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-display font-bold text-brand-900 mb-4">
              ¿Necesita más información?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Si tiene dudas sobre el tratamiento de sus datos personales o
              desea comunicarse con nuestro equipo, estaremos encantados de
              ayudarle.
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
      </div>
    </section>
  );
}

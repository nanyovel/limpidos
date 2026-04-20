import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Limpidos',
  description: 'Política de privacidad y protección de datos de Limpidos. Información sobre cómo recopilamos, usamos y protegemos sus datos personales.',
  robots: { index: false },
}

export default function PoliticaPrivacidadPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="section-tag">Legal</span>
          <h1 className="section-title">Política de Privacidad</h1>
          <p className="text-slate-400 text-sm mt-2">Última actualización: 1 de enero de 2024</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong>Limpidos S.R.L.</strong> (en adelante, &ldquo;Limpidos&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;la empresa&rdquo;) es el responsable del tratamiento de los datos personales recogidos a través del sitio web <a href="https://limpidos.com" className="text-brand-600 hover:underline">limpidos.com</a> y cualquier comunicación relacionada con nuestros servicios.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Razón social:</strong> Limpidos S.R.L.</li>
              <li><strong>Email de contacto:</strong> privacidad@limpidos.com</li>
              <li><strong>Dirección:</strong> Av. Winston Churchill 1099, Santo Domingo, RD</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">2. Datos que recopilamos</h2>
            <p>Recopilamos los siguientes tipos de datos personales:</p>
            <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
              <li><strong>Datos de contacto empresarial:</strong> nombre, empresa, cargo, email corporativo y teléfono, proporcionados a través del formulario de cotización.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita, recogidos mediante cookies técnicas y analíticas.</li>
              <li><strong>Comunicaciones:</strong> contenido de emails, consultas o mensajes que nos envíe.</li>
            </ul>
            <p className="mt-3 text-sm bg-amber-50 border border-amber-200 rounded-lg p-3">
              <strong>Importante:</strong> Limpidos atiende exclusivamente a clientes empresariales. No recopilamos datos de menores de edad ni ofrecemos servicios a particulares.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">3. Finalidad del tratamiento</h2>
            <p>Tratamos sus datos con las siguientes finalidades:</p>
            <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
              <li>Gestionar y responder solicitudes de cotización y consultas comerciales.</li>
              <li>Comunicarnos con usted sobre nuestros servicios, propuestas y actualizaciones relevantes.</li>
              <li>Enviar contenido de valor (blog, guías) si ha dado su consentimiento explícito.</li>
              <li>Mejorar nuestro sitio web mediante el análisis de patrones de uso (datos anonimizados).</li>
              <li>Cumplir con obligaciones legales y contractuales.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">4. Base legal del tratamiento</h2>
            <ul className="space-y-2 text-sm list-disc list-inside">
              <li><strong>Consentimiento:</strong> para el envío de comunicaciones de marketing y newsletter.</li>
              <li><strong>Interés legítimo:</strong> para la gestión de solicitudes de cotización y relaciones comerciales B2B.</li>
              <li><strong>Cumplimiento de contrato:</strong> cuando existe una relación contractual vigente.</li>
              <li><strong>Obligación legal:</strong> cuando la ley nos exige conservar ciertos datos.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">5. Conservación de datos</h2>
            <p>
              Conservamos sus datos durante el tiempo necesario para cumplir la finalidad para la que fueron recogidos y durante los plazos legalmente exigidos. Los datos de contacto comercial se conservan mientras exista interés comercial legítimo o hasta que solicite su eliminación.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">6. Sus derechos</h2>
            <p>De acuerdo con la normativa aplicable, usted tiene derecho a:</p>
            <ul className="mt-3 space-y-1 text-sm list-disc list-inside">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al tratamiento o solicitar su limitación</li>
              <li>Portabilidad de sus datos</li>
              <li>Retirar el consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-3 text-sm">
              Para ejercer sus derechos, envíenos un email a <a href="mailto:privacidad@limpidos.com" className="text-brand-600 hover:underline">privacidad@limpidos.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">7. Seguridad de los datos</h2>
            <p>
              Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos contra acceso no autorizado, pérdida, destrucción o divulgación. Nuestro sitio utiliza conexión HTTPS y los datos del formulario se transmiten de forma cifrada.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política periódicamente. Le notificaremos de cambios significativos por email o mediante aviso en el sitio web. Le recomendamos revisarla regularmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

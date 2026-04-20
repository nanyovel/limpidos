import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Limpidos',
  description: 'Información sobre el uso de cookies en el sitio web de Limpidos.',
  robots: { index: false },
}

export default function PoliticaCookiesPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="section-tag">Legal</span>
          <h1 className="section-title">Política de Cookies</h1>
          <p className="text-slate-400 text-sm mt-2">Última actualización: 1 de enero de 2024</p>
        </div>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Permiten que el sitio recuerde sus acciones y preferencias durante un periodo de tiempo, para que no tenga que volver a introducirlas cada vez que lo visite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">Cookies que utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-3 border border-slate-200 font-semibold text-brand-900">Tipo</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-brand-900">Nombre</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-brand-900">Propósito</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-brand-900">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Técnica', name: '_session', purpose: 'Mantiene la sesión del usuario activa', duration: 'Sesión' },
                    { type: 'Técnica', name: 'csrf_token', purpose: 'Seguridad del formulario de contacto', duration: 'Sesión' },
                    { type: 'Analítica', name: '_ga', purpose: 'Google Analytics — identifica usuarios únicos', duration: '2 años' },
                    { type: 'Analítica', name: '_gid', purpose: 'Google Analytics — distingue usuarios', duration: '24 horas' },
                    { type: 'Preferencias', name: 'cookie_consent', purpose: 'Recuerda su elección sobre cookies', duration: '1 año' },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-slate-50">
                      <td className="p-3 border border-slate-200">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          row.type === 'Técnica' ? 'bg-blue-100 text-blue-700' :
                          row.type === 'Analítica' ? 'bg-amber-100 text-amber-700' :
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="p-3 border border-slate-200 font-mono text-xs">{row.name}</td>
                      <td className="p-3 border border-slate-200 text-slate-500">{row.purpose}</td>
                      <td className="p-3 border border-slate-200 text-slate-500">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">Cookies técnicas (necesarias)</h2>
            <p>
              Son esenciales para el funcionamiento básico del sitio web. No pueden desactivarse ya que el sitio no funcionaría correctamente sin ellas. No recopilan información personal identificable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">Cookies analíticas</h2>
            <p>
              Utilizamos Google Analytics para entender cómo los visitantes interactúan con nuestro sitio. Esta información se usa de forma agregada y anónima para mejorar la experiencia de usuario. Puede optar por no ser rastreado visitando <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Analytics Opt-out</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">Cómo gestionar las cookies</h2>
            <p className="mb-3">
              Puede controlar y eliminar las cookies a través de la configuración de su navegador. A continuación le indicamos cómo hacerlo en los principales navegadores:
            </p>
            <ul className="space-y-2 text-sm list-disc list-inside">
              {[
                ['Google Chrome', 'Configuración → Privacidad y seguridad → Cookies'],
                ['Mozilla Firefox', 'Opciones → Privacidad y seguridad → Cookies'],
                ['Safari', 'Preferencias → Privacidad → Gestionar datos de sitios'],
                ['Microsoft Edge', 'Configuración → Privacidad, búsqueda y servicios'],
              ].map(([browser, path]) => (
                <li key={browser}>
                  <strong>{browser}:</strong> {path}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
              Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad de algunos elementos del sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-brand-900 mb-3">Contacto</h2>
            <p>
              Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en{' '}
              <a href="mailto:privacidad@limpidos.com" className="text-brand-600 hover:underline">
                privacidad@limpidos.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

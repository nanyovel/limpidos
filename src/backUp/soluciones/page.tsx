import type { Metadata } from 'next'
import Link from 'next/link'
import { SOLUTIONS } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Soluciones por Sector | Limpieza para Clínicas, Oficinas, Retail e Industrias',
  description:
    'Protocolos de limpieza especializados para cada sector: oficinas corporativas, clínicas y centros médicos, retail y comercios, industrias y plantas. Descubra cómo Limpidos resuelve los retos específicos de su empresa.',
  keywords: [
    'limpieza para oficinas corporativas',
    'limpieza clínicas médicas',
    'limpieza retail tiendas',
    'limpieza industrial plantas',
    'outsourcing limpieza por sector',
  ],
  alternates: { canonical: 'https://limpidos.com/soluciones' },
}

const sectorIcons: Record<string, React.ReactNode> = {
  briefcase: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  cross: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
  ),
  store: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
  ),
  cog: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
}

const sectorColors = [
  { bg: 'bg-brand-700', text: 'text-white', sub: 'text-brand-200', badge: 'bg-white/20 text-white', icon: 'bg-white/20 text-white' },
  { bg: 'bg-white border border-slate-200', text: 'text-brand-900', sub: 'text-slate-500', badge: 'bg-accent-50 text-accent-700', icon: 'bg-accent-50 text-accent-600' },
  { bg: 'bg-slate-900', text: 'text-white', sub: 'text-slate-400', badge: 'bg-white/10 text-slate-300', icon: 'bg-white/10 text-slate-300' },
  { bg: 'bg-white border border-slate-200', text: 'text-brand-900', sub: 'text-slate-500', badge: 'bg-brand-50 text-brand-700', icon: 'bg-brand-50 text-brand-600' },
]

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Por sector empresarial
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Soluciones de limpieza adaptadas<br className="hidden sm:block" /> a su sector
          </h1>
          <p className="text-xl text-brand-200 max-w-2xl mx-auto">
            Cada industria tiene desafíos únicos. Limpidos diseña protocolos específicos para las necesidades reales de su empresa, no soluciones genéricas.
          </p>
        </div>
      </section>

      {/* Sector cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SOLUTIONS.map((sol, i) => {
            const colors = sectorColors[i % sectorColors.length]
            return (
              <article
                key={sol.id}
                id={sol.id}
                className={`rounded-3xl overflow-hidden shadow-sm ${colors.bg}`}
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left: info */}
                  <div className="p-8 lg:p-12">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 ${colors.badge}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {sectorIcons[sol.icon]}
                      </svg>
                      {sol.sector}
                    </div>
                    <h2 className={`text-2xl lg:text-3xl font-display font-bold mb-4 leading-tight ${colors.text}`}>
                      {sol.title}
                    </h2>
                    <p className={`leading-relaxed mb-6 ${colors.sub}`}>
                      {sol.description}
                    </p>
                    <Link href="/contacto" className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 ${
                      i % 2 === 0 ? 'bg-white text-brand-700 hover:bg-slate-50 shadow' : 'btn-primary'
                    }`}>
                      Solicitar solución para mi empresa
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right: challenges + benefits */}
                  <div className={`p-8 lg:p-12 ${i % 2 === 0 ? 'bg-black/10' : 'bg-slate-50'} flex flex-col gap-8`}>
                    <div>
                      <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 ${i % 2 === 0 ? 'text-white/60' : 'text-slate-400'}`}>
                        Desafíos del sector
                      </h3>
                      <ul className="space-y-2">
                        {sol.challenges.map(c => (
                          <li key={c} className={`flex items-start gap-3 text-sm ${i % 2 === 0 ? 'text-white/80' : 'text-slate-600'}`}>
                            <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 ${i % 2 === 0 ? 'text-white/60' : 'text-slate-400'}`}>
                        Cómo lo resuelve Limpidos
                      </h3>
                      <ul className="space-y-2">
                        {sol.benefits.map(b => (
                          <li key={b} className={`flex items-start gap-3 text-sm ${i % 2 === 0 ? 'text-white/80' : 'text-slate-600'}`}>
                            <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Process strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Proceso simple</span>
            <h2 className="section-title">Cómo empezamos a trabajar juntos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Diagnóstico gratuito', desc: 'Analizamos sus instalaciones, necesidades y frecuencia de servicio requerida.' },
              { step: '02', title: 'Propuesta personalizada', desc: 'Le enviamos un presupuesto detallado con servicios, frecuencias y precios claros.' },
              { step: '03', title: 'Firma del contrato', desc: 'Formalizamos el acuerdo con condiciones transparentes y sin sorpresas.' },
              { step: '04', title: 'Inicio del servicio', desc: 'Asignamos su equipo fijo y comenzamos operaciones según el protocolo acordado.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-display font-bold text-brand-100 mb-3 leading-none">{item.step}</div>
                <h3 className="font-display font-semibold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Su sector no aparece en la lista?"
        description="Trabajamos con todo tipo de empresas. Contáctenos y diseñamos un protocolo a medida para sus instalaciones."
        primaryCTA="Consultar mi caso específico"
      />
    </>
  )
}

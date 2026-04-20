import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog | Recursos sobre Limpieza Empresarial, Outsourcing y Gestión Operativa',
  description:
    'Artículos especializados para directores y gerentes: outsourcing de limpieza, reducción de costos operativos, normativas de higiene y mejores prácticas para empresas.',
  keywords: [
    'blog limpieza empresarial',
    'outsourcing limpieza artículos',
    'reducir costos operativos empresa',
    'normativas higiene empresarial',
  ],
  alternates: { canonical: 'https://limpidos.com/blog' },
}

const CATEGORIES = ['Todos', 'Outsourcing', 'Gestión Empresarial', 'Normativas']

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categoryColors: Record<string, string> = {
  Outsourcing: 'bg-brand-100 text-brand-700',
  'Gestión Empresarial': 'bg-emerald-100 text-emerald-700',
  Normativas: 'bg-amber-100 text-amber-700',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Recursos para empresas
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Blog de Limpidos
          </h1>
          <p className="text-xl text-brand-200 max-w-2xl mx-auto">
            Insights, guías y análisis para directores y gerentes que quieren optimizar la gestión operativa de sus empresas.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter (static for SSR) */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === 'Todos'
                    ? 'bg-brand-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.slug}
                className={`group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Placeholder visual header */}
                <div className={`h-48 relative overflow-hidden ${
                  index === 0 ? 'gradient-brand' :
                  index === 1 ? 'bg-slate-900' :
                  'bg-brand-50'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      index === 0 ? 'bg-white/20 text-white' :
                      index === 1 ? 'bg-white/20 text-white' :
                      categoryColors[post.category] || 'bg-slate-100 text-slate-600'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime} de lectura</span>
                  </div>
                  <h2 className="font-display font-bold text-brand-900 text-lg leading-snug mb-3 group-hover:text-brand-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  >
                    Leer artículo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Lead magnet CTA */}
          <div className="mt-20 bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-display font-bold text-brand-900 mb-3">
              ¿Quiere recibir más contenido como este?
            </h3>
            <p className="text-slate-500 mb-6 max-w-xl mx-auto">
              Suscríbase y reciba guías exclusivas sobre gestión operativa, outsourcing y optimización de costos directamente en su email corporativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="su@empresa.com"
                className="input-field flex-1"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirme
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-3">Sin spam. Puede cancelar en cualquier momento.</p>
          </div>
        </div>
      </section>
    </>
  )
}

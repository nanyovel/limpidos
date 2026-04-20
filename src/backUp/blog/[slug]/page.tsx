import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, COMPANY } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    keywords: ['limpieza empresarial', 'outsourcing limpieza', post.category.toLowerCase()],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Limpidos'],
    },
    alternates: { canonical: `https://limpidos.com/blog/${post.slug}` },
  }
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-display font-bold text-brand-900 mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} className="my-8 border-slate-200" />)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-semibold text-brand-900 mb-3">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else {
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed mb-4">
          {line}
        </p>
      )
    }
    i++
  }
  return elements
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: COMPANY.name, url: 'https://limpidos.com' },
    publisher: { '@type': 'Organization', name: COMPANY.name },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-300 hover:text-white text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al blog
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-brand-300 text-sm">{formatDate(post.date)}</span>
            <span className="text-brand-400 text-sm">·</span>
            <span className="text-brand-300 text-sm">{post.readTime} de lectura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose-custom">
                <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-brand-500 pl-5 mb-8 italic">
                  {post.excerpt}
                </p>
                {post.content && renderMarkdown(post.content)}
              </div>

              {/* Author box */}
              <div className="mt-12 p-6 bg-brand-50 rounded-2xl border border-brand-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div>
                  <p className="font-semibold text-brand-900">Equipo Editorial Limpidos</p>
                  <p className="text-slate-500 text-sm">
                    Especialistas en outsourcing de limpieza empresarial con más de 12 años de experiencia en el sector B2B.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Box */}
              <div className="gradient-brand rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display font-bold text-lg mb-2">
                  ¿Le interesa este tema?
                </h3>
                <p className="text-brand-200 text-sm mb-4">
                  Nuestros asesores pueden analizar la situación específica de su empresa y presentarle una propuesta de ahorro personalizada.
                </p>
                <Link href="/contacto" className="btn-white w-full justify-center text-sm">
                  Solicitar asesoría gratuita
                </Link>
              </div>

              {/* Related posts */}
              {otherPosts.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold text-brand-900 mb-4">Artículos relacionados</h3>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all duration-200 group"
                      >
                        <span className="text-xs text-accent-600 font-semibold uppercase tracking-wide">
                          {p.category}
                        </span>
                        <p className="text-sm font-semibold text-brand-900 group-hover:text-brand-600 mt-1 leading-snug">
                          {p.title}
                        </p>
                        <span className="text-xs text-slate-400">{p.readTime} de lectura</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

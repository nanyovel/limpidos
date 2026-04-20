import { TESTIMONIALS } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Empresas que confían en nosotros</span>
          <h2 className="section-title mb-4">
            Lo que dicen nuestros clientes corporativos
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Empresas líderes en sus sectores ya optimizaron sus costos operativos con Limpidos. Estos son sus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl p-8 ${
                index === 0
                  ? 'gradient-brand text-white'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              <StarRating rating={testimonial.rating} />

              <blockquote
                className={`text-base leading-relaxed my-4 ${
                  index === 0 ? 'text-brand-100' : 'text-slate-600'
                }`}
              >
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0
                      ? 'bg-white/20 text-white'
                      : 'bg-brand-100 text-brand-700'
                  }`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      index === 0 ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs ${
                      index === 0 ? 'text-brand-200' : 'text-slate-400'
                    }`}
                  >
                    {testimonial.role} · {testimonial.company}
                  </p>
                  <span
                    className={`text-xs font-medium ${
                      index === 0 ? 'text-accent-400' : 'text-accent-600'
                    }`}
                  >
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

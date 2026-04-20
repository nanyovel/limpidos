import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen gradient-brand flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-display font-bold text-white/20 mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-brand-200 mb-8 max-w-md mx-auto">
          La página que busca no existe o ha sido movida. Le invitamos a explorar nuestros servicios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-white">Ir al inicio</Link>
          <Link href="/contacto" className="btn-secondary border-white/40 text-white hover:bg-white/10">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  )
}

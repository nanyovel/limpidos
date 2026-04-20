import Link from "next/link";
import { STATS } from "@/lib/data";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-brand">
        {/* Grid pattern */}

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Servicios de limpieza empresarial
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Limpieza empresarial profesional.
            </h1>

            <p className="text-xl text-brand-200 leading-relaxed mb-8 max-w-xl">
              Soluciones profesionales de conserjería empresarial para oficinas,
              industrias y comercios en la República Dominicana.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contacto" className="btn-white text-base px-8 py-4">
                Solicitar Cotización Gratuita
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="btn-secondary border-white/40 text-white hover:bg-white/10 hover:border-white text-base px-8 py-4"
              >
                Ver Servicios
              </Link>
            </div> */}
          </div>

          {/* Right: Stats card */}
          <div className="flex items-center justify-center border-white  w-25 min-h-32">
            <Image
              src="/womanCleaning.jpg"
              alt="Mujer limpiando"
              width={300}
              height={400}
              className="border border-white rounded-2xl animate-fade-slide-in delay-200"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[-1px] left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L1440 80L1440 30C1200 70 960 0 720 30C480 60 240 10 0 40L0 80Z"
            fill="hsl(0, 0%, 100%)"
          ></path>
        </svg>
      </div>
    </section>
  );
}

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
                Limpieza empresarial profesional.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Limpieza empresarial en República Dominicana
            </h1>

            <p className="text-xl text-brand-200 leading-relaxed mb-8 max-w-xl">
              Somos una empresa de limpieza, especializada en limpieza de
              oficinas, conserjería empresarial y entornos corporativos en Santo
              Domingo, Santiago, La Altagracia y todo el pais.
            </p>
          </div>

          {/* Right: Stats card */}
          <div className="flex items-center justify-center border-white  w-25 min-h-32">
            <Image
              src="/womanCleaning.jpg"
              alt="Personal profesional realizando limpieza de oficinas en República Dominicana"
              width={300}
              height={400}
              priority
              sizes="(max-width: 1024px) 280px, 300px"
              className="rounded-2xl border border-white animate-fade-slide-in delay-200"
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

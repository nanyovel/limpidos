import type { Metadata } from "next";
import Link from "next/link";
import { STATS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title:
    "Nosotros | Limpidos — Empresa de Limpieza Empresarial con 12+ Años de Experiencia",
  description:
    "Conozca a Limpidos: más de 12 años especializados en outsourcing de limpieza para empresas. Procesos certificados, personal profesional y una cultura de excelencia que se refleja en cada servicio.",
  alternates: { canonical: "https://limpidos.com/nosotros" },
};

const VALUES = [
  {
    title: "Excelencia operativa",
    description:
      "Cada servicio se ejecuta siguiendo protocolos documentados y revisados periódicamente. No improvisamos, ejecutamos con precisión.",
    icon: "★",
  },
  {
    title: "Confiabilidad total",
    description:
      "Presencia garantizada en cada visita programada. Nuestros clientes no se preocupan por ausencias, reemplazos ni incidencias.",
    icon: "⚑",
  },
  {
    title: "Responsabilidad patronal",
    description:
      "Asumimos la totalidad de las obligaciones laborales de nuestro equipo. Su empresa queda completamente desvinculada de la gestión del personal.",
    icon: "⚖",
  },
  {
    title: "Enfoque en el cliente",
    description:
      "Adaptamos cada servicio a las necesidades específicas de su empresa. Escuchamos, ajustamos y mejoramos continuamente para garantizar resultados que realmente aporten valor.",
    icon: "✔",
  },
  // {
  //   title: "Sostenibilidad",
  //   description:
  //     "Utilizamos productos ecológicos certificados y practicas responsables con el medioambiente. Limpiamos sin dañar.",
  //   icon: "♻",
  // },
];

const DIFFERENTIATORS = [
  {
    title: "Equipo fijo por empresa",
    description:
      "No rotamos el personal aleatoriamente. Asignamos un equipo fijo a cada cliente para garantizar conocimiento de las instalaciones, confianza y consistencia.",
  },
  {
    title: "Gestor de cuenta dedicado",
    description:
      "Cada empresa cliente tiene un punto de contacto único. Un profesional que conoce su negocio y coordina todo el servicio.",
  },
  {
    title: "Reportes digitales en tiempo real",
    description:
      "Acceda a reportes de cada visita, incidencias y control de calidad desde su dispositivo. Transparencia total en todo momento.",
  },
  // {
  //   title: "Respuesta de emergencia 24/7",
  //   description:
  //     "Derrames, incidentes, eventos de último momento. Nuestro equipo de soporte está disponible las 24 horas para atender urgencias.",
  // },
  // {
  //   title: "Certificaciones y protocolos",
  //   description:
  //     "Todo nuestro personal está certificado en seguridad, manejo de productos químicos y protocolos específicos por sector.",
  // },
  {
    title: "Garantía de satisfacción",
    description:
      "Si el resultado no cumple el estándar acordado, lo corregimos sin costo adicional y sin discusión. Su satisfacción es nuestro compromiso.",
  },
];

const TIMELINE = [
  {
    year: "2012",
    event: "Fundación de Limpidos con foco exclusivo en clientes corporativos",
  },
  {
    year: "2015",
    event: "Expansión a servicios industriales y post-construcción",
  },
  {
    year: "2018",
    event: "Implementación del sistema de reportes digitales en tiempo real",
  },
  {
    year: "2020",
    event:
      "Certificación en bioseguridad y adaptación a protocolos post-pandemia",
  },
  {
    year: "2022",
    event: "Superamos las 150 empresas cliente con contratos activos",
  },
  {
    year: "2024",
    event: "200+ empresas. Expansión a nuevos sectores y regiones",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Crect x='10' y='10' width='60' height='60' rx='4'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Quiénes somos
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Soluciones de limpieza profesional para empresas
              </h1>
              <p className="text-xl text-brand-200 leading-relaxed mb-8">
                Limpidos nace con una misión clara: liberar a las empresas de la
                carga operativa de la limpieza interna. Somos una empresa
                especializada en servicios B2B, enfocada exclusivamente en
                atender negocios que buscan mantener sus espacios en óptimas
                condiciones.
              </p>

              <p className="text-brand-300 leading-relaxed">
                Más que un proveedor, buscamos convertirnos en un aliado
                estratégico para nuestros clientes, ayudándolos a mantener
                entornos limpios, seguros y profesionales que reflejen el nivel
                de sus operaciones.
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-brand-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                label: "Misión",
                content:
                  "Liberamos a las empresas de la carga operativa de la limpieza interna, ofreciendo un servicio de outsourcing profesional que reduce costos, elimina preocupaciones y eleva los estándares de higiene a un nivel que el personal interno no puede alcanzar.",
              },
              {
                label: "Visión",
                content:
                  "Ser el aliado estratégico de referencia en limpieza empresarial en todo el pais, reconocidos por nuestra excelencia operativa, tecnología aplicada al servicio y el impacto real que generamos en la productividad de nuestros clientes.",
              },
              {
                label: "Propósito",
                content:
                  "Creemos que un entorno limpio y ordenado es una herramienta de productividad, no un gasto. Cada empresa merece instalaciones que reflejen sus valores y protejan la salud de su equipo. Eso es lo que construimos cada día.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l-4 border-brand-600 pl-6"
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-3">
                  {item.label}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Nuestros principios</span>
            <h2 className="section-title mb-4">
              Los valores que guían cada servicio
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-brand-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag">Por qué elegirnos</span>
              <h2 className="section-title mb-6">
                Lo que nos diferencia de cualquier otro proveedor
              </h2>
              <p className="section-subtitle mb-8">
                No somos una agencia de personal de limpieza. Somos un socio
                estratégico que gestiona todo el proceso: personas, equipos,
                protocolos, calidad y cumplimiento normativo.
              </p>
              <Link href="/contacto" className="btn-primary">
                Hablar con un asesor
              </Link>
            </div>
            <div className="space-y-5">
              {DIFFERENTIATORS.map((d) => (
                <div
                  key={d.title}
                  className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-900 text-sm mb-1">
                      {d.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Nuestra historia
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              12 años de crecimiento
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-700" />
            <div className="space-y-10">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-700 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 relative">
                    <span className="text-accent-400 font-display font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <CTASection
        title="Únase a las empresas que confían en Limpidos"
        description="Descubra cómo podemos transformar la gestión de limpieza de su empresa en un proceso simple, predecible y profesional."
      />
    </>
  );
}

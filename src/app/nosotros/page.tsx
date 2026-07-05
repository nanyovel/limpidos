import type { Metadata } from "next";
import Link from "next/link";
import { STATS } from "@/lib/data";
import { CTASection } from "@/components/sections/CTASection";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";

const SITE_URL = "https://limpidos.com";

export const metadata: Metadata = {
  // Sin "| Limpidos" incrustado a la mitad: el template del layout ya lo
  // agrega una sola vez al final. Antes esto duplicaba la marca en el <title>.
  title: `Nosotros — Empresa de Limpieza para Oficinas, Industrias y hogar en RD | Limpidos`,
  // Acortada a ~150 caracteres
  description: `Conozca a Limpidos: outsourcing de limpieza para empresas y el hogar en República Dominicana. Procesos certificados y personal profesional.`,
  alternates: { canonical: `${SITE_URL}/nosotros` },
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
  {
    title: "Garantía de satisfacción",
    description:
      "Si el resultado no cumple el estándar acordado, lo corregimos sin costo adicional y sin discusión. Su satisfacción es nuestro compromiso.",
  },
];

export default function NosotrosPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/nosotros`,
    name: "Nosotros — Limpidos",
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Crect x='10' y='10' width='60' height='60' rx='4'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} variant="light" />
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

      <CTASection
        title="Únase a las empresas que confían en Limpidos"
        description="Descubra cómo podemos transformar la gestión de limpieza de su empresa en un proceso simple, predecible y profesional."
      />
    </>
  );
}

import Link from "next/link";
import { COMPANY } from "@/lib/data";

const FOOTER_LINKS = {
  Servicios: [
    { href: "/servicios#oficinas", label: "Limpieza de Oficinas" },
    // { href: "/servicios#industrial", label: "Limpieza Industrial" },
    { href: "/servicios#post-construccion", label: "Post-Construcción" },
    // { href: "/servicios#mantenimiento", label: "Mantenimiento Continuo" },
  ],
  // Soluciones: [
  //   { href: "/soluciones#corporativas", label: "Oficinas Corporativas" },
  //   { href: "/soluciones#clinicas", label: "Clínicas y Salud" },
  //   { href: "/soluciones#retail", label: "Retail y Comercios" },
  //   { href: "/soluciones#industrias", label: "Industrias" },
  // ],
  Empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ],
  Legal: [
    { href: "/politica-privacidad", label: "Política de Privacidad" },
    { href: "/politica-cookies", label: "Política de Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      {/* CTA Band */}
      <div className="border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                ¿Listo para optimizar sus costos operativos?
              </h3>
              <p className="text-brand-300">
                Hable con un asesor y reciba una cotización personalizada sin
                compromiso.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contacto" className="btn-white">
                Solicitar Cotización
              </Link>
              <a
                href={`tel:${COMPANY.phoneLink}`}
                className="btn-secondary border-white text-white hover:bg-white hover:text-brand-700"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xl font-display font-bold">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-brand-300 text-sm leading-relaxed mb-4">
              Outsourcing especializado de limpieza para empresas. Garantizando
              estándares profesionales para organizaciones líderes.
            </p>
            <div className="space-y-2 text-sm text-brand-300">
              <p>{COMPANY.phone}</p>
              <p>{COMPANY.email}</p>
              <p className="text-xs">{COMPANY.address}</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-800 pt-8 flex flex-col sm:flex-row items-center justify-around gap-4">
          <p className="text-brand-400 text-sm">
            © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={COMPANY.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={COMPANY.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

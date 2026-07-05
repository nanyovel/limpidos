"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/data";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  // { href: "/soluciones", label: "Soluciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

// Rutas que SIEMPRE deben tener el header sólido (fondo blanco/azul, sin transparencia)
// Usa coincidencia por prefijo, así "/legal/privacidad" también matchea si empieza con "/legal"
const SOLID_HEADER_ROUTES = [
  "/politica-privacidad",
  "/politica-cookies",
  "/aviso-legal", // faltaba: misma página blanca que las otras dos legales
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const forceSolid = SOLID_HEADER_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // evalúa el estado inicial al cambiar de ruta
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isSolid = forceSolid || scrolled;

  // La barra de contacto móvil solo se muestra mientras no se ha hecho scroll,
  // así el header vuelve a su altura normal al bajar y no descuadra elementos
  // "sticky" de otras páginas (como el quick-nav de /servicios).
  const showMobileContactBar = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent border-b"
      }`}
    >
      {/* Barra de contacto — solo móvil/tablet, oculta en desktop (ya se ve en el CTA) */}
      {showMobileContactBar && (
        <div
          className={`lg:hidden border-b transition-colors ${
            isSolid
              ? "bg-slate-50 border-slate-100"
              : "bg-black/10 border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 py-1.5">
            <a
              href={`tel:${COMPANY.phoneLink}`}
              className={`flex items-center gap-1.5 text-xs font-medium ${
                isSolid ? "text-slate-600" : "text-white/90"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {COMPANY.phone}
            </a>
            <span className={isSolid ? "text-slate-300" : "text-white/30"}>
              |
            </span>
            <a
              href={`mailto:${COMPANY.email}`}
              className={`flex items-center gap-1.5 text-xs font-medium ${
                isSolid ? "text-slate-600" : "text-white/90"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-10 5L2 7"></path>
              </svg>
              {COMPANY.email}
            </a>
          </div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center  transition-colors">
              <Image
                src={"/logo.svg"}
                alt={COMPANY.name}
                width={32}
                height={32}
              />
            </div>
            <span
              className={`text-xl font-display font-regular transition-colors ${
                isSolid ? "text-[#176acf]" : "text-white"
              }`}
            >
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isSolid
                    ? "text-slate-600 hover:text-brand-700 hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="flex gap-2 items-center">
              <Link
                href={`tel:${COMPANY.phoneLink}`}
                className={`flex items-center gap-2 text-sm font-medium  p-2 rounded text-foreground  ${
                  isSolid
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-phone h-4 w-4 `}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p>{COMPANY.phone}</p>
              </Link>
              <Link
                href={`mailto:${COMPANY.email}`}
                className={`flex items-center gap-2 text-sm font-medium  p-2 rounded text-foreground  ${
                  isSolid
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-10 5L2 7"></path>
                </svg>
                <p>{COMPANY.email}</p>
              </Link>
              <Link href="/contacto" className="btn-primary text-sm">
                Cotizar ahora
                <svg
                  className="w-4 h-4"
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
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isSolid
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl rounded-b-2xl">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

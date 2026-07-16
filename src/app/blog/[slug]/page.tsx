import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog/BLOG_POSTS";
import {
  Breadcrumbs,
  buildBreadcrumbJsonLd,
} from "@/components/ui/Breadcrumbs";
import { CTAService } from "@/components/sections/CTAService";

const SITE_URL = "https://limpidos.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/imagenREDE_OG.jpg`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  // Si el post no tiene imagen propia, usamos el banner de marca como respaldo
  // en vez de dejar la vista previa de redes sociales sin imagen.
  const absoluteImage = post.image
    ? `${SITE_URL}${post.image}`
    : DEFAULT_OG_IMAGE;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,

    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      siteName: COMPANY.name,
      locale: "es_DO",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: ["Limpidos"],
      section: post.category,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [absoluteImage],
    },
  };
}

/**
 * Convierte el contenido en formato markdown simplificado a elementos JSX.
 * Soporta: encabezados (##), separadores (---), texto en negrita como línea
 * completa (**texto**), listas no ordenadas (- item) y listas ordenadas (1. item).
 */
function renderInline(text: string) {
  // Divide por negritas (**texto**) y URLs sueltas, sin perder el resto del texto
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g);

  return parts.map((part, idx) => {
    if (!part) return null;

    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      // Si dentro de la negrita hay una URL (ej. **https://...**), la volvemos link
      if (/^https?:\/\//.test(inner)) {
        return (
          <a
            key={idx}
            href={inner}
            className="font-semibold text-brand-700 underline hover:text-brand-900"
          >
            {inner}
          </a>
        );
      }
      return <strong key={idx}>{inner}</strong>;
    }

    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          className="text-brand-700 underline hover:text-brand-900"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}
function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("[[h2b:")) {
      const match = line.match(/^\[\[h2b:\s*(.+?)\]\]$/);
      if (match) {
        elements.push(
          <h2
            key={i}
            className="text-2xl font-display font-bold text-accent-600 mt-10 mb-4"
          >
            {match[1]}
          </h2>,
        );
        i++;
        continue;
      }
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-display font-bold text-brand-900 mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>,
      );
      i++;
      continue;
    }

    // HR
    if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-8 border-slate-200" />);
      i++;
      continue;
    }

    // P
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-brand-900 mb-3">
          {line.replace(/\*\*/g, "")}
        </p>,
      );
      i++;
      continue;
    }

    // UL / LI
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace(/^- /, ""));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          className="list-disc pl-5 space-y-2 mb-4 text-slate-600"
        >
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>,
      );
      continue;
    }
    //  H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-base font-display font-bold uppercase tracking-wide text-accent-600 mt-8 mb-2"
        >
          {line.replace("### ", "")}
        </h3>,
      );
      i++;
      continue;
    }

    // blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        // quita el "> " (o ">" solo, para líneas vacías dentro del blockquote)
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="border-l-4 border-accent-500 bg-brand-50 rounded-r-lg pl-5 pr-4 py-4 my-6 text-brand-900"
        >
          {quoteLines
            .filter((l) => l.length > 0)
            .map((l, idx) => {
              // Soporta **negrita** dentro del blockquote
              const parts = l.split(/(\*\*[^*]+\*\*)/g);
              return (
                // Anterior
                // <p key={idx} className="leading-relaxed mb-2 last:mb-0">
                //   {parts.map((part, pIdx) =>
                //     part.startsWith("**") && part.endsWith("**") ? (
                //       <strong key={pIdx}>{part.replace(/\*\*/g, "")}</strong>
                //     ) : (
                //       part
                //     ),
                //   )}
                // </p>

                // Recomendado por claude
                <p key={idx} className="leading-relaxed mb-2 last:mb-0">
                  {renderInline(l)}
                </p>
              );
            })}
        </blockquote>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={`ol-${i}`}
          className="list-decimal pl-5 space-y-2 mb-4 text-slate-600"
        >
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    // Marca especial: [[cta]] o [[cta: Título personalizado | Descripción personalizada]]
    if (line.startsWith("[[cta")) {
      const match = line.match(/^\[\[cta(?::\s*(.+?)\s*\|\s*(.+?))?\]\]$/);
      elements.push(
        <CTAService
          key={`cta-${i}`}
          title={match?.[1]}
          description={match?.[2]}
        />,
      );
      i++;
      continue;
    }

    elements.push(
      <p key={i} className="text-slate-600 leading-relaxed mb-4">
        {renderInline(line)}
      </p>,
    );
    i++;
  }

  return elements;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems, SITE_URL);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: post.image ? `${SITE_URL}${post.image}` : DEFAULT_OG_IMAGE,
    // Referencian la MISMA entidad declarada una vez en el layout,
    // en vez de redefinir la organización en cada post.
    author: { "@id": `${SITE_URL}/#business` },
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="gradient-brand pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} variant="light" />
          <div className="mb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-300 hover:text-white text-sm transition-colors"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver al blog
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-brand-300 text-sm">
              {formatDate(post.date)}
            </span>
            <span className="text-brand-400 text-sm">·</span>
            <span className="text-brand-300 text-sm">
              {post.readTime} de lectura
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured image - flota sobre el hero */}
      {post.image && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="pt-10 pb-16 bg-white">
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
              {/* <div className="mt-12 p-6 bg-brand-50 rounded-2xl border border-brand-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div>
                  <p className="font-semibold text-brand-900">
                    Equipo Editorial Limpidos
                  </p>
                  <p className="text-slate-500 text-sm">
                    Especialistas en outsourcing de limpieza empresarial con más
                    de 5 años de experiencia en el sector B2B.
                  </p>
                </div>
              </div> */}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Box */}
              <div className="gradient-brand rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display font-bold text-lg mb-2">
                  ¿Le interesa este tema?
                </h3>
                <p className="text-brand-200 text-sm mb-4">
                  Nuestros asesores pueden analizar la situación específica de
                  su empresa y presentarle una propuesta de ahorro
                  personalizada.
                </p>
                <Link
                  href="/contacto"
                  className="btn-white w-full justify-center text-sm"
                >
                  Solicitar asesoría gratuita
                </Link>
              </div>

              {/* Related posts */}
              {otherPosts.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold text-brand-900 mb-4">
                    Artículos relacionados
                  </h3>
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
                        <span className="text-xs text-slate-400">
                          {p.readTime} de lectura
                        </span>
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
  );
}

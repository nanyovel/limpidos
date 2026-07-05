import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog/BLOG_POSTS";

const baseUrl = "https://limpidos.com";

// Fecha de la última actualización real de contenido/SEO en las páginas estáticas.
// Actualiza este valor a mano SOLO cuando vuelvas a editar contenido de esas
// páginas. No uses `new Date()` dinámico: eso le dice a Google "esto cambió
// hoy" en cada deploy aunque no haya cambiado nada, y con el tiempo Google
// empieza a desconfiar de esa señal en tu sitemap.
const LAST_UPDATED = "2026-07-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/limpieza-de-oficinas`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/limpieza-de-hogar`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // {
    //   url: `${baseUrl}/soluciones`,
    //   lastModified: LAST_UPDATED,
    //   changeFrequency: "monthly",
    //   priority: 0.9,
    // },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Generado automáticamente desde BLOG_POSTS: cada post nuevo que agregues
  // aparece aquí solo, sin tener que tocar este archivo.
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

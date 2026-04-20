import type { Service, BlogPost, Testimonial, Solution } from "@/types";

export const COMPANY = {
  name: "Limpidos",
  tagline: "Limpieza Empresarial Profesional",
  description:
    "Outsourcing especializado de servicios de limpieza para empresas, oficinas, industrias y comercios.",
  phone: "(849) 341-9890",
  phoneLink: "18493419890",
  email: "ventas@limpidos.com",
  address:
    "Av. Sarasota esquina Av. Enrique Jimenez Moya, Plaza Universitaria, ala Oeste, Segundo Nivel, Santo Domingo, RD",
  social: {
    linkedin: "https://www.linkedin.com/in/limpidos/",
    instagram: "https://www.instagram.com/limpidossrl/",
    facebook: "https://www.facebook.com/limpidossrl",
  },
};

export const SERVICES: Service[] = [
  {
    id: "oficinas",
    title: "Limpieza de Oficinas",
    description:
      "Mantenemos sus espacios corporativos impecables para que su equipo trabaje en un entorno productivo, saludable y profesional.",
    benefits: [
      "Servicio diario, semanal o personalizado",
      "Personal capacitado y confiable",
      "Productos certificados ecológicos",
      "Supervisión y control de calidad",
      "Sin interrupciones operativas",
    ],
    icon: "building",
  },
  // {
  //   id: "industrial",
  //   title: "Limpieza Industrial",
  //   description:
  //     "Soluciones de limpieza profunda para plantas, almacenes y espacios industriales con equipamiento especializado y personal técnico certificado.",
  //   benefits: [
  //     "Equipos industriales de alta potencia",
  //     "Protocolos de seguridad estrictos",
  //     "Cumplimiento de normativas OSHA",
  //     "Limpieza de maquinaria y estructuras",
  //     "Disponibilidad 24/7",
  //   ],
  //   icon: "factory",
  // },
  {
    id: "post-construccion",
    title: "Limpieza Post-Construcción",
    description:
      "Dejamos sus instalaciones listas para operar después de obras, remodelaciones o nuevas construcciones, eliminando polvo, residuos y materiales.",
    benefits: [
      "Eliminación completa de escombros finos",
      "Limpieza de vidrios y superficies",
      "Preparación para apertura inmediata",
      "Equipo especializado con EPP",
      "Servicio en una sola visita o etapas",
    ],
    icon: "hammer",
  },
  // {
  //   id: "mantenimiento",
  //   title: "Mantenimiento Continuo",
  //   description:
  //     "Contratos de mantenimiento a largo plazo que garantizan estándares de higiene constantes sin preocupaciones de gestión de personal.",
  //   benefits: [
  //     "Contratos mensuales, trimestrales o anuales",
  //     "Gestor de cuenta dedicado",
  //     "Reportes de servicio digitales",
  //     "Protocolos de higiene documentados",
  //     "Garantía de satisfacción 100%",
  //   ],
  //   icon: "calendar",
  // },
];

export const SOLUTIONS: Solution[] = [
  {
    id: "corporativas",
    sector: "Oficinas Corporativas",
    title: "Entornos de trabajo impecables que potencian la productividad",
    description:
      "Las oficinas corporativas requieren un estándar de limpieza que refleje la imagen de su empresa. Un espacio limpio y ordenado impacta directamente en la productividad del equipo y la percepción de clientes y socios.",
    challenges: [
      "Alto flujo de personas y zonas de contacto frecuente",
      "Necesidad de discreción y confidencialidad",
      "Limpieza fuera de horario laboral",
      "Múltiples áreas con necesidades distintas",
    ],
    benefits: [
      "Personal con verificación de antecedentes",
      "Servicio nocturno o en fin de semana",
      "Protocolo específico por área (salas, cocinas, baños)",
      "Reducción del ausentismo por enfermedades",
    ],
    icon: "briefcase",
  },
  {
    id: "clinicas",
    sector: "Clínicas y Centros Médicos",
    title: "Higiene clínica que protege pacientes y cumple normativas",
    description:
      "Los centros médicos exigen protocolos de desinfección que van más allá de la limpieza convencional. La salud de pacientes y personal depende de estándares de higiene rigurosos y certificados.",
    challenges: [
      "Riesgo de contaminación cruzada",
      "Normativas sanitarias estrictas",
      "Residuos de tipo especial",
      "Limpieza continua durante operación",
    ],
    benefits: [
      "Personal certificado en bioseguridad",
      "Productos hospitalarios homologados",
      "Cumplimiento de normas sanitarias nacionales",
      "Documentación para auditorías",
    ],
    icon: "cross",
  },
  {
    id: "retail",
    title: "Espacios comerciales que enamoran a sus clientes",
    sector: "Retail y Comercios",
    description:
      "La limpieza en el punto de venta es parte de la experiencia del cliente. Un comercio impecable comunica calidad, confianza y profesionalismo, y se traduce directamente en mayores ventas.",
    challenges: [
      "Operación continua sin interrupciones",
      "Pisos, vitrinas y mostradores de alto tráfico",
      "Limpieza rápida ante incidentes",
      "Zonas de carga, bodega y almacén",
    ],
    benefits: [
      "Limpieza programada en horarios de menor tráfico",
      "Respuesta rápida ante emergencias",
      "Mantenimiento de vitrinas y escaparates",
      "Mejora de la experiencia de compra",
    ],
    icon: "store",
  },
  {
    id: "industrias",
    sector: "Industrias y Plantas",
    title: "Higiene industrial que protege a su personal y su producción",
    description:
      "Los entornos industriales presentan retos únicos: grasa, químicos, polvo industrial y maquinaria pesada. Nuestro equipo especializado garantiza limpiezas profundas que cumplen con normativas laborales y de seguridad.",
    challenges: [
      "Residuos industriales y grasa acumulada",
      "Equipos y maquinaria de difícil acceso",
      "Normativas de seguridad laboral estrictas",
      "Necesidad de paradas programadas",
    ],
    benefits: [
      "Equipamiento industrial especializado",
      "Personal con certificación en seguridad industrial",
      "Gestión responsable de residuos",
      "Coordinación con su departamento de mantenimiento",
    ],
    icon: "cog",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Méndez",
    role: "Director de Operaciones",
    company: "Grupo Financiero Meridian",
    industry: "Servicios Financieros",
    content:
      "Desde que contratamos Limpidos, eliminamos por completo la carga administrativa de gestionar personal de limpieza interno. Ahora pagamos una tarifa fija mensual y nos olvidamos del tema. El ahorro en costos ocultos fue del 35%.",
    rating: 5,
  },
  {
    name: "Ana Patricia Guerrero",
    role: "Gerente de Facilities",
    company: "Torre Empresarial Norte",
    industry: "Bienes Raíces Corporativos",
    content:
      "Tenemos 12 pisos de oficinas con más de 800 colaboradores. Limpidos asigna un equipo fijo que ya conoce nuestras instalaciones a la perfección. La calidad es consistente y el reporte semanal digital nos da visibilidad total.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "CEO",
    company: "Clínica San Rafael",
    industry: "Salud",
    content:
      "Los estándares de bioseguridad de Limpidos superaron nuestras expectativas. Pasamos auditorías sanitarias sin observaciones por primera vez en años. Su personal conoce los protocolos hospitalarios y eso marca una diferencia enorme.",
    rating: 5,
  },
  {
    name: "María Fernanda López",
    role: "Directora de Tiendas",
    company: "Moda Express RD",
    industry: "Retail",
    content:
      "Limpidos nos da cobertura en 8 tiendas con un solo contrato. Ya no tenemos que contratar, capacitar ni gestionar personal en cada local. Simplemente funciona, y nuestros clientes lo notan en el estado de nuestras tiendas.",
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "beneficios-outsourcing-limpieza-empresarial",
    title: "7 Beneficios Clave del Outsourcing de Limpieza para su Empresa",
    excerpt:
      "Descubra cómo tercerizar la limpieza reduce costos ocultos, elimina la carga administrativa y garantiza estándares profesionales que el personal interno no puede alcanzar.",
    date: "2024-03-15",
    readTime: "6 min",
    category: "Outsourcing",
    content: `
El outsourcing de servicios de limpieza es una de las decisiones de gestión más inteligentes que puede tomar una empresa moderna. Más allá de la percepción inicial de que "es solo limpieza", la realidad es que externalizar este servicio tiene un impacto directo en la rentabilidad, la productividad y la imagen corporativa.

## 1. Reducción real de costos operativos

Cuando una empresa contrata personal de limpieza interno, el costo visible (el salario) es solo la punta del iceberg. Los costos ocultos incluyen cargas sociales y beneficios de ley, gestión de vacaciones y ausencias, capacitación continua, compra y mantenimiento de equipos, gestión de productos y suministros, y supervisión del desempeño.

Con Limpidos, paga una tarifa mensual fija y predecible. Sin sorpresas, sin costos variables, sin horas extras.

## 2. Elimina la carga administrativa de RRHH

Gestionar personal de limpieza consume tiempo de sus líderes de Recursos Humanos: contratos, nóminas, bajas médicas, reemplazos, conflictos laborales. Al tercerizar, toda esa carga desaparece. Limpidos asume la responsabilidad patronal completa.

## 3. Personal especializado y capacitado

Nuestro equipo no es personal general: son especialistas en limpieza profesional con formación continua en técnicas, productos y protocolos de seguridad. La diferencia en resultados es inmediata y visible.

## 4. Tecnología y equipos industriales

Las empresas de limpieza profesionales invierten en equipos especializados que una empresa no justifica adquirir para uso interno: aspiradoras industriales, fregadoras automáticas, equipos de presión, desinfectantes certificados.

## 5. Flexibilidad y escalabilidad

¿Abrieron una nueva sede? ¿Necesitan limpieza extra antes de una auditoría? Con un proveedor externo, adaptar el servicio es cuestión de una llamada. Sin procesos de contratación, sin demoras.

## 6. Cumplimiento normativo garantizado

Limpidos se mantiene actualizado en todas las normativas de higiene, seguridad laboral y medioambientales. Su empresa queda cubierta ante cualquier inspección o auditoría sin esfuerzo adicional de su parte.

## 7. Enfoque en su core business

El tiempo y la energía que dedica a gestionar limpieza puede reinvertirse en lo que realmente genera valor para su empresa. El outsourcing le devuelve ese recurso más valioso: el tiempo de sus líderes.

---

**¿Listo para calcular cuánto puede ahorrar su empresa?** Solicite una cotización gratuita y nuestros asesores le presentarán un análisis comparativo personalizado.
    `,
  },
  {
    slug: "como-reducir-costos-operativos-empresa",
    title:
      "Cómo Reducir Costos Operativos sin Sacrificar Calidad: La Guía para Directores",
    excerpt:
      "La limpieza es uno de los costos operativos más optimizables. Le mostramos un marco práctico para analizar, comparar y decidir entre personal interno vs. outsourcing.",
    date: "2024-02-28",
    readTime: "8 min",
    category: "Gestión Empresarial",
    content: `
Reducir costos operativos sin comprometer la calidad es el reto permanente de todo director de operaciones. Una de las áreas con mayor potencial de optimización —y frecuentemente subestimada— es la gestión de servicios de soporte, especialmente la limpieza.

## El verdadero costo del personal de limpieza interno

Muchos directores calculan el costo de la limpieza interna solo por el salario del trabajador. Pero el Costo Total de Empleado (CTE) es significativamente mayor...

## El modelo de outsourcing: costos previsibles

Al contratar un servicio de limpieza profesional como Limpidos, el modelo cambia completamente. Tiene un costo fijo mensual que incluye absolutamente todo: personal, supervisión, productos, equipos, seguros y reemplazos.

## Cómo hacer el análisis en su empresa

Siga este proceso para calcular el potencial de ahorro en su organización:

1. Levante el costo total actual (CTE de cada empleado de limpieza)
2. Sume los costos indirectos (administración, espacio, equipos)
3. Solicite cotizaciones a proveedores especializados
4. Compare no solo el costo, sino el estándar de calidad esperado
5. Calcule el ROI a 12 meses

En la mayoría de los casos, el outsourcing resulta entre un 20% y 40% más económico considerando todos los factores.
    `,
  },
  {
    slug: "normativas-higiene-empresarial-cumplimiento",
    title:
      "Normativas de Higiene Empresarial: Lo que su Empresa Debe Cumplir en 2024",
    excerpt:
      "Una guía completa sobre las regulaciones de higiene y saneamiento que aplican a empresas, oficinas e industrias, y cómo garantizar el cumplimiento sin complicaciones.",
    date: "2024-01-20",
    readTime: "7 min",
    category: "Normativas",
    content: `
El incumplimiento de normativas de higiene puede resultar en multas, cierres temporales, daños reputacionales e incluso responsabilidades legales. Conocer qué exige la ley y cómo cumplirlo es fundamental para cualquier empresa responsable.

## Marco normativo general

Las empresas están sujetas a diversas regulaciones dependiendo de su sector, tamaño y actividad. En términos de higiene y saneamiento, las principales normativas involucran el Código de Trabajo (condiciones de trabajo saludables), Ley de Salud Pública, Reglamentos sectoriales (especialmente en salud, alimentos e industria), y Normas OSHA adaptadas localmente.

## Qué exigen las inspecciones

Durante una inspección, los auditores verifican frecuencia y registros de limpieza, disponibilidad de productos de higiene, estado de sanitarios y áreas comunes, manejo de residuos, y capacitación del personal en higiene.

## Cómo Limpidos le garantiza el cumplimiento

Nuestros servicios incluyen documentación completa para auditorías: registros de frecuencia de limpieza, fichas técnicas de productos utilizados, certificaciones del personal, y protocolos escritos por área. Su empresa siempre estará lista para cualquier inspección.
    `,
  },
];

export const STATS = [
  { value: "200+", label: "Empresas atendidas" },
  { value: "98%", label: "Tasa de renovación de contratos" },
  { value: "12+", label: "Años de experiencia" },
  { value: "500+", label: "Profesionales en planilla" },
];

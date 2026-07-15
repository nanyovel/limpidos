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
    // "Av. Sarasota esquina Av. Enrique Jimenez Moya, Plaza Universitaria, ala Oeste, Segundo Nivel, Santo Domingo, RD",
    "Av. Sarasota esquina Av. Enrique Jimenez Moya, La Julia, Plaza Universitaria, ala Oeste, Segundo Nivel, Santo Domingo",
  social: {
    linkedin: "https://www.linkedin.com/company/limpidos/",
    instagram: "https://www.instagram.com/limpidossrl/",
    facebook: "https://www.facebook.com/limpidossrl",
    x: "https://x.com/Limpidossrl",
  },
};

export const SERVICES: Service[] = [
  {
    id: "oficinas",
    title: "Limpieza de Oficinas",
    description:
      "Somos una empresas de limpieza que ofrece un completo servicio de limpieza para oficinas, comercios y proyectos de construcción. Como compañía de limpieza especializada, brindamos soluciones de aseo adaptadas a cada cliente, desde la limpieza de obra hasta el mantenimiento diario de oficinas. Si busca empresas de aseo o una empresa de limpieza confiable, nuestro equipo garantiza espacios limpios, seguros y con una imagen profesional.",
    benefits: [
      "Servicio continuo o por proyecto",
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
    id: "hogar",
    title: "Limpieza de Hogar",
    description:
      "Servicios de limpieza residencial para mantener su hogar impecable y saludable.",
    benefits: [
      "Personal capacitado y confiable",
      "Productos seguros para el hogar",
      "Limpieza completa de todas las áreas",
      "Flexibilidad en programación",
      "Garantía de satisfacción 100%",
    ],
    icon: "home",
  },
  // {
  //   id: "post-construccion",
  //   title: "Limpieza Post-Construcción",
  //   description:
  //     "Dejamos sus instalaciones listas para operar después de obras, remodelaciones o nuevas construcciones, eliminando polvo, residuos y materiales.",
  //   benefits: [
  //     "Eliminación completa de escombros finos",
  //     "Limpieza de vidrios y superficies",
  //     "Preparación para apertura inmediata",
  //     "Equipo especializado con EPP",
  //     "Servicio en una sola visita o etapas",
  //   ],
  //   icon: "hammer",
  // },
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

export const STATS = [
  { value: "200+", label: "Empresas atendidas" },
  { value: "98%", label: "Tasa de renovación de contratos" },
  { value: "12+", label: "Años de experiencia" },
  { value: "500+", label: "Profesionales en planilla" },
];

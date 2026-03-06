export const SITE_NAME = "Payrolling Tech";
export const DEFAULT_OG_IMAGE_PATH = "/img/website/website.jpg";

export type SeoDefinition = {
  title: string;
  description: string;
  keywords: string[];
};

export const SEO: Record<string, SeoDefinition> = {
  home: {
    title:
      "Reclutamiento Especializado y Payrolling en México | Payrolling Tech",
    description:
      "Líderes en reclutamiento especializado y selección de personal para empresas en México. Soluciones de payrolling, maquila de nómina y cumplimiento REPSE para PYMEs.",
    keywords: [
      "reclutamiento y selección de personal México",
      "servicio de reclutamiento especializado",
      "payrolling y reclutamiento México",
      "atracción de talento México",
      "maquila de nómina México",
      "outsourcing de nómina México",
      "consultoría en reclutamiento corporativo",
      "cumplimiento REPSE nómina",
      "gestión de capital humano México",
      "headhunting para empresas México",
      "timbrado de nómina CFDI 4.0",
      "soluciones RH para PYMEs",
      "administración de talento y nómina",
      "empresa de reclutamiento con REPSE",
      "reformas laborales México 2025",
    ],
  },

  serviciosIntegrales: {
    title: "Soluciones Integrales de RRHH y Payrolling | Payrolling Tech",
    description:
      "Integra nómina, reclutamiento y beneficios en una sola plataforma con cumplimiento legal total (REPSE, SAT, IMSS). Eficiencia y control para tu empresa en México.",
    keywords: [
      "soluciones integrales de recursos humanos",
      "administración de nómina con REPSE",
      "gestión integral de talento",
      "plataforma RRHH México",
      "cumplimiento normativo laboral",
      "outsourcing especializado México",
      "servicios especializados REPSE",
    ],
  },

  nominas: {
    title: "Maquila y Outsourcing de Nómina en México | Payrolling Tech",
    description:
      "Servicio profesional de maquila de nómina: cálculo exacto, timbrado CFDI 4.0, cumplimiento IMSS, INFONAVIT e ISN. Automatiza tu administración con expertos.",
    keywords: [
      "maquila de nómina México",
      "outsourcing de nómina legal",
      "cálculo de nómina y timbrado",
      "timbrado CFDI 4.0 nómina",
      "administración de nómina y IMSS",
      "procesamiento de nómina para empresas",
      "contabilidad de nómina México",
      "gestión de dispersión de nómina",
    ],
  },



  reclutamiento: {
    title: "Reclutamiento y Selección de Personal Especializado | Payrolling Tech",
    description:
      "Atraemos el talento ideal para tu empresa. Procesos de reclutamiento eficientes para PYMEs en México con métricas de desempeño y soporte especializado.",
    keywords: [
      "reclutamiento y selección de personal",
      "agencia de reclutamiento México",
      "headhunting para empresas México",
      "atracción de talento especializado",
      "cobertura de vacantes PYMEs",
      "consultoría en selección de personal",
      "procesos de reclutamiento digital",
      "reclutamiento de personal para empresas",
      "reclutamiento especializado México",
      "reclutamiento masivo México",
      "reclutamiento operativo México",
      "reclutamiento administrativo México",
      "reclutamiento perfiles TI México",
      "reclutamiento de ingenieros México",
      "reclutamiento de ventas México",
      "reclutamiento de gerentes México",
      "reclutamiento de ejecutivos México",
      "búsqueda de talento México",
      "selección de candidatos por competencias",
      "evaluación psicométrica para reclutamiento",
      "pruebas psicométricas laborales México",
      "filtro curricular y entrevistas",
      "entrevistas por competencias",
      "estudios socioeconómicos laborales México",
      "verificación de referencias laborales",
      "outsourcing de reclutamiento RPO México",
      "RPO reclutamiento y selección",
      "reclutamiento para PYMEs en México",
      "agencia de headhunting en México",
      "reclutamiento urgente de personal",
      "cierre de vacantes rápido",
      "bolsa de trabajo y reclutamiento empresarial",
      "soluciones de reclutamiento empresarial",
      "talento calificado para empresas",
      "reclutamiento nacional México",

      "payrolling",
      "payrolling tech",
      "payrolling-tech",
      "payrolling México",
      "payrolling tech México",
      "payrolling tech reclutamiento",
      "payrolling tech recursos humanos",
      "payrolling tech selección de personal",
      "payrolling-tech reclutamiento y selección",
      "servicios de payrolling tech",
    ],
  },


  beneficios: {
    title: "Beneficios para Empleados y Retención de Talento | Payrolling Tech",
    description:
      "Programas de beneficios corporativos: seguros, prestaciones superiores y bienestar. Impulsa la productividad y lealtad de tus colaboradores en México.",
    keywords: [
      "beneficios para empleados México",
      "prestaciones superiores a la ley",
      "retención de talento humano",
      "seguros de vida para empleados",
      "seguro de gastos médicos mayores colectivo",
      "bienestar corporativo México",
      "salario emocional para empresas",
      "planes de beneficios PYMEs",
    ],
  },

  vales: {
    title: "Vales de Despensa y Prestaciones Deducibles | Payrolling Tech",
    description:
      "Optimiza la carga fiscal y mejora el poder adquisitivo de tus empleados con vales de despensa, gasolina e incentivos. 100% deducibles y seguros.",
    keywords: [
      "vales de despensa para empresas",
      "vales deducibles de impuestos",
      "prestaciones en vales México",
      "monederos electrónicos de despensa",
      "vales de gasolina corporativos",
      "incentivos para empleados con vales",
      "estrategia de optimización fiscal nómina",
    ],
  },

  valesDespensa: {
    title: "Vales de Despensa Deducibles para Empresas | Payrolling Tech",
    description:
      "Implementa vales de despensa como prestación laboral. Reduce costos sociales, mejora el clima organizacional y maximiza beneficios fiscales para tu empresa.",
    keywords: [
      "proveedores de vales de despensa México",
      "vales de despensa deducibles SAT",
      "beneficios fiscales vales de despensa",
      "tarjetas de despensa para empleados",
      "monedero electrónico autorizado SAT",
    ],
  },

  valesGasolina: {
    title: "Control de Combustible y Vales de Gasolina | Payrolling Tech",
    description:
      "Gestiona el gasto de combustible de tu flota o empleados. Vales de gasolina con reportes detallados y deducibilidad total para empresas en México.",
    keywords: [
      "vales de gasolina para empresas",
      "control de combustible corporativo",
      "monedero de gasolina deducible",
      "gestión de movilidad empresarial",
      "tarjetas de combustible México",
    ],
  },

  valesGastos: {
    title: "Gestión de Gastos Corporativos y Viáticos | Payrolling Tech",
    description:
      "Tarjetas de gastos para empleados con control total. Simplifica la comprobación de viáticos, mejora el flujo de caja y obtén visibilidad financiera.",
    keywords: [
      "tarjetas de gastos corporativos",
      "control de viáticos para empresas",
      "gestión de gastos empresariales",
      "comprobación de gastos digital",
      "soluciones financieras para RH",
    ],
  },

  valesIncentivos: {
    title: "Programas de Incentivos y Recompensas | Payrolling Tech",
    description:
      "Motiva a tu equipo con incentivos basados en resultados. Vales de regalo y recompensas flexibles para impulsar el desempeño en tu organización.",
    keywords: [
      "programas de incentivos laborales",
      "recompensas para empleados con vales",
      "bonos de productividad deducibles",
      "motivación laboral y premios",
      "vales de incentivo México",
    ],
  },

  nom035: {
    title: "Cumplimiento y Consultoría NOM-035 STPS | Payrolling Tech",
    description:
      "Evita multas y mejora el entorno organizacional. Implementación integral de la NOM-035: diagnósticos, guías de referencia y planes de acción para empresas.",
    keywords: [
      "cumplimiento NOM-035 STPS",
      "implementación NOM-035 México",
      "factores de riesgo psicosocial en el trabajo",
      "consultoría NOM-035 para empresas",
      "entorno organizacional favorable",
      "multas STPS NOM-035",
      "diagnóstico de bienestar laboral",
    ],
  },

  blog: {
    title: "Blog RH: Tendencias en Nómina y Reclutamiento México | Payrolling Tech",
    description:
      "Artículos y guías sobre reformas laborales, gestión de nómina, cultura organizacional y atracción de talento para empresas modernas en México.",
    keywords: [
      "blog de recursos humanos México",
      "noticias laborales México 2025",
      "guía de nómina para emprendedores",
      "tendencias de reclutamiento IT",
      "consejos para gestión de talento",
      "actualidad fiscal y laboral México",
    ],
  },

  politicas: {
    title: "Aviso de Privacidad y Términos | Payrolling Tech",
    description:
      "Conoce cómo protegemos tus datos personales y los términos de uso de nuestros servicios de recursos humanos y payrolling.",
    keywords: [
      "aviso de privacidad",
      "protección de datos personales",
      "términos y condiciones payrolling tech",
      "derechos ARCO México",
    ],
  },
};

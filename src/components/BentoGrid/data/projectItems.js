// Importaciones de imágenes - TUS proyectos
import TaskFlowImg from '@/assets/img/TaskFlow.png'
import PlataformaCursosImg from '@/assets/img/plataforma.png'
import EcommerceImg from '@/assets/img/commerce.png'
import JuegosImg from '@/assets/img/juegos.png'
import Pelu1Img from '@/assets/img/pelu1.png'
import SistemaTurnosImg from '@/assets/img/pelu2.png'

// Iconos de tecnologías
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiReact, 
  SiPostgresql, 
  SiVercel,
  SiPwa,
  SiFastapi,
  SiStreamlit,
  SiSqlalchemy,
  SiTwilio,
  SiPython,
  SiPandas,
  SiJavascript,
  SiHtml5
} from 'react-icons/si'

// Para CSS usar DiCss3 de DevIcons
import { DiCss3 } from 'react-icons/di'

export const projectItems = [
  // ============================================================
  // PROYECTO 1 - SISTEMA DE TURNOS SALONES
  // ============================================================
  {
    title: "Sistema de Gestión de Turnos para Salones y Barberías",
    description: "Plataforma web Full-Stack diseñada para digitalizar la agenda de negocios locales. Permite a los clientes autogestionar sus reservas 24/7 y ofrece un panel de administración seguro para el control en tiempo real de citas, servicios y profesionales. Arquitectura escalable alojada en la nube.",
    media: { type: "img", src: SistemaTurnosImg },
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Vercel", icon: SiVercel }
    ],
    githubUrl: "https://github.com/franalmada/sistema-turnos-dark",
    liveUrl: "https://sistema-turnos-dark.vercel.app/admin",
    className: "md:col-span-2",
  },

  // Frase 1
  {
    type: "quote",
    content: "La creatividad es la inteligencia divirtiéndose",
    author: "Albert Einstein",
    className: "md:col-span-1",
  },

  // ============================================================
  // PROYECTO 2 - SISTEMA BARBERÍA (WHATSAPP)
  // ============================================================
  {
    title: "Sistema de gestión de turnos para barbería con WhatsApp",
    description: "Arquitectura full-stack para agendamiento de turnos: API con FastAPI, autenticación por roles, panel de administración en Streamlit, y webhook para reservas vía WhatsApp Business. Implementa lógica de disponibilidad con validación de solapamiento de horarios en tiempo real.",
    media: { type: "img", src: Pelu1Img },
    technologies: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Twilio", icon: SiTwilio },
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas }
    ],
    githubUrl: "https://github.com/franalmada/barberia-bot-backend",
    liveUrl: "https://barberia-admin-panel.onrender.com/",
    className: "",
  },

  // Frase 2
  {
    type: "quote",
    content: "El futuro pertenece a quienes creen en la belleza de sus sueños",
    author: "Eleanor Roosevelt",
    className: "",
  },

  // ============================================================
  // PROYECTO 3 - PLATAFORMA CURSOS PWA
  // ============================================================
  {
    title: "Plataforma de E-learning Genérica (PWA)",
    description: "Motor genérico de aprendizaje PWA adaptable a múltiples rubros (originalmente diseño de moda), permitiendo acceder a contenido desde cualquier dispositivo. Incluye sistema de administración de cursos, reproductor de videos y experiencia app-like nativa.",
    media: { type: "img", src: PlataformaCursosImg },
    technologies: [
      { name: "Next.js 15", icon: SiNextdotjs },
      { name: "React 18 + TypeScript", icon: SiReact },
      { name: "PWA", icon: SiPwa }
    ],
    githubUrl: "https://github.com/franalmada/moda-cursos-platform",
    liveUrl: "https://moda-cursos-platform-wlxx.vercel.app/",
    className: "md:col-span-2",
  },

  // Frase 3
  {
    type: "quote",
    content: "La única forma de hacer un gran trabajo es amar lo que haces",
    author: "Steve Jobs",
    className: "",
  },

  // ============================================================
  // PROYECTO 4 - TASKFLOW PRO
  // ============================================================
  {
    title: "TaskFlow Pro - Gestor Avanzado de Tareas",
    description: "Aplicación web moderna de gestión de tareas desarrollada con Next.js y TypeScript. Ofrece un sistema completo de organización personal con funcionalidades avanzadas como fechas de vencimiento, recordatorios visuales y persistencia local.",
    media: { type: "img", src: TaskFlowImg },
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ],
    githubUrl: "https://github.com/franalmada/taskflow",
    liveUrl: null,
    className: "",
  },

  // Frase 4
  {
    type: "quote",
    content: "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso",
    author: "John D. Rockefeller",
    className: "",
  },

  // ============================================================
  // PROYECTO 5 - E-COMMERCE FULLSTACK
  // ============================================================
  {
    title: "E-commerce Fullstack",
    description: "E-commerce completo desarrollado con Next.js que incluye catálogo de productos, carrito de compras, sistema de filtros y checkout simulado. Diseño responsive con gestión de estado mediante Context API para una experiencia de usuario fluida.",
    media: { type: "img", src: EcommerceImg },
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "CSS moderno", icon: DiCss3 }
    ],
    githubUrl: "https://github.com/franalmada/ecommerce",
    liveUrl: null,
    className: "",
  },

  // Frase 5
  {
    type: "quote",
    content: "10K+ líneas de código escritas con pasión",
    author: "Desarrollador Dedicado",
    className: "",
  },

  // ============================================================
  // PROYECTO 6 - PLATAFORMA GAMIFICADA (TFG)
  // ============================================================
  {
    title: "Plataforma Gamificada - Demo",
    description: "Plataforma web gamificada para el aprendizaje de aritmética básica en estudiantes de tercer grado, desarrollada como Trabajo Final de Grado de la carrera de Análisis de Sistemas Informáticos.",
    media: { type: "img", src: JuegosImg },
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: DiCss3 }
    ],
    githubUrl: "https://github.com/franalmada/demo-juegos",
    liveUrl: "https://franalmada.github.io/demo-juegos/",
    className: "",
  },

  // Frase 6
  {
    type: "quote",
    content: "La práctica hace al maestro",
    author: "Proverbio",
    className: "",
  },


];
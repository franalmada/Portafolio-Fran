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
  SiHtml5,
  SiCss3              
} from 'react-icons/si'

export const projectItems = [
  // ============================================================
  // PROYECTO 1 - TASKFLOW PRO
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
  
  // Frase 1
  {
    type: "quote",
    content: "La creatividad es la inteligencia divirtiéndose",
    author: "Albert Einstein",
    className: "md:col-span-1",
  },
  
  // GIF + Frase split 1
  {
    type: "gif-quote-split",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGM1OXY5NncybTYxcWN0MmRrOWc5ZzhpcGY4cDg4Y2p1c2lwcTVscCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/78XCFBGOlS6keY1Bil/giphy.gif" },
    quoteContent: "El futuro pertenece a quienes creen en la belleza de sus sueños",
    quoteAuthor: "Eleanor Roosevelt",
    className: "",
  },

  // ============================================================
  // PROYECTO 2 - PLATAFORMA CURSOS PWA
  // ============================================================
  {
    title: "Plataforma de Cursos de Diseño de Moda PWA",
    description: "Plataforma educativa PWA para cursos de diseño de moda, permitiendo acceder a contenido premium desde cualquier dispositivo. Incluye sistema de administración de cursos, reproductor de videos y experiencia app-like nativa mediante instalación PWA.",
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

  // ============================================================
  // PROYECTO 3 - E-COMMERCE FULLSTACK
  // ============================================================
  {
    title: "E-commerce Fullstack",
    description: "E-commerce completo desarrollado con Next.js que incluye catálogo de productos, carrito de compras, sistema de filtros y checkout simulado. Diseño responsive con gestión de estado mediante Context API para una experiencia de usuario fluida.",
    media: { type: "img", src: EcommerceImg },
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "CSS moderno", icon: null }
    ],
    githubUrl: "https://github.com/franalmada/ecommerce",
    liveUrl: null,
    className: "",
  },

  // Mini-grid con frases y GIFs
  {
    type: "mini-grid",
    cards: [
      {
        type: "quote",
        content: "La única forma de hacer un gran trabajo es amar lo que haces",
        author: "Steve Jobs",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YjIzZjM0aWdoempwb2N6enl5YzRiN2wwMXV2ZzJsYXoyZXI1eXl3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OumCa12QC9CIvBe2c1/giphy.gif",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3djljOTR3bWMxaGhqNHdhamtudHh1czZnZnk1bDZ1M2ZtcHp4NHVpMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UqAlDtPrxUIT1yYmFp/giphy.gif",
      },
      {
        type: "quote",
        content: "Cualquier tonto puede escribir código que una computadora entienda. Los buenos programadores escriben código que los humanos pueden entender",
        author: "Martin Fowler",
      }
    ],
    className: "md:col-span-2",
  },

  // ============================================================
  // PROYECTO 4 - PLATAFORMA GAMIFICADA (TFG)
  // ============================================================
  {
    title: "Plataforma Gamificada - Demo",
    description: "Plataforma web gamificada para el aprendizaje de aritmética básica en estudiantes de tercer grado, desarrollada como Trabajo Final de Grado de la carrera de Análisis de Sistemas Informáticos (UNAE).",
    media: { type: "img", src: JuegosImg },
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 }
    ],
    githubUrl: "https://github.com/franalmada/demo-juegos",
    liveUrl: "https://franalmada.github.io/demo-juegos/",
    className: "",
  },

  // Frase + GIF split 2
  {
    type: "quote-gif-split",
    quoteContent: "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso",
    quoteAuthor: "John D. Rockefeller",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnVubmVueTBsY29naGt4NnRpeDlpMjJseHNkZGl0c3pxM3JqczFmdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kanka5wfr3BxGpLRQu/giphy.gif" },
    className: "",
  },

  // ============================================================
  // PROYECTO 5 - SISTEMA BARBERÍA (WHATSAPP)
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

  // GIF + Frase split 3
  {
    type: "gif-quote-split",
    gifMedia: { type: "gif", src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2dvbWVoMHF6ZWlqdHBqMmh2Nzh1d3J1a3NiNWR4NTV1NXRjNjBhOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AqVx0YGEyRajOI3Pkm/giphy.gif" },
    quoteContent: "10K+ líneas de código escritas con pasión",
    quoteAuthor: "Desarrollador Dedicado",
    className: "",
  },

  // ============================================================
  // PROYECTO 6 - SISTEMA DE TURNOS SALONES
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

  // Mini-grid final con frases y GIFs
  {
    type: "mini-grid",
    cards: [
      {
        type: "quote",
        content: "La práctica hace al maestro",
        author: "Proverbio",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3hzdDEzYWo4bHhvcDhmajNpNHhqb3liZW13YWxtMG5odmZ5bzFrayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JqmupuTVZYaQX5s094/giphy.gif",
      },
      {
        type: "gif",
        src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a29rc28wZWt3dHk1aTl5NzU0Z2Y4cTg4YWxic2kwY3E0Z2FzOHdweSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/iEw5gfk0q6oWOlJruu/giphy.gif",
      },
      {
        type: "quote",
        content: "El código limpio es simple y directo",
        author: "Robert C. Martin",
      }
    ],
    className: "md:col-span-2",
  },
];
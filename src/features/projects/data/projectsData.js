import TaskFlowImg from '@/assets/img/TaskFlow.png'
import PlataformaCursosImg from '@/assets/img/plataforma.png'
import SistemaTurnosImg from '@/assets/img/pelu2.png'

import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiReact, 
  SiPostgresql, 
  SiVercel,
  SiPwa
} from 'react-icons/si'

export const projects = [
  {
    title: "TaskFlow Pro - Gestor Avanzado de Tareas",
    description: "Aplicación web moderna de gestión de tareas desarrollada con Next.js y TypeScript. Ofrece un sistema completo de organización personal con funcionalidades avanzadas como fechas de vencimiento, recordatorios visuales y persistencia local.",
    image: TaskFlowImg,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ],
    githubUrl: "https://github.com/franalmada/taskflow"
  },
  {
    title: "Plataforma de Cursos de Diseño de Moda PWA",
    description: "Plataforma educativa PWA para cursos de diseño de moda, permitiendo acceder a contenido premium desde cualquier dispositivo. Incluye sistema de administración de cursos, reproductor de videos y experiencia app-like nativa mediante instalación PWA.",
    image: PlataformaCursosImg,
    technologies: [
      { name: "Next.js 15", icon: SiNextdotjs },
      { name: "React 18 + TypeScript", icon: SiReact },
      { name: "PWA", icon: SiPwa }
    ],
    githubUrl: "https://github.com/franalmada/moda-cursos-platform",
    liveUrl: "https://moda-cursos-platform-wlxx.vercel.app/"
  },
  {
    title: "Sistema de Gestión de Turnos para Salones y Barberías",
    description: "Plataforma web Full-Stack diseñada para digitalizar la agenda de negocios locales. Permite a los clientes autogestionar sus reservas 24/7 y ofrece un panel de administración seguro para el control en tiempo real de citas, servicios y profesionales. Arquitectura escalable alojada en la nube.",
    image: SistemaTurnosImg,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Vercel", icon: SiVercel }
    ],
    githubUrl: "https://github.com/franalmada/sistema-turnos-dark",
    liveUrl: "https://sistema-turnos-dark.vercel.app/admin"
  }
];
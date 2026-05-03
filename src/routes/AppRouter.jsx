import { createBrowserRouter, Navigate } from "react-router-dom";
import Principal from "@/features/home/Principal";
import { lazy } from "react";

const Proyectos = lazy(() => import("@/features/projects/Proyectos"));
const Certificaciones = lazy(() => import("@/features/certifications/Certificaciones"));

// Detectamos si la aplicación está corriendo en producción (GitHub Pages)
const isProduction = import.meta.env.PROD;

export const appRouter = createBrowserRouter([
  {
    /* Ruta por defecto al entrar a la pagina */
    path: "/",
    element: <Principal />,
  },
  /* Rutas de proyectos */
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  /* Ruta certificaciones */
  {
    path: "/certificaciones",
    element: <Certificaciones />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
], {
  // En local usa la raíz "/", en GitHub usa el nombre del repo
  basename: isProduction ? "/portafolio-fran" : "/"
});
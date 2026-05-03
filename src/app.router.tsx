import { createHashRouter, Navigate } from "react-router-dom"; // 1. Cambiamos la importación
import Principal from "./pages/Principal";
import { lazy } from "react";

const Proyectos = lazy(() => import("./pages/Proyectos"));
const Certificaciones = lazy(() => import("./pages/Certificaciones"));

export const appRouter = createHashRouter([ // 2. Usamos createHashRouter
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    path: "/certificaciones",
    element: <Certificaciones />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]); 
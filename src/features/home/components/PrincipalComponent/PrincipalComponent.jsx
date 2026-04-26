import React, { useState, useCallback } from "react";
import profileImage from "@/assets/img/me.png";
import RandomizedTextEffect from "@/components/ui/DecryptedText/DecryptedText";
import { Mail, Linkedin, Github } from "lucide-react";

// Clases reutilizables para botones
const buttonBaseClasses = "inline-flex items-center gap-1.5 px-3 py-2 border rounded-xl text-xs transition-all duration-300 backdrop-blur-md shadow-lg";
const buttonSecondaryClasses = "bg-black/40 border-white/30 text-white shadow-black/20 hover:bg-black/60 hover:border-white/40 hover:shadow-xl hover:shadow-black/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50";

const ProfileSection = () => {
  return (
    <div className="text-white min-h-screen p-0">
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto p-6 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
          
          {/* Imagen de Perfil */}
          <div className="md:order-2 flex justify-center mb-4 md:mb-0">
            <div className="relative w-64 md:w-80 overflow-visible">
              <img
                src={profileImage}
                alt="Foto profesional de Francisco Ariel Almada Flores, Licenciado en Análisis de Sistemas Informáticos"
                className="w-full h-auto rounded-full relative z-10"
                loading="lazy"
              />
{/* <FloatingIcons /> */}
            </div>
          </div>

          {/* Información Personal */}
          <section className="md:order-1 text-center md:text-left" aria-labelledby="profile-heading">
            <header>
              <h1 id="profile-heading" className="text-3xl md:text-5xl leading-tight mb-4 md:mb-5">
                <div className="block">
                  <RandomizedTextEffect text="Francisco Ariel" />
                </div>
                <div className="block mt-1 md:mt-2">
                  <RandomizedTextEffect text="Almada Flores" />
                </div>
              </h1>
            </header>

            {/* Badge de Rol */}
            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2 bg-black/30 border border-white rounded-full">
                <div 
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" 
                  aria-hidden="true"
                />
                <span className="text-xs tracking-wider uppercase">
                  Licenciado en Análisis de Sistemas Informáticos
                </span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mb-6 md:mb-8 mx-auto md:mx-0">
              Hola, soy Francisco, <strong>Licenciado en Análisis de Sistemas Informáticos</strong> y un desarrollador de software apasionado por la tecnología y la innovación. 
              Me especializo en crear aplicaciones web modernas, eficientes y escalables usando las últimas tecnologías.
            </p>

            {/* Botones de Contacto */}
            <nav aria-label="Enlaces de contacto y perfil profesional">
              <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                
                <a
                  href="mailto:francisarielalma.96@gmail.com"
                  className={`${buttonBaseClasses} ${buttonSecondaryClasses}`}
                  aria-label="Enviar email a francisarielalma.96@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Contáctame</span>
                  <span className="sm:hidden">Email</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/francisco-almada96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBaseClasses} ${buttonSecondaryClasses}`}
                  aria-label="Ver perfil de LinkedIn de Francisco Almada (se abre en nueva pestaña)"
                >
                  <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/franalmada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBaseClasses} ${buttonSecondaryClasses}`}
                  aria-label="Ver repositorios de GitHub de franalmada (se abre en nueva pestaña)"
                >
                  <Github className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  GitHub
                </a>

              </div>
            </nav>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
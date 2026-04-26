import React, { memo } from 'react';
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import FadeContent from "@/components/FadeContent/FadeContent";
import BlurText from "@/components/ui/BlurText/BlurText";
import Squares from "@/components/ui/Squares/Squares";

const motionConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Utility function for class names
function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Common styles
const cardBaseStyles = "group overflow-hidden backdrop-blur-md border rounded-lg flex flex-col h-full transition-all duration-300";
const quoteBaseStyles = "bg-gradient-to-br from-stone-900/90 to-neutral-900/90 border-stone-700/50 hover:border-stone-600/70 rounded-lg";
const gifBaseStyles = "relative border border-neutral-700/50 bg-black/20 backdrop-blur-xl hover:border-neutral-600/70 hover:bg-black/30 shadow-2xl hover:shadow-3xl rounded-lg";

// Memoized Project Card Component
const ProjectBentoCard = memo(function ProjectBentoCard({ 
  title, 
  description, 
  media, 
  technologies, 
  githubUrl, 
  liveUrl 
}) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(
        cardBaseStyles,
        "bg-black/30 border-gray-900 cursor-pointer hover:border-gray-700"
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full h-[200px] flex-shrink-0">
        {media && (
          <img
            loading="lazy"
            decoding="async"
            src={media.src}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="p-3 flex flex-col flex-1">
          <h3 className="text-base font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs leading-relaxed mb-2 flex-1">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <span
                  key={index}
                  className="text-xs px-1.5 py-0.5 rounded-lg bg-black/50 hover:bg-black/60 text-gray-300 flex items-center gap-1 transition-all duration-300 backdrop-blur-sm"
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  {tech.name}
                </span>
              )
            })}
          </div>
        </div>

        {/* Footer with buttons */}
        <div className="px-3 pb-3 flex gap-1.5 justify-end flex-shrink-0">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto ${title} en vivo`}
              className="inline-flex items-center justify-center gap-1 bg-black/50 hover:bg-black/60 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-white/30 hover:border-white/40"
            >
              <ExternalLink className="w-3 h-3" />
              Ver
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código fuente de ${title} en GitHub`}
              className="inline-flex items-center justify-center gap-1 bg-black/50 hover:bg-black/60 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-white/30 hover:border-white/40"
            >
              <Github className="w-3 h-3" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// ... el resto de los componentes (QuoteCard, StatCard, etc.) se mantienen igual ...

// Card component mapping
const cardComponents = {
  "gif-split": SplitGifCard,
  "gif-quote-split": GifQuoteSplitCard,
  "quote-gif-split": QuoteGifSplitCard,
  "mini-grid": MiniGridCard,
  default: ProjectBentoCard,
};

// Componente principal BentoGrid
const BentoGrid = ({ projectItems, onBack, backgroundConfig }) => {
  const handleGoBack = onBack;

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Squares 
          speed={backgroundConfig?.speed || 0.5} 
          squareSize={backgroundConfig?.squareSize || 40}
          direction={backgroundConfig?.direction || 'diagonal'}
          borderColor={backgroundConfig?.borderColor || '#333'}
          hoverFillColor={backgroundConfig?.hoverFillColor || '#555'}
        />
      </div>
      
      <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
        {/* Header Section */}
        <header className="relative mb-12">
          <button
            onClick={handleGoBack}
            aria-label="Regresar al inicio"
            className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Regresar</span>
          </button>

          <div className="w-full grid place-items-center pt-12 sm:pt-16 text-center px-4">
            <h1 className="max-w-none">
              <BlurText
                text="Mis Proyectos"
                delay={150}
                animateBy="words"
                direction="top"
                className="block mx-auto text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              />
            </h1>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
             style={{ gridAutoRows: 'minmax(300px, auto)' }}>
          {projectItems.map((item, index) => {
            const CardComponent = cardComponents[item.type] || cardComponents.default;
            
            return (
              <FadeContent
                key={index}
                delay={index * 100}
                duration={800}
                threshold={0.1}
                className={clsx("relative group", item.className)}
              >
                <CardComponent {...item} />
              </FadeContent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
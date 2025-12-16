import { useRef } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "@/config";

export default function ProjectsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 bg-background-secondary overflow-hidden" id="projects">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Recent Projects</h2>
      </div>

      <div ref={containerRef} className="w-full relative pl-6 md:pl-12 cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }} // Approximate constraint, ideally calculated
          className="flex gap-8 w-max"
        >
          {CONFIG.projects.map((project, i) => (
            <div 
              key={project.id}
              className="relative w-[80vw] md:w-[40vw] aspect-[4/3] group select-none"
            >
              <div className="w-full h-full overflow-hidden bg-white/5 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs uppercase tracking-widest text-white/60 mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-medium">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity">
                <h4 className="text-lg font-medium">{project.title}</h4>
                <span className="text-sm">{project.category}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

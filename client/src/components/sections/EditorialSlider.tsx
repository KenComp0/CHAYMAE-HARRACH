import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CONFIG } from "@/config";
import { useTranslation } from "@/contexts/TranslationContext";

export default function EditorialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = CONFIG.editorial;
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 border-t border-white/5 bg-background" id="work">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-text-primary">{t("methodology.title")}</h2>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 border border-white/10 text-text-primary hover:bg-accent hover:border-accent hover:text-white transition-colors rounded-full"
              data-testid="button-prev-slide"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 border border-white/10 text-text-primary hover:bg-accent hover:border-accent hover:text-white transition-colors rounded-full"
              data-testid="button-next-slide"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden bg-white/5 rounded-sm">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              exit={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="relative w-full h-full group cursor-none">
                <img 
                  src={slides[currentIndex].image} 
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="text-sm font-mono text-accent mb-4 block">0{currentIndex + 1} / 0{slides.length}</span>
                    <h3 className="text-3xl md:text-5xl font-medium mb-2 text-text-primary">
                      {t(`editorial.${slides[currentIndex].id === 1 ? 'capital' : slides[currentIndex].id === 2 ? 'psychology' : 'culture'}.title`)}
                    </h3>
                    <p className="text-text-secondary max-w-xl text-lg">
                      {t(`editorial.${slides[currentIndex].id === 1 ? 'capital' : slides[currentIndex].id === 2 ? 'psychology' : 'culture'}.description`)}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

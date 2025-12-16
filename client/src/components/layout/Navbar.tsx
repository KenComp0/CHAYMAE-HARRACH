import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { y: "100%" },
    open: { 
      y: 0,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 40 },
    open: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2 + i * 0.1, 
        duration: 0.8, 
        ease: [0.65, 0, 0.35, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-6 ${
          isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="text-xl font-medium tracking-tight z-50 text-text-primary">
          CHAYMAE HARRACH
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 text-text-primary focus:outline-none hover:text-accent transition-colors"
            data-testid="button-menu"
          >
            {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {[
                { key: "about", href: "about" },
                { key: "experience", href: "experience" },
                { key: "education", href: "education" },
                { key: "work", href: "work" },
                { key: "contact", href: "contact" }
              ].map((item, i) => (
                <motion.div
                  key={item.key}
                  custom={i}
                  variants={linkVariants}
                >
                  <a 
                    href={`#${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-7xl font-light text-text-primary hover:text-accent transition-colors block"
                    data-testid={`link-menu-${item.href}`}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

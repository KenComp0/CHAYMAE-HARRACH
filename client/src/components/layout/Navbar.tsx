import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="text-xl font-medium tracking-tight z-50 mix-blend-difference text-white">
          ALEX MORGAN
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 text-white mix-blend-difference focus:outline-none"
          data-testid="button-menu"
        >
          {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
        </button>
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
              {["Work", "About", "Experience", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={linkVariants}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-7xl font-light hover:text-white/50 transition-colors block"
                    data-testid={`link-menu-${item.toLowerCase()}`}
                  >
                    {item}
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

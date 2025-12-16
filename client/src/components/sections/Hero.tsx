import { motion } from "framer-motion";
import { CONFIG } from "@/config";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Background Graphic - Large abstract circle/blob inspired by screenshot */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -right-[10%] top-[20%] w-[50vw] h-[50vw] rounded-full bg-accent blur-[100px] opacity-20 pointer-events-none"
      />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
            className="text-[13vw] leading-[0.85] font-bold tracking-tighter text-text-primary"
          >
            STRATEGIC
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
            className="text-[13vw] leading-[0.85] font-bold tracking-tighter ml-[5vw] text-text-primary"
          >
            HUMAN
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
            className="text-[13vw] leading-[0.85] font-bold tracking-tighter ml-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary"
          >
            RESOURCES
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-12 md:ml-[15vw] max-w-xl"
        >
          <p className="text-xl md:text-2xl text-text-secondary font-light">
            {CONFIG.name} — {CONFIG.role}
          </p>
          <p className="mt-4 text-lg md:text-xl text-text-tertiary">
            {CONFIG.intro}
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-widest text-text-tertiary">Scroll</span>
        <div className="h-16 w-[1px] bg-white/10">
          <motion.div 
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-accent h-full origin-top"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { CONFIG } from "@/config";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
            className="text-[12vw] leading-[0.9] font-medium tracking-tighter"
          >
            CREATIVE
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
            className="text-[12vw] leading-[0.9] font-medium tracking-tighter ml-[10vw]"
          >
            DEVELOPER
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-12 md:ml-[10vw] max-w-md"
        >
          <p className="text-lg md:text-xl text-text-secondary">
            {CONFIG.intro}
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="h-16 w-[1px] bg-white/20">
          <motion.div 
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-white h-full origin-top"
          />
        </div>
      </motion.div>
    </section>
  );
}

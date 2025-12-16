import { Languages } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors text-sm text-text-primary bg-background/50 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Languages size={18} strokeWidth={1.5} />
      <span className="font-medium uppercase tracking-wider">{language === "en" ? "FR" : "EN"}</span>
    </motion.button>
  );
}


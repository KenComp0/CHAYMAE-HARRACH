import { CONFIG } from "@/config";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="w-full py-40 px-6 md:px-12 bg-background text-center" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[10vw] font-bold leading-none mb-12 tracking-tighter text-text-primary uppercase">
          {t("contact.title")}
        </h2>
        
        <a 
          href={`mailto:${CONFIG.contact.email}`}
          className="text-2xl md:text-4xl text-text-secondary hover:text-accent transition-colors border-b border-white/10 pb-2 inline-block"
        >
          {CONFIG.contact.email}
        </a>
        
        <div className="mt-32 text-text-tertiary text-sm">
          {CONFIG.contact.location}
        </div>
      </div>
    </section>
  );
}

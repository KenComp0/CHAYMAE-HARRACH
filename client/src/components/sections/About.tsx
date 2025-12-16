import { useIntersectionReveal } from "@/hooks/use-intersection-reveal";
import { CONFIG } from "@/config";
import { useTranslation } from "@/contexts/TranslationContext";

export default function About() {
  const { ref, isVisible } = useIntersectionReveal(0.2);
  const { t } = useTranslation();

  return (
    <section className="w-full py-32 px-6 md:px-12" id="about">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <span className="text-sm font-mono text-accent mb-8 block tracking-widest uppercase">{t("about.title")}</span>
        <h2 className="text-3xl md:text-5xl leading-tight font-light text-text-secondary">
          {t("about.description")} <span className="text-text-primary font-medium">{t("about.description2")}</span>. 
          <br /><br />
          {t("about.description3")}
        </h2>
        
        <div className="mt-16 flex flex-wrap gap-4">
          {CONFIG.skills.map((skill, i) => {
            const skillKey = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
            const translationKey = 
              skillKey.includes('staffing') ? 'staffing' :
              skillKey.includes('humanresources') || skillKey.includes('hr') ? 'hr' :
              skillKey.includes('talent') ? 'talent' :
              skillKey.includes('psychology') ? 'psychology' :
              skillKey.includes('relations') ? 'relations' :
              skillKey.includes('performance') ? 'performance' : '';
            return (
              <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-sm text-text-tertiary hover:border-accent hover:text-accent transition-colors cursor-default">
                {translationKey ? t(`skills.${translationKey}`) : skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

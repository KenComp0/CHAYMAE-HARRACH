import { useIntersectionReveal } from "@/hooks/use-intersection-reveal";
import { CONFIG } from "@/config";

export default function Education() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-background-secondary border-t border-white/5" id="education">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-20 text-text-primary">Education</h2>
        
        <div className="space-y-16">
          {CONFIG.education.map((edu, index) => (
            <EducationItem key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationItem({ edu }: { edu: any }) {
  const { ref, isVisible } = useIntersectionReveal(0.1);

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-white/5 last:border-0 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="md:col-span-3">
        <span className="text-accent font-mono text-lg">{edu.period}</span>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-3xl font-medium mb-2 text-text-primary">{edu.institution}</h3>
        <span className="text-xl text-text-secondary">{edu.degree}</span>
      </div>
    </div>
  );
}

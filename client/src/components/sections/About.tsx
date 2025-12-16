import { useIntersectionReveal } from "@/hooks/use-intersection-reveal";
import { CONFIG } from "@/config";

export default function About() {
  const { ref, isVisible } = useIntersectionReveal(0.2);

  return (
    <section className="w-full py-32 px-6 md:px-12" id="about">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <span className="text-sm font-mono text-accent mb-8 block tracking-widest uppercase">About Me</span>
        <h2 className="text-3xl md:text-5xl leading-tight font-light text-text-secondary">
          I am a Master's student in Strategic Human Resources Management, passionate about <span className="text-text-primary font-medium">I/O Psychology</span>. 
          <br /><br />
          My goal is to apply psychological insights to enhance organizational dynamics and employee well-being.
        </h2>
        
        <div className="mt-16 flex flex-wrap gap-4">
          {CONFIG.skills.map((skill, i) => (
             <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-sm text-text-tertiary hover:border-accent hover:text-accent transition-colors cursor-default">
               {skill}
             </span>
          ))}
        </div>
      </div>
    </section>
  );
}

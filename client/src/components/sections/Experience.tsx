import { useIntersectionReveal } from "@/hooks/use-intersection-reveal";
import { CONFIG } from "@/config";

export default function Experience() {
  return (
    <section className="w-full py-32 px-6 md:px-12 border-t border-white/5" id="experience">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl mb-16 font-medium">Experience</h2>
        
        <div className="space-y-12">
          {CONFIG.experience.map((job, index) => (
            <ExperienceItem key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ job }: { job: any }) {
  const { ref, isVisible } = useIntersectionReveal(0.1);

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-white/5 last:border-0 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="md:col-span-3">
        <span className="text-white/50 font-mono">{job.period}</span>
      </div>
      <div className="md:col-span-4">
        <h3 className="text-xl font-medium mb-1">{job.company}</h3>
        <span className="text-white/60">{job.role}</span>
      </div>
      <div className="md:col-span-5">
        <p className="text-white/70">{job.description}</p>
      </div>
    </div>
  );
}

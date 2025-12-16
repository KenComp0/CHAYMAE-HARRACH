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
        <span className="text-sm font-mono text-white/50 mb-8 block tracking-widest uppercase">About</span>
        <h2 className="text-3xl md:text-5xl leading-tight font-light text-white/90">
          I am a creative developer who believes that <span className="text-white font-medium">motion</span> is not just decoration, but the very fabric of digital intuition. 
          <br /><br />
          My work sits at the intersection of stark brutalism and fluid elegance.
        </h2>
      </div>
    </section>
  );
}

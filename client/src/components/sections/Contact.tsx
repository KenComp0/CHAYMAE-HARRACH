import { CONFIG } from "@/config";

export default function Contact() {
  return (
    <section className="w-full py-40 px-6 md:px-12 bg-background text-center" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[10vw] font-bold leading-none mb-12 tracking-tighter text-text-primary uppercase">
          Let's Connect
        </h2>
        
        <a 
          href={`mailto:${CONFIG.contact.email}`}
          className="text-2xl md:text-4xl text-text-secondary hover:text-accent transition-colors border-b border-white/10 pb-2 inline-block"
        >
          {CONFIG.contact.email}
        </a>

        <div className="mt-24 flex justify-center gap-12 flex-wrap">
          {Object.entries(CONFIG.contact).map(([key, value]) => {
            if (key === 'email') return null;
            return (
              <a 
                key={key}
                href={value}
                target="_blank"
                rel="noreferrer"
                className="uppercase tracking-widest text-sm text-text-primary hover:text-accent transition-colors"
              >
                {key}
              </a>
            );
          })}
        </div>
        
        <div className="mt-32 text-text-tertiary text-sm">
          Casablanca, Morocco
        </div>
      </div>
    </section>
  );
}

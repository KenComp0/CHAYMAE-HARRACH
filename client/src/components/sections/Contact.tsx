import { CONFIG } from "@/config";

export default function Contact() {
  return (
    <section className="w-full py-40 px-6 md:px-12 bg-background-secondary" id="contact">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[10vw] font-medium leading-none mb-12 tracking-tighter">
          LET'S TALK
        </h2>
        
        <a 
          href={`mailto:${CONFIG.contact.email}`}
          className="text-2xl md:text-4xl hover:text-white/50 transition-colors border-b border-white/20 pb-2"
        >
          {CONFIG.contact.email}
        </a>

        <div className="mt-24 flex justify-center gap-12">
          {Object.entries(CONFIG.contact).map(([key, value]) => {
            if (key === 'email') return null;
            return (
              <a 
                key={key}
                href={value}
                target="_blank"
                rel="noreferrer"
                className="uppercase tracking-widest text-sm hover:text-white/50 transition-colors"
              >
                {key}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

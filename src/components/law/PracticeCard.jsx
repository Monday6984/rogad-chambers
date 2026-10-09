import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function PracticeCard({ practice, onOpen }) {
  const lift = "transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-focus-within:-translate-y-1.5 motion-reduce:transform-none";

  return (
    <article className="group relative h-[clamp(300px,85vw,360px)] overflow-hidden bg-[#1A2436] md:h-[clamp(320px,40vw,380px)] xl:h-[clamp(380px,30vw,450px)]">
      <Image src={practice.image} alt={`${practice.title} practice`} className="absolute inset-0 h-full w-full saturate-[.85] transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transform-none" />
      {/* Navy wash that lifts slightly on hover, plus a deeper base so the title always reads */}
      <div className="absolute inset-0 bg-[#1A2436]/50 transition-opacity duration-700 group-hover:opacity-75 group-focus-within:opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2436]/90 via-[#1A2436]/25 via-55% to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-7">
        <span className="text-[11px] tracking-[.22em] text-[#D4AF37]">{practice.number}</span>
        <div>
          <div className={lift}>
            <h3 className="max-w-[240px] font-serif text-[1.6rem] leading-[1.05] text-white md:max-w-[200px] md:text-[clamp(1.25rem,1.7vw,1.65rem)]">{practice.title}</h3>
            {/* Always shown on touch and smaller screens; revealed on hover/focus in the desktop row */}
            <p className="mt-3 text-[10px] uppercase leading-relaxed tracking-[.14em] text-white/65 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 xl:[@media(hover:hover)]:opacity-0">{practice.tag}</p>
          </div>
          <span aria-hidden="true" className="mt-5 block h-px w-10 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100" />
          {/* The button's ::after stretches over the card so the whole card is clickable */}
          <button type="button" onClick={() => onOpen(practice)} className="focus-gold mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-[#D4AF37] opacity-85 transition-opacity duration-500 after:absolute after:inset-0 after:content-[''] group-hover:opacity-100 sm:text-[11px]">
            Explore practice<span className="sr-only">: {practice.title}</span>
            <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </button>
        </div>
      </div>
    </article>
  );
}

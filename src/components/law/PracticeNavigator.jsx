import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { practices, practicePath } from "@/data/practices";

// Compact image-backed navigation band to each practice page: 2 columns on mobile, 3 on tablet, 6 on desktop.
// The 1px gaps show the backing colour as hairline dividers, as in the homepage practice wall.
// `current` (a practice title) marks that practice's tile as the page you are on.
export default function PracticeNavigator({ current, label = "Practice areas" }) {
  return (
    <nav aria-label={label} className="border-y border-[#D4AF37]/35 bg-[#48505E]">
      <ul className="grid grid-cols-2 gap-px md:grid-cols-3 xl:grid-cols-6">
        {practices.map((p) => {
          const active = p.title === current;
          return (
            <li key={p.number}>
              <Link to={practicePath(p)} aria-current={active ? "page" : undefined} className="focus-gold group relative flex h-[170px] flex-col justify-between overflow-hidden bg-[#1A2436] p-4 sm:p-5 lg:h-[220px] lg:p-6">
                <Image src={p.image} alt="" className="absolute inset-0 h-full w-full saturate-[.85] transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none" />
                <div aria-hidden="true" className={`absolute inset-0 bg-[#1A2436]/55 transition-opacity duration-700 group-hover:opacity-75 ${active ? "opacity-75" : ""}`} />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#1A2436]/90 via-[#1A2436]/30 to-transparent" />
                {active && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-[#D4AF37]" />}

                <span className="relative text-[11px] tracking-[.22em] text-[#D4AF37]">{p.number}</span>
                <span className="relative">
                  <span className="block font-serif text-[15px] leading-[1.15] text-[#F4F1EA] sm:text-lg lg:text-[1.15rem]">{p.title}</span>
                  <span className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[.16em] text-[#D4AF37]">
                    {active ? "Current practice" : <>Explore <ArrowUpRight size={12} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></>}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { lawyers } from "@/data/lawyers";
import { LawyerGrid } from "@/components/law/LawyerCard";

// About page team preview: the first four partners (data order) as compact cards; the full team is on /people.
export default function AboutPeople() {
  const people = lawyers.filter((l) => /partner/i.test(l.title)).slice(0, 4);

  return (
    <section id="our-people" className="relative border-t border-[#1A2436]/10 bg-white pb-20 pt-20 text-[#1A2436] md:pb-24 md:pt-24 lg:pb-28 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="mb-14 grid gap-y-6 lg:mb-[72px] lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our People · 04</p>
            <h2 className="mt-6 font-serif text-[clamp(3.25rem,5vw,5.5rem)] leading-[.95] tracking-[-.04em] lg:mt-8">
              <span className="block">People behind</span>
              <span className="block">the counsel.</span>
            </h2>
          </div>
          <p className="max-w-[460px] border-l border-[#D4AF37] pl-6 text-[15px]/[1.8] text-[#1A2436]/75 lg:col-span-5 lg:col-start-7 lg:self-end">
            A multidisciplinary team combining legal excellence with commercial insight across every practice area.
          </p>
        </div>

        <LawyerGrid items={people} columns={4} compact />

        <Link to="/people" className="focus-gold group mt-16 inline-flex items-center gap-3 border-b border-[#D4AF37]/50 py-3 text-xs uppercase tracking-[.18em] text-[#8e741e] transition-colors duration-300 hover:border-[#D4AF37]">
          Meet our people
          <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </Link>
      </div>
    </section>
  );
}

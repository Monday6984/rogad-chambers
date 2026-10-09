import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { lawyers } from "@/data/lawyers";
import { LawyerGrid } from "@/components/law/LawyerCard";

export default function LawyersPreview() {
  // One row of three on the homepage; the full team is on /people
  const partners = lawyers.filter(l => /partner/i.test(l.title)).slice(0, 3);

  return (
    // On desktop the center rule falls on the divider between the 2nd and 3rd columns, never across a portrait
    <section className="rule-section relative bg-white pb-20 pt-10 text-[#1A2436] max-lg:bg-none md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="mb-14 grid gap-y-6 lg:mb-[72px] lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <p className="eyebrow">Our People · 03</p>
            <h2 className="mt-6 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[.95] tracking-[-.035em] lg:mt-8">Counsel of record.</h2>
          </div>
          <p className="max-w-[460px] text-[15px]/[1.7] text-[#1A2436]/70 lg:col-span-5 lg:col-start-7 lg:self-end">
            A multidisciplinary team combining legal excellence with commercial insight across every practice area.
          </p>
        </div>

        <LawyerGrid items={partners} />

        <Link to="/people" className="focus-gold mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">Meet our people <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}

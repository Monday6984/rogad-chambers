import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { lawyers } from "@/data/lawyers";
import LawyerCard from "@/components/law/LawyerCard";

export default function LawyersPreview() {
  const partners = lawyers.filter(l => /partner/i.test(l.title));
  return <section className="rule-section bg-white py-24 text-[#1A2436] lg:py-36">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div><p className="eyebrow">Our People · 03</p><h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-7xl">Counsel of record.</h2></div>
        <p className="max-w-md text-lg leading-8 text-[#6b7280]">A multidisciplinary team combining legal excellence with commercial insight across every practice area.</p>
      </div>
      <div className="mt-16 grid gap-px bg-[#1A2436]/15 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((l, i) => <LawyerCard key={l.name} lawyer={l} index={i} />)}
      </div>
      <Link to="/people" className="focus-gold mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">Meet our people <ArrowUpRight size={15} /></Link>
    </div>
  </section>;
}

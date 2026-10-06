import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { about } from "@/data/siteContent";

export default function FirmIntro() {
  return <section className="rule-section bg-white py-24 text-[#1A2436] lg:py-40">
    <div className="mx-auto grid max-w-[1500px] gap-14 px-5 lg:grid-cols-12 lg:px-10">
      <div className="lg:col-span-4"><p className="eyebrow">The Firm · 01</p><h2 className="mt-6 font-serif text-5xl leading-none sm:text-7xl">Counsel with consequence.</h2></div>
      <div className="lg:col-span-7 lg:col-start-6">
        <p className="text-lg leading-8 text-[#1A2436]/70">{about.split("\n\n")[0]}</p>
        <Link to="/about" className="focus-gold mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">Discover the firm <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  </section>;
}

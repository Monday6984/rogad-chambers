import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaBand({ number }) {
  return <section className="bg-[#1A2436] py-20 text-[#F4F1EA] lg:py-28">
    <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div>
        <p className="eyebrow">Engage the Firm · {number}</p>
        <h2 className="mt-4 font-serif text-4xl leading-none sm:text-6xl">Become Our <span className="text-[#D4AF37]">Client.</span></h2>
      </div>
      <p className="max-w-xl text-lg leading-8 text-[#F4F1EA]/70">Take the first step today — contact our team to schedule a confidential consultation and discover how we can help you move forward with confidence.</p>
      <Link to="/contact#become-our-client" className="focus-gold shrink-0 self-start border border-[#D4AF37] px-7 py-4 text-xs uppercase tracking-[.17em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-white lg:self-auto">Request counsel <ArrowUpRight size={14} className="ml-2 inline-block align-[-2px]" /></Link>
    </div>
  </section>;
}

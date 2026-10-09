import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { practices, practicePath } from "@/data/practices";

// The Practice Areas directory: one editorial row per practice, each row a single link to its page.
// Desktop columns: number (1) · title + description (5) · image (4) · CTA (2). Mobile stacks in that order.
export default function PracticeDirectory() {
  return (
    <section aria-label="Practice directory" className="bg-white py-10 text-[#1A2436] lg:py-16">
      <ol className="mx-auto max-w-[1500px] px-5 lg:px-10">
        {practices.map((p) => <PracticeDirectoryItem key={p.number} practice={p} />)}
      </ol>
    </section>
  );
}

function PracticeDirectoryItem({ practice: p }) {
  return (
    <li className="border-t border-[#1A2436]/[.12] last:border-b">
      <Link to={practicePath(p)} aria-label={`${p.title}: explore practice`} className="focus-gold group grid gap-y-5 py-10 lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:py-12">
        <span className="text-[1.35rem] tracking-[.06em] text-[#8e741e] lg:col-span-1">{p.number}</span>

        <div className="border-l border-[#D4AF37]/70 pl-6 lg:col-span-5">
          <h3 className="font-serif text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.1] tracking-[-.01em] transition-colors duration-500 group-hover:text-[#8e741e]">{p.title}</h3>
          <p className="mt-4 max-w-[440px] text-[15px]/[1.7] text-[#1A2436]/70">{p.description}</p>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-[#1A2436] lg:col-span-4 lg:aspect-[12/5]">
          <Image src={p.image} alt={`${p.title} practice`} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none" />
        </div>

        <span className="flex items-center gap-2 text-[11px] uppercase tracking-[.16em] text-[#8e741e] lg:col-span-2 lg:justify-self-end">
          Explore practice
          <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </span>
      </Link>
    </li>
  );
}

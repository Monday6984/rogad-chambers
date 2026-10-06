import { practices } from "@/data/practices";
import PracticeCard from "@/components/law/PracticeCard";

export default function Practices({ showHeader = true, eyebrow = "Capabilities · 02", onOpen }) {
  const open = (p) => onOpen ? onOpen(p) : document.getElementById("practices")?.scrollIntoView({ behavior: "smooth" });
  return <section id="practices" className="rule-section bg-white py-24 text-[#1A2436] lg:py-36">
    {showHeader && <div className="mx-auto mb-14 max-w-[1500px] px-5 lg:px-10"><p className="eyebrow">{eyebrow}</p><div className="mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><h2 className="max-w-3xl font-serif text-5xl leading-none sm:text-7xl">Our Practice Areas</h2><p className="max-w-md text-lg leading-8 text-[#6b7280]">Integrated counsel across the transactions, industries and disputes shaping modern commerce.</p></div></div>}
    <div className="flex overflow-x-auto border-y border-[#D4AF37]/35">{practices.map(p => <PracticeCard key={p.number} practice={p} onOpen={() => open(p)} />)}</div>
  </section>;
}

import { learnMore } from "@/data/siteContent";
export default function LearnMore() {
  return <section id="learn-more" className="rule-section bg-[#FAF8F2] py-24 text-[#1A2436] lg:py-40"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 lg:grid-cols-12 lg:px-10">
    <div className="lg:col-span-5"><p className="eyebrow">Our Standard · 02</p><h2 className="mt-7 font-serif text-5xl leading-[1.02] sm:text-7xl">Excellence is not an aspiration.</h2></div>
    <div className="border-l border-[#D4AF37]/60 pl-7 lg:col-span-6 lg:col-start-7"><p className="mb-8 font-serif text-3xl text-[#8e741e]">It is the standard.</p><div className="space-y-6 text-lg leading-8 text-[#1A2436]/70">{learnMore.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div><div className="mt-12 grid grid-cols-3 border-y border-[#D4AF37]/40 py-7 text-center"><Stat n="Integrity" /><Stat n="Discretion" /><Stat n="Results" /></div></div>
  </div></section>;
}
function Stat({ n }) { return <span className="text-xs uppercase tracking-[.14em] text-[#8e741e]">{n}</span>; }

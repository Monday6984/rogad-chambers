import { about } from "@/data/siteContent";
export default function About() {
  return <section id="about" className="rule-section bg-white py-24 text-[#1A2436] lg:py-40"><div className="mx-auto grid max-w-[1500px] gap-14 px-5 lg:grid-cols-12 lg:px-10">
    <div className="lg:col-span-4"><p className="eyebrow">The Firm · 01</p><h2 className="mt-6 font-serif text-5xl leading-none sm:text-7xl">Counsel with consequence.</h2></div>
    <div className="lg:col-span-7 lg:col-start-6"><p className="mb-10 border-l border-[#B89325] pl-6 font-serif text-2xl leading-9 text-[#1A2436]">Modern perspective. Enduring principles. Uncompromising standards.</p><div className="space-y-6 text-lg leading-8 text-[#1A2436]/70">{about.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div></div>
  </div></section>;
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { newsletters, blogPosts, insightSlug } from "@/data/insights";

export default function Insights({ showHeader = true }) {
  const [tab, setTab] = useState("newsletter");
  const items = tab === "newsletter" ? newsletters : blogPosts;
  return <section id="insights" className="rule-section bg-[#FAF8F2] py-24 text-[#1A2436] lg:py-36">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      {showHeader && <>
        <p className="eyebrow">Media &amp; Insights · 01</p>
        <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-7xl">Newsletters &amp;<br /><span className="text-[#8e741e]">Blog Posts.</span></h2>
      </>}
      <div className={`flex border-b border-[#1A2436]/20 ${showHeader ? "mt-6" : "lg:justify-end"}`}>
        <TabBtn active={tab === "newsletter"} onClick={() => setTab("newsletter")}>Newsletters</TabBtn>
        <TabBtn active={tab === "blog"} onClick={() => setTab("blog")}>Blog Posts</TabBtn>
      </div>
      <div className="mt-12 divide-y divide-[#1A2436]/15 border-y border-[#1A2436]/15">
        {items.map((it, i) => <InsightRow key={it.title} item={it} index={i} />)}
      </div>
      <p className="mt-8 text-center text-sm text-[#6b7280]">Subscribe to receive future editions directly to your inbox.</p>
    </div>
  </section>;
}

export function InsightRow({ item, index }) {
  return <Link to={`/insights/${insightSlug(item.title)}`} className="focus-gold group flex flex-col gap-3 py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
    <div className="flex items-center gap-5">
      <span className="font-mono text-xs text-[#D4AF37]">{`0${index + 1}`}</span>
      <span className="text-xs uppercase tracking-[.14em] text-[#6b7280] lg:w-28 lg:shrink-0">{item.date}</span>
    </div>
    <div className="flex-1">
      <h3 className="font-serif text-xl leading-tight transition group-hover:text-[#8e741e] sm:text-2xl">{item.title}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b7280]">{item.excerpt}</p>
    </div>
    <div className="flex items-center gap-4 text-xs uppercase tracking-[.14em] text-[#6b7280]"><span>{item.read} read</span><ArrowUpRight size={15} className="text-[#D4AF37] transition group-hover:translate-x-1" /></div>
  </Link>;
}

function TabBtn({ active, onClick, children }) {
  return <button onClick={onClick} aria-pressed={active} className={`focus-gold relative px-6 py-3 text-xs uppercase tracking-[.16em] transition ${active ? "text-[#1A2436]" : "text-[#6b7280] hover:text-[#1A2436]"}`}>{children}{active && <span className="absolute -bottom-px left-0 h-0.5 w-full bg-[#D4AF37]" />}</button>;
}

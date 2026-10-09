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
      <div className="mt-12">
        {items.map((it, i) => <InsightRow key={it.title} item={it} index={i} />)}
      </div>
      <p className="mt-8 text-center text-sm text-[#6b7280]">Subscribe to receive future editions directly to your inbox.</p>
    </div>
  </section>;
}

// One editorial row per article; the whole row links to /insights/<slug>.
// Mobile stacks "01 · Date", title, excerpt, read time; from lg the number, date, text and read time become four columns.
// The opaque cream background keeps the section's center rule behind the list rather than through article text.
export function InsightRow({ item, index }) {
  return (
    <Link
      to={`/insights/${insightSlug(item.title)}`}
      aria-label={`${item.title}. ${item.date}${item.read ? `, ${item.read} read` : ""}`}
      className="focus-gold group -mx-5 grid gap-y-4 border-t border-[#1A2436]/[.12] bg-[#FAF8F2] px-5 py-8 transition-colors duration-500 last:border-b hover:bg-[#FDFCF8] lg:-mx-6 lg:grid-cols-[minmax(0,.6fr)_minmax(0,1.4fr)_minmax(0,6fr)_minmax(0,2fr)] lg:items-baseline lg:gap-x-8 lg:px-6 lg:py-9"
    >
      <div className="flex items-center gap-3 text-[11px] lg:contents">
        <span className="tracking-[.22em] text-[#8e741e]">{String(index + 1).padStart(2, "0")}</span>
        <span aria-hidden="true" className="text-[#6b7280] lg:hidden">·</span>
        <span className="uppercase tracking-[.16em] text-[#6b7280] lg:text-[11px]">{item.date}</span>
      </div>
      <div>
        <h3 className="max-w-[640px] font-serif text-[1.3rem] leading-[1.2] transition-colors duration-500 group-hover:text-[#8e741e] lg:text-[1.4rem]">{item.title}</h3>
        {item.excerpt && <p className="mt-3 max-w-[560px] text-[13.5px]/[1.65] text-[#6b7280] lg:text-sm/[1.7]">{item.excerpt}</p>}
      </div>
      {item.read && (
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-[.16em] text-[#8e741e] lg:justify-self-end">
          {item.read} read
          <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </span>
      )}
    </Link>
  );
}

function TabBtn({ active, onClick, children }) {
  return <button onClick={onClick} aria-pressed={active} className={`focus-gold relative px-6 py-3 text-xs uppercase tracking-[.16em] transition ${active ? "text-[#1A2436]" : "text-[#6b7280] hover:text-[#1A2436]"}`}>{children}{active && <span className="absolute -bottom-px left-0 h-0.5 w-full bg-[#D4AF37]" />}</button>;
}

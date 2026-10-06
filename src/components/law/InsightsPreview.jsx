import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { newsletters } from "@/data/insights";
import { InsightRow } from "@/components/law/Insights";

export default function InsightsPreview() {
  const items = newsletters.slice(0, 3);
  return <section className="bg-[#FAF8F2] py-24 text-[#1A2436] lg:py-36">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <p className="eyebrow">Media &amp; Insights · 04</p>
      <h2 className="mt-6 font-serif text-5xl leading-none sm:text-7xl">Newsletters &amp;<br /><span className="text-[#8e741e]">Blog Posts.</span></h2>
      <div className="mt-12 divide-y divide-[#1A2436]/15 border-y border-[#1A2436]/15">
        {items.map((it, i) => <InsightRow key={it.title} item={it} index={i} />)}
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-[#6b7280]">Subscribe to receive future editions directly to your inbox.</p>
        <Link to="/insights" className="focus-gold inline-flex shrink-0 items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">View all insights <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  </section>;
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { newsletters } from "@/data/insights";
import { InsightRow } from "@/components/law/Insights";

export default function InsightsPreview() {
  const items = newsletters.slice(0, 3);

  return (
    // Center rule runs through the header gap on desktop; the article rows sit above it
    <section className="relative bg-[#FAF8F2] pb-20 pt-20 text-[#1A2436] md:pb-24 md:pt-28 lg:pb-28 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="mb-12 grid gap-y-6 lg:mb-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <p className="eyebrow">Media &amp; Insights · 04</p>
            <h2 className="mt-6 font-serif text-[clamp(3rem,13vw,4.5rem)] leading-[.95] tracking-[-.035em] lg:mt-8 lg:text-[clamp(3rem,5.5vw,5.5rem)]">
              Newsletters &amp;<br /><span className="text-[#8e741e]">Blog Posts.</span>
            </h2>
          </div>
          <p className="max-w-[460px] text-[15px]/[1.75] text-[#1A2436]/70 lg:col-span-5 lg:col-start-7 lg:self-end lg:text-base/[1.75]">
            Insights on legal developments, market trends, and opportunities shaping Nigeria and beyond.
          </p>
        </div>

        <div>
          {items.map((it, i) => <InsightRow key={it.title} item={it} index={i} />)}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm/[1.7] text-[#6b7280]">Subscribe to receive future editions directly to your inbox.</p>
          <Link to="/insights" className="focus-gold group inline-flex shrink-0 items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">
            View all insights <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}

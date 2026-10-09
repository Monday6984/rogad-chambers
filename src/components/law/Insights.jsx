import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { insightPath, insightTypes, featuredInsight, insightImage, insightPractices } from "@/data/insights";

// The /insights library: the featured article, then Newsletters / Blog Posts tabs (kept in the URL as ?type=blog
// so a tab can be linked to), then a quiet "stay informed" note. The featured article is left out of its list.
export default function Insights() {
  const [params, setParams] = useSearchParams();
  const active = insightTypes.find((t) => t.id === params.get("type")) ?? insightTypes[0];
  const items = active.items.filter((it) => it.title !== featuredInsight?.title);
  const tabs = useRef([]);
  const select = (t, focus) => {
    setParams(t.id === insightTypes[0].id ? {} : { type: t.id }, { replace: true, preventScrollReset: true });
    if (focus) tabs.current[insightTypes.indexOf(t)]?.focus();
  };
  // Arrow keys move between tabs, as in a standard tab list
  const onKey = (e) => {
    const i = insightTypes.indexOf(active);
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      select(insightTypes[(i + (e.key === "ArrowRight" ? 1 : -1) + insightTypes.length) % insightTypes.length], true);
    }
  };

  return <>
    {featuredInsight && <FeaturedInsight item={featuredInsight} />}

    <section id="insights" className="bg-white pb-20 pt-6 text-[#1A2436] lg:pb-28">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div role="tablist" aria-label="Publication type" onKeyDown={onKey} className="flex border-b border-[#1A2436]/15">
          {insightTypes.map((t, i) => {
            const on = t === active;
            return (
              <button key={t.id} ref={(el) => (tabs.current[i] = el)} role="tab" id={`tab-${t.id}`} aria-selected={on} aria-controls="insight-list" tabIndex={on ? 0 : -1} onClick={() => select(t)}
                className={`focus-gold relative px-5 py-4 text-xs uppercase tracking-[.18em] transition-colors sm:px-6 ${on ? "text-[#1A2436]" : "text-[#1A2436]/55 hover:text-[#1A2436]"}`}>
                {t.label}
                {on && <span aria-hidden="true" className="absolute -bottom-px left-0 h-0.5 w-full bg-[#D4AF37]" />}
              </button>
            );
          })}
        </div>

        <div id="insight-list" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="mt-4">
          {items.length
            ? items.map((it, i) => <InsightRow key={it.title} item={it} index={i} />)
            : <p className="py-16 text-center text-[15px] text-[#6b7280]">No {active.label.toLowerCase()} published yet.</p>}
        </div>

        <div className="mt-16 grid gap-6 border border-[#D4AF37]/40 bg-[#FAF8F2] px-6 py-10 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">Stay informed</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-tight">Receive future insights.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:border-l lg:border-[#D4AF37]/60 lg:pl-10">
            {/* No subscription service is connected yet, so this stays a message rather than a form that would silently fail */}
            <p className="text-[15px]/[1.8] text-[#1A2436]/75">Subscribe to receive future editions directly to your inbox.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
}

// Image left, details right; the whole block links to the article.
function FeaturedInsight({ item }) {
  const image = insightImage(item);
  const practice = insightPractices(item)[0];
  return (
    <section aria-label="Featured insight" className="bg-white pb-10 pt-16 text-[#1A2436] lg:pb-14 lg:pt-20">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <Link to={insightPath(item)} className="focus-gold group grid gap-y-8 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          {image && (
            <div className="relative aspect-[16/10] overflow-hidden bg-[#1A2436] lg:col-span-5">
              <Image src={image.src} alt={image.alt} loading="eager" className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none" />
            </div>
          )}
          <div className={image ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-8"}>
            <p className="eyebrow">Featured {item.typeLabel.toLowerCase()}</p>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.08] tracking-[-.02em] transition-colors duration-500 group-hover:text-[#8e741e]">{item.title}</h2>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[.16em] text-[#6b7280]">
              <span>{item.date}</span>
              {item.read && <><span aria-hidden="true" className="h-3 w-px bg-[#1A2436]/20" /><span>{item.read} read</span></>}
              {practice && <><span aria-hidden="true" className="h-3 w-px bg-[#1A2436]/20" /><span className="text-[#8e741e]">{practice.title}</span></>}
            </p>
            <p className="mt-5 max-w-[560px] text-[15px]/[1.8] text-[#1A2436]/75">{item.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 border-b border-[#D4AF37]/60 py-2 text-[11px] uppercase tracking-[.16em] text-[#8e741e]">
              Read insight <ArrowUpRight size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

// One editorial row per article; the whole row links to /insights/<slug>.
// Mobile stacks "01 · Date", title, excerpt, read time; from lg the number, date, text and read time become four columns.
// The opaque cream background keeps the section's center rule behind the list rather than through article text.
export function InsightRow({ item, index }) {
  return (
    <Link
      to={insightPath(item)}
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

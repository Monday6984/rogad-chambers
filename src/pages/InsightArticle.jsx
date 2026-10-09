import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { allInsights, findInsight, insightPath, insightPractices } from "@/data/insights";
import { practicePath } from "@/data/practices";
import { Image } from "@/components/ui/image";
import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import Footer from "@/components/law/Footer";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

// One template for every newsletter and blog post at /insights/:slug.
export default function InsightArticle() {
  const { slug } = useParams();
  const item = findInsight(slug);
  usePageTitle(item ? item.title : "Article not found");
  usePageDescription(item?.excerpt);
  usePageMeta(item ? { title: item.title, description: item.excerpt, image: item.image, type: "article" } : undefined);

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    {item ? <Article item={item} /> : <NotFound />}
    <Footer />
  </main>;
}

function Article({ item }) {
  const practices = insightPractices(item);
  // Same type first, then the other type, excluding this article
  const related = [...allInsights.filter((it) => it.type === item.type), ...allInsights.filter((it) => it.type !== item.type)]
    .filter((it) => it.title !== item.title).slice(0, 3);

  return <>
    <PageHero tone="cream" eyebrow={`Insights · ${item.typeLabel}`} title={item.title} titleSize="compact" />

    <article className="bg-white pb-20 pt-12 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <aside className="lg:col-span-3">
          <dl className="space-y-5 border-t border-[#1A2436]/[.12] pt-5 text-[11px] uppercase tracking-[.16em]">
            <Meta label="Published"><time>{item.date}</time></Meta>
            {item.read && <Meta label="Reading time">{item.read} read</Meta>}
            {practices.length > 0 && <Meta label={practices.length > 1 ? "Practice areas" : "Practice area"}>
              <ul className="space-y-2">{practices.map((p) => <li key={p.number}><Link to={practicePath(p)} className="focus-gold text-[#8e741e] underline-offset-4 hover:underline">{p.title}</Link></li>)}</ul>
            </Meta>}
          </dl>
          <Link to="/insights" className="focus-gold mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[.16em] text-[#1A2436]/70 hover:text-[#1A2436]"><ArrowLeft size={13} aria-hidden="true" /> All insights</Link>
        </aside>

        <div className="max-w-[720px] lg:col-span-8 lg:col-start-5">
          {item.image && <figure className="mb-10">
            <Image src={item.image} alt={item.imageAlt ?? ""} loading="eager" className="aspect-[16/9] w-full" />
            {item.imageCaption && <figcaption className="mt-3 text-xs text-[#6b7280]">{item.imageCaption}</figcaption>}
          </figure>}
          <p className="border-l border-[#D4AF37] pl-6 font-serif text-[1.35rem] leading-[1.5] sm:text-2xl">{item.excerpt}</p>
          {item.body
            ? <Body text={item.body} />
            : <p className="mt-10 text-[15px] italic text-[#6b7280]">Full article coming soon.</p>}
          {item.pdf && <a href={item.pdf} download className="focus-gold mt-10 inline-flex items-center gap-2 border border-[#D4AF37] px-5 py-3 text-xs uppercase tracking-[.16em] text-[#8e741e]">Download PDF edition <ArrowUpRight size={14} aria-hidden="true" /></a>}
        </div>
      </div>
    </article>

    {related.length > 0 && <section aria-labelledby="related-heading" className="border-t border-[#1A2436]/10 bg-[#FAF8F2] py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <h2 id="related-heading" className="eyebrow">More insights</h2>
        <ul className="mt-8 grid gap-px border-y border-[#1A2436]/[.12] bg-[#1A2436]/[.12] md:grid-cols-3">
          {related.map((r) => <li key={r.title} className="bg-[#FAF8F2]">
            <Link to={insightPath(r)} className="focus-gold group flex h-full flex-col gap-3 py-6 md:px-6">
              <span className="text-[11px] uppercase tracking-[.16em] text-[#6b7280]">{r.typeLabel} · {r.date}</span>
              <span className="font-serif text-[1.3rem] leading-snug transition-colors group-hover:text-[#8e741e]">{r.title}</span>
              <span className="mt-auto flex items-center gap-2 pt-2 text-[11px] uppercase tracking-[.16em] text-[#8e741e]">Read insight <ArrowUpRight size={13} aria-hidden="true" /></span>
            </Link>
          </li>)}
        </ul>
      </div>
    </section>}
  </>;
}

function Meta({ label, children }) {
  return <div><dt className="text-[#6b7280]">{label}</dt><dd className="mt-1.5 normal-case tracking-normal text-[15px] text-[#1A2436]">{children}</dd></div>;
}

// Plain-text body: blank lines separate paragraphs; "## " starts a section heading, "### " a subheading.
function Body({ text }) {
  return <div className="mt-10 space-y-6 text-[16px]/[1.85] text-[#1A2436]/80">
    {text.split(/\n\s*\n/).map((block, i) => {
      const b = block.trim();
      if (b.startsWith("### ")) return <h3 key={i} className="pt-2 font-serif text-[1.4rem] leading-snug text-[#1A2436]">{b.slice(4)}</h3>;
      if (b.startsWith("## ")) return <h2 key={i} className="pt-4 font-serif text-[1.8rem] leading-tight text-[#1A2436]">{b.slice(3)}</h2>;
      return <p key={i}>{b}</p>;
    })}
  </div>;
}

function NotFound() {
  return <section className="bg-white pb-32 pt-44">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <p className="eyebrow">Insights</p>
      <h1 className="mt-5 font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] text-[#1A2436] sm:text-7xl">Article not found.</h1>
      <Link to="/insights" className="focus-gold mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]"><ArrowLeft size={15} aria-hidden="true" /> All insights</Link>
    </div>
  </section>;
}

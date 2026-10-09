import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { newsletters, blogPosts, insightSlug } from "@/data/insights";
import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import Footer from "@/components/law/Footer";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

export default function InsightArticle() {
  const { slug } = useParams();
  const item = [...newsletters, ...blogPosts].find(it => insightSlug(it.title) === slug);
  usePageTitle(item ? item.title : "Article not found");
  usePageDescription(item?.excerpt);
  usePageMeta(item ? { title: item.title, description: item.excerpt, image: item.image, type: "article" } : undefined);
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    {item ? <>
      <PageHero eyebrow="Insights" title={item.title} />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex flex-wrap items-center gap-6 border-b border-[#1A2436]/15 pb-6 text-xs uppercase tracking-[.14em] text-[#6b7280]">
            <span className="text-[#D4AF37]">{item.date}</span>
            <span>{item.read} read</span>
          </div>
          <p className="mt-10 border-l border-[#B89325] pl-6 font-serif text-2xl leading-9 text-[#1A2436]">{item.excerpt}</p>
          {item.body
            ? <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-[#1A2436]/70">{item.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>
            : <p className="mt-10 text-sm italic text-[#6b7280]">Full article coming soon.</p>}
          <Link to="/insights" className="focus-gold mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]"><ArrowLeft size={15} /> All insights</Link>
        </div>
      </section>
    </> : <section className="bg-white pt-44 pb-32">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-5 font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] text-[#1A2436] sm:text-7xl">Article not found.</h1>
        <Link to="/insights" className="focus-gold mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]"><ArrowLeft size={15} /> All insights</Link>
      </div>
    </section>}
    <Footer />
  </main>;
}

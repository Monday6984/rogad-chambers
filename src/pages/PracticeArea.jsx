import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import PracticeNavigator from "@/components/law/PracticeNavigator";
import PracticeCta from "@/components/law/PracticeCta";
import PracticeSections from "@/components/law/PracticeSections";
import Footer from "@/components/law/Footer";
import { findPractice } from "@/data/practices";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

// One template for every practice at /practice-areas/:slug, from src/data/practices.js.
// Practices with a `detail` object get its structured sections; others show their approved write-up as one overview.
export default function PracticeArea() {
  const { slug } = useParams();
  const practice = findPractice(slug);
  const description = practice?.detail?.seoDescription ?? practice?.description;
  usePageTitle(practice ? practice.title : "Practice area not found");
  usePageDescription(description);
  usePageMeta(practice ? { title: practice.title, description, image: practice.detail?.heroImage ?? practice.image, type: "article" } : undefined);

  return (
    <main className="overflow-x-hidden bg-white text-[#1A2436]">
      <Header />
      {practice ? <Practice practice={practice} /> : <NotFound />}
      <Footer />
    </main>
  );
}

function Practice({ practice }) {
  const { detail } = practice;

  return (
    <>
      <PageHero
        tone="cream"
        eyebrow={`Practice Areas · ${practice.number}`}
        title={detail ? <HeroTitle lines={detail.heroTitle ?? [practice.title]} /> : practice.title}
        titleSize={detail?.heroTitle ? "compact" : "default"}
        lead={detail?.heroLead}
        intro={detail?.intro ?? practice.description}
        action={detail?.heroCta && <HeroCta label={detail.heroCta} />}
        image={detail?.heroImage ?? practice.image}
        imageAlt={detail?.heroImageAlt ?? `${practice.title} practice`}
        imagePosition={detail?.heroImagePosition}
        imageLabel={detail ? detail.heroLabel ?? ["People", "Perspective", "Practical solutions"] : undefined}
      />

      {detail ? <PracticeSections sections={detail.sections} /> : <PracticeOverviewFallback practice={practice} />}

      {/* All six practices, with this one marked as current */}
      <section className="border-t border-[#1A2436]/10 bg-white pb-20 pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto mb-8 flex max-w-[1500px] items-center justify-between gap-6 px-5 lg:px-10">
          <h2 className="eyebrow">Our practice areas</h2>
          <Link to="/practice-areas" className="focus-gold group inline-flex items-center gap-2 text-[11px] uppercase tracking-[.16em] text-[#8e741e]"><ArrowLeft size={13} aria-hidden="true" /> All practice areas</Link>
        </div>
        <PracticeNavigator current={practice.title} label="Our practice areas" />
      </section>

      <PracticeCta cta={detail?.cta} />
    </>
  );
}

// Gold call to action in the hero, to the same contact route as the CTA band.
function HeroCta({ label }) {
  return (
    <Link to="/contact#become-our-client" className="focus-gold group inline-flex items-center gap-3 bg-[#D4AF37] px-6 py-3.5 text-xs uppercase tracking-[.18em] text-[#1A2436] transition-colors duration-300 hover:bg-[#8e741e] hover:text-white">
      {label}
      <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
    </Link>
  );
}

// The practice name as set lines (`detail.heroTitle`) with the gold full stop.
function HeroTitle({ lines }) {
  return lines.map((line, i) => (
    <span key={line} className="block">{line}{i === lines.length - 1 && <span className="text-[#D4AF37]">.</span>}</span>
  ));
}

// Practices without structured detail yet: the approved write-up as one overview.
function PracticeOverviewFallback({ practice }) {
  const paragraphs = practice.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <section className="relative bg-white pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />
      <div className="relative mx-auto grid max-w-[1500px] gap-y-8 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">{practice.tag}</p>
          <h2 className="mt-8 font-serif text-[clamp(2rem,3vw,2.75rem)] leading-[1.1]">Overview</h2>
        </div>
        <div className="max-w-[640px] space-y-6 text-[15px]/[1.8] text-[#1A2436]/75 lg:col-span-6 lg:col-start-7 lg:text-base/[1.8]">
          {paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="rule-section bg-white pb-32 pt-44">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <p className="eyebrow">Practice Areas</p>
        <h1 className="mt-5 font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] sm:text-7xl">Practice area not found.</h1>
        <Link to="/practice-areas" className="focus-gold mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]"><ArrowLeft size={15} aria-hidden="true" /> All practice areas</Link>
      </div>
    </section>
  );
}

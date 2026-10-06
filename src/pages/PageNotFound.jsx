import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/law/Header";
import Footer from "@/components/law/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function PageNotFound() {
  usePageTitle("Page not found");
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <section className="rule-section bg-white pt-44 pb-32">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] sm:text-7xl">This page doesn't exist.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1A2436]/70">The link may be out of date. Use the menu above or return to the homepage.</p>
        <Link to="/" className="focus-gold mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]"><ArrowLeft size={15} /> Back to homepage</Link>
      </div>
    </section>
    <Footer />
  </main>;
}

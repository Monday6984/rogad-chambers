import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import Lawyers from "@/components/law/Lawyers";
import Footer from "@/components/law/Footer";
import { assets } from "@/data/assets";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

const description = "Meet the partners and associates of Rogad Chambers, a multidisciplinary legal team providing counsel across the firm's practice areas.";

export default function People() {
  usePageTitle("Our People");
  usePageDescription(description);
  usePageMeta({ title: "Our People", description });

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero
      tone="cream"
      eyebrow="Our People"
      title="Counsel of record."
      intro="A multidisciplinary team combining legal excellence with commercial insight across every practice area."
      action={<span aria-hidden="true" className="block h-px w-full max-w-[420px] bg-[#D4AF37]/70" />}
      image={assets.backgrounds.peopleHero}
      imageAlt="Rogad Chambers boardroom with the firm's crest on a marble wall and the city skyline at sunset"
      imagePosition="68% center"
    />
    <Lawyers />
    <Footer />
  </main>;
}

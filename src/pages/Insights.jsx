import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import InsightsSection from "@/components/law/Insights";
import Footer from "@/components/law/Footer";
import { assets } from "@/data/assets";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

const description = "Explore legal insights, newsletters and practical commentary from Rogad Chambers on corporate advisory, litigation, technology, energy, real estate and other practice areas.";

export default function Insights() {
  usePageTitle("Legal Insights, Newsletters & Blog Posts");
  usePageDescription(description);
  usePageMeta({ title: "Legal Insights, Newsletters & Blog Posts", description });

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero
      tone="cream"
      eyebrow="Insights"
      title={<>Newsletters &amp;<br />Blog Posts.</>}
      intro="Legal perspectives, regulatory developments and practical insights for businesses and decision-makers."
      action={<span aria-hidden="true" className="block h-px w-16 bg-[#D4AF37]" />}
      image={assets.backgrounds.executiveDesk}
      imageAlt="Fountain pen and documents on an executive desk at golden hour"
      imagePosition="45% center"
    />
    <InsightsSection />
    <Footer />
  </main>;
}

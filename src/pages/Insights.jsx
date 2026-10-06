import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import InsightsSection from "@/components/law/Insights";
import Footer from "@/components/law/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Insights() {
  usePageTitle("Insights");
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero eyebrow="Insights" title="Newsletters & Blog Posts." />
    <InsightsSection showHeader={false} />
    <Footer />
  </main>;
}

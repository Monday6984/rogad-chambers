import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import Practices from "@/components/law/Practices";
import PracticeDetail from "@/components/law/PracticeDetail";
import Footer from "@/components/law/Footer";
import { practices, practiceSlug } from "@/data/practices";
import { usePageTitle } from "@/hooks/use-page-title";

export default function PracticeAreas() {
  usePageTitle("Practice Areas");
  const explore = (p) => document.getElementById(practiceSlug(p.title))?.scrollIntoView({ behavior: "smooth" });
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero eyebrow="Practice Areas" title="Our Practice Areas." intro="Integrated counsel across the transactions, industries and disputes shaping modern commerce." />
    <Practices showHeader={false} onOpen={explore} />
    {practices.map(p => <PracticeDetail key={p.number} practice={p} />)}
    <Footer />
  </main>;
}

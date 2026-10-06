import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import AboutSection from "@/components/law/About";
import LearnMore from "@/components/law/LearnMore";
import CtaBand from "@/components/law/CtaBand";
import Footer from "@/components/law/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function About() {
  usePageTitle("About Us");
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero eyebrow="About Us" title="The Firm." intro="Modern perspective. Enduring principles. Uncompromising standards." />
    <AboutSection />
    <LearnMore />
    <CtaBand number="03" />
    <Footer />
  </main>;
}

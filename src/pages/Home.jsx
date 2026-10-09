import { useNavigate } from "react-router-dom";
import Header from "@/components/law/Header";
import Hero from "@/components/law/Hero";
import FirmIntro from "@/components/law/FirmIntro";
import Practices from "@/components/law/Practices";
import LawyersPreview from "@/components/law/LawyersPreview";
import InsightsPreview from "@/components/law/InsightsPreview";
import CtaBand from "@/components/law/CtaBand";
import Footer from "@/components/law/Footer";
import { practicePath } from "@/data/practices";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Home() {
  usePageTitle();
  const navigate = useNavigate();
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <Hero />
    <FirmIntro />
    <Practices onOpen={(p) => navigate(practicePath(p))} />
    <LawyersPreview />
    <InsightsPreview />
    <CtaBand number="05" />
    <Footer />
  </main>;
}

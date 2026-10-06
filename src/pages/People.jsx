import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import Lawyers from "@/components/law/Lawyers";
import Footer from "@/components/law/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function People() {
  usePageTitle("Our People");
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero eyebrow="Our People" title="Counsel of record." intro="A multidisciplinary team combining legal excellence with commercial insight across every practice area." />
    <Lawyers />
    <Footer />
  </main>;
}

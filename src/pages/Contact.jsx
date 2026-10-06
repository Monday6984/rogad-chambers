import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import ClientSection from "@/components/law/ClientSection";
import ContactSection from "@/components/law/ContactSection";
import Footer from "@/components/law/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Contact() {
  usePageTitle("Contact");
  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero eyebrow="Contact" title="Become Our Client." intro="Take the first step today." />
    <ClientSection />
    <ContactSection />
    <Footer />
  </main>;
}

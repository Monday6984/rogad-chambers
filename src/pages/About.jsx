import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import AboutSection, { Approach } from "@/components/law/About";
import LearnMore from "@/components/law/LearnMore";
import AboutPeople from "@/components/law/AboutPeople";
import CtaBand from "@/components/law/CtaBand";
import Footer from "@/components/law/Footer";
import { assets } from "@/data/assets";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

// The firm's own opening sentence (from the About copy) doubles as the page description.
const description = "Rogad Chambers is a modern, client-focused law firm committed to delivering exceptional legal services with integrity, professionalism, and excellence.";

export default function About() {
  usePageTitle("About Us");
  usePageDescription(description);
  usePageMeta({ title: "About Us", description });

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero
      eyebrow="About Us"
      title="The Firm."
      intro="Modern perspective. Enduring principles. Uncompromising standards."
      image={assets.practices.litigation}
      imageAlt="Sunlit stone colonnade"
      imagePosition="85% 35%"
    />
    <AboutSection />
    <Approach />
    <LearnMore />
    <AboutPeople />
    <CtaBand number="05" />
    <Footer />
  </main>;
}

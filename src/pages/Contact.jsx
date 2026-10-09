import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import ClientSection from "@/components/law/ClientSection";
import ContactSection from "@/components/law/ContactSection";
import Footer from "@/components/law/Footer";
import { assets } from "@/data/assets";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

const description = "Contact Rogad Chambers to discuss your legal needs and explore strategic, commercially focused legal counsel across our practice areas.";

export default function Contact() {
  usePageTitle("Become Our Client");
  usePageDescription(description);
  usePageMeta({ title: "Become Our Client", description });

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero
      tone="cream"
      eyebrow="Contact"
      title="Become Our Client."
      intro="Take the first step today."
      action={<span aria-hidden="true" className="block h-px w-full max-w-[420px] bg-[#D4AF37]/70" />}
      image={assets.backgrounds.contactHero}
      imageAlt="Law office meeting room with leather chairs, bookshelves and a city skyline at sunset"
      imagePosition="35% center"
    />
    <ClientSection />
    <ContactSection />
    <Footer />
  </main>;
}

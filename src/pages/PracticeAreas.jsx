import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import PracticeNavigator from "@/components/law/PracticeNavigator";
import PracticeDirectory from "@/components/law/PracticeDirectory";
import PracticeStrength from "@/components/law/PracticeStrength";
import PracticeCta from "@/components/law/PracticeCta";
import Footer from "@/components/law/Footer";
import { assets } from "@/data/assets";
import { findPractice, practicePath } from "@/data/practices";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

const description = "Explore the practice areas of Rogad Chambers, providing strategic legal counsel across corporate advisory, disputes, media, aviation, energy, infrastructure, real estate, intellectual property and technology.";

// Practice Areas landing: an editorial directory that leads to each practice's own page.
export default function PracticeAreas() {
  usePageTitle("Practice Areas");
  usePageDescription(description);
  usePageMeta({ title: "Practice Areas", description });

  // Older links pointed at sections on this page (/practice-areas#corporate-advisory); send them to the practice page
  const { hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const practice = hash && findPractice(decodeURIComponent(hash.slice(1)));
    if (practice) navigate(practicePath(practice), { replace: true });
  }, [hash, navigate]);

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero
      tone="cream"
      eyebrow="Practice Areas"
      title={<>Our Practice<br />Areas<span className="text-[#D4AF37]">.</span></>}
      intro="Strategic legal counsel across the matters and industries that shape business, investment and growth."
      image={assets.practiceAreasHero}
      imageAlt="City skyline at golden hour, reflected in the glass of an office tower"
      imagePosition="40% 50%"
      imageLabel={["People", "Perspective", "Practical solutions"]}
    />
    <PracticeNavigator />
    <PracticeIntro />
    <PracticeDirectory />
    <PracticeStrength />
    <PracticeCta />
    <Footer />
  </main>;
}

function PracticeIntro() {
  return (
    <section className="relative bg-[#FAF8F2] pb-16 pt-20 text-[#1A2436] lg:pb-20 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />
      <div className="relative mx-auto grid max-w-[1500px] gap-y-8 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">Our Approach</p>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[1] tracking-[-.03em] lg:mt-8">Legal counsel built around the matter.</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
          <p className="max-w-[600px] text-[15px]/[1.8] text-[#1A2436]/75 lg:text-base/[1.8]">
            At Rogad Chambers, we provide strategic legal advice across a range of practice areas, combining technical excellence with commercial understanding to help our clients navigate complex legal and business environments.
          </p>
          <span aria-hidden="true" className="mt-8 block h-px w-12 bg-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}

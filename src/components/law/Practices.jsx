import { practices } from "@/data/practices";
import PracticeCard from "@/components/law/PracticeCard";

export default function Practices({ showHeader = true, eyebrow = "Capabilities · 02", onOpen }) {
  const open = (p) => onOpen ? onOpen(p) : document.getElementById("practices")?.scrollIntoView({ behavior: "smooth" });

  return (
    // Center rule continues through the header on desktop; the card row sits above it.
    // On the homepage this follows the Firm Intro, so a lighter top padding avoids stacking two full section paddings.
    <section id="practices" className={`rule-section relative bg-white pb-20 text-[#1A2436] max-lg:bg-none md:pb-24 lg:pb-28 ${showHeader ? "pt-12 md:pt-20 lg:pt-24" : "pt-20 md:pt-28 lg:pt-36"}`}>
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      {showHeader && (
        <div className="relative mx-auto mb-12 grid max-w-[1500px] gap-y-6 px-5 lg:mb-[72px] lg:grid-cols-12 lg:gap-x-10 lg:px-10">
          <div className="lg:col-span-6">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-6 font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[.95] tracking-[-.035em] lg:mt-8">Our Practice Areas</h2>
          </div>
          <p className="max-w-[460px] text-[15px]/[1.7] text-[#6b7280] sm:text-base/[1.7] lg:col-span-5 lg:col-start-7 lg:self-end lg:text-[17px]">
            Integrated counsel across the transactions, industries and disputes shaping modern commerce.
          </p>
        </div>
      )}

      {/* One continuous wall: the 1px gaps show the backing colour as hairline dividers */}
      <div className="relative grid gap-px border-y border-[#D4AF37]/35 bg-[#48505E] md:grid-cols-3 xl:grid-cols-6">
        {practices.map((p) => <PracticeCard key={p.number} practice={p} onOpen={() => open(p)} />)}
      </div>
    </section>
  );
}

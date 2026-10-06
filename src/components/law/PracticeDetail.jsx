import { Image } from "@/components/ui/image";
import { practiceSlug, practiceSummaries } from "@/data/practices";

export default function PracticeDetail({ practice }) {
  return <section id={practiceSlug(practice.title)} className="rule-section border-t border-[#D4AF37]/25 bg-white py-24 text-[#1A2436] lg:py-32">
    <div className="mx-auto grid max-w-[1500px] gap-14 px-5 lg:grid-cols-12 lg:px-10">
      <div className="lg:col-span-5">
        <div className="relative h-72 overflow-hidden border border-[#D4AF37]/35 sm:h-96 lg:h-[440px]">
          <Image src={practice.image} alt={`${practice.title} practice`} className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2436]/40 to-transparent" />
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <p className="eyebrow">Practice · {practice.number}</p>
        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">{practice.title}</h2>
        <p className="mt-5 text-xs uppercase tracking-[.16em] text-[#8e741e]">{practice.tag}</p>
        <p className="mt-8 text-lg leading-8 text-[#1A2436]/70">{practiceSummaries[practice.number]}</p>
      </div>
    </div>
  </section>;
}

import { lawyers } from "@/data/lawyers";
import { LawyerGrid } from "@/components/law/LawyerCard";

const isPartner = (l) => /partner/i.test(l.title);

// The full team on /people: Partners, then Associates, each with a short introduction beside the heading.
// Portraits come from `profile_image` in src/data/lawyers.js; without one, the card shows the initials placeholder.
export default function Lawyers() {
  const partners = lawyers.filter(isPartner);
  const associates = lawyers.filter(l => !isPartner(l));
  return <section className="bg-white pb-24 pt-20 text-[#1A2436] lg:pb-32 lg:pt-28">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <Group
        eyebrow="Partners · 01"
        title="Partners."
        intro="Our partners bring experience and sector knowledge to complex legal and commercial matters across a range of industries."
        items={partners}
        offset={0}
      />
      <div aria-hidden="true" className="my-20 h-px bg-[#D4AF37]/40 lg:my-28" />
      <Group
        eyebrow="Associates · 02"
        title="Associates."
        intro="Our associates support the firm's work through research, diligence and practical legal support across our practice areas."
        items={associates}
        offset={partners.length}
      />
    </div>
  </section>;
}

function Group({ eyebrow, title, intro, items, offset }) {
  return <div>
    <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-6 font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[.95] tracking-[-.035em] lg:mt-8">{title}</h2>
      </div>
      <p className="max-w-[520px] border-l border-[#D4AF37] pl-6 text-[15px]/[1.8] text-[#1A2436]/75 lg:col-span-6 lg:col-start-7 lg:self-end">{intro}</p>
    </div>
    <div className="mt-14 lg:mt-16"><LawyerGrid items={items} offset={offset} /></div>
  </div>;
}

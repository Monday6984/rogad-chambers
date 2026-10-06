import { lawyers } from "@/data/lawyers";
import LawyerCard from "@/components/law/LawyerCard";

const isPartner = (l) => /partner/i.test(l.title);

export default function Lawyers() {
  const partners = lawyers.filter(isPartner);
  const associates = lawyers.filter(l => !isPartner(l));
  return <section className="rule-section bg-white py-24 text-[#1A2436] lg:py-36">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <Group eyebrow="Partners · 01" title="Partners." items={partners} offset={0} />
      <div className="mt-24"><Group eyebrow="Associates · 02" title="Associates." items={associates} offset={partners.length} /></div>
    </div>
  </section>;
}

function Group({ eyebrow, title, items, offset }) {
  return <div>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-6 font-serif text-5xl leading-none sm:text-7xl">{title}</h2>
    <div className="mt-16 grid gap-px bg-[#1A2436]/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items.map((l, i) => <LawyerCard key={l.name} lawyer={l} index={offset + i} />)}
    </div>
  </div>;
}

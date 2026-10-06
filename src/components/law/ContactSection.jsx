import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const offices = [
  { name: "Office 1", address: "House 6, Yekinni Street, Pedro, Gbagada, Lagos State, Nigeria." },
  { name: "Office 2", address: "12, Ayo Alabi Road, Oke Ira, Ogba, Lagos State, Nigeria." }
];

export default function ContactSection() {
  return <section id="contact" className="border-t border-[#D4AF37]/40 bg-[#1A2436] pt-24 text-[#F4F1EA]">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <p className="eyebrow">Contact &amp; Offices · 01</p>
      <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-none sm:text-7xl">Move forward with <span className="text-[#D4AF37]">confidence.</span></h2>
      <div className="mt-16 grid gap-px bg-[#D4AF37]/25 lg:grid-cols-2">
        {offices.map(o => <article key={o.name} className="bg-[#1A2436] p-7 sm:p-10">
          <MapPin className="mb-8 text-[#D4AF37]" />
          <p className="eyebrow">{o.name} · Lagos</p>
          <address className="mt-5 max-w-md font-serif text-2xl not-italic leading-9">{o.address}</address>
          <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`} className="focus-gold mt-8 inline-flex items-center gap-2 border-b border-[#D4AF37] pb-2 text-xs uppercase tracking-[.16em] text-[#D4AF37]">View site survey <ArrowUpRight size={14} /></a>
        </article>)}
      </div>
      <div className="grid border-b border-[#D4AF37]/30 py-16 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6">
          <BigLink href="tel:+2347065908039" icon={<Phone />}>+234 706 590 8039</BigLink>
          <BigLink href="https://wa.me/2347048824491" icon={<MessageCircle />}>+234 704 882 4491</BigLink>
        </div>
        <BigLink href="mailto:rogadchambers@gmail.com" icon={<Mail />}>rogadchambers@gmail.com</BigLink>
      </div>
    </div>
  </section>;
}

function BigLink({ href, icon, children }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="focus-gold group flex items-center gap-4 border-b border-white/20 pb-3 font-serif text-xl text-[#F4F1EA] transition hover:border-[#D4AF37] hover:text-[#D4AF37] sm:text-3xl">{icon}{children}</a>;
}

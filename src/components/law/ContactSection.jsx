import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { assets } from "@/data/assets";
import { offices, phones, email } from "@/data/contact";

// Navy offices and contact band on the Contact page; the reception photo sits on the right
// behind a navy gradient so the text stays readable. Data comes from src/data/contact.js.
export default function ContactSection() {
  return <section id="contact" className="relative overflow-hidden border-t border-[#D4AF37]/40 bg-[#1A2436] pt-20 text-[#F4F1EA] lg:pt-28">
    <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
      <Image src={assets.backgrounds.contactOffices} alt="" className="h-full w-full opacity-15 lg:opacity-100" style={{ objectPosition: "70% center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2436] via-[#1A2436]/75 to-[#1A2436]/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A2436] to-transparent" />
    </div>

    <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
      <p className="eyebrow text-[#D4AF37]">Contact &amp; Offices · 01</p>
      <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[.98] tracking-[-.03em] lg:mt-8">
        <span className="block">Move forward</span>
        <span className="block">with <span className="text-[#D4AF37]">confidence.</span></span>
      </h2>
      <span aria-hidden="true" className="mt-8 block h-px w-14 bg-[#D4AF37]" />

      <div className="mt-14 grid gap-y-10 lg:max-w-[760px] lg:grid-cols-2">
        {offices.map((o, i) => <article key={o.name} className={i ? "border-t border-[#F4F1EA]/15 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" : "lg:pr-10"}>
          <MapPin size={20} strokeWidth={1.25} aria-hidden="true" className="text-[#D4AF37]" />
          <p className="mt-5 text-[11px] uppercase tracking-[.18em] text-[#D4AF37]">{o.name} · {o.city}</p>
          <address className="mt-3 max-w-xs font-serif text-[1.35rem] not-italic leading-[1.4]">{o.address}</address>
          <a target="_blank" rel="noopener noreferrer" href={o.mapUrl} aria-label={`View site survey for ${o.name}, ${o.address} (opens Google Maps in a new tab)`} className="focus-gold group mt-6 inline-flex items-center gap-2 border-b border-[#D4AF37]/60 py-2 text-[11px] uppercase tracking-[.16em] text-[#D4AF37] transition-colors hover:border-[#D4AF37] hover:text-[#F4F1EA]">View site survey <ArrowUpRight size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" /></a>
        </article>)}
      </div>

      <div className="mt-16 grid gap-y-2 border-y border-[#F4F1EA]/15 py-8 lg:mt-20 lg:grid-cols-3 lg:gap-x-10 lg:py-10">
        <ContactLink href={phones[0].href} icon={Phone}>{phones[0].label}</ContactLink>
        <ContactLink href={phones[1].whatsapp} icon={MessageCircle} label={`${phones[1].label} on WhatsApp (opens in a new tab)`}>{phones[1].label}</ContactLink>
        <ContactLink href={email.href} icon={Mail}>{email.label}</ContactLink>
      </div>
    </div>
  </section>;
}

function ContactLink({ href, icon: Icon, label, children }) {
  const external = href.startsWith("http");
  return (
    <a href={href} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="focus-gold flex items-center gap-4 py-3 font-serif text-[clamp(1.2rem,1.8vw,1.6rem)] transition-colors [overflow-wrap:anywhere] hover:text-[#D4AF37]">
      <Icon size={20} strokeWidth={1.25} aria-hidden="true" className="shrink-0 text-[#D4AF37]" />
      {children}
    </a>
  );
}

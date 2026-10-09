import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { email, offices, phones } from "@/data/contact";

const rule = "border-[#FAF8F2]/[.18]";
const label = "text-[11px] uppercase tracking-[.18em] text-[#D4AF37]";

// Offices → contact → legal, on the same container and 12-column grid as the page above.
// The Contact page already shows offices and contact details directly above the footer, so there only the legal bar renders.
export default function Footer() {
  const { pathname } = useLocation();
  const showDirectory = pathname !== "/contact";

  return (
    <footer className="bg-[#1A2436] text-[#FAF8F2]">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        {showDirectory && (
          <>
            {/* Offices: the divider sits on the page centre, continuing the CTA's center rule */}
            <div className={`grid gap-y-7 border-t ${rule} pb-14 pt-16 lg:grid-cols-12 lg:gap-x-10 lg:pb-20 lg:pt-24`}>
              {offices.map((o, i) => (
                <div key={o.name} className={`lg:col-span-6 ${i ? `border-t ${rule} pt-7 lg:-ml-5 lg:border-l lg:border-t-0 lg:pl-[19px] lg:pt-0` : ""}`}>
                  <MapPin size={20} strokeWidth={1.25} aria-hidden="true" className="text-[#D4AF37]" />
                  <p className={`mt-6 ${label}`}>{o.name} · {o.city}</p>
                  <address className="mt-4 max-w-[440px] font-serif text-[clamp(1.15rem,1.7vw,1.55rem)] not-italic leading-[1.45]">{o.address}</address>
                  <a
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View site survey for ${o.name}, ${o.address} (opens Google Maps in a new tab)`}
                    className="focus-gold group mt-7 inline-flex items-center gap-2 border-b border-[#D4AF37]/50 py-2 text-[11px] uppercase tracking-[.16em] text-[#D4AF37] transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#FAF8F2]"
                  >
                    View site survey
                    <ArrowUpRight size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </a>
                </div>
              ))}
            </div>

            {/* Contact: phones from column 1, email from column 7 */}
            <div className={`grid gap-y-10 border-t ${rule} py-12 lg:grid-cols-12 lg:gap-x-10 lg:py-16`}>
              <div className="lg:col-span-5">
                <p className={label}>Phone</p>
                <div className="mt-2">
                  {phones.map((p, i) => <ContactLink key={p.href} href={p.href} icon={i ? MessageCircle : Phone}>{p.label}</ContactLink>)}
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-7">
                <p className={label}>Email</p>
                <div className="mt-2">
                  <ContactLink href={email.href} icon={Mail}>{email.label}</ContactLink>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Legal bar (on /contact the Contact section above already ends with a rule) */}
        <div className={`grid gap-y-5 ${showDirectory ? `border-t ${rule}` : ""} py-7 text-[11px] leading-[1.7] text-[#FAF8F2]/60 lg:grid-cols-12 lg:gap-x-10 lg:py-8`}>
          <p className="lg:col-span-4">© {new Date().getFullYear()} Rogad Chambers. All rights reserved.</p>
          <p id="accessibility" className="lg:col-span-3 lg:col-start-7"><span className="text-[#FAF8F2]/85">Accessibility Statement.</span> We are committed to an accessible digital experience and welcome requests for reasonable assistance.</p>
          <p id="conflicts" className="lg:col-span-3 lg:col-start-10"><span className="text-[#FAF8F2]/85">Conflict of Interest Disclaimer.</span> Contacting the firm does not create a lawyer-client relationship until formal engagement and conflict clearance.</p>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({ href, icon: Icon, children }) {
  return (
    <a href={href} className={`focus-gold flex items-center gap-4 border-b ${rule} py-4 font-serif text-[clamp(1.2rem,2vw,1.75rem)] leading-[1.3] transition-colors duration-300 [overflow-wrap:anywhere] hover:border-[#D4AF37]/60 hover:text-[#D4AF37]`}>
      <Icon size={18} strokeWidth={1.25} aria-hidden="true" className="shrink-0 text-[#D4AF37]" />
      {children}
    </a>
  );
}

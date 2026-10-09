import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Closing statement before the footer: headline on the left, quiet action area from column 7 (as in the sections above).
// Defaults are the "Become Our Client" CTA; pages can pass their own eyebrow, title (node), body and label.
// `titleSize="medium"` suits longer headlines that would otherwise wrap to three lines.
export default function CtaBand({
  number,
  eyebrow = `Engage the Firm · ${number}`,
  title = <>Become Our<br /><span className="text-[#D4AF37]">Client.</span></>,
  body = "Take the first step today — contact our team to schedule a confidential consultation and discover how we can help you move forward with confidence.",
  label = "Request counsel",
  titleSize = "large"
}) {
  return (
    <section className="relative bg-[#1A2436] pb-20 pt-20 text-[#F4F1EA] md:pb-28 md:pt-28 lg:pb-36 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      <div className="relative mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-6">
          <p className="eyebrow text-[#D4AF37]">{eyebrow}</p>
          <h2 className={`mt-6 font-serif text-[clamp(3rem,12vw,4.5rem)] leading-[.94] tracking-[-.04em] lg:mt-8 ${titleSize === "medium" ? "lg:text-[clamp(3rem,4.2vw,4.75rem)]" : "lg:text-[clamp(4rem,7vw,7rem)]"}`}>
            {title}
          </h2>
        </div>

        <div className="lg:col-span-5 lg:col-start-7 lg:self-end">
          <p className="max-w-[500px] text-[15px]/[1.8] text-[#F4F1EA]/70 lg:text-[17px]/[1.75]">
            {body}
          </p>
          <Link to="/contact#become-our-client" className="focus-gold group mt-9 inline-flex items-center gap-3 border-b border-[#D4AF37]/50 py-[14px] text-xs uppercase tracking-[.18em] text-[#D4AF37] transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#F4F1EA] lg:mt-10">
            {label}
            <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}

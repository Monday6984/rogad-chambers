import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/data/siteContent";

export default function FirmIntro() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    // Center rule continues from the Hero on desktop; hidden on small screens, as in the Hero
    <section className="rule-section relative bg-white pb-10 pt-20 text-[#1A2436] max-lg:bg-none md:pb-14 md:pt-28 lg:pb-16 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />
      <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <motion.div {...reveal()} className="lg:col-span-5">
          <p className="eyebrow">The Firm · 01</p>
          <h2 className="mt-6 font-serif text-[clamp(3.25rem,5.5vw,6rem)] leading-[.95] tracking-[-.035em] lg:mt-8">
            <span className="lg:block">Counsel with</span> consequence.
          </h2>
        </motion.div>

        <motion.div {...reveal(0.12)} className="lg:col-span-6 lg:col-start-7">
          <p className="max-w-[600px] text-[15px]/[1.8] text-[#1A2436]/75 lg:text-base/[1.75]">{about.split("\n\n")[0]}</p>
          <Link to="/about" className="focus-gold group mt-9 inline-flex items-center gap-3 text-[11px] uppercase tracking-[.16em] text-[#8e741e] transition-colors hover:text-[#1A2436] sm:text-xs lg:mt-10">
            Discover the firm
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

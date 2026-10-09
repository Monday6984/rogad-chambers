import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { assets } from "@/data/assets";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-[90svh] items-end overflow-hidden lg:min-h-[84svh] border-b border-[#D4AF37]/40 pt-[85px] lg:pt-[105px]">
      {/* Architecture: faint wash on mobile, clearly present on the right half from lg up */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <Image src={assets.hero} loading="eager" alt="Monumental modern architecture in Lagos" className="h-full w-full opacity-[.28] saturate-[.6] lg:opacity-[.78]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40 lg:via-white/50 lg:via-[35%] lg:to-transparent" />
      </div>
      <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-16 lg:px-10 lg:pb-16 lg:pt-10"
      >
        <p className="mb-7 text-xs uppercase tracking-[.3em] text-[#8e741e] sm:text-sm">Rogad Chambers</p>
        <h1 className="max-w-[960px] font-serif text-[clamp(3rem,14vw,5rem)] font-bold leading-[.92] tracking-[-.04em] text-[#1A2436] lg:text-[clamp(3.75rem,6.5vw,7rem)]">
          <span className="block">Strategic Legal</span>
          <span className="block">Solutions.</span>
          <span className="mt-[.12em] block text-[#8e741e]">Exceptional</span>
          <span className="block text-[#8e741e]">Results.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:items-end lg:gap-16">
          <p className="max-w-[560px] border-l border-[#D4AF37] pl-6 text-[15px] leading-[1.7] text-[#1A2436]/75 sm:text-base">
            Rogad Chambers provides innovative, commercially focused legal solutions to businesses, investors, institutions, and individuals. We combine legal excellence with strategic insight to help our clients navigate complex legal challenges with confidence.
          </p>
          <Link to="/contact#become-our-client" className="focus-gold flex shrink-0 items-center gap-3 self-start text-xs uppercase tracking-[.18em] text-[#8e741e] lg:self-end">
            Request counsel <ArrowUpRight size={17} />
          </Link>
        </div>

        <Link to="/about" className="focus-gold mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#6b7280] lg:mt-16">
          Discover the firm <ArrowDown size={15} />
        </Link>
      </motion.div>
    </section>
  );
}

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { assets } from "@/data/assets";

export default function Hero() {
  return <section id="home" className="relative flex min-h-screen items-end overflow-hidden border-b border-[#D4AF37]/40 pt-28">
    <Image src={assets.hero} loading="eager" alt="Monumental modern architecture in Lagos" className="absolute inset-0 h-full w-full opacity-15" />
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#D4AF37]/25" />
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-20 lg:px-10 lg:pb-28">
      <p className="mb-7 uppercase tracking-[.3em] text-[#8e741e] text-2xl">ROGAD CHAMBERS ·</p>
      <h1 className="max-w-6xl font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] text-[#1A2436] sm:text-7xl lg:text-[7.6rem]">Strategic Legal Solutions.<br /><span className="text-[#8e741e]">Exceptional Results.</span></h1>
      <div className="mt-10 flex max-w-4xl flex-col gap-8 border-l border-[#D4AF37] pl-6 lg:flex-row lg:items-end lg:justify-between"><p className="max-w-2xl text-lg leading-8 text-[#1A2436]/70">Rogad Chambers provides innovative, commercially focused legal solutions to businesses, investors, institutions, and individuals. We combine legal excellence with strategic insight to help our clients navigate complex legal challenges with confidence.</p><Link to="/contact#become-our-client" className="focus-gold flex shrink-0 items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">Request counsel <ArrowUpRight size={17} /></Link></div>
      <Link to="/about" className="focus-gold mt-14 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#6b7280]">Discover the firm <ArrowDown size={15} /></Link>
    </motion.div>
  </section>;
}

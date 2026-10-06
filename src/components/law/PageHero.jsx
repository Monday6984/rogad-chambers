import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, intro }) {
  return <section className="relative overflow-hidden border-b border-[#D4AF37]/40 bg-white pt-40 pb-14 lg:pt-48 lg:pb-16">
    <div className="absolute left-1/2 top-0 h-full w-px bg-[#D4AF37]/25" />
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-6xl font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] text-[#1A2436] sm:text-7xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1A2436]/70">{intro}</p>}
    </motion.div>
  </section>;
}

import { motion, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";

// Inner-page hero. With `image`, the right half carries an architectural photo (from just below the
// fixed header to the bottom rule) and a short band under the text on mobile; without it, pages are unchanged.
// Optional: `tone="cream"` for a cream text panel, `imageLabel` (array of short lines) as a quiet gold caption on the photo,
// `titleSize="compact"` for long titles that would otherwise stack to four lines beside the image,
// `lead` for a short serif line under the title, and `action` (a link) below the intro.
export default function PageHero({ eyebrow, title, lead, intro, action, image, imageAlt = "", imagePosition = "center", tone = "white", imageLabel, titleSize = "default" }) {
  const reduceMotion = useReducedMotion();

  return <section className={`relative overflow-hidden border-b border-[#D4AF37]/40 pt-40 pb-14 lg:pt-48 lg:pb-16 ${tone === "cream" ? "bg-[#FAF8F2]" : "bg-white"}`}>
    <div aria-hidden="true" className="absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/25 lg:block" />
    {image && (
      <div className="absolute bottom-0 right-0 top-[105px] hidden w-[calc(50%-20px)] lg:block">
        <Image src={image} alt={imageAlt} loading="eager" className="h-full w-full" style={{ objectPosition: imagePosition }} />
        {imageLabel?.length > 0 && (
          // Small translucent backing keeps the caption legible over bright parts of the photo
          <p className="absolute bottom-10 right-10 border-l border-[#D4AF37] bg-[#1A2436]/70 py-3 pl-4 pr-5 text-[11px] uppercase leading-[2] tracking-[.2em] text-[#D4AF37] backdrop-blur-sm">
            {imageLabel.map((line) => <span key={line} className="block">{line}</span>)}
          </p>
        )}
      </div>
    )}
    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
      <div className={image ? "lg:max-w-[calc(50%-60px)]" : ""}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`mt-5 max-w-6xl font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] text-[#1A2436] ${titleSize === "compact" ? "sm:text-6xl xl:text-[clamp(3.75rem,4.6vw,4.5rem)]" : "sm:text-7xl"}`}>{title}</h1>
        {lead && <p className="mt-6 font-serif text-[1.35rem] leading-snug text-[#1A2436] sm:text-2xl">{lead}</p>}
        {intro && <p className={`${lead ? "mt-4" : "mt-6"} max-w-2xl text-lg leading-8 text-[#1A2436]/70`}>{intro}</p>}
        {action && <div className="mt-8">{action}</div>}
      </div>
      {image && <Image src={image} alt="" aria-hidden="true" loading="eager" className="mt-10 h-48 w-full sm:h-64 lg:hidden" style={{ objectPosition: imagePosition }} />}
    </motion.div>
  </section>;
}

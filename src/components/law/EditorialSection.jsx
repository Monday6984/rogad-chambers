// Two-column editorial statement (About page): headline on columns 1–5; lead line, copy and an
// optional principles row from column 7, on the same grid and center rule as the homepage.
export default function EditorialSection({ id, eyebrow, lines, lead, leadTone = "navy", paragraphs, principles, tone = "white" }) {
  return (
    <section id={id} className={`relative pb-20 pt-20 text-[#1A2436] md:pb-24 md:pt-24 lg:pb-28 lg:pt-32 ${tone === "cream" ? "bg-[#FAF8F2]" : "bg-white"}`}>
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

      <div className="relative mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6 font-serif text-[clamp(3.25rem,5vw,5.5rem)] leading-[.95] tracking-[-.04em] lg:mt-8">
            {lines.map((line) => <span key={line} className="block">{line}</span>)}
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className={`border-l border-[#D4AF37] pl-6 font-serif text-[1.2rem]/[1.45] lg:text-[1.4rem]/[1.45] ${leadTone === "gold" ? "text-[#8e741e]" : ""}`}>{lead}</p>
          <div className="mt-8 max-w-[640px] space-y-6 pl-6 text-[15px]/[1.8] text-[#1A2436]/75">
            {paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
          {principles && (
            <ul className="ml-6 mt-12 grid max-w-[640px] grid-cols-3 border-y border-[#D4AF37]/40">
              {principles.map((p, i) => (
                <li key={p} className={`py-5 text-center text-[10px] uppercase tracking-[.14em] text-[#8e741e] sm:text-[11px] sm:tracking-[.18em] ${i ? "border-l border-[#D4AF37]/40" : ""}`}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight, BarChart3, Lightbulb, Plane, ShieldCheck, Ship, Users } from "lucide-react";
import { Image } from "@/components/ui/image";
import { practices, practicePath } from "@/data/practices";

// Building blocks for a practice page, driven by `practice.detail.sections` in src/data/practices.js.
// Each section declares a `type`. Its label is "01 · The Practice" style, numbered in order;
// sections marked `unnumbered` show the plain eyebrow and don't advance the count.
export default function PracticeSections({ sections }) {
  let count = 0;
  return sections.map((section) => {
    const label = section.unnumbered ? section.eyebrow : `${String(++count).padStart(2, "0")} · ${section.eyebrow}`;
    const Section = types[section.type];
    return Section ? <Section key={section.eyebrow} {...section} label={label} /> : null;
  });
}

const body = "text-[15px]/[1.8] text-[#1A2436]/75 lg:text-base/[1.8]";

function Heading({ label, title }) {
  return (
    <>
      <p className="eyebrow">{label}</p>
      <h2 className="mt-6 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[1] tracking-[-.03em] lg:mt-8">
        {title.map((line) => <span key={line} className="block">{line}</span>)}
      </h2>
    </>
  );
}

const Rule = ({ className = "" }) => <span aria-hidden="true" className={`mt-8 block h-px w-12 bg-[#D4AF37] ${className}`} />;
const Paragraphs = ({ paragraphs, className = "" }) => (
  <div className={`space-y-6 ${body} ${className}`}>{paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div>
);

// Heading left (≈40%), copy right behind a thin gold rule, on cream.
function PracticeOverview({ label, title, paragraphs }) {
  return (
    <section className="bg-[#FAF8F2] py-20 text-[#1A2436] lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-5">
          <Heading label={label} title={title} />
          <Rule />
        </div>
        <Paragraphs paragraphs={paragraphs} className="max-w-[680px] lg:col-span-7 lg:col-start-6 lg:border-l lg:border-[#D4AF37]/60 lg:pl-10" />
      </div>
    </section>
  );
}

// Numbered grids read across; `columns` sets the desktop count (3 from lg, or 4 from xl for long lists).
// Each cell knows its column position per breakpoint, so dividers only appear between columns.
const grids = {
  3: { cls: "sm:grid-cols-2 lg:grid-cols-3", bp: "lg", n: 3 },
  4: { cls: "sm:grid-cols-2 xl:grid-cols-4", bp: "xl", n: 4 }
};
const dividers = {
  lg: { on: "lg:border-l lg:pl-5", off: "lg:border-l-0 lg:pl-0" },
  xl: { on: "xl:border-l xl:pl-5", off: "xl:border-l-0 xl:pl-0" }
};

function NumberedGrid({ items, columns, start = 0 }) {
  const grid = grids[columns];
  return (
    <ol className={`grid border-t border-[#1A2436]/[.12] ${grid.cls}`}>
      {items.map((item, i) => (
        <li key={item} className={`flex gap-4 border-b border-[#1A2436]/[.12] py-5 sm:px-5 ${i % 2 ? "sm:border-l" : "sm:border-l-0 sm:pl-0"} ${i % grid.n ? dividers[grid.bp].on : dividers[grid.bp].off}`}>
          <span className="pt-0.5 text-[11px] tracking-[.18em] text-[#8e741e]">{String(start + i + 1).padStart(2, "0")}</span>
          <span className="text-[15px] leading-snug">{item}</span>
        </li>
      ))}
    </ol>
  );
}

// Heading left; items right. Numbered lists use the grid above; plain lists flow down
// newspaper-style columns separated by thin gold rules. `groups` ([{ title, items }]) splits a
// numbered list under small headings, each numbered from 01 (or running on with `continuous`).
function PracticeList({ label, title, items, groups, numbered = false, columns = 3, continuous = false }) {
  return (
    <section className="border-t border-[#1A2436]/10 bg-white py-20 text-[#1A2436] lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-4">
          <Heading label={label} title={title} />
          <Rule />
        </div>
        <div className={columns === 4 ? "lg:col-span-8 lg:col-start-5" : "lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-6"}>
          {groups ? (
            <div className="space-y-12">
              {groups.map((g, gi) => (
                <div key={g.title}>
                  <h3 className="mb-4 font-serif text-2xl leading-tight">{g.title}</h3>
                  <NumberedGrid items={g.items} columns={columns} start={continuous ? groups.slice(0, gi).reduce((n, x) => n + x.items.length, 0) : 0} />
                </div>
              ))}
            </div>
          ) : numbered ? (
            <NumberedGrid items={items} columns={columns} />
          ) : (
            <ul className="gap-x-10 sm:columns-2 sm:[column-rule:1px_solid_rgba(212,175,55,.45)] lg:columns-3">
              {items.map((item) => (
                <li key={item} className="break-inside-avoid border-b border-[#1A2436]/[.12] py-3.5 text-[15px] leading-snug">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

// Image (≈42%, full-bleed to the page edge) beside text (≈58%) on desktop; image above text on mobile.
// Without an `image` it becomes a text-led two-column section, so a photo can be added later in the data alone.
// `related` (practice titles) adds links to those practices' pages; `reverse` puts the image on the right on desktop.
function PracticeSplit({ label, title, paragraphs, image, imageAlt, imagePosition = "center", related, reverse = false }) {
  if (!image) {
    return (
      <section className="border-t border-[#1A2436]/10 bg-white py-20 text-[#1A2436] lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
          <div className="lg:col-span-5">
            <Heading label={label} title={title} />
            <Rule />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <Paragraphs paragraphs={paragraphs} className="max-w-[600px]" />
            <RelatedPractices titles={related} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`grid border-t border-[#1A2436]/10 bg-white text-[#1A2436] ${reverse ? "lg:grid-cols-[58%_42%]" : "lg:grid-cols-[42%_58%]"}`}>
      <div className={`relative min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[460px] ${reverse ? "lg:order-last" : ""}`}>
        <Image src={image} alt={imageAlt} className="absolute inset-0 h-full w-full" style={{ objectPosition: imagePosition }} />
      </div>
      <div className="px-5 py-16 sm:px-10 lg:self-center lg:px-16 lg:py-24 xl:px-20">
        <p className="eyebrow">{label}</p>
        <h2 className="mt-6 border-l border-[#D4AF37] pl-6 font-serif text-[clamp(2.25rem,3.5vw,3.5rem)] leading-[1.02] tracking-[-.03em] lg:mt-8">
          {title.map((line) => <span key={line} className="block">{line}</span>)}
        </h2>
        <Rule className="ml-6" />
        <Paragraphs paragraphs={paragraphs} className="mt-8 max-w-[600px]" />
        <RelatedPractices titles={related} />
      </div>
    </section>
  );
}

// Quiet links to connected practices, resolved from the practice data so routes stay in one place.
function RelatedPractices({ titles }) {
  const items = titles?.map((t) => practices.find((p) => p.title === t)).filter(Boolean);
  if (!items?.length) return null;
  return (
    <ul className="mt-10 max-w-[600px] border-t border-[#1A2436]/[.12]">
      {items.map((p) => (
        <li key={p.number} className="border-b border-[#1A2436]/[.12]">
          <Link to={practicePath(p)} className="focus-gold group flex items-center justify-between gap-6 py-4">
            <span className="font-serif text-lg leading-snug transition-colors duration-300 group-hover:text-[#8e741e]">{p.title}</span>
            <span className="flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[.16em] text-[#8e741e]">
              Explore <ArrowUpRight size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Line icons a step can name in the data (`icon: "lightbulb"`); steps without one show their number.
const stepIcons = { lightbulb: Lightbulb, chart: BarChart3, people: Users, plane: Plane, ship: Ship, shield: ShieldCheck };

// Heading left; stages right in columns divided by thin rules (stacked on mobile).
function PracticeSteps({ label, title, steps }) {
  return (
    <section className="border-t border-[#1A2436]/10 bg-[#FAF8F2] py-20 text-[#1A2436] lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-y-12 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-4">
          <Heading label={label} title={title} />
          <Rule />
        </div>
        <ol className="grid gap-y-10 md:grid-cols-3 lg:col-span-8 lg:col-start-5">
          {steps.map((step, i) => (
            <li key={step.title} className={`border-t border-[#1A2436]/[.12] pt-6 md:border-t-0 md:pt-0 ${i ? "md:border-l md:border-[#1A2436]/[.12] md:pl-8" : "md:pr-8"} ${i === 1 ? "md:pr-8" : ""}`}>
              {stepIcons[step.icon] ? <StepIcon icon={stepIcons[step.icon]} /> : <span className="font-serif text-[2.5rem] leading-none text-[#D4AF37]">{String(i + 1).padStart(2, "0")}</span>}
              <h3 className="mt-6 font-serif text-[1.35rem] leading-tight">{step.title}</h3>
              <p className={`mt-3 ${body}`}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepIcon({ icon: Icon }) {
  return (
    <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/70 text-[#8e741e]">
      <Icon size={24} strokeWidth={1.25} />
    </span>
  );
}

// Statement: large heading left, short copy right with a gold rule; white, or cream with `tone="cream"`.
function PracticeStatement({ label, title, paragraphs, tone = "white" }) {
  return (
    <section className={`border-t border-[#1A2436]/10 py-20 text-[#1A2436] lg:py-28 ${tone === "cream" ? "bg-[#FAF8F2]" : "bg-white"}`}>
      <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <div className="lg:col-span-5">
          <Heading label={label} title={title} />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
          <Paragraphs paragraphs={paragraphs} className="max-w-[600px]" />
          <Rule />
        </div>
      </div>
    </section>
  );
}

const types = { overview: PracticeOverview, list: PracticeList, split: PracticeSplit, steps: PracticeSteps, statement: PracticeStatement };

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { lawyerPath, lawyerQualifications } from "@/data/lawyers";
import LawyerPortrait from "@/components/law/LawyerPortrait";

// The whole card is one link to the lawyer's profile page.
// `compact` (About page preview) keeps number, portrait, name, role and practice line; summary and qualifications stay on the full cards.
export default function LawyerCard({ lawyer, index, compact = false }) {
  const qualifications = compact ? [] : lawyerQualifications(lawyer);

  return (
    <Link to={lawyerPath(lawyer)} aria-label={`${lawyer.name}, ${lawyer.title}. View profile`} className="focus-gold group flex h-full flex-col text-[#1A2436]">
      <LawyerPortrait lawyer={lawyer} interactive className="aspect-[4/5] w-full" />

      <p className="mt-6 text-[11px] tracking-[.22em] text-[#8e741e]">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-3 font-serif text-[1.3rem] leading-[1.1] transition-colors duration-500 group-hover:text-[#8e741e]">{lawyer.name}</h3>
      <p className="mt-2 text-sm text-[#1A2436]/70">{lawyer.title}</p>
      {lawyer.specialization && <p className="mt-4 text-[10.5px] uppercase leading-relaxed tracking-[.14em] text-[#8e741e]">{lawyer.specialization}</p>}
      {!compact && lawyer.focus && <p className="mt-3 text-[13.5px] leading-[1.65] text-[#6b7280]">{lawyer.focus}</p>}
      {qualifications.length > 0 && <p className="mt-4 border-t border-[#1A2436]/10 pt-3 text-xs leading-relaxed text-[#6b7280]">{qualifications.join(" · ")}</p>}

      <span className="mt-auto flex items-center gap-2 pt-6 text-[10.5px] uppercase tracking-[.16em] text-[#8e741e]">
        <span aria-hidden="true" className="-mr-2 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:mr-0 group-hover:w-6 motion-reduce:transition-none" />
        View profile
        <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
      </span>
    </Link>
  );
}

// Connected editorial grid: 1 column on mobile, 2 on tablet, `columns` (3 or 4) on desktop, with hairline dividers between columns.
// Cells are opaque white so a section's center rule shows only in the gaps between rows, never across card content.
// Every column carries the 1px border (transparent at row starts) so all portraits get identical widths and heights.
// The negative margin lets each card keep equal side padding while the outer text still aligns with the container.
const desktopColumns = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

export function LawyerGrid({ items, offset = 0, columns = 3, compact = false }) {
  return (
    <div className={`relative grid gap-y-16 md:-mx-5 md:grid-cols-2 md:gap-y-20 lg:-mx-6 ${desktopColumns[columns]}`}>
      {items.map((l, i) => (
        <div key={l.name} className={`border-[#1A2436]/[.12] bg-white md:border-l md:px-5 lg:px-6 ${i % 2 ? "" : "md:border-l-transparent"} ${i % columns ? "lg:border-l-[#1A2436]/[.12]" : "lg:border-l-transparent"}`}>
          <LawyerCard lawyer={l} index={offset + i} compact={compact} />
        </div>
      ))}
    </div>
  );
}

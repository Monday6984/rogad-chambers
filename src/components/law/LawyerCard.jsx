import { Image } from "@/components/ui/image";

export default function LawyerCard({ lawyer, index }) {
  return <article className="group bg-white p-7 transition-colors hover:bg-[#FAF8F2]">
    {lawyer.profile_image ? (
      <Image src={lawyer.profile_image} alt={lawyer.name} fittingType="fill" className="h-20 w-20 overflow-hidden rounded-full border border-[#D4AF37] object-cover" />
    ) : (
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] font-serif text-2xl text-[#1A2436] transition group-hover:bg-[#D4AF37] group-hover:text-white">{lawyer.initials || "RC"}</div>
    )}
    <p className="mt-7 font-mono text-xs text-[#D4AF37]">{String(index + 1).padStart(2, "0")}</p>
    <h3 className="mt-3 font-serif text-xl leading-tight">{lawyer.name}</h3>
    <p className="mt-1 text-sm font-medium text-[#1A2436]/80">{lawyer.title}</p>
    <p className="mt-4 text-xs uppercase tracking-[.12em] text-[#D4AF37]">{lawyer.specialization}</p>
    <p className="mt-3 text-sm leading-6 text-[#6b7280]">{lawyer.focus}</p>
    <p className="mt-4 border-t border-[#1A2436]/10 pt-3 text-xs text-[#6b7280]">{lawyer.bar}</p>
  </article>;
}

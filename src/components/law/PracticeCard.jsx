import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
export default function PracticeCard({ practice, onOpen }) {
  return <article className="group relative h-[570px] min-w-[290px] flex-1 overflow-hidden border-r border-[#D4AF37]/35 transition-[flex] duration-700 lg:min-w-[150px] lg:hover:flex-[2.3]">
    <Image src={practice.image} alt={`${practice.title} practice`} className="absolute inset-0 h-full w-full opacity-60 transition duration-700 group-hover:opacity-100" /><div className="absolute inset-0 bg-gradient-to-t from-[#1A2436] via-[#1A2436]/70 to-[#1A2436]/20" />
    <div className="absolute inset-0 flex flex-col justify-between p-6"><span className="font-mono text-xs text-[#D4AF37]">{practice.number}</span><div><p className="mb-4 translate-y-2 text-[10px] uppercase tracking-[.16em] text-[#D4AF37] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{practice.tag}</p><h3 className="font-serif text-3xl leading-tight text-white">{practice.title}</h3><button onClick={() => onOpen(practice)} className="focus-gold mt-6 flex items-center gap-2 border-b border-[#D4AF37] pb-2 text-xs uppercase tracking-[.15em] text-[#D4AF37]">Explore practice <ArrowUpRight size={14} /></button></div></div>
  </article>;
}

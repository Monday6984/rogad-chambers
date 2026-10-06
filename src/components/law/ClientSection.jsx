import { Image } from "@/components/ui/image";
import { assets } from "@/data/assets";
import { becomeClient } from "@/data/siteContent";
import IntakeForm from "@/components/law/IntakeForm";

export default function ClientSection() {
  return <section id="become-our-client" className="relative overflow-hidden bg-white py-24 text-[#1A2436] lg:py-40">
    <Image src={assets.backgrounds.lagosSkyline} alt="Lagos skyline at dusk" className="absolute inset-0 h-full w-full opacity-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
    <div className="relative mx-auto grid max-w-[1500px] gap-16 px-5 lg:grid-cols-2 lg:px-10">
      <div><div className="space-y-5 text-lg leading-8 text-[#1A2436]/70">{becomeClient.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div></div>
      <div className="lg:sticky lg:top-32 lg:self-start"><IntakeForm /><p className="mt-4 text-center text-xs leading-5 text-[#6b7280]">Submitting opens WhatsApp. Your information is treated as confidential.</p></div>
    </div>
  </section>;
}

import { Compass, Layers, LineChart } from "lucide-react";
import { Image } from "@/components/ui/image";
import { assets } from "@/data/assets";

const points = [
  { icon: Layers, lines: ["Integrated", "expertise"] },
  { icon: LineChart, lines: ["Commercial", "insight"] },
  { icon: Compass, lines: ["Practical", "solutions"] }
];

// "One firm. Multiple disciplines." — image on the left (45%), copy on cream (55%); stacks on mobile.
export default function PracticeStrength() {
  return (
    <section className="grid bg-[#FAF8F2] text-[#1A2436] lg:grid-cols-[45%_55%]">
      <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[560px]">
        <Image src={assets.backgrounds.boardroom} alt="Boardroom overlooking the city skyline at golden hour" className="absolute inset-0 h-full w-full object-[40%_center]" />
      </div>

      <div className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        <p className="eyebrow">Our Strength</p>
        <h2 className="mt-6 border-l border-[#D4AF37] pl-6 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[1] tracking-[-.03em] lg:mt-8">
          <span className="block">One firm.</span>
          <span className="block">Multiple disciplines.</span>
        </h2>
        <p className="mt-8 max-w-[560px] text-[15px]/[1.8] text-[#1A2436]/75 lg:text-base/[1.8]">
          Our multidisciplinary approach allows us to provide integrated legal solutions across corporate, commercial, regulatory, property, technology and dispute matters, helping our clients manage risk, seize opportunities and achieve their strategic objectives.
        </p>

        <ul className="mt-12 grid max-w-[560px] grid-cols-3 border-t border-[#1A2436]/[.12] pt-8">
          {points.map(({ icon: Icon, lines }, i) => (
            <li key={lines[0]} className={i ? "border-l border-[#1A2436]/[.12] pl-4 sm:pl-6" : "pr-4"}>
              <Icon size={22} strokeWidth={1.25} aria-hidden="true" className="text-[#8e741e]" />
              <p className="mt-4 font-serif text-[1.05rem] leading-[1.25] sm:text-lg">
                {lines.map((l) => <span key={l} className="block">{l}</span>)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

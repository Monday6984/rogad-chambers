import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

// Portrait frame shared by the lawyer cards and profile pages.
// Renders the photo when `profile_image` is set, otherwise an initials placeholder of exactly the same size,
// so adding a photo later only needs the path in src/data/lawyers.js.
// `interactive` adds the card hover treatment (driven by a parent `group`).
export default function LawyerPortrait({ lawyer, className, interactive = false, loading = "lazy" }) {
  const motion = interactive ? "transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:transform-none" : "";

  return (
    <div className={cn("relative overflow-hidden bg-[#F4F1EA]", className)}>
      {lawyer.profile_image ? (
        <Image src={lawyer.profile_image} alt={`Portrait of ${lawyer.name}, ${lawyer.title}`} loading={loading} className={cn("absolute inset-0 h-full w-full object-[50%_30%] saturate-[.9]", motion)} />
      ) : (
        <div aria-hidden="true" className={cn("absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#FAF8F2_0%,#F1ECE1_60%,#E9E3D6_100%)]", motion)}>
          <span className="flex aspect-square w-[44%] max-w-[180px] items-center justify-center rounded-full border border-[#D4AF37]/70 font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] tracking-[.06em] text-[#1A2436]/75">
            {lawyer.initials || "RC"}
          </span>
        </div>
      )}
      {interactive && <div aria-hidden="true" className="absolute inset-0 bg-[#1A2436]/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100" />}
    </div>
  );
}

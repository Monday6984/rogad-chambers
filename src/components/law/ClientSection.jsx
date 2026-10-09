import { becomeClient } from "@/data/siteContent";
import IntakeForm from "@/components/law/IntakeForm";

// "Let's work together": the approved introduction beside the confidential intake form.
// Keeps id="become-our-client": the site's "Become Our Client" and "Request counsel" links point here.
export default function ClientSection() {
  return <section id="become-our-client" className="scroll-mt-24 bg-[#FAF8F2] py-20 text-[#1A2436] lg:py-28">
    <div className="mx-auto grid max-w-[1500px] gap-14 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
      <div className="lg:col-span-6">
        <p className="eyebrow">Let's work together</p>
        <h2 className="mt-6 font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.02] tracking-[-.03em] lg:mt-8">Strategic legal counsel for what matters most.</h2>
        <span aria-hidden="true" className="mt-8 block h-px w-14 bg-[#D4AF37]" />
        <div className="mt-8 max-w-[600px] space-y-5 text-[15px]/[1.8] text-[#1A2436]/75 lg:text-base/[1.8]">
          {becomeClient.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
      <div className="lg:sticky lg:top-32 lg:col-span-6 lg:self-start">
        <IntakeForm />
      </div>
    </div>
  </section>;
}

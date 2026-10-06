import { useState } from "react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

// WhatsApp number that receives intake requests (international format, digits only).
const WHATSAPP_NUMBER = "2347065908039";

const initial = { industry: "", objective: "", urgency: "", name: "", contact: "" };

export default function IntakeForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const set = (k, v) => setForm({ ...form, [k]: v });

  const send = (e) => {
    e.preventDefault();
    // Enter in the single step-1 field submits the form natively; treat it as "Continue" until the last step.
    if (step < 2) return next();
    const msg = [
      "Confidential consultation request",
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      `Industry: ${form.industry}`,
      `Urgency: ${form.urgency}`,
      `Objective: ${form.objective}`
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const next = () => {
    if (step === 0 && form.industry.trim()) setStep(1);
    if (step === 1 && form.objective.trim() && form.urgency) setStep(2);
  };

  return <form onSubmit={send} className="border border-[#D4AF37]/50 bg-white p-6 sm:p-10">
    <div className="mb-9 flex gap-2">{[0, 1, 2].map(n => <span key={n} className={`h-px flex-1 ${n <= step ? "bg-[#D4AF37]" : "bg-[#1A2436]/20"}`} />)}</div>
    <p className="mb-8 text-xs uppercase tracking-[.2em] text-[#8e741e]">Confidential intake · Step {step + 1} of 3</p>
    {step === 0 && <Field label="Your industry or sector"><input required value={form.industry} onChange={e => set("industry", e.target.value)} placeholder="e.g. Financial services" className="field" /></Field>}
    {step === 1 && <div className="space-y-8">
      <Field label="What would you like to achieve?"><textarea required value={form.objective} onChange={e => set("objective", e.target.value)} placeholder="Briefly describe your objective" className="field min-h-28 resize-none" /></Field>
      <Field label="Matter urgency"><select required value={form.urgency} onChange={e => set("urgency", e.target.value)} className="field"><option value="">Select urgency</option><option>Immediate</option><option>Within 7 days</option><option>Planning ahead</option></select></Field>
    </div>}
    {step === 2 && <div className="space-y-8">
      <Field label="Your name"><input required value={form.name} onChange={e => set("name", e.target.value)} className="field" /></Field>
      <Field label="Phone or email"><input required value={form.contact} onChange={e => set("contact", e.target.value)} className="field" /></Field>
    </div>}
    <div className="mt-10 flex items-center justify-between">
      {step > 0 ? <button type="button" onClick={() => setStep(step - 1)} className="focus-gold flex items-center gap-2 text-xs uppercase tracking-[.15em] text-[#6b7280]"><ArrowLeft size={15} /> Back</button> : <span />}
      {step < 2
        ? <button type="button" onClick={next} className="focus-gold flex items-center gap-2 border border-[#D4AF37] px-5 py-3 text-xs uppercase tracking-[.15em] text-[#8e741e]">Continue <ArrowRight size={15} /></button>
        : <button type="submit" className="focus-gold flex items-center gap-2 bg-[#D4AF37] px-5 py-3 text-xs uppercase tracking-[.15em] text-white">Send via WhatsApp <Send size={14} /></button>}
    </div>
  </form>;
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-3 block text-xs uppercase tracking-[.16em] text-[#1A2436]/60">{label}</span>{children}</label>;
}

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Lock, Send } from "lucide-react";

// WhatsApp number that receives intake requests (international format, digits only).
const WHATSAPP_NUMBER = "2347065908039";

const initial = { industry: "", objective: "", urgency: "", name: "", contact: "" };

const steps = [
  { label: "Your industry or sector", prompt: "Tell us about your industry or sector." },
  { label: "Your matter", prompt: "Tell us about the matter you need help with." },
  { label: "Your details", prompt: "Tell us how we can reach you." }
];

// Shortcuts fill the same free-text industry field; "Other" focuses it for a custom entry.
const sectors = ["Financial services", "Energy & natural resources", "Real estate & construction", "Aviation & maritime", "Media & entertainment", "Technology & innovation"];

const box = "w-full border border-[#1A2436]/20 bg-white px-4 py-3.5 text-[15px] text-[#1A2436] outline-none transition placeholder:text-[#1A2436]/40 focus:border-[#D4AF37] focus-visible:ring-1 focus-visible:ring-[#D4AF37]";

export default function IntakeForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const industryInput = useRef(null);
  const set = (k, v) => { setForm({ ...form, [k]: v }); setError(""); };

  const send = (e) => {
    e.preventDefault();
    // Enter in the single step-1 field submits the form natively; treat it as "Continue" until the last step.
    if (step < 2) return next();
    if (!form.name.trim() || !form.contact.trim()) return setError("Please enter your name and a phone number or email address.");
    if (sending) return;
    const msg = [
      "Confidential consultation request",
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      `Industry: ${form.industry}`,
      `Urgency: ${form.urgency}`,
      `Objective: ${form.objective}`
    ].join("\n");
    // Guard against double-clicks opening WhatsApp twice
    setSending(true);
    setTimeout(() => setSending(false), 3000);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const next = () => {
    if (step === 0) {
      if (!form.industry.trim()) return setError("Please choose or enter your industry or sector.");
      setStep(1);
    }
    if (step === 1) {
      if (!form.objective.trim() || !form.urgency) return setError("Please describe your objective and select the urgency.");
      setStep(2);
    }
    setError("");
  };

  const back = () => { setError(""); setStep(step - 1); };
  const isOther = form.industry.trim() !== "" && !sectors.includes(form.industry);

  return <form onSubmit={send} noValidate className="border border-[#D4AF37]/60 bg-[#FCFBF7] p-6 sm:p-10">
    <ol className="mb-10 grid grid-cols-3" aria-label="Intake progress">
      {steps.map((s, n) => {
        const done = n < step, current = n === step;
        return (
          <li key={s.label} aria-current={current ? "step" : undefined} className="relative flex flex-col items-center text-center">
            {n > 0 && <span aria-hidden="true" className={`absolute right-1/2 top-4 h-px w-full -translate-x-4 ${n <= step ? "bg-[#D4AF37]" : "bg-[#1A2436]/15"}`} />}
            <span className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border text-xs ${current ? "border-[#D4AF37] bg-[#D4AF37] text-[#1A2436]" : done ? "border-[#D4AF37] bg-[#FCFBF7] text-[#8e741e]" : "border-[#1A2436]/25 bg-[#FCFBF7] text-[#1A2436]/50"}`}>
              {done ? <Check size={14} aria-hidden="true" /> : n + 1}
            </span>
            <span className={`mt-3 max-w-[9rem] text-[10px] uppercase leading-snug tracking-[.14em] sm:text-[11px] ${current || done ? "text-[#8e741e]" : "text-[#1A2436]/50"}`}>
              {s.label}<span className="sr-only">{done ? " (completed)" : current ? " (current step)" : ""}</span>
            </span>
          </li>
        );
      })}
    </ol>

    <h3 className="font-serif text-[clamp(2rem,3vw,2.6rem)] leading-tight">Confidential intake.</h3>
    <p className="mt-2 text-[15px] text-[#1A2436]/70">{steps[step].prompt}</p>

    <div className="mt-8">
      {step === 0 && <div>
        <Field label="Your industry or sector">
          <input ref={industryInput} required value={form.industry} onChange={e => set("industry", e.target.value)} placeholder="e.g. Financial services" className={box} />
        </Field>
        <p className="mb-3 mt-7 text-[11px] uppercase tracking-[.16em] text-[#1A2436]/70">Or choose a common sector</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {sectors.map(sector => (
            <Choice key={sector} selected={form.industry === sector} onClick={() => set("industry", sector)}>{sector}</Choice>
          ))}
          <Choice selected={isOther} onClick={() => { if (sectors.includes(form.industry)) set("industry", ""); industryInput.current?.focus(); }}>Other</Choice>
        </div>
      </div>}

      {step === 1 && <div className="space-y-7">
        <Field label="What would you like to achieve?"><textarea required value={form.objective} onChange={e => set("objective", e.target.value)} placeholder="Briefly describe your objective" className={`${box} min-h-32 resize-none`} /></Field>
        <Field label="Matter urgency"><select required value={form.urgency} onChange={e => set("urgency", e.target.value)} className={box}><option value="">Select urgency</option><option>Immediate</option><option>Within 7 days</option><option>Planning ahead</option></select></Field>
      </div>}

      {step === 2 && <div className="space-y-7">
        <Field label="Your name"><input required autoComplete="name" value={form.name} onChange={e => set("name", e.target.value)} className={box} /></Field>
        <Field label="Phone or email"><input required autoComplete="email" value={form.contact} onChange={e => set("contact", e.target.value)} className={box} /></Field>
      </div>}
    </div>

    {error && <p role="alert" className="mt-5 text-sm text-[#9b2c2c]">{error}</p>}

    <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center">
      {step > 0 && <button type="button" onClick={back} className="focus-gold flex items-center justify-center gap-2 px-2 py-3 text-xs uppercase tracking-[.15em] text-[#1A2436]/70 hover:text-[#1A2436]"><ArrowLeft size={15} aria-hidden="true" /> Back</button>}
      {/* Distinct keys stop React reusing the Continue button as the submit button, which would submit on the same click */}
      {step < 2
        ? <button key="continue" type="button" onClick={next} className="focus-gold flex flex-1 items-center justify-center gap-3 bg-[#D4AF37] px-6 py-4 text-xs uppercase tracking-[.2em] text-[#1A2436] transition-colors hover:bg-[#c9a430]">Continue <ArrowRight size={15} aria-hidden="true" /></button>
        : <button key="submit" type="submit" disabled={sending} className="focus-gold flex flex-1 items-center justify-center gap-3 bg-[#D4AF37] px-6 py-4 text-xs uppercase tracking-[.2em] text-[#1A2436] transition-colors hover:bg-[#c9a430] disabled:opacity-60">{sending ? "Opening WhatsApp…" : "Send via WhatsApp"} <Send size={14} aria-hidden="true" /></button>}
    </div>

    <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs leading-5 text-[#6b7280]">
      <Lock size={13} aria-hidden="true" className="shrink-0 text-[#8e741e]" /> Submitting opens WhatsApp. Your information is treated as confidential.
    </p>
  </form>;
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-3 block text-[11px] uppercase tracking-[.16em] text-[#1A2436]/70">{label}</span>{children}</label>;
}

function Choice({ selected, onClick, children }) {
  return (
    <button type="button" aria-pressed={selected} onClick={onClick} className={`focus-gold flex items-center justify-between gap-3 border px-4 py-3 text-left text-sm transition-colors ${selected ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#1A2436]" : "border-[#1A2436]/15 bg-white text-[#1A2436]/80 hover:border-[#D4AF37]/60"}`}>
      {children}
      {selected && <Check size={14} aria-hidden="true" className="shrink-0 text-[#8e741e]" />}
    </button>
  );
}

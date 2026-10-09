import CtaBand from "@/components/law/CtaBand";

const defaults = {
  eyebrow: "Discuss your matter",
  title: ["Need counsel on a", ""],
  accent: "complex matter?",
  body: "Speak with our team to discuss your objectives and discover how we can support your business with practical, strategic and commercially focused legal solutions.",
  label: "Discuss your matter"
};

// The shared CTA band with the Practice Areas wording. A practice page can pass its own
// `cta` ({ eyebrow, title: [lines], accent, body, label }); the gold `accent` ends the last line.
export default function PracticeCta({ cta }) {
  const { eyebrow, title, accent, body, label } = { ...defaults, ...cta };

  return (
    <CtaBand
      eyebrow={eyebrow}
      title={title.map((line, i) => (
        <span key={i} className="block">
          {line}
          {i === title.length - 1 && <>{line && " "}<span className="text-[#D4AF37]">{accent}</span></>}
        </span>
      ))}
      titleSize="medium"
      body={body}
      label={label}
    />
  );
}

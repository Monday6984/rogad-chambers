import { Link } from "react-router-dom";
import Header from "@/components/law/Header";
import PageHero from "@/components/law/PageHero";
import Footer from "@/components/law/Footer";
import { offices, phones, email } from "@/data/contact";
import { usePageTitle, usePageDescription, usePageMeta } from "@/hooks/use-page-title";

const description = "How Rogad Chambers collects, uses and protects personal information shared through this website and when you contact the firm.";
const LAST_UPDATED = "22 October 2026";

// Describes what the site actually does: no cookies, analytics or trackers; the intake form only prepares a
// WhatsApp message, which is sent from the visitor's own WhatsApp. Update this page if that ever changes.
export default function Privacy() {
  usePageTitle("Privacy Notice");
  usePageDescription(description);
  usePageMeta({ title: "Privacy Notice", description });

  return <main className="overflow-x-hidden bg-white text-[#1A2436]">
    <Header />
    <PageHero tone="cream" eyebrow="Legal" title="Privacy Notice." intro={`Last updated ${LAST_UPDATED}.`} />

    <article className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10">
        <nav aria-label="On this page" className="lg:col-span-3">
          <ol className="space-y-2.5 border-t border-[#1A2436]/[.12] pt-5 text-[13px] leading-snug">
            {sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`} className="focus-gold text-[#1A2436]/70 hover:text-[#876e1d]">{String(i + 1).padStart(2, "0")} · {s.title}</a></li>)}
          </ol>
        </nav>

        <div className="max-w-[720px] space-y-12 text-[16px]/[1.85] text-[#1A2436]/80 lg:col-span-8 lg:col-start-5">
          <p className="border-l border-[#D4AF37] pl-6 font-serif text-[1.3rem] leading-[1.5] text-[#1A2436] sm:text-[1.45rem]">
            Rogad Chambers respects your privacy. This notice explains what personal information we receive through this website and when you contact us, how we use it, and the choices and rights available to you.
          </p>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
              <h2 id={`${s.id}-h`} className="font-serif text-[1.65rem] leading-tight text-[#1A2436]"><span className="mr-3 text-[15px] tracking-[.16em] text-[#876e1d]">{String(i + 1).padStart(2, "0")}</span>{s.title}</h2>
              <div className="mt-4 space-y-4">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </article>
    <Footer />
  </main>;
}

const List = ({ items }) => <ul className="list-disc space-y-2 pl-5 marker:text-[#D4AF37]">{items.map((t) => <li key={t}>{t}</li>)}</ul>;

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: <>
      <p>Rogad Chambers is a law firm in Lagos, Nigeria. We are responsible for the personal information described in this notice.</p>
      <List items={offices.map((o) => `${o.name}: ${o.address}`)} />
    </>
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: <>
      <p><strong className="font-medium text-[#1A2436]">Our intake form.</strong> The confidential intake form on our Contact page asks for your industry or sector, a description of what you would like to achieve, how urgent the matter is, your name, and a phone number or email address.</p>
      <p>This website does not store or send your answers. When you select “Send via WhatsApp”, the form opens WhatsApp with a message containing your answers. Nothing reaches us unless you choose to send that message from your own WhatsApp account.</p>
      <p><strong className="font-medium text-[#1A2436]">When you contact us directly.</strong> If you call, message or email us, we receive the information you choose to share, together with your phone number or email address.</p>
      <p><strong className="font-medium text-[#1A2436]">Technical information.</strong> Our website host processes standard technical data, such as IP addresses, browser type and the pages requested, to deliver the website and keep it secure.</p>
      <p><strong className="font-medium text-[#1A2436]">No cookies or tracking.</strong> This website does not use cookies, analytics, advertising trackers or similar technologies.</p>
    </>
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: <>
      <p>We use the information you provide to:</p>
      <List items={[
        "respond to your enquiry and arrange a consultation",
        "check for conflicts of interest before agreeing to act for you",
        "provide legal services if you engage us",
        "meet our legal, regulatory and professional obligations"
      ]} />
      <p>We do not sell your personal information or use it for marketing without your consent.</p>
    </>
  },
  {
    id: "legal-basis",
    title: "Our legal basis",
    body: <p>We process personal information in accordance with the Nigeria Data Protection Act 2023. Depending on the circumstances, we rely on your consent, on steps you ask us to take before entering into an engagement, on our legal obligations, or on our legitimate interests in responding to enquiries and running our practice.</p>
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: <>
      <p>We share personal information only where necessary, with:</p>
      <List items={[
        "the services through which you choose to contact us, such as WhatsApp, telephone and email providers",
        "our website hosting provider",
        "regulators, courts or other authorities where the law requires it"
      ]} />
      <p>Some of these providers may process information outside Nigeria. Messages sent through WhatsApp or email are also subject to those providers' own privacy policies.</p>
    </>
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: <p>We keep personal information only for as long as it is needed for the purposes described above, including any period required to meet our legal and professional record-keeping obligations.</p>
  },
  {
    id: "security",
    title: "How we protect it",
    body: <p>We take reasonable steps to protect the personal information we hold and treat client enquiries as confidential. No method of transmission over the internet is completely secure, so please avoid sending highly sensitive documents through the intake form; we will arrange a suitable way to receive them.</p>
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: <>
      <p>Subject to the law, you may ask us to:</p>
      <List items={[
        "confirm whether we hold your personal information and give you a copy",
        "correct information that is inaccurate or incomplete",
        "delete your information, or restrict or object to how we use it",
        "provide your information in a portable format",
        "withdraw any consent you have given, without affecting earlier processing"
      ]} />
      <p>To make a request, contact us using the details below. If you are not satisfied with our response, you may complain to the Nigeria Data Protection Commission.</p>
    </>
  },
  {
    id: "no-engagement",
    title: "Contacting us does not create a client relationship",
    body: <p>Submitting an enquiry or contacting the firm does not create a lawyer-client relationship. A relationship begins only after a formal engagement has been agreed and conflict checks have been completed.</p>
  },
  {
    id: "changes",
    title: "Changes to this notice",
    body: <p>We may update this notice from time to time. The date at the top shows when it was last revised.</p>
  },
  {
    id: "contact",
    title: "Contact us",
    body: <>
      <p>For questions about this notice or your personal information, contact us:</p>
      <List items={[`Email: ${email.label}`, ...phones.map((p) => `Phone: ${p.label}`)]} />
      <p>You can also reach us through the <Link to="/contact" className="focus-gold text-[#876e1d] underline underline-offset-4 hover:text-[#1A2436]">Contact page</Link>.</p>
    </>
  }
];

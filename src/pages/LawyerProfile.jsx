import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { findLawyer, lawyerBioParagraphs, lawyerPath, lawyerQualifications, lawyerSlug } from "@/data/lawyers";
import Header from "@/components/law/Header";
import Footer from "@/components/law/Footer";
import LawyerPortrait from "@/components/law/LawyerPortrait";
import { usePageTitle, usePageDescription } from "@/hooks/use-page-title";

// One template for every lawyer at /our-people/:slug. Sections only render when the data for them exists.
export default function LawyerProfile() {
  const { slug } = useParams();
  const lawyer = findLawyer(slug);
  usePageTitle(lawyer ? lawyer.name : "Profile not found");
  usePageDescription(lawyer && [`${lawyer.name}, ${lawyer.title} at Rogad Chambers.`, lawyer.focus].filter(Boolean).join(" "));

  // Old profile URLs (e.g. after a name change) redirect to the current one
  if (lawyer && lawyerSlug(lawyer.name) !== slug) return <Navigate to={lawyerPath(lawyer)} replace />;

  return (
    <main className="overflow-x-hidden bg-white text-[#1A2436]">
      <Header />
      {lawyer ? <Profile lawyer={lawyer} /> : <NotFound />}
      <Footer />
    </main>
  );
}

function Profile({ lawyer }) {
  const reduceMotion = useReducedMotion();
  const qualifications = lawyerQualifications(lawyer);
  const bio = lawyerBioParagraphs(lawyer);
  const body = "text-[15px]/[1.8] text-[#1A2436]/75 lg:text-[17px]/[1.75]";
  const sections = [
    bio.length > 0 && { label: "Profile", content: <div className={`space-y-5 ${body}`}>{bio.map((p, i) => <p key={i}>{p}</p>)}</div> },
    lawyer.practiceAreas?.length > 0
      ? { label: "Practice areas", content: <ul className="divide-y divide-[#1A2436]/10 border-y border-[#1A2436]/10 font-serif text-xl leading-snug lg:text-2xl">{lawyer.practiceAreas.map(a => <li key={a} className="py-3">{a}</li>)}</ul> }
      : lawyer.specialization && { label: "Practice area", content: <p className="font-serif text-2xl leading-tight lg:text-3xl">{lawyer.specialization}</p> },
    // The short focus line only stands in when there is no full biography
    !bio.length && lawyer.focus && { label: "Focus", content: <p className={body}>{lawyer.focus}</p> },
    qualifications.length > 0 && {
      label: "Qualifications & memberships",
      content: <ul className="space-y-3 text-[15px]/[1.7] text-[#1A2436]/75 lg:text-[17px]/[1.7]">{qualifications.map(q => <li key={q}>{q}</li>)}</ul>
    }
  ].filter(Boolean);

  return (
    <>
      <section className="border-b border-[#D4AF37]/40 bg-white pb-16 pt-36 lg:pb-24 lg:pt-44">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto grid max-w-[1500px] gap-y-12 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10"
        >
          <div className="lg:col-span-7 lg:self-end">
            <Link to="/people" className="eyebrow focus-gold inline-flex items-center gap-2"><ArrowLeft size={13} aria-hidden="true" /> Our People</Link>
            <h1 className="mt-8 font-serif text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[.92] tracking-[-.04em]">{lawyer.name}</h1>
            <p className="mt-8 text-lg text-[#1A2436]/75">{lawyer.title}</p>
            {lawyer.specialization && <p className="mt-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">{lawyer.specialization}</p>}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <LawyerPortrait lawyer={lawyer} loading="eager" className="aspect-[4/5] w-full max-w-[420px] lg:ml-auto" />
          </div>
        </motion.div>
      </section>

      {/* Labels sit left of the center rule, content starts at column 7 as on the homepage */}
      <section className="rule-section relative bg-white py-16 max-lg:bg-none lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          {sections.map(({ label, content }) => (
            <div key={label} className="grid gap-y-4 border-t border-[#1A2436]/10 py-10 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-x-10 lg:py-14">
              <h2 className="eyebrow lg:col-span-5">{label}</h2>
              <div className="max-w-[600px] lg:col-span-6 lg:col-start-7">{content}</div>
            </div>
          ))}

          <div className="flex flex-col gap-6 border-t border-[#1A2436]/10 pt-10 sm:flex-row sm:items-center sm:justify-between lg:pt-14">
            <Link to="/contact#become-our-client" className="focus-gold group inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]">
              Request counsel <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
            <Link to="/people" className="focus-gold inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#6b7280]"><ArrowLeft size={15} aria-hidden="true" /> All people</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="rule-section bg-white pb-32 pt-44">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <p className="eyebrow">Our People</p>
        <h1 className="mt-5 font-serif text-5xl font-bold leading-[.96] tracking-[-.035em] sm:text-7xl">Profile not found.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1A2436]/70">The link may be out of date. Browse the full team instead.</p>
        <Link to="/people" className="focus-gold mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8e741e]"><ArrowLeft size={15} aria-hidden="true" /> All people</Link>
      </div>
    </section>
  );
}

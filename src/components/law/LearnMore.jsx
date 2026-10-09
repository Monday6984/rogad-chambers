import { learnMore } from "@/data/siteContent";
import EditorialSection from "@/components/law/EditorialSection";

// Keeps id="learn-more": the Header's "Learn More" link points here.
export default function LearnMore() {
  return (
    <EditorialSection
      id="learn-more"
      eyebrow="Our Standard · 03"
      lines={["Excellence is", "not an", "aspiration."]}
      lead="It is the standard."
      leadTone="gold"
      paragraphs={learnMore.split("\n\n")}
      principles={["Integrity", "Discretion", "Results"]}
    />
  );
}

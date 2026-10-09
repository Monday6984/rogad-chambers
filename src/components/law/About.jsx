import { about } from "@/data/siteContent";
import EditorialSection from "@/components/law/EditorialSection";

// The existing `about` copy, split by subject (wording unchanged):
// 1 who we are · 2 philosophy · 3 beyond disputes · 4 reputation · 5 partner at every stage
const [whoWeAre, philosophy, approach, reputation, partnership] = about.split("\n\n");

export default function About() {
  return (
    <EditorialSection
      id="about"
      eyebrow="The Firm · 01"
      lines={["Counsel", "with", "consequence."]}
      lead="Modern perspective. Enduring principles. Uncompromising standards."
      paragraphs={[whoWeAre, reputation, partnership]}
    />
  );
}

export function Approach() {
  return (
    <EditorialSection
      id="approach"
      tone="cream"
      eyebrow="Our Approach · 02"
      lines={["Built around", "the client."]}
      lead="Legal judgment. Commercial perspective. Practical counsel."
      paragraphs={[philosophy, approach]}
      principles={["Judgment", "Perspective", "Action"]}
    />
  );
}

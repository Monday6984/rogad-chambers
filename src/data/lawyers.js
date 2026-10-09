// The firm's lawyers, in display order.
// Anyone whose title contains "Partner" appears under Partners (and on the homepage preview);
// everyone else appears under Associates.
// To add a photo, put the file in /public/images/people/ and set profile_image, e.g. "/images/people/gbenga.jpg".
// Without a photo, the card and profile page show the initials. No component changes are needed either way.
// Each lawyer gets a profile page at /our-people/<slug-of-name>.
//
// Fields (all optional except name/title/initials; anything missing is simply not shown):
//   specialization  short practice line on the card and under the name on the profile
//   focus           one-line summary on the card (and the page's meta description)
//   practiceAreas   full list for the profile page
//   qualifications  list for the profile page; older entries use `bar`, a " · "-separated string
//   bio             profile text; blank lines separate paragraphs
//   formerSlugs     old profile URLs that should redirect to the current one
export const lawyers = [
  {
    name: "Gbenga Joshua Onabanjo",
    title: "Founder and Principal Partner",
    initials: "GO",
    profile_image: "/images/people/Gbenga Onabanjo Rogad.jpg",
    formerSlugs: ["gbenga-onabanjo-rogad"],
    specialization: "Corporate & Commercial Law · Property & Real Estate",
    focus: "Lawyer and legal strategist with over a decade of experience in legal practice, advisory and advocacy.",
    practiceAreas: ["Corporate and Commercial Law", "Property and Real Estate Law", "Human Rights", "Contracts and Commercial Transactions", "Employment Law", "Dispute Resolution", "Regulatory Compliance", "Wills and Estate Planning"],
    bio: `Gbenga Joshua Onabanjo (Rogad) is a Nigerian lawyer and legal strategist with over a decade of professional experience in legal practice, advisory and advocacy.

He is the Founder and Principal Partner of Rogad Chambers, a Nigerian law firm providing legal solutions to individuals, businesses, investors, property owners and organisations across a broad range of legal and commercial matters.

Gbenga’s practice spans Corporate and Commercial Law, Property and Real Estate Law, Human Rights, Contracts and Commercial Transactions, Employment Law, Dispute Resolution, Regulatory Compliance, Wills and Estate Planning, among other areas. His approach to legal practice combines technical legal knowledge with a practical understanding of business, risk, governance and the realities faced by clients operating in Nigeria.

His track record includes high-stakes litigation and landmark appeals, often involving substantial financial implication.

Over the course of his career, he has advised clients on transactions, property acquisitions and documentation, corporate structures, contractual relationships, employment matters, disputes, regulatory issues and so many more. He has also represented and supported clients in matters involving the protection of fundamental rights and access to justice.

Beyond private legal practice, Gbenga has maintained a strong interest in community development, youth leadership and social impact. He is the founder of Project Stay in School, an initiative focused on supporting education and helping young people remain within the education system.

At Rogad Chambers, he leads with a simple philosophy: good legal advice should not merely address a legal problem; it should help clients make better decisions, manage risk and protect what they are building.`
  },
  {
    name: "Stephen Ayokanmi Adekanye",
    title: "Managing Partner",
    initials: "SA",
    profile_image: "/images/people/Stephen Ayokanmi.jpeg",
    specialization: "Real Estate · Corporate & Commercial Law",
    focus: "Legal advisory and representation for individuals, businesses and organisations across commercial and private legal matters.",
    practiceAreas: ["Real Estate", "Corporate and Commercial Law", "Regulatory Advisory", "Dispute Resolution"],
    bio: `Stephen Ayokanmi Adekanye is a Legal Practitioner providing legal advisory and representation to individuals, businesses and organisations across a range of commercial and private legal matters.

His practice encompasses Real Estate, Corporate and Commercial Law, Regulatory Advisory and Dispute Resolution, with a focus on helping clients understand their legal obligations, manage risk and make well-informed decisions.

Stephen advises on matters relating to property transactions, corporate and business affairs, regulatory requirements, commercial relationships and legal disputes. His approach combines careful legal analysis with a practical understanding of the client’s objectives, allowing him to provide advice that is not only legally sound but also responsive to the realities of the matter at hand.

In real estate matters, he supports clients through the legal and transactional considerations associated with property dealings, while his corporate and regulatory practice involves assisting businesses in navigating their legal and compliance obligations. He also provides support in dispute-related matters, with an emphasis on protecting clients’ interests and pursuing practical resolutions.

Known for his professionalism, attention to detail and client-focused approach, Stephen is committed to providing clear, commercially aware and effective legal solutions.

At Rogad Chambers, he contributes to the firm’s broader commitment to delivering practical, responsive and strategic legal services tailored to the needs of each client.`
  },
  {
    name: "Samuel Abu",
    title: "Partner",
    initials: "SA",
    profile_image: "/images/people/Samuel Abu.jpeg",
    specialization: "Corporate & Commercial Law · Fintech & Technology",
    focus: "Close to a decade advising businesses, organisations and individuals on corporate, commercial, regulatory and dispute-resolution matters.",
    practiceAreas: ["Corporate and Commercial Law", "Regulatory Compliance", "Corporate Transactions", "Fintech and Technology Law", "Commercial Agreements", "Intellectual Property", "Dispute Resolution"],
    bio: `Samuel Abu is a Nigerian legal practitioner with close to a decade of experience advising businesses, organisations and individuals across a broad range of corporate, commercial, regulatory and dispute-resolution matters.

His practice covers Corporate and Commercial Law, Regulatory Compliance, Corporate Transactions, Fintech and Technology Law, Commercial Agreements, Intellectual Property and Dispute Resolution, with experience spanning both advisory and contentious matters before Nigerian courts.

Samuel has advised multinational companies, emerging businesses and entrepreneurs on regulatory approvals, investments, strategic partnerships, acquisitions and the legal requirements associated with establishing and operating businesses in Nigeria. His work often involves navigating complex regulatory frameworks, managing stakeholder relationships and providing practical legal solutions that align with his clients’ commercial objectives.

He brings a commercially minded approach to legal practice, with particular attention to helping clients understand regulatory obligations, identify legal risks and structure transactions and business relationships in a way that supports sustainable growth. His experience also extends to litigation and dispute resolution, allowing him to advise clients with a clear understanding of both transactional and contentious legal risk.

Samuel has a particular interest in fintech regulation, legal technology, entrepreneurship and youth development, reflecting his broader interest in the intersection between law, innovation and economic development.

At Rogad Chambers, he contributes to the firm’s commitment to delivering practical, commercially aware and client-focused legal advice to businesses and individuals navigating an increasingly complex legal and regulatory environment in Nigeria.`
  },
  {
    name: "Owoyemi Mayowa Agbejule",
    title: "Partner",
    initials: "OA",
    profile_image: "/images/people/Owoyemi Mayowa Agbejule.jpeg",
    focus: "Over a decade of legal practice providing thoughtful and practical legal support to individuals, businesses and organisations.",
    bio: `Owoyemi Mayowa Agbejule is an experienced Legal Practitioner with over a decade of professional experience in legal practice, providing thoughtful and practical legal support to individuals, businesses and organisations.

Over the course of his career, Mayowa has developed a strong understanding of the demands of legal practice and the importance of delivering advice that is both legally sound and responsive to clients’ objectives. He approaches each matter with professionalism, diligence and careful attention to detail, with a focus on understanding the issues involved and developing practical legal solutions.

His experience has enabled him to work across a range of legal matters, with responsibilities involving legal research, advisory services, documentation, case preparation and client representation. He is committed to providing clear and commercially relevant legal guidance while protecting clients’ interests and helping them navigate legal challenges with greater confidence.

Mayowa is recognised for his professionalism, analytical ability, attention to detail and commitment to client service. His approach to practice is grounded in integrity, responsiveness and a practical appreciation of the realities that individuals and businesses face when dealing with legal matters.

At Rogad Chambers, he contributes his experience and legal insight to the firm’s commitment to providing professional, practical and client-focused legal services, with an emphasis on achieving effective outcomes for every client.`
  },
  {
    name: "Sotayo Ayokunle Oludare",
    title: "Partner",
    initials: "SO",
    profile_image: "/images/people/Sotayo Ayokunle Oludare.jpeg",
    focus: "Over eight years of legal practice providing professional and practical legal support to individuals, businesses and organisations.",
    bio: `Sotayo Ayokunle Oludare is a Legal Practitioner with over eight years of experience in legal practice, providing professional and practical legal support to individuals, businesses and organisations.

Throughout his career, Ayokunle has demonstrated a strong commitment to delivering client-focused legal services grounded in integrity, diligence and sound professional judgment. He approaches each matter with careful attention to detail, a clear understanding of the client’s objectives and a practical appreciation of the legal and commercial considerations involved.

His experience in legal practice has equipped him with the ability to analyse legal issues, conduct thorough legal research, prepare and review legal documents, provide reasoned legal advice and support clients in navigating complex legal matters. He places particular emphasis on clear communication, responsiveness and ensuring that clients receive legal guidance that is both professionally sound and practical in application.

Ayokunle is recognised for his professionalism, diligence and commitment to effective representation. He brings a measured and solutions-oriented approach to his work, with a focus on protecting clients’ interests while providing dependable legal support throughout the course of a matter.

At Rogad Chambers, he contributes to the firm’s commitment to delivering accessible, practical and high-quality legal services, with a strong emphasis on professionalism, integrity and client satisfaction.`
  },
  {
    name: "Babafemi Eniola Awe",
    title: "Partner",
    initials: "BA",
    profile_image: "/images/people/Babafemi Eniola Awe.jpeg",
    specialization: "Corporate Governance · Regulatory Compliance",
    focus: "Over a decade across company secretarial practice, corporate governance, regulatory compliance and legal advisory services.",
    practiceAreas: ["Company Secretarial Practice", "Corporate Governance", "Regulatory Compliance", "Commercial Law", "Property Transactions", "Risk Management", "Legal Advisory Services"],
    qualifications: ["Certified Data Protection Officer", "Specialised studies in Artificial Intelligence and Law, Lund University, Sweden"],
    bio: `Babafemi Eniola Awe is a seasoned legal and corporate governance professional with over a decade of progressive experience spanning company secretarial practice, corporate governance, regulatory compliance, commercial law, property transactions, risk management and legal advisory services.

His practice is focused on helping businesses and organisations establish effective governance structures, navigate regulatory requirements and manage legal and operational risks. He advises on corporate governance, board administration, regulatory compliance, legal risk management, stakeholder engagement and corporate advisory matters, providing practical guidance that supports sound decision-making and sustainable business operations.

Throughout his career, Babafemi has developed and implemented governance frameworks, drafted and negotiated complex commercial agreements, managed regulatory relationships and supported organisations through corporate restructuring, due diligence and other significant business processes. His experience also covers contract management, policy development, compliance monitoring, litigation support and board secretariat functions, giving him a broad understanding of the legal and governance issues that shape modern organisations.

He is a Certified Data Protection Officer and has completed specialised studies in Artificial Intelligence and Law through Lund University, Sweden, reflecting his interest in emerging technologies and their implications for businesses, regulation and legal practice.

Known for his analytical approach, professionalism and commitment to ethical business practices, Babafemi combines legal expertise with practical commercial insight to help organisations strengthen governance, manage risk and meet their regulatory obligations while pursuing their strategic objectives.

At Rogad Chambers, he brings this multidisciplinary perspective to the firm’s advisory practice, contributing to the delivery of practical, commercially informed and risk-conscious legal solutions for businesses and organisations.`
  },
  { name: "Chidi Okafor", title: "Senior Associate", initials: "CO", specialization: "Media & Entertainment", focus: "Talent agreements, film financing, and brand protection.", bar: "Nigerian Bar Association" },
  { name: "Ngozi Eze", title: "Senior Associate", initials: "NE", specialization: "Real Estate & Conveyancing", focus: "Title perfection, commercial leasing, and development finance.", bar: "Nigerian Bar Association" },
  { name: "Ibrahim Suleiman", title: "Senior Associate", initials: "IS", specialization: "Aviation & Maritime", focus: "Aircraft leasing, shipping disputes, and cabotage compliance.", bar: "Nigerian Bar Association" },
  { name: "Tola Adebayo", title: "Associate", initials: "TA", specialization: "Corporate Advisory", focus: "Start-up formation, commercial contracts, and regulatory compliance.", bar: "Nigerian Bar Association" },
  { name: "Emeka Obi", title: "Associate", initials: "EO", specialization: "Litigation & Dispute Resolution", focus: "Debt recovery, employment disputes, and civil claims.", bar: "Nigerian Bar Association" },
  { name: "Halima Bello", title: "Associate", initials: "HB", specialization: "Technology & Data Privacy", focus: "Fintech regulation, cybersecurity, and digital commerce.", bar: "Nigerian Bar Association" }
];

export const lawyerSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const lawyerPath = (lawyer) => `/our-people/${lawyerSlug(lawyer.name)}`;
export const findLawyer = (slug) => lawyers.find((l) => lawyerSlug(l.name) === slug || l.formerSlugs?.includes(slug));
export const lawyerQualifications = (lawyer) => lawyer.qualifications ?? (lawyer.bar ? lawyer.bar.split(" · ").filter(Boolean) : []);
export const lawyerBioParagraphs = (lawyer) => (lawyer.bio ? lawyer.bio.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean) : []);

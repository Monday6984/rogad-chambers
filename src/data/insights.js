// Newsletters and blog posts. Each item gets its own page at /insights/<slug-of-title>.
// Article pages currently show the excerpt only — add a `body` field later for full articles.
export const newsletters = [
  { date: "July 2026", title: "Regulatory Horizons: Nigeria's New Data Protection Code", excerpt: "A practical review of compliance obligations for businesses operating in Nigeria's digital economy.", read: "6 min" },
  { date: "June 2026", title: "Corporate Governance Trends for Boards in 2026", excerpt: "Key developments in board accountability, disclosure, and shareholder engagement.", read: "5 min" },
  { date: "May 2026", title: "Investing in Nigerian Energy: A Local Content Update", excerpt: "What foreign investors need to know about local content requirements this year.", read: "7 min" },
  { date: "April 2026", title: "Creative Economy: Protecting Talent in a Global Market", excerpt: "Structuring agreements that safeguard creators across borders.", read: "4 min" },
  { date: "March 2026", title: "Aviation Leasing: Registration & Deregistration Essentials", excerpt: "A concise guide to aircraft asset management under Nigerian law.", read: "6 min" }
];
export const blogPosts = [
  { date: "Jul 18, 2026", title: "Enforcing Arbitral Awards: A Practical Roadmap", excerpt: "How to navigate recognition and enforcement of arbitral awards in Nigerian courts.", read: "8 min" },
  { date: "Jul 04, 2026", title: "Joint Ventures in Nigeria: Structuring for Success", excerpt: "Common pitfalls and drafting strategies for cross-border joint ventures.", read: "7 min" },
  { date: "Jun 22, 2026", title: "Trademark Oppositions: Protecting Your Brand", excerpt: "Step-by-step guidance through the Nigerian trademark opposition process.", read: "6 min" },
  { date: "Jun 09, 2026", title: "Real Estate Title Perfection: Why It Matters", excerpt: "The legal and commercial risks of unperfected property titles.", read: "5 min" },
  { date: "May 27, 2026", title: "Fintech Compliance: Navigating the Licensing Landscape", excerpt: "A framework for evaluating regulatory licences for digital financial services.", read: "9 min" }
];

export const insightSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

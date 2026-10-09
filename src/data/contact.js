// Firm offices and contact details, shared by the footer and the Contact page.
// "View site survey" opens a Google Maps search for the office address.
const mapSearch = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const offices = [
  { name: "Office 1", city: "Lagos", address: "House 6, Yekinni Street, Pedro, Gbagada, Lagos State, Nigeria." },
  { name: "Office 2", city: "Lagos", address: "12, Ayo Alabi Road, Oke Ira, Ogba, Lagos State, Nigeria." }
].map((o) => ({ ...o, mapUrl: mapSearch(o.address) }));

// `whatsapp` is used where the site offers a WhatsApp chat instead of a call (Contact page).
export const phones = [
  { label: "+234 706 590 8039", href: "tel:+2347065908039" },
  { label: "+234 704 882 4491", href: "tel:+2347048824491", whatsapp: "https://wa.me/2347048824491" }
];

export const email = { label: "rogadchambers@gmail.com", href: "mailto:rogadchambers@gmail.com" };

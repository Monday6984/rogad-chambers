export default function Footer() {
  return <footer className="bg-[#1A2436] text-[#F4F1EA]">
    <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
      <div className="grid gap-8 border-t border-[#D4AF37]/30 py-10 text-xs leading-6 text-[#999] lg:grid-cols-3">
        <p>© {new Date().getFullYear()} Rogad Chambers. All rights reserved.</p>
        <p id="accessibility"><b className="text-[#F4F1EA]">Accessibility Statement.</b> We are committed to an accessible digital experience and welcome requests for reasonable assistance.</p>
        <p id="conflicts"><b className="text-[#F4F1EA]">Conflict of Interest Disclaimer.</b> Contacting the firm does not create a lawyer-client relationship until formal engagement and conflict clearance.</p>
      </div>
    </div>
  </footer>;
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { assets } from "@/data/assets";


const links = [
  { label: "About Us", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Our People", to: "/people" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isActive = (l) => pathname === l.to || pathname.startsWith(l.to + "/");
  return <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#1A2436]/10 bg-white/95 backdrop-blur transition-all duration-500 ${small ? "py-2" : "py-3"}`}>
    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 lg:px-10">
      <Link to="/" aria-label="Home" className="focus-gold block"><Image src={assets.logo} alt="Rogad Chambers" loading="eager" fittingType="fit" className={`block w-auto transition-all duration-500 ${small ? "h-12 lg:h-[52px]" : "h-[60px] lg:h-20"}`} /></Link>
      <nav className="hidden items-center gap-6 lg:flex">
        {links.map(l => <Link key={l.label} to={l.to} className={`focus-gold relative text-xs uppercase tracking-[.14em] transition hover:text-[#8e741e] ${isActive(l) ? "text-[#8e741e]" : "text-[#1A2436]/80"}`}>{l.label}{isActive(l) && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-[#D4AF37]" />}</Link>)}
        <Link to="/contact#become-our-client" className="focus-gold border border-[#D4AF37] px-5 py-3 text-xs uppercase tracking-[.14em] text-[#8e741e] transition hover:bg-[#D4AF37] hover:text-white">Become Our Client</Link>
      </nav>
      <button className="focus-gold p-2 text-[#1A2436] lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-[#1A2436]/10 bg-white px-5 py-6 lg:hidden">
      {links.concat([{ label: "Become Our Client", to: "/contact#become-our-client" }]).map(l => <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className={`block w-full border-b border-[#1A2436]/10 py-4 text-left font-serif text-xl ${isActive(l) ? "text-[#8e741e]" : "text-[#1A2436]"}`}>{l.label}</Link>)}
    </nav>}
  </header>;
}

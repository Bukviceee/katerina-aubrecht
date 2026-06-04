import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-blush">
      <nav className="max-w-6xl mx-auto px-6 py-0 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Kateřina Aubrecht logo"
          width={130}
          height = {20}
          className="object-contain"
          priority
        />
        <ul className="hidden md:flex gap-8 font-heading text-sm tracking-widest uppercase text-plum">
          <li><a href="#galerie" className="hover:text-rose transition-colors">Galerie</a></li>
          <li><a href="#o-mne" className="hover:text-rose transition-colors">O mně</a></li>
          <li><a href="#sluzby" className="hover:text-rose transition-colors">Služby</a></li>
          <li><a href="#kontakt" className="hover:text-rose transition-colors">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}
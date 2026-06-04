import Image from "next/image";

export default function About() {
  return (
    <section id="o-mne" className="py-24 px-6 bg-blush">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/profil.png"
            alt="Kateřina Aubrecht"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <p className="font-heading text-rose tracking-[0.3em] uppercase text-sm mb-4">
            O mně
          </p>
          <h2 className="font-heading text-plum text-4xl md:text-5xl uppercase tracking-widest mb-8">
            Ahoj,<br />jsem Kateřina
          </h2>
          <div className="w-16 h-px bg-rose mb-8" />
          <p className="font-body text-plum/70 text-lg leading-relaxed mb-6">
            Jsem rodinná fotografka ze Zbiroha. Fotím okamžiky,
            které se stávají vzpomínkami — rodinné příběhy, novorozence,
            páry i jednotlivce.
          </p>
          <p className="font-body text-plum/70 text-lg leading-relaxed mb-10">
            Věřím, že každá fotografie by měla vyvolat pocit. Ten pocit,
            který prožijete znovu, když se na ni podíváte za deset let.
          </p>
          <a
            href="#kontakt"
            className="inline-block font-heading tracking-widest uppercase text-sm border border-plum text-plum px-10 py-3 hover:bg-plum hover:text-blush transition-all duration-300"
          >
            Rezervovat termín
          </a>
        </div>
      </div>
    </section>
  );
}

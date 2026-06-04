export default function Hero() {
  return (
    <section className="min-h-screen bg-blush flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="font-heading text-rose tracking-[0.3em] uppercase text-sm mb-6">
          Rodinná fotografka · Zbiroh & okolí
        </p>
        <h1 className="font-heading text-plum text-5xl md:text-7xl uppercase tracking-widest mb-8 leading-tight">
          Kateřina<br />Aubrecht
        </h1>
        <div className="w-24 h-px bg-rose mx-auto mb-8" />
        <p className="font-body text-plum/70 text-lg md:text-xl leading-relaxed mb-10">
          Nejen fotky. Příběh, který prožijete znovu.
        </p>
        <a
          href="#galerie"
          className="inline-block font-heading tracking-widest uppercase text-sm border border-plum text-plum px-10 py-3 hover:bg-plum hover:text-blush transition-all duration-300"
        >
          Prohlédnout galerii
        </a>
      </div>
    </section>
  );
}

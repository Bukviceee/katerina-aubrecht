import Image from "next/image";

const photos = [
  { src: "/Galerie/foto1.jpg", alt: "Fotografie 1" },
  { src: "/Galerie/foto2.jpg", alt: "Fotografie 2" },
  { src: "/Galerie/foto3.jpg", alt: "Fotografie 3" },
  { src: "/Galerie/foto4.jpg", alt: "Fotografie 4" },
  { src: "/Galerie/foto5.jpg", alt: "Fotografie 5" },
  { src: "/Galerie/foto6.jpg", alt: "Fotografie 6" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-rose tracking-[0.3em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-plum text-4xl md:text-5xl uppercase tracking-widest">
            Galerie
          </h2>
          <div className="w-16 h-px bg-rose mx-auto mt-6" />
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative w-full break-inside-avoid overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

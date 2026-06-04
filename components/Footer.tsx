export default function Footer() {
  return (
    <footer className="bg-plum border-t border-blush/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-blush/60 text-sm tracking-widest uppercase">
          Kateřina Aubrecht · Fotografka
        </span>
        <p className="font-heading text-blush/30 text-xs tracking-widest uppercase">
          ~ Nejen fotky. Příběh, který prožijete znovu. ~
        </p>
        <a
          href="https://www.instagram.com/katerina.a_fotografka"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-blush/60 text-xs tracking-widest uppercase hover:text-rose transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

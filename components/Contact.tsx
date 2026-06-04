"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xqeoaqrz", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="py-24 px-6 bg-plum">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-rose tracking-[0.3em] uppercase text-sm mb-4">
          Pojďme na to
        </p>
        <h2 className="font-heading text-blush text-4xl md:text-5xl uppercase tracking-widest mb-8">
          Kontakt
        </h2>
        <div className="w-16 h-px bg-rose mx-auto mb-12" />

        {/* Kontaktní údaje */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-heading text-rose tracking-widest uppercase text-xs mb-3">
              Telefon
            </p>
            <a
              href="tel:+420733645883"
              className="font-body text-blush text-lg hover:text-rose transition-colors"
            >
              +420 733 645 883
            </a>
          </div>
          <div>
            <p className="font-heading text-rose tracking-widest uppercase text-xs mb-3">
              E-mail
            </p>
            <a
              href="mailto:katerina.aubrecht@gmail.com"
              className="font-body text-blush text-lg hover:text-rose transition-colors"
            >
              katerina.aubrecht@gmail.com
            </a>
          </div>
          <div>
            <p className="font-heading text-rose tracking-widest uppercase text-xs mb-3">
              Oblast
            </p>
            <p className="font-body text-blush text-lg">
              Zbiroh · Plzeň · okolí
            </p>
          </div>
        </div>

        {/* Sociální sítě */}
        <div className="flex items-center justify-center gap-10 mb-16">
          <a
            href="https://www.instagram.com/kejtyn__foti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-heading text-sm tracking-widest uppercase text-blush/70 hover:text-rose transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <div className="w-px h-6 bg-blush/20" />
          <a
            href="https://www.facebook.com/KayteenPhoto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-heading text-sm tracking-widest uppercase text-blush/70 hover:text-rose transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>

        <div className="w-16 h-px bg-rose/30 mx-auto mb-12" />
        <p className="font-heading text-blush/40 tracking-[0.2em] uppercase text-xs mb-10">
          Nebo mi napište přímo
        </p>

        {/* Kontaktní formulář */}
        <form onSubmit={handleSubmit} className="grid gap-4 text-left max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="jmeno"
              required
              placeholder="Vaše jméno"
              className="bg-transparent border border-blush/30 text-blush placeholder:text-blush/40 font-body px-5 py-4 focus:outline-none focus:border-rose transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="bg-transparent border border-blush/30 text-blush placeholder:text-blush/40 font-body px-5 py-4 focus:outline-none focus:border-rose transition-colors"
            />
          </div>
          <input
            type="text"
            name="typ_foceni"
            placeholder="Typ focení (rodinné, novorozenecké...)"
            className="bg-transparent border border-blush/30 text-blush placeholder:text-blush/40 font-body px-5 py-4 focus:outline-none focus:border-rose transition-colors"
          />
          <textarea
            name="zprava"
            rows={5}
            required
            placeholder="Vaše zpráva..."
            className="bg-transparent border border-blush/30 text-blush placeholder:text-blush/40 font-body px-5 py-4 focus:outline-none focus:border-rose transition-colors resize-none"
          />

          {status === "success" && (
            <p className="font-body text-rose text-sm text-center">
              Zpráva odeslána! Ozveme se co nejdříve.
            </p>
          )}
          {status === "error" && (
            <p className="font-body text-red-300 text-sm text-center">
              Něco se pokazilo. Zkuste to prosím znovu.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="font-heading tracking-widest uppercase text-sm border border-blush text-blush px-10 py-4 hover:bg-blush hover:text-plum transition-all duration-300 w-full md:w-auto md:self-end disabled:opacity-50"
          >
            {status === "sending" ? "Odesílám..." : "Odeslat zprávu"}
          </button>
        </form>
      </div>
    </section>
  );
}

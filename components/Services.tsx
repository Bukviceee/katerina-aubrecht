const services = [
  {
    title: "Rodinné focení",
    description:
      "Zachytím vaši rodinu takovou, jaká je — přirozeně, s láskou a radostí. Focení probíhá venku nebo u vás doma.",
    price: "od 2 500 Kč",
    duration: "60–90 minut",
  },
  {
    title: "Novorozenecké focení",
    description:
      "Ty první dny jsou vzácné. Přijedu za vámi domů a v klidu zachytím ten nový život, který jste přivedli na svět.",
    price: "od 3 000 Kč",
    duration: "2–3 hodiny",
  },
  {
    title: "Těhotenské focení",
    description:
      "Těhotenství je krásné a chvilkové. Pojďme ho zachytit dřív, než skončí — v přírodě, studiu nebo doma.",
    price: "od 2 000 Kč",
    duration: "60 minut",
  },
  {
    title: "Portrétní focení",
    description:
      "Individuální focení pro jednoho nebo pár. Výsledkem jsou fotografie, na které budete rádi vzpomínat.",
    price: "od 1 800 Kč",
    duration: "60 minut",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-rose tracking-[0.3em] uppercase text-sm mb-4">
            Co nabízím
          </p>
          <h2 className="font-heading text-plum text-4xl md:text-5xl uppercase tracking-widest">
            Služby
          </h2>
          <div className="w-16 h-px bg-rose mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-blush p-10 hover:border-rose transition-colors duration-300 group"
            >
              <h3 className="font-heading text-plum text-xl uppercase tracking-widest mb-4 group-hover:text-rose transition-colors">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-rose mb-6" />
              <p className="font-body text-plum/70 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center justify-between font-heading text-sm tracking-widest uppercase">
                <span className="text-rose">{service.price}</span>
                <span className="text-plum/40">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-plum/50 text-sm mt-10">
          Ceny jsou orientační. Finální cena závisí na domluvě a rozsahu focení.
        </p>
      </div>
    </section>
  );
}

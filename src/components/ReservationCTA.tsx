import { RESTAURANT } from "@/data/restaurant";

export default function ReservationCTA() {
  return (
    <section className="bg-gradient-to-br from-burgundy to-burgundy-dark text-cream py-16 px-5 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-normal mb-3">
        Réservez votre table
      </h2>
      <p className="font-accent text-lg text-cream/60 italic mb-8 max-w-md mx-auto">
        Nous avons hâte de vous accueillir chez Noya, au cœur du 9e arrondissement.
      </p>
      <a
        href={RESTAURANT.links.reservation}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3.5 border-[1.5px] border-cream text-cream text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-burgundy transition-all"
      >
        Réserver une table
      </a>
    </section>
  );
}

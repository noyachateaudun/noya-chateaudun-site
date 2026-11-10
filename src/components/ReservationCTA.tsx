import ReserveButton from "./ReserveButton";

export default function ReservationCTA({ source }: { source?: string }) {
  return (
    <section className="bg-brick text-paper">
      <div className="max-w-[1320px] mx-auto px-5 md:px-14 py-20 flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
        <div className="flex-[1_1_420px] min-w-0">
          <h2 className="font-serif font-medium text-[clamp(36px,4vw,54px)] leading-[1.04]">Réservez votre table.</h2>
          <p className="mt-4 max-w-[30em] text-[#F6E4DB]">
            Du mardi au samedi, midi et soir, au 8 rue de Châteaudun. À cinq minutes à pied de l’Opéra.
          </p>
        </div>
        <ReserveButton
          source={source}
          className="inline-flex items-center justify-center min-h-[52px] px-[30px] rounded-full bg-paper text-ink text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-terracotta transition-colors"
        >
          Réserver une table
        </ReserveButton>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site eatnoya.com — Noya Châteaudun, SAS au capital de 1 000€.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.eatnoya.com/mentions-legales" },
};

export default function MentionsLegalesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "https://www.eatnoya.com" },
    { name: "Mentions Légales", url: "https://www.eatnoya.com/mentions-legales" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-16 pb-8 px-5 text-center bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Mentions Légales" }]} />
          <h1 className="font-serif text-[clamp(32px,6vw,50px)] text-burgundy font-normal mt-8">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="py-12 px-5 bg-warm-white">
        <div className="max-w-2xl mx-auto text-sm text-taupe leading-[2] space-y-8">
          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Éditeur du site</h2>
            <p>Le site eatnoya.com est édité par la société <strong className="text-dark">Noya Chateaudun</strong>, Société par Actions Simplifiée (SAS) au capital de 1 000,00 euros.</p>
            <p>Siège social : 8 rue de Châteaudun, 75009 Paris</p>
            <p>RCS Paris : <strong className="text-dark">943 231 530</strong></p>
            <p>N° d&apos;identification européen : FR7501.943231530</p>
            <p>Contact : <a href="mailto:noyachateaudun@gmail.com" className="text-burgundy hover:underline">noyachateaudun@gmail.com</a></p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de la société Noya Chateaudun.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Hébergement</h2>
            <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur le site eatnoya.com est la propriété exclusive de la société Noya Chateaudun ou de ses partenaires, et est protégé par les lois relatives à la propriété intellectuelle.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Données personnelles</h2>
            <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Les données collectées via le formulaire traiteur sont utilisées exclusivement pour répondre à votre demande.</p>
            <p>Contact : <a href="mailto:noyachateaudun@gmail.com" className="text-burgundy hover:underline">noyachateaudun@gmail.com</a></p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Cookies</h2>
            <p>Le site eatnoya.com n&apos;utilise pas de cookies de suivi ni publicitaires. Seuls des cookies strictement nécessaires au fonctionnement peuvent être déposés.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-dark font-normal mb-3">Limitation de responsabilité</h2>
            <p>Les photographies et illustrations sont non contractuelles. Les prix, menus et horaires sont susceptibles d&apos;évoluer sans préavis.</p>
          </div>

          <p className="italic text-xs text-taupe/60">Dernière mise à jour : mars 2026</p>
        </div>
      </section>
    </>
  );
}

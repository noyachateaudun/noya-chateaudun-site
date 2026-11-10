import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site eatnoya.com — Noya Châteaudun, SAS au capital de 1 000€.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.eatnoya.com/mentions-legales" },
};

const wrap = "max-w-[1320px] mx-auto px-5 md:px-14";
const h2 = "font-serif font-semibold text-[clamp(26px,2.6vw,32px)] leading-[1.1] text-ink mb-4";
const block = "pt-7 border-t border-line";
const mail = "text-brick underline decoration-brick/40 underline-offset-[3px] hover:decoration-brick";

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

      <section className={`${wrap} pt-6 md:pt-10 pb-16 md:pb-20`}>
        <nav aria-label="Fil d'Ariane" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-brick">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink" aria-current="page">Mentions Légales</span>
        </nav>
        <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-brick mb-6">Informations légales</p>
        <h1 className="font-serif font-medium text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.01em]">
          Mentions Légales
        </h1>
      </section>

      <div aria-hidden="true" className="zellige-band" />

      <section className={`${wrap} py-20 md:py-[96px]`}>
        <div className="mx-auto max-w-[68ch] text-[16px] md:text-[17px] leading-[1.75] text-muted flex flex-col gap-12 [&_p+p]:mt-1.5">
          <div className={block}>
            <h2 className={h2}>Éditeur du site</h2>
            <p>Le site eatnoya.com est édité par la société <strong className="font-semibold text-ink">Noya Chateaudun</strong>, Société par Actions Simplifiée (SAS) au capital de 1 000,00 euros.</p>
            <p>Siège social : 8 rue de Châteaudun, 75009 Paris</p>
            <p>RCS Paris : <strong className="font-semibold text-ink">943 231 530</strong></p>
            <p>N° d&apos;identification européen : FR7501.943231530</p>
            <p>Contact : <a href="mailto:noyachateaudun@gmail.com" className={mail}>noyachateaudun@gmail.com</a></p>
          </div>

          <div className={block}>
            <h2 className={h2}>Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de la société Noya Chateaudun.</p>
          </div>

          <div className={block}>
            <h2 className={h2}>Hébergement</h2>
            <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          </div>

          <div className={block}>
            <h2 className={h2}>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur le site eatnoya.com est la propriété exclusive de la société Noya Chateaudun ou de ses partenaires, et est protégé par les lois relatives à la propriété intellectuelle.</p>
          </div>

          <div className={block}>
            <h2 className={h2}>Données personnelles</h2>
            <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Les données collectées via le formulaire traiteur sont utilisées exclusivement pour répondre à votre demande.</p>
            <p>Contact : <a href="mailto:noyachateaudun@gmail.com" className={mail}>noyachateaudun@gmail.com</a></p>
          </div>

          <div className={block}>
            <h2 className={h2}>Cookies</h2>
            <p>Le site eatnoya.com n&apos;utilise pas de cookies de suivi ni publicitaires. Seuls des cookies strictement nécessaires au fonctionnement peuvent être déposés.</p>
          </div>

          <div className={block}>
            <h2 className={h2}>Limitation de responsabilité</h2>
            <p>Les photographies et illustrations sont non contractuelles. Les prix, menus et horaires sont susceptibles d&apos;évoluer sans préavis.</p>
          </div>

          <p className="pt-7 border-t border-line text-[13px] italic text-muted">Dernière mise à jour : mars 2026</p>
        </div>
      </section>
    </>
  );
}

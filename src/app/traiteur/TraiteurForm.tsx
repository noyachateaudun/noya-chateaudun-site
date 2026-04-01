"use client";

import { useState, type FormEvent } from "react";

export default function TraiteurForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nom = data.get("nom") as string;
    const email = data.get("email") as string;
    const tel = data.get("tel") as string;
    const type = data.get("type") as string;
    const date = data.get("date") as string;
    const guests = data.get("guests") as string;
    const formule = data.get("formule") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `Demande traiteur ${type || "Événement"} — ${formule || "Non précisé"} — ${nom}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite faire appel à vos services traiteur.\n\n` +
        `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${tel || "Non renseigné"}\n` +
        `Type d'événement : ${type || "Non précisé"}\nDate souhaitée : ${date || "Non précisée"}\n` +
        `Nombre d'invités : ${guests || "Non précisé"}\nFormule : ${formule || "Non précisé"}\n\n` +
        `Message :\n${message}\n\nCordialement,\n${nom}`
    );
    window.open(
      `mailto:noyachateaudun@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 text-sm border border-[#E5DFD5] rounded-lg bg-white text-dark outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all";

  return (
    <div id="devis" className="bg-white rounded-2xl p-8 md:p-10 border border-[#E5DFD5] shadow-sm">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl text-dark mb-2">
          Demander un devis gratuit
        </h2>
        <p className="font-accent text-base text-dark/50 italic">
          Décrivez votre événement, nous reviendrons vers vous sous 24h.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <div className="inline-block px-8 py-6 bg-sage/10 border border-sage/30 rounded-xl">
            <p className="text-sm text-sage font-bold mb-1">
              Demande envoyée avec succès
            </p>
            <p className="text-xs text-dark/50">
              Vérifiez que l&apos;email a bien été envoyé depuis votre
              messagerie.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="nom"
                className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
              >
                Nom & Prénom *
              </label>
              <input
                id="nom"
                name="nom"
                required
                placeholder="Jean Dupont"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="tel"
                className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
              >
                Téléphone
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="06 12 34 56 78"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
              >
                Type d&apos;événement
              </label>
              <select
                id="type"
                name="type"
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Sélectionnez...</option>
                <option value="Cocktail / Afterwork">
                  Cocktail / Afterwork
                </option>
                <option value="Anniversaire / Fête privée">
                  Anniversaire / Fête privée
                </option>
                <option value="Séminaire / Entreprise">
                  Séminaire / Entreprise
                </option>
                <option value="Mariage">Mariage</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="date"
                className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
              >
                Date souhaitée
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="guests"
                className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
              >
                Nombre de personnes
              </label>
              <select
                id="guests"
                name="guests"
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Sélectionnez...</option>
                <option value="15-25">15 – 25 personnes</option>
                <option value="25-40">25 – 40 personnes</option>
                <option value="40-60">40 – 60 personnes</option>
                <option value="60-100">60 – 100 personnes</option>
                <option value="100+">100+ personnes</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="formule"
              className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
            >
              Formule intéressée
            </label>
            <select
              id="formule"
              name="formule"
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">Sélectionnez...</option>
              <option value="Mezze">Formule Mezze</option>
              <option value="Festin">Formule Festin</option>
              <option value="Sur mesure">Formule Sur Mesure</option>
              <option value="Je ne sais pas encore">
                Je ne sais pas encore
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[11px] font-bold uppercase tracking-wider text-dark/55 mb-1.5"
            >
              Message / Précisions
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Décrivez votre événement, vos envies, le lieu, vos préférences alimentaires..."
              className={`${inputClass} resize-y`}
            />
          </div>
          <div className="text-center pt-2">
            <button
              type="submit"
              className="px-10 py-3.5 bg-burgundy text-cream rounded-lg text-sm font-medium hover:bg-burgundy/90 transition-colors"
            >
              Envoyer ma demande
            </button>
            <p className="text-xs text-dark/55 italic mt-3">
              Un e-mail pré-rempli s&apos;ouvrira dans votre messagerie.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

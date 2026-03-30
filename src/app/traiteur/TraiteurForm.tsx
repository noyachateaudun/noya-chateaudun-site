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
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Demande traiteur ${type || "Événement"} de ${nom}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite faire appel à vos services traiteur.\n\n` +
        `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${tel || "Non renseigné"}\n` +
        `Type d'événement : ${type || "Non précisé"}\nDate souhaitée : ${date || "Non précisée"}\n` +
        `Nombre d'invités : ${guests || "Non précisé"}\n\nMessage :\n${message}\n\nCordialement,\n${nom}`
    );
    window.open(`mailto:noyachateaudun@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 text-sm border border-cream-dark bg-warm-white text-dark outline-none focus:border-burgundy transition-colors";

  return (
    <div className="bg-cream p-8 md:p-10 border border-cream-dark">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl text-dark mb-2">Demandez un devis</h2>
        <p className="font-accent text-base text-taupe italic">
          Décrivez votre événement, nous reviendrons vers vous sous 24h.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <div className="inline-block px-6 py-4 bg-sage/10 border border-sage/30">
            <p className="text-sm text-sage font-bold mb-1">Demande envoyée avec succès</p>
            <p className="text-xs text-taupe">Vérifiez que l&apos;email a bien été envoyé depuis votre messagerie.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nom" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
                Nom *
              </label>
              <input id="nom" name="nom" required placeholder="Votre nom" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
                Email *
              </label>
              <input id="email" name="email" type="email" required placeholder="votre@email.com" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="tel" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
                Téléphone
              </label>
              <input id="tel" name="tel" type="tel" placeholder="06 12 34 56 78" className={inputClass} />
            </div>
            <div>
              <label htmlFor="type" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
                Type d&apos;événement
              </label>
              <select id="type" name="type" className={`${inputClass} cursor-pointer`}>
                <option value="">Sélectionnez...</option>
                <option value="Anniversaire">Anniversaire</option>
                <option value="Mariage">Mariage</option>
                <option value="Entreprise">Événement d&apos;entreprise</option>
                <option value="Séminaire">Séminaire / Team building</option>
                <option value="Fête privée">Fête privée</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="date" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
                Date souhaitée
              </label>
              <input id="date" name="date" type="date" className={inputClass} />
            </div>
            <div>
              <label htmlFor="guests" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
                Nombre d&apos;invités
              </label>
              <input id="guests" name="guests" type="number" placeholder="ex: 30" className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-taupe mb-1.5">
              Votre message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Décrivez votre événement, vos envies, le lieu, vos préférences alimentaires..."
              className={`${inputClass} resize-y`}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3.5 bg-burgundy text-cream text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy-light transition-colors border-none cursor-pointer"
            >
              Envoyer la demande
            </button>
            <p className="text-xs text-taupe italic mt-3">
              Un e-mail pré-rempli s&apos;ouvrira dans votre messagerie.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

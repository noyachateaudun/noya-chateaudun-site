"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/noyachateaudun@gmail.com";

const FORMULES = [
  "Apéro",
  "Cocktail déjeunatoire",
  "Cocktail dînatoire",
  "Buffet Festin",
  "À la carte",
  "Je ne sais pas encore",
];

type Fields = {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  date: string;
  personnes: string;
  formule: string;
  mode: string;
  adresse: string;
  allergies: string;
  message: string;
};

const INITIAL: Fields = {
  nom: "",
  entreprise: "",
  email: "",
  telephone: "",
  date: "",
  personnes: "",
  formule: FORMULES[0],
  mode: "Livraison",
  adresse: "",
  allergies: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

const LABEL = "text-[13px] font-bold";
const INPUT =
  "min-h-[48px] w-full px-3.5 border border-[#CDBDA9] rounded-xl bg-white text-ink font-body text-base outline-none focus:border-brick focus:ring-2 focus:ring-brick/20";
const FIELD = "flex flex-col gap-1.5 min-w-0";

export default function TraiteurForm() {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function update(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    // Champ piège anti-spam : un humain ne le voit pas, un robot le remplit.
    if (honey) return;

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...fields,
          _subject: `Demande de devis traiteur — ${fields.nom}`,
          _template: "table",
          _honey: "",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setFields(INITIAL);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="min-h-[420px] flex flex-col items-start justify-center gap-4">
        <svg
          aria-hidden="true"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2E5A4E"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M7.5 12.5l3 3 6-6.5" />
        </svg>
        <p role="status" className="font-serif text-[32px] md:text-[40px] leading-[1.1]">
          Merci, nous revenons vers vous très vite.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 min-h-[44px] px-5 rounded-full border border-ink bg-transparent text-sm font-bold hover:border-brick hover:text-brick transition-colors"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[18px]"
    >
      <div className={FIELD}>
        <label htmlFor="f-nom" className={LABEL}>
          Nom
        </label>
        <input
          id="f-nom"
          name="nom"
          type="text"
          autoComplete="name"
          required
          value={fields.nom}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="f-ent" className={LABEL}>
          Entreprise <span className="font-normal text-[#6B5A4E]">(facultatif)</span>
        </label>
        <input
          id="f-ent"
          name="entreprise"
          type="text"
          autoComplete="organization"
          value={fields.entreprise}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="f-mail" className={LABEL}>
          Email
        </label>
        <input
          id="f-mail"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="f-tel" className={LABEL}>
          Téléphone
        </label>
        <input
          id="f-tel"
          name="telephone"
          type="tel"
          autoComplete="tel"
          required
          value={fields.telephone}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="f-date" className={LABEL}>
          Date de l’événement
        </label>
        <input
          id="f-date"
          name="date"
          type="date"
          required
          value={fields.date}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="f-pers" className={LABEL}>
          Nombre de personnes
        </label>
        <input
          id="f-pers"
          name="personnes"
          type="number"
          min={1}
          inputMode="numeric"
          required
          value={fields.personnes}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={FIELD}>
        <label htmlFor="f-formule" className={LABEL}>
          Formule souhaitée
        </label>
        <select
          id="f-formule"
          name="formule"
          value={fields.formule}
          onChange={update}
          className={`${INPUT} px-3`}
        >
          {FORMULES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <fieldset className="m-0 p-0 border-0 flex flex-col gap-1.5 min-w-0">
        <legend className={`p-0 mb-1.5 ${LABEL}`}>Livraison ou retrait</legend>
        <div className="flex flex-wrap gap-2.5">
          {[
            { id: "f-livr", value: "Livraison", label: "Livraison" },
            { id: "f-retr", value: "Retrait au restaurant", label: "Retrait au restaurant" },
          ].map((opt) => (
            <label
              key={opt.id}
              htmlFor={opt.id}
              className="inline-flex items-center gap-2 min-h-[48px] px-4 border border-[#CDBDA9] rounded-xl bg-white cursor-pointer has-[:checked]:border-brick"
            >
              <input
                id={opt.id}
                type="radio"
                name="mode"
                value={opt.value}
                checked={fields.mode === opt.value}
                onChange={update}
                className="accent-brick w-[18px] h-[18px]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className={`${FIELD} md:col-span-2`}>
        <label htmlFor="f-adr" className={LABEL}>
          Adresse de livraison
        </label>
        <input
          id="f-adr"
          name="adresse"
          type="text"
          autoComplete="street-address"
          value={fields.adresse}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={`${FIELD} md:col-span-2`}>
        <label htmlFor="f-allerg" className={LABEL}>
          Allergies et régimes
        </label>
        <input
          id="f-allerg"
          name="allergies"
          type="text"
          placeholder="Vegan, sans gluten, allergies…"
          value={fields.allergies}
          onChange={update}
          className={INPUT}
        />
      </div>
      <div className={`${FIELD} md:col-span-2`}>
        <label htmlFor="f-msg" className={LABEL}>
          Message
        </label>
        <textarea
          id="f-msg"
          name="message"
          rows={4}
          value={fields.message}
          onChange={update}
          className={`${INPUT} py-3 resize-y`}
        />
      </div>

      {/* Champ piège anti-spam, invisible pour les humains */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="f-honey">Ne pas remplir</label>
        <input
          id="f-honey"
          name="_honey"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="md:col-span-2 text-sm text-brick">
          Désolés, votre demande n’a pas pu être envoyée. Vous pouvez nous
          appeler au{" "}
          <a href="tel:+33611610206" className="font-bold underline">
            06 11 61 02 06
          </a>{" "}
          ou nous écrire à{" "}
          <a href="mailto:noyachateaudun@gmail.com" className="font-bold underline">
            noyachateaudun@gmail.com
          </a>
          .
        </p>
      )}

      <div className="md:col-span-2 flex flex-wrap items-center gap-x-5 gap-y-3 mt-1.5">
        <button
          type="submit"
          disabled={sending}
          className="min-h-[52px] px-8 rounded-full bg-ink text-warm-white text-[13px] font-bold tracking-[0.14em] uppercase cursor-pointer hover:bg-zellige transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          {sending ? "Envoi…" : "Envoyer ma demande"}
        </button>
        <span className="text-[13px] text-[#6B5A4E]">
          Envoyé à noyachateaudun@gmail.com
        </span>
      </div>
    </form>
  );
}

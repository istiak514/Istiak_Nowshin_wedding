import React, { useState } from "react";

const HERO_IMAGE = "/ie2026.png";
const LOGO_IMAGE = "/logo.png";
const BACKGROUND_IMAGE = "/botanical-bg.png";

const VENUE = {
  name: "Verger Richard Legault",
  address: "425 Rue Binette, Saint-Joseph-du-Lac, QC J0N 1M0",
  phone: "(450) 623-6306",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=425%20Rue%20Binette%2C%20Saint-Joseph-du-Lac%2C%20QC%20J0N%201M0",
};

const MEAL_OPTIONS = [
  {
    value: "Salmon",
    labels: {
      en: "🐟 Salmon",
      fr: "🐟 Saumon",
    },
  },
  {
    value: "Steak",
    labels: {
      en: "🥩 Steak (Halal)",
      fr: "🥩 Steak (halal)",
    },
  },
  {
    value: "Vegetarian",
    labels: {
      en: "🥗 Vegetarian",
      fr: "🥗 Végétarien",
    },
  },
];

const TEXT = {
  en: {
    langEnglish: "EN",
    langFrench: "FR",

    weddingPill: "We are getting married",
    weddingOf: "The Wedding of",
    heroDescription:
      "Join us as we celebrate our wedding surrounded by family, friends, and love.",
    rsvpNow: "RSVP Now",
    getDirections: "Get Directions",
    addCalendar: "Add to Calendar",
    googleCalendar: "Google Calendar",
    appleOutlookCalendar: "Apple / Outlook Calendar",

    saveTheDate: "Save the Date",
    saveDateMain: "August 22",
    footerDate: "August 22, 2026",
    dateTitle: "Date",
    dateFull: "Saturday, August 22, 2026",
    venueTitle: "Venue",
    dinnerTitle: "Dinner Options",
    dinnerOptions: "🐟 Salmon, 🥩 Steak, or 🥗 Vegetarian",

    weddingDetails: "Wedding Details",
    rsvpInfo:
      "Please RSVP with your total number of guests and a meal choice for each person.",
    detailsPlaceholder:
      "Ceremony time, reception time, dress code, parking notes, hotel details, and registry information can be added here once confirmed.",

    rsvpLabel: "RSVP",
    rsvpHeading: "Confirm Your Attendance",
    rsvpIntro: "Please fill out the form below and choose a meal for each guest.",
    fullName: "Full Name",
    fullNamePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    phone: "Phone Number (optional)",
    phonePlaceholder: "(514) 000-0000",
    attending: "Will you be attending?",
    selectResponse: "Select response",
    yes: "Yes",
    no: "No",

    guestCount: "How many people will attend, including you?",
    guestCountPlaceholder: "Enter number of guests",
    guest: "Guest",
    guestName: "Guest Name",
    yourName: "Your name",
    guestNamePlaceholder: "Guest name",
    mealChoice: "Meal Choice",
    selectMeal: "Select meal",

    allergies: "Allergies or Dietary Restrictions",
    allergiesPlaceholder: "Please mention any allergies or dietary restrictions.",
    notes: "Message / Notes",
    notesPlaceholder: "Optional message for Istiak & Eram",

    songRequestTitle: "Song Request",
    songRequestText: "Tell us one song you would love to hear at the wedding.",
    songRequestLabel: "Song Request (optional)",
    songRequestPlaceholder: "Example: Perfect by Ed Sheeran",

    inviteCodeTitle: "Invitation Code Required",
    inviteCodeText:
      "Enter the code from your wedding invitation before submitting.",
    inviteCodeLabel: "Invitation Code",
    inviteCodePlaceholder: "Enter invitation code",

    submit: "Submit RSVP",
    submitting: "Submitting...",
    thankYou: "Thank you!",
    thankYouText:
      "Your RSVP has been received. Thank you for confirming your attendance. We look forward to celebrating with you!",
    submitAnother: "Submit Another RSVP",

    emailError: "Please enter a valid email address.",
    attendingError: "Please select whether you will be attending.",
    guestCountError: "Please enter the total number of guests attending.",
    guestNameError: "Please enter the name of each guest.",
    mealError: "Please select a meal for each guest.",
    codeError: "Please enter the invitation code from your wedding card.",
    codeSubmitError:
      "Please enter the correct invitation code before submitting your RSVP.",
    generalError:
      "Something went wrong. Please try again or contact Istiak and Eram directly.",

    calendarTitle: "Istiak & Eram Wedding",
    calendarDetails:
      "Wedding celebration for Istiak and Eram. Please check the wedding website for RSVP and event details.",
  },

  fr: {
    langEnglish: "EN",
    langFrench: "FR",

    weddingPill: "Nous nous marions",
    weddingOf: "Le mariage de",
    heroDescription:
      "Joignez-vous à nous pour célébrer notre mariage entourés de notre famille, de nos amis et d’amour.",
    rsvpNow: "Confirmer ma présence",
    getDirections: "Obtenir l’itinéraire",
    addCalendar: "Ajouter au calendrier",
    googleCalendar: "Google Agenda",
    appleOutlookCalendar: "Calendrier Apple / Outlook",

    saveTheDate: "Réservez la date",
    saveDateMain: "22 août",
    footerDate: "22 août 2026",
    dateTitle: "Date",
    dateFull: "Samedi 22 août 2026",
    venueTitle: "Lieu",
    dinnerTitle: "Options du repas",
    dinnerOptions: "🐟 Saumon, 🥩 steak, ou 🥗 végétarien",

    weddingDetails: "Détails du mariage",
    rsvpInfo:
      "Veuillez confirmer le nombre total de personnes présentes et choisir un repas pour chaque invité.",
    detailsPlaceholder:
      "L’heure de la cérémonie, l’heure de la réception, le code vestimentaire, les informations de stationnement, les détails d’hôtel et les informations de registre pourront être ajoutés une fois confirmés.",

    rsvpLabel: "RSVP",
    rsvpHeading: "Confirmez votre présence",
    rsvpIntro:
      "Veuillez remplir le formulaire ci-dessous et choisir un repas pour chaque invité.",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom complet",
    email: "Courriel",
    emailPlaceholder: "vous@exemple.com",
    phone: "Numéro de téléphone (facultatif)",
    phonePlaceholder: "(514) 000-0000",
    attending: "Serez-vous présent(e)?",
    selectResponse: "Sélectionnez une réponse",
    yes: "Oui",
    no: "Non",

    guestCount: "Combien de personnes seront présentes, vous inclus?",
    guestCountPlaceholder: "Entrez le nombre d’invités",
    guest: "Invité",
    guestName: "Nom de l’invité",
    yourName: "Votre nom",
    guestNamePlaceholder: "Nom de l’invité",
    mealChoice: "Choix du repas",
    selectMeal: "Sélectionnez un repas",

    allergies: "Allergies ou restrictions alimentaires",
    allergiesPlaceholder:
      "Veuillez indiquer toute allergie ou restriction alimentaire.",
    notes: "Message / Notes",
    notesPlaceholder: "Message facultatif pour Istiak et Eram",

    songRequestTitle: "Demande musicale",
    songRequestText:
      "Dites-nous une chanson que vous aimeriez entendre au mariage.",
    songRequestLabel: "Demande musicale (facultatif)",
    songRequestPlaceholder: "Exemple : Perfect par Ed Sheeran",

    inviteCodeTitle: "Code d’invitation requis",
    inviteCodeText:
      "Entrez le code figurant sur votre invitation avant de soumettre votre RSVP.",
    inviteCodeLabel: "Code d’invitation",
    inviteCodePlaceholder: "Entrez le code d’invitation",

    submit: "Soumettre le RSVP",
    submitting: "Soumission...",
    thankYou: "Merci!",
    thankYouText:
      "Votre RSVP a été reçu. Merci d’avoir confirmé votre présence. Nous avons hâte de célébrer avec vous!",
    submitAnother: "Soumettre un autre RSVP",

    emailError: "Veuillez entrer une adresse courriel valide.",
    attendingError: "Veuillez indiquer si vous serez présent(e).",
    guestCountError: "Veuillez entrer le nombre total de personnes présentes.",
    guestNameError: "Veuillez entrer le nom de chaque invité.",
    mealError: "Veuillez choisir un repas pour chaque invité.",
    codeError:
      "Veuillez entrer le code d’invitation figurant sur votre carte de mariage.",
    codeSubmitError:
      "Veuillez entrer le bon code d’invitation avant de soumettre votre RSVP.",
    generalError:
      "Une erreur s’est produite. Veuillez réessayer ou contacter directement Istiak et Eram.",

    calendarTitle: "Mariage d’Istiak et Eram",
    calendarDetails:
      "Célébration du mariage d’Istiak et Eram. Veuillez consulter le site du mariage pour le RSVP et les détails de l’événement.",
  },
};

const STORAGE_KEY = "istiak-eram-wedding-rsvps";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpMuf0oOTmw7eaLNE_Ylbr9DGPawrtIKFfnVia068B6FT3JgOj-__vr5sfbRlH3LhYQA/exec";
const INVITE_CODE = "IE2026";
const NEW_LINE = String.fromCharCode(10);

const CALENDAR_EVENT = {
  startDate: "20260822",
  endDate: "20260823",
  location: `${VENUE.name}, ${VENUE.address}`,
};

const nameFont = {
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const scriptFont = {
  fontFamily: '"Brush Script MT", "Segoe Script", cursive',
};

function safeReadRsvps() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function Icon({ children }) {
  return <span className="mb-4 block text-3xl leading-none">{children}</span>;
}

function SmallIcon({ children }) {
  return <span className="mt-0.5 shrink-0 text-xl leading-none">{children}</span>;
}

function DateIcon({ small = false }) {
  return (
    <span
      className={
        small
          ? "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-amber-300 bg-[#fffaf0] text-[#14352f] shadow-sm"
          : "mb-4 grid h-12 w-12 place-items-center rounded-xl border border-amber-300 bg-[#fffaf0] text-[#14352f] shadow-sm"
      }
    >
      <span
        className={
          small
            ? "text-[7px] font-bold uppercase tracking-[0.12em] text-amber-700"
            : "text-[9px] font-bold uppercase tracking-[0.14em] text-amber-700"
        }
      >
        Aug
      </span>
      <span
        className={
          small
            ? "-mt-2 text-sm font-black leading-none"
            : "-mt-3 text-lg font-black leading-none"
        }
      >
        22
      </span>
    </span>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-stone-700">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 text-[#1f1a17] outline-none transition duration-300 hover:border-amber-400 hover:shadow-[0_0_24px_rgba(214,138,31,0.28)] hover:ring-2 hover:ring-amber-300/40 focus:border-amber-400 focus:shadow-[0_0_28px_rgba(214,138,31,0.38)] focus:ring-4 focus:ring-amber-100"
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 text-[#1f1a17] outline-none transition duration-300 hover:border-amber-400 hover:shadow-[0_0_24px_rgba(214,138,31,0.28)] hover:ring-2 hover:ring-amber-300/40 focus:border-amber-400 focus:shadow-[0_0_28px_rgba(214,138,31,0.38)] focus:ring-4 focus:ring-amber-100"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 text-[#1f1a17] outline-none transition duration-300 hover:border-amber-400 hover:shadow-[0_0_24px_rgba(214,138,31,0.28)] hover:ring-2 hover:ring-amber-300/40 focus:border-amber-400 focus:shadow-[0_0_28px_rgba(214,138,31,0.38)] focus:ring-4 focus:ring-amber-100"
    />
  );
}

function FloatingDecor() {
  const items = [
    { left: "4%", delay: "-1s", duration: "13s", symbol: "✨", size: "18px" },
    { left: "12%", delay: "-7s", duration: "17s", symbol: "🍂", size: "22px" },
    { left: "20%", delay: "-4s", duration: "14s", symbol: "✦", size: "18px" },
    { left: "31%", delay: "-10s", duration: "19s", symbol: "🍁", size: "20px" },
    { left: "42%", delay: "-2s", duration: "16s", symbol: "✨", size: "16px" },
    { left: "53%", delay: "-8s", duration: "18s", symbol: "🍂", size: "21px" },
    { left: "64%", delay: "-5s", duration: "15s", symbol: "✦", size: "18px" },
    { left: "74%", delay: "-12s", duration: "20s", symbol: "🍁", size: "22px" },
    { left: "84%", delay: "-3s", duration: "16s", symbol: "✨", size: "17px" },
    { left: "94%", delay: "-9s", duration: "18s", symbol: "🍂", size: "21px" },
  ];

  return (
    <>
      <style>{`
        @keyframes weddingFall {
          0% { transform: translate3d(0, -15vh, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.55; }
          50% { opacity: 0.38; }
          100% { transform: translate3d(45px, 115vh, 0) rotate(260deg); opacity: 0; }
        }

        @keyframes weddingTwinkle {
          0%, 100% {
            filter: drop-shadow(0 0 3px rgba(214, 180, 109, 0.22));
            transform: scale(0.9);
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(214, 180, 109, 0.45));
            transform: scale(1.12);
          }
        }

        .wedding-float-item {
          position: absolute;
          top: -10vh;
          animation-name: weddingFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          color: #d6b46d;
          text-shadow: 0 0 10px rgba(214, 180, 109, 0.35);
        }

        .wedding-float-item span {
          display: block;
          animation: weddingTwinkle 2.6s ease-in-out infinite;
        }
      `}</style>

      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="wedding-float-item"
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
              fontSize: item.size,
            }}
          >
            <span>{item.symbol}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function WeddingWebsite() {
  const [lang, setLang] = useState("en");
  const t = TEXT[lang];

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [attendingError, setAttendingError] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [inviteCodeError, setInviteCodeError] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guestCount: "",
    guests: [],
    allergies: "",
    songRequest: "",
    notes: "",
  });

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    t.calendarTitle
  )}&dates=${CALENDAR_EVENT.startDate}/${CALENDAR_EVENT.endDate}&details=${encodeURIComponent(
    t.calendarDetails
  )}&location=${encodeURIComponent(CALENDAR_EVENT.location)}`;

  function updateGuestCount(value) {
    const cleanedValue = String(value).replace(/[^0-9]/g, "");

    if (cleanedValue === "") {
      setForm({ ...form, guestCount: "", guests: [] });
      return;
    }

    const count = Math.max(1, Math.min(12, Number(cleanedValue)));
    const guests = Array.from({ length: count }, (_, index) => {
      return form.guests[index] || { name: "", meal: "" };
    });

    setForm({ ...form, guestCount: String(count), guests });
  }

  function fixGuestCountOnBlur() {
    if (form.attending === "Yes" && form.guestCount === "") {
      updateGuestCount("1");
    }
  }

  function updateGuest(index, key, value) {
    const guests = [...form.guests];
    guests[index] = { ...guests[index], [key]: value };
    setForm({ ...form, guests });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const email = form.email.trim();
    const validEmail =
      email.length > 3 &&
      email.includes("@") &&
      email.includes(".") &&
      !email.includes(" ") &&
      email.indexOf("@") > 0 &&
      email.lastIndexOf(".") > email.indexOf("@") + 1;

    if (!email || !validEmail) {
      setEmailError(t.emailError);
      setSubmitError(t.emailError);
      return;
    }

    setEmailError("");

    if (!form.attending) {
      setAttendingError(t.attendingError);
      setSubmitError(t.attendingError);
      return;
    }

    setAttendingError("");

    if (form.attending === "Yes") {
      if (!form.guestCount || form.guests.length === 0) {
        setSubmitError(t.guestCountError);
        return;
      }

      const missingGuestName = form.guests.some((guest) => !guest.name.trim());
      if (missingGuestName) {
        setSubmitError(t.guestNameError);
        return;
      }

      const missingMeal = form.guests.some((guest) => !guest.meal);
      if (missingMeal) {
        setSubmitError(t.mealError);
        return;
      }
    }

    if (inviteCode.trim().toUpperCase() !== INVITE_CODE) {
      setInviteCodeError(t.codeError);
      setSubmitError(t.codeSubmitError);
      return;
    }

    setInviteCodeError("");
    setSubmitError("");
    setSubmitting(true);

    const rsvp = {
      id: String(Date.now()),
      submittedAt: new Date().toISOString(),
      ...form,
      guestCount: form.attending === "No" ? 0 : Number(form.guestCount) || 1,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(rsvp),
      });

      const saved = safeReadRsvps();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, rsvp]));
      setSubmitted(true);
    } catch (error) {
      setSubmitError(t.generalError);
    } finally {
      setSubmitting(false);
    }
  }

  function downloadCalendarInvite() {
    const dtStamp =
      new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const icsLines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Istiak and Eram Wedding//RSVP Website//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:istiak-eram-wedding-20260822@example.com",
      `DTSTAMP:${dtStamp}`,
      `DTSTART;VALUE=DATE:${CALENDAR_EVENT.startDate}`,
      `DTEND;VALUE=DATE:${CALENDAR_EVENT.endDate}`,
      `SUMMARY:${t.calendarTitle}`,
      `DESCRIPTION:${t.calendarDetails}`,
      `LOCATION:${CALENDAR_EVENT.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ];

    const blob = new Blob([icsLines.join(NEW_LINE)], {
      type: "text/calendar;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "istiak-eram-wedding.ics";
    link.click();
    URL.revokeObjectURL(url);
    setCalendarOpen(false);
  }

  function openDirections() {
    window.open(VENUE.mapUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f8f3ea] text-[#1f1a17]">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-75"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 243, 234, 0.14), rgba(248, 243, 234, 0.14)), url(${BACKGROUND_IMAGE})`,
        }}
      />

      <FloatingDecor />

      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,180,106,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(20,53,47,0.12),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
          <div>
            <div className="mb-5 flex justify-center md:justify-start">
              <div className="flex rounded-full border border-amber-300 bg-[#fffaf0]/85 p-1 shadow-sm backdrop-blur">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={
                    lang === "en"
                      ? "rounded-full bg-[#14352f] px-4 py-1.5 text-xs font-bold text-white shadow-sm transition"
                      : "rounded-full px-4 py-1.5 text-xs font-bold text-[#14352f] transition hover:bg-white"
                  }
                >
                  {t.langEnglish}
                </button>
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={
                    lang === "fr"
                      ? "rounded-full bg-[#14352f] px-4 py-1.5 text-xs font-bold text-white shadow-sm transition"
                      : "rounded-full px-4 py-1.5 text-xs font-bold text-[#14352f] transition hover:bg-white"
                  }
                >
                  {t.langFrench}
                </button>
              </div>
            </div>

            <p className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-amber-300 bg-[#fffaf0]/85 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-[0_0_28px_rgba(214,138,31,0.45)] hover:ring-2 hover:ring-amber-400/50 md:mx-0">
              <span>♡</span> {t.weddingPill}
            </p>

            <div className="mt-2 text-center md:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-stone-500 md:text-sm">
                {t.weddingOf}
              </p>

              <h1 className="text-[#1f1a17]">
                <span
                  style={nameFont}
                  className="block text-7xl font-semibold leading-[0.85] tracking-[-0.05em] md:text-8xl lg:text-9xl"
                >
                  Istiak
                </span>
                <span
                  style={scriptFont}
                  className="my-1 block text-6xl leading-none text-amber-600 md:text-7xl lg:text-8xl"
                >
                  &
                </span>
                <span
                  style={nameFont}
                  className="block text-7xl font-semibold leading-[0.85] tracking-[-0.05em] md:text-8xl lg:text-9xl"
                >
                  Eram
                </span>
              </h1>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              {t.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rsvp"
                className="rounded-2xl bg-[#14352f] px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f2925]"
              >
                {t.rsvpNow}
              </a>

              <button
                type="button"
                onClick={openDirections}
                className="rounded-2xl bg-[#d68a1f] px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#b87316]"
              >
                {t.getDirections}
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCalendarOpen(!calendarOpen)}
                  className="w-full rounded-2xl bg-[#7a2e45] px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#642539] sm:w-auto"
                >
                  {t.addCalendar}
                </button>

                {calendarOpen && (
                  <div className="absolute left-0 z-30 mt-3 w-full overflow-hidden rounded-2xl border border-rose-200 bg-[#fffaf0] shadow-xl sm:w-56">
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setCalendarOpen(false)}
                      className="block px-5 py-3 text-sm font-semibold text-[#7a2e45] hover:bg-[#f8f1e7]"
                    >
                      {t.googleCalendar}
                    </a>
                    <button
                      type="button"
                      onClick={downloadCalendarInvite}
                      className="block w-full px-5 py-3 text-left text-sm font-semibold text-[#7a2e45] hover:bg-[#f8f1e7]"
                    >
                      {t.appleOutlookCalendar}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(214,138,31,0.45)] hover:ring-2 hover:ring-amber-400/50">
              <img
                src={HERO_IMAGE}
                alt="Istiak and Eram"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="mt-4 px-5 md:absolute md:-bottom-8 md:left-6 md:mt-0 md:px-0">
              <div className="relative mx-auto max-w-[330px] overflow-hidden rounded-[2rem] border border-amber-200/80 bg-[#fffaf0]/95 px-5 py-4 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(214,138,31,0.4)] hover:ring-2 hover:ring-amber-400/50 md:w-auto md:max-w-none md:rounded-[1.75rem] md:px-6 md:py-5 md:shadow-[0_22px_55px_rgba(31,26,23,0.22)]">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-300/25 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-[#14352f]/15 blur-2xl" />

                <div className="relative text-center">
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <span className="h-px w-6 bg-amber-500/70 md:w-8" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-700 md:text-[11px] md:tracking-[0.35em]">
                      {t.saveTheDate}
                    </p>
                    <span className="h-px w-6 bg-amber-500/70 md:w-8" />
                  </div>

                  <p
                    style={nameFont}
                    className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#1f1a17] md:text-3xl"
                  >
                    {t.saveDateMain}
                  </p>

                  <div className="mt-2 flex items-center justify-center gap-2.5">
                    <span className="relative -top-[1px] inline-block text-xl leading-none text-amber-600 md:text-2xl">
                      ✦
                    </span>
                    <span className="text-4xl font-semibold leading-none text-[#14352f] md:text-5xl">
                      2026
                    </span>
                    <span className="relative -top-[1px] inline-block text-xl leading-none text-amber-600 md:text-2xl">
                      ✦
                    </span>
                  </div>

                  <div className="mt-3 border-t border-amber-200/80 pt-3 md:mt-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 md:text-xs md:tracking-[0.24em]">
                      {VENUE.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#fffaf0]/92 p-6 shadow-sm ring-1 ring-amber-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50">
            <DateIcon />
            <h2 className="text-xl font-semibold">{t.dateTitle}</h2>
            <p className="mt-2 text-stone-600">{t.dateFull}</p>
          </div>

          <div className="rounded-3xl bg-[#fffaf0]/92 p-6 shadow-sm ring-1 ring-amber-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50">
            <Icon>📍</Icon>
            <h2 className="text-xl font-semibold">{t.venueTitle}</h2>
            <p className="mt-2 text-stone-600">{VENUE.name}</p>
            <p className="text-stone-500">{VENUE.address}</p>
          </div>

          <div className="rounded-3xl bg-[#fffaf0]/92 p-6 shadow-sm ring-1 ring-amber-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50">
            <Icon>🍽️</Icon>
            <h2 className="text-xl font-semibold">{t.dinnerTitle}</h2>
            <p className="mt-2 text-stone-600">{t.dinnerOptions}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-amber-200 bg-[#211814]/96 p-6 text-[#fffaf0] shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(214,138,31,0.45)] hover:ring-2 hover:ring-amber-400/40 lg:self-start">
            <h2 className="font-serif text-3xl text-[#f7e7c0]">
              {t.weddingDetails}
            </h2>

            <div className="mt-6 space-y-4 text-sm text-[#fff3db]">
              <p className="flex gap-3">
                <DateIcon small /> {t.dateFull}
              </p>
              <p className="flex gap-3">
                <SmallIcon>📍</SmallIcon>
                <span>
                  {VENUE.name}
                  <br />
                  {VENUE.address}
                </span>
              </p>
              <p className="flex gap-3">
                <SmallIcon>☎️</SmallIcon> {VENUE.phone}
              </p>
              <p className="flex gap-3">
                <SmallIcon>👥</SmallIcon> {t.rsvpInfo}
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-300 bg-[#33241d] p-4 text-sm leading-6 text-[#fff3db]">
              {t.detailsPlaceholder}
            </div>
          </div>

          <div
            id="rsvp"
            className="rounded-[2rem] bg-[#fffaf0]/94 p-6 shadow-xl ring-1 ring-amber-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50 md:p-8"
          >
            {submitted ? (
              <div className="grid min-h-[520px] place-items-center text-center">
                <div>
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-green-100 text-3xl text-green-700">
                    ✓
                  </div>
                  <h2 className="font-serif text-4xl">{t.thankYou}</h2>
                  <p className="mx-auto mt-4 max-w-md text-stone-600">
                    {t.thankYouText}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-2xl border border-amber-200 px-5 py-3 font-semibold hover:bg-stone-50"
                    >
                      {t.submitAnother}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                    {t.rsvpLabel}
                  </p>
                  <h2 className="mt-2 font-serif text-4xl">{t.rsvpHeading}</h2>
                  <p className="mt-3 text-stone-600">{t.rsvpIntro}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label={t.fullName}>
                    <Input
                      required
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      placeholder={t.fullNamePlaceholder}
                    />
                  </Field>

                  <Field label={t.email}>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => {
                        setForm({ ...form, email: event.target.value });
                        if (emailError) setEmailError("");
                      }}
                      placeholder={t.emailPlaceholder}
                    />
                    {emailError && (
                      <p className="mt-2 text-sm font-medium text-red-600">
                        {emailError}
                      </p>
                    )}
                  </Field>

                  <Field label={t.phone}>
                    <Input
                      value={form.phone}
                      onChange={(event) =>
                        setForm({ ...form, phone: event.target.value })
                      }
                      placeholder={t.phonePlaceholder}
                    />
                  </Field>

                  <Field label={t.attending}>
                    <Select
                      required
                      value={form.attending}
                      onChange={(event) => {
                        setForm({ ...form, attending: event.target.value });
                        if (attendingError) setAttendingError("");
                      }}
                    >
                      <option value="" disabled>
                        {t.selectResponse}
                      </option>
                      <option value="Yes">{t.yes}</option>
                      <option value="No">{t.no}</option>
                    </Select>
                    {attendingError && (
                      <p className="mt-2 text-sm font-medium text-red-600">
                        {attendingError}
                      </p>
                    )}
                  </Field>
                </div>

                {form.attending === "Yes" && (
                  <>
                    <Field label={t.guestCount}>
                      <Input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        value={form.guestCount}
                        onChange={(event) => updateGuestCount(event.target.value)}
                        onBlur={fixGuestCountOnBlur}
                        placeholder={t.guestCountPlaceholder}
                      />
                    </Field>

                    <div className="space-y-4">
                      {form.guests.map((guest, index) => (
                        <div
                          key={index}
                          className="rounded-3xl border border-amber-200 bg-[#f8f1e7]/90 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(214,138,31,0.32)] hover:ring-2 hover:ring-amber-400/40"
                        >
                          <h3 className="mb-4 font-semibold">
                            {t.guest} {index + 1}
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            <Field label={t.guestName}>
                              <Input
                                required
                                value={guest.name}
                                onChange={(event) =>
                                  updateGuest(index, "name", event.target.value)
                                }
                                placeholder={
                                  index === 0 ? t.yourName : t.guestNamePlaceholder
                                }
                              />
                            </Field>

                            <Field label={t.mealChoice}>
                              <Select
                                required
                                value={guest.meal}
                                onChange={(event) =>
                                  updateGuest(index, "meal", event.target.value)
                                }
                              >
                                <option value="" disabled>
                                  {t.selectMeal}
                                </option>
                                {MEAL_OPTIONS.map((meal) => (
                                  <option key={meal.value} value={meal.value}>
                                    {meal.labels[lang]}
                                  </option>
                                ))}
                              </Select>
                            </Field>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Field label={t.allergies}>
                      <Textarea
                        value={form.allergies}
                        onChange={(event) =>
                          setForm({ ...form, allergies: event.target.value })
                        }
                        placeholder={t.allergiesPlaceholder}
                      />
                    </Field>
                  </>
                )}

                <Field label={t.notes}>
                  <Textarea
                    value={form.notes}
                    onChange={(event) =>
                      setForm({ ...form, notes: event.target.value })
                    }
                    placeholder={t.notesPlaceholder}
                  />
                </Field>

                <div className="rounded-3xl border border-amber-300 bg-gradient-to-br from-[#fffaf0] via-[#fff7e6] to-[#f3dfb3] p-5 shadow-[0_12px_30px_rgba(214,180,109,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(214,138,31,0.4)] hover:ring-2 hover:ring-amber-400/50">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-amber-300 bg-white text-2xl shadow-md">
                      🎵
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#14352f]">
                        {t.songRequestTitle}
                      </p>
                      <p className="mt-1 text-sm text-stone-600">
                        {t.songRequestText}
                      </p>
                    </div>
                  </div>

                  <Field label={t.songRequestLabel}>
                    <Input
                      value={form.songRequest}
                      onChange={(event) =>
                        setForm({ ...form, songRequest: event.target.value })
                      }
                      placeholder={t.songRequestPlaceholder}
                    />
                  </Field>
                </div>

                <div className="rounded-3xl border-2 border-amber-400 bg-gradient-to-br from-[#fffaf0] via-[#fff7e6] to-[#f8e6bd] p-5 shadow-[0_14px_35px_rgba(214,180,109,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(214,138,31,0.48)] hover:ring-2 hover:ring-amber-400/60">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#14352f] text-sm text-white">
                      🔐
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
                        {t.inviteCodeTitle}
                      </p>
                      <p className="mt-1 text-sm text-stone-600">
                        {t.inviteCodeText}
                      </p>
                    </div>
                  </div>

                  <Field label={t.inviteCodeLabel}>
                    <Input
                      required
                      value={inviteCode}
                      onChange={(event) => {
                        setInviteCode(event.target.value.toUpperCase());
                        if (inviteCodeError) setInviteCodeError("");
                      }}
                      placeholder={t.inviteCodePlaceholder}
                    />
                    {inviteCodeError && (
                      <p className="mt-2 text-sm font-medium text-red-600">
                        {inviteCodeError}
                      </p>
                    )}
                  </Field>
                </div>

                {submitError && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-2xl bg-[#14352f] px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f2925] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="group relative z-10 px-6 py-14 text-center text-sm text-stone-500">
        <img
          src={LOGO_IMAGE}
          alt="Istiak and Eram wedding logo"
          className="mx-auto mb-6 h-40 w-40 object-contain opacity-95 transition duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-[0_0_30px_rgba(214,138,31,0.55)] md:h-52 md:w-52 lg:h-60 lg:w-60"
        />

        <p
          style={nameFont}
          className="inline-block text-4xl font-semibold tracking-[-0.04em] text-[#14352f] transition duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_12px_rgba(214,138,31,0.24)]"
        >
          Istiak{" "}
          <span
            style={scriptFont}
            className="inline-block text-5xl text-amber-600 transition duration-300 group-hover:scale-110 group-hover:-rotate-3"
          >
            &
          </span>{" "}
          Eram
        </p>

        <div className="mx-auto mt-2 h-px w-16 rounded-full bg-amber-500/50 transition-all duration-300 group-hover:w-36 group-hover:bg-amber-500/80" />

        <p className="mt-3 text-base transition duration-300 group-hover:text-stone-700">
          {t.footerDate} · {VENUE.name}
        </p>
      </footer>
    </main>
  );
}

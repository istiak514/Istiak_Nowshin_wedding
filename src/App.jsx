import React, { useState } from "react";

const HERO_IMAGE = "/ie2026.png";
const LOGO_IMAGE = "/logo.png";
const BACKGROUND_IMAGE = "/botanical-bg.png";

const VENUE = {
  name: "Verger Richard Legault",
  address: "425 Rue Binette, Saint-Joseph-du-Lac, QC J0N 1M0",
  phone: "(450) 623-6306",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=425%20Rue%20Binette%2C%20Saint-Joseph-du-Lac%2C%20QC%20J0N%201M0",
};

const MEAL_OPTIONS = [
  { value: "Salmon", label: "🐟 Salmon" },
  { value: "Steak", label: "🥩 Steak (Halal)" },
  { value: "Vegetarian", label: "🥗 Vegetarian" },
];

const STORAGE_KEY = "istiak-eram-wedding-rsvps";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpMuf0oOTmw7eaLNE_Ylbr9DGPawrtIKFfnVia068B6FT3JgOj-__vr5sfbRlH3LhYQA/exec";
const INVITE_CODE = "IE2026";

const CALENDAR_EVENT = {
  title: "Istiak & Eram Wedding",
  startDate: "20260822",
  endDate: "20260823",
  details: "Wedding celebration for Istiak and Eram. Please check the wedding website for RSVP and event details.",
  location: `${VENUE.name}, ${VENUE.address}`,
};

const GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  CALENDAR_EVENT.title
)}&dates=${CALENDAR_EVENT.startDate}/${CALENDAR_EVENT.endDate}&details=${encodeURIComponent(
  CALENDAR_EVENT.details
)}&location=${encodeURIComponent(CALENDAR_EVENT.location)}`;
const NEW_LINE = String.fromCharCode(10);

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
      <span className={small ? "text-[7px] font-bold uppercase tracking-[0.12em] text-amber-700" : "text-[9px] font-bold uppercase tracking-[0.14em] text-amber-700"}>
        Aug
      </span>
      <span className={small ? "-mt-2 text-sm font-black leading-none" : "-mt-3 text-lg font-black leading-none"}>
        22
      </span>
    </span>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-stone-700">{label}</span>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-[#1f1a17] outline-none transition duration-300 hover:border-amber-400 hover:shadow-[0_0_24px_rgba(214,138,31,0.28)] hover:ring-2 hover:ring-amber-300/40 focus:border-amber-400 focus:shadow-[0_0_28px_rgba(214,138,31,0.38)] focus:ring-4 focus:ring-amber-100"
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-[#1f1a17] outline-none transition duration-300 hover:border-amber-400 hover:shadow-[0_0_24px_rgba(214,138,31,0.28)] hover:ring-2 hover:ring-amber-300/40 focus:border-amber-400 focus:shadow-[0_0_28px_rgba(214,138,31,0.38)] focus:ring-4 focus:ring-amber-100"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-[#1f1a17] outline-none transition duration-300 hover:border-amber-400 hover:shadow-[0_0_24px_rgba(214,138,31,0.28)] hover:ring-2 hover:ring-amber-300/40 focus:border-amber-400 focus:shadow-[0_0_28px_rgba(214,138,31,0.38)] focus:ring-4 focus:ring-amber-100"
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
          10% { opacity: 0.95; }
          50% { opacity: 0.8; }
          100% { transform: translate3d(45px, 115vh, 0) rotate(260deg); opacity: 0; }
        }
        @keyframes weddingTwinkle {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(214, 180, 109, 0.4)); transform: scale(0.9); }
          50% { filter: drop-shadow(0 0 12px rgba(214, 180, 109, 0.9)); transform: scale(1.18); }
        }
        .wedding-float-item {
          position: absolute;
          top: -10vh;
          animation-name: weddingFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          color: #d6b46d;
          text-shadow: 0 0 12px rgba(214, 180, 109, 0.75);
        }
        .wedding-float-item span {
          display: block;
          animation: weddingTwinkle 2.3s ease-in-out infinite;
        }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
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
    notes: "",
    songRequest: "",
  });

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
    if (form.guestCount === "") {
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

    if (inviteCode.trim().toUpperCase() !== INVITE_CODE) {
      setInviteCodeError("Please enter the invitation code from your wedding card.");
      setSubmitError("Please enter the correct invitation code before submitting your RSVP.");
      return;
    }

    setInviteCodeError("");

    const email = form.email.trim();
    const validEmail = email.length > 3 && email.includes("@") && email.includes(".") && !email.includes(" ") && email.indexOf("@") > 0 && email.lastIndexOf(".") > email.indexOf("@") + 1;

    if (!email || !validEmail) {
      setEmailError("Please enter a valid email address.");
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    if (!form.attending) {
      setAttendingError("Please select whether you will be attending.");
      setSubmitError("Please select whether you will be attending.");
      return;
    }

    setAttendingError("");
    setSubmitting(true);
    setSubmitError("");

    const rsvp = {
      id: String(Date.now()),
      submittedAt: new Date().toISOString(),
      ...form,
      guestCount: Number(form.guestCount) || 1,
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
      setSubmitError("Something went wrong. Please try again or contact Istiak and Eram directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function csvCell(value) {
    return '"' + String(value || "").replace(/"/g, '""') + '"';
  }

  function downloadCSV() {
    const saved = safeReadRsvps();
    const rows = [
      ["Submitted At", "Main Guest", "Email", "Phone", "Attending", "Total Guests", "Guest Name", "Meal", "Allergies", "Notes"],
    ];

    saved.forEach((item) => {
      item.guests.forEach((guest) => {
        rows.push([
          item.submittedAt,
          item.name,
          item.email,
          item.phone,
          item.attending,
          item.guestCount,
          guest.name,
          guest.meal,
          item.allergies,
          item.notes,
        ]);
      });
    });

    const csv = rows.map((row) => row.map(csvCell).join(",")).join(NEW_LINE);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "istiak-eram-wedding-rsvps.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function downloadCalendarInvite() {
    const icsLines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Istiak and Eram Wedding//RSVP Website//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:istiak-eram-wedding-20260822@example.com",
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART;VALUE=DATE:${CALENDAR_EVENT.startDate}`,
      `DTEND;VALUE=DATE:${CALENDAR_EVENT.endDate}`,
      `SUMMARY:${CALENDAR_EVENT.title}`,
      `DESCRIPTION:${CALENDAR_EVENT.details}`,
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
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 243, 234, 0.12), rgba(248, 243, 234, 0.12)), url(${BACKGROUND_IMAGE})`,
        }}
      />

      <FloatingDecor />
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#d8b46a,transparent_32%),radial-gradient(circle_at_bottom_right,#14352f,transparent_34%)] opacity-40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
          <div>
            <p className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-amber-300 bg-[#fffaf0]/80 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-[0_0_28px_rgba(214,138,31,0.45)] hover:ring-2 hover:ring-amber-400/50 md:mx-0">
              <span>♡</span> We are getting married
            </p>

            <div className="mt-2 text-center md:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-stone-500 md:text-sm">
                The Wedding of
              </p>
              <h1 className="text-[#1f1a17]">
                <span style={nameFont} className="block text-7xl font-semibold leading-[0.85] tracking-[-0.05em] md:text-8xl lg:text-9xl">
                  Istiak
                </span>
                <span style={scriptFont} className="my-1 block text-6xl leading-none text-amber-600 md:text-7xl lg:text-8xl">
                  &
                </span>
                <span style={nameFont} className="block text-7xl font-semibold leading-[0.85] tracking-[-0.05em] md:text-8xl lg:text-9xl">
                  Eram
                </span>
              </h1>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Join us as we celebrate our wedding surrounded by family, friends, and love.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rsvp"
                className="rounded-2xl bg-[#14352f] px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f2925]"
              >
                RSVP Now
              </a>
              <button
                type="button"
                onClick={openDirections}
                className="rounded-2xl bg-[#d68a1f] px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#b87316]"
              >
                Get Directions
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCalendarOpen(!calendarOpen)}
                  className="w-full rounded-2xl bg-[#7a2e45] px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#642539] sm:w-auto"
                >
                  Add to Calendar
                </button>

                {calendarOpen && (
                  <div className="absolute left-0 z-30 mt-3 w-full overflow-hidden rounded-2xl border border-rose-200 bg-[#fffaf0] shadow-xl sm:w-56">
                    <a
                      href={GOOGLE_CALENDAR_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setCalendarOpen(false)}
                      className="block px-5 py-3 text-sm font-semibold text-[#7a2e45] hover:bg-[#f8f1e7]"
                    >
                      Google Calendar
                    </a>
                    <button
                      type="button"
                      onClick={downloadCalendarInvite}
                      className="block w-full px-5 py-3 text-left text-sm font-semibold text-[#7a2e45] hover:bg-[#f8f1e7]"
                    >
                      Apple / Outlook Calendar
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
                alt="Wedding celebration"
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
                      Save the Date
                    </p>
                    <span className="h-px w-6 bg-amber-500/70 md:w-8" />
                  </div>

                  <p
                    style={nameFont}
                    className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#1f1a17] md:text-3xl"
                  >
                    August 22
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
                      Verger Richard Legault
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
          <div className="rounded-3xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-amber-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50">
            <DateIcon />
            <h2 className="text-xl font-semibold">Date</h2>
            <p className="mt-2 text-stone-600">Saturday, August 22, 2026</p>
          </div>

          <div className="rounded-3xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-amber-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50">
            <Icon>📍</Icon>
            <h2 className="text-xl font-semibold">Venue</h2>
            <p className="mt-2 text-stone-600">{VENUE.name}</p>
            <p className="text-stone-500">{VENUE.address}</p>
          </div>

          <div className="rounded-3xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-amber-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50">
            <Icon>🍽️</Icon>
            <h2 className="text-xl font-semibold">Dinner Options</h2>
            <p className="mt-2 text-stone-600">🐟 Salmon, 🥩 Steak, or 🥗 Vegetarian</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-amber-200 bg-[#211814] p-6 text-[#fffaf0] shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(214,138,31,0.45)] hover:ring-2 hover:ring-amber-400/40 lg:self-start">
            <h2 className="font-serif text-3xl text-[#f7e7c0]">Wedding Details</h2>

            <div className="mt-6 space-y-4 text-sm text-[#fff3db]">
              <p className="flex gap-3"><DateIcon small /> Saturday, August 22, 2026</p>
              <p className="flex gap-3">
                <SmallIcon>📍</SmallIcon>
                <span>{VENUE.name}<br />{VENUE.address}</span>
              </p>
              <p className="flex gap-3"><SmallIcon>☎️</SmallIcon> {VENUE.phone}</p>
              <p className="flex gap-3"><SmallIcon>👥</SmallIcon> Please RSVP with your total number of guests and a meal choice for each person.</p>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-300 bg-[#33241d] p-4 text-sm leading-6 text-[#fff3db]">
              Ceremony time, reception time, dress code, parking notes, hotel details, and registry information can be added here once confirmed.
            </div>
          </div>

          <div id="rsvp" className="rounded-[2rem] bg-[#fffaf0] p-6 shadow-xl ring-1 ring-amber-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(214,138,31,0.38)] hover:ring-2 hover:ring-amber-400/50 md:p-8">
            {submitted ? (
              <div className="grid min-h-[520px] place-items-center text-center">
                <div>
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-green-100 text-3xl text-green-700">✓</div>
                  <h2 className="font-serif text-4xl">Thank you!</h2>
                  <p className="mx-auto mt-4 max-w-md text-stone-600">
                    Your RSVP has been received. Thank you for confirming your attendance. We look forward to celebrating with you!
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button type="button" onClick={() => setSubmitted(false)} className="rounded-2xl border border-amber-200 px-5 py-3 font-semibold hover:bg-[#f8f1e7]">
                      Submit Another RSVP
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">RSVP</p>
                  <h2 className="mt-2 font-serif text-4xl">Confirm Your Attendance</h2>
                  <p className="mt-3 text-stone-600">Please fill out the form below and choose a meal for each guest.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full Name">
                    <Input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your full name" />
                  </Field>

                  <Field label="Email">
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => {
                        setForm({ ...form, email: event.target.value });
                        if (emailError) setEmailError("");
                      }}
                      placeholder="you@example.com"
                    />
                    {emailError && (
                      <p className="mt-2 text-sm font-medium text-red-600">
                        {emailError}
                      </p>
                    )}
                  </Field>

                  <Field label="Phone Number (optional)">
                    <Input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="(514) 000-0000" />
                  </Field>

                  <Field label="Will you be attending?">
                    <Select
                      required
                      value={form.attending}
                      onChange={(event) => {
                        setForm({ ...form, attending: event.target.value });
                        if (attendingError) setAttendingError("");
                      }}
                    >
                      <option value="" disabled>
                        Select response
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
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
                    <Field label="How many people will attend, including you?">
                      <Input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        value={form.guestCount}
                        onChange={(event) => updateGuestCount(event.target.value)}
                        onBlur={fixGuestCountOnBlur}
                        placeholder="Enter number of guests"
                      />
                    </Field>

                    <div className="space-y-4">
                      {form.guests.map((guest, index) => (
                        <div key={index} className="rounded-3xl border border-amber-200 bg-[#f8f1e7] p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(214,138,31,0.32)] hover:ring-2 hover:ring-amber-400/40">
                          <h3 className="mb-4 font-semibold">Guest {index + 1}</h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            <Field label="Guest Name">
                              <Input
                                required
                                value={guest.name}
                                onChange={(event) => updateGuest(index, "name", event.target.value)}
                                placeholder={index === 0 ? "Your name" : "Guest name"}
                              />
                            </Field>

                            <Field label="Meal Choice">
                              <Select
                                required
                                value={guest.meal}
                                onChange={(event) => updateGuest(index, "meal", event.target.value)}
                              >
                                <option value="" disabled>
                                  Select meal
                                </option>
                                {MEAL_OPTIONS.map((meal) => (
                                  <option key={meal.value} value={meal.value}>{meal.label}</option>
                                ))}
                              </Select>
                            </Field>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Field label="Allergies or Dietary Restrictions">
                      <Textarea value={form.allergies} onChange={(event) => setForm({ ...form, allergies: event.target.value })} placeholder="Please mention any allergies or dietary restrictions." />
                    </Field>
                  </>
                )}

                <Field label="Message / Notes">
                  <Textarea
                    value={form.notes}
                    onChange={(event) =>
                      setForm({ ...form, notes: event.target.value })
                    }
                    placeholder="Optional message for Istiak & Eram"
                  />
                </Field>

                <div className="rounded-3xl border border-amber-300 bg-gradient-to-br from-[#fffaf0] via-[#fff7e6] to-[#f3dfb3] p-5 shadow-[0_12px_30px_rgba(214,180,109,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(214,138,31,0.4)] hover:ring-2 hover:ring-amber-400/50">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-amber-300 bg-white text-2xl shadow-md">
                      🎵
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#14352f]">
                        Song Request
                      </p>
                      <p className="mt-1 text-sm text-stone-600">
                        Tell us one song you would love to hear at the wedding.
                      </p>
                    </div>
                  </div>

                  <Field label="Song Request (optional)">
                    <Input
                      value={form.songRequest}
                      onChange={(event) =>
                        setForm({ ...form, songRequest: event.target.value })
                      }
                      placeholder="Example: Perfect by Ed Sheeran"
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
                        Invitation Code Required
                      </p>
                      <p className="mt-1 text-sm text-stone-600">
                        Enter the code from your wedding invitation before submitting.
                      </p>
                    </div>
                  </div>

                  <Field label="Invitation Code">
                    <Input
                      required
                      value={inviteCode}
                      onChange={(event) => {
                        setInviteCode(event.target.value.toUpperCase());
                        if (inviteCodeError) setInviteCodeError("");
                      }}
                      placeholder="Enter invitation code"
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
                  {submitting ? "Submitting..." : "Submit RSVP"}
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

        <p style={nameFont} className="inline-block text-4xl font-semibold tracking-[-0.04em] text-[#14352f] transition duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_12px_rgba(214,138,31,0.24)]">
          Istiak <span style={scriptFont} className="inline-block text-5xl text-amber-600 transition duration-300 group-hover:scale-110 group-hover:-rotate-3">&</span> Eram
        </p>
        <div className="mx-auto mt-2 h-px w-16 rounded-full bg-amber-500/50 transition-all duration-300 group-hover:w-36 group-hover:bg-amber-500/80" />
        <p className="mt-3 text-base transition duration-300 group-hover:text-stone-700">August 22, 2026 · {VENUE.name}</p>
      </footer>
    </main>
  );
}

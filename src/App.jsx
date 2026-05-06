import React, { useState } from "react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

const VENUE = {
  name: "Verger Richard Legault",
  address: "425 Rue Binette, Saint-Joseph-du-Lac, QC J0N 1M0",
  phone: "(450) 623-6306",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=425%20Rue%20Binette%2C%20Saint-Joseph-du-Lac%2C%20QC%20J0N%201M0",
};

const MEAL_OPTIONS = [
  { value: "Salmon", label: "🐟 Salmon" },
  { value: "Steak", label: "🥩 Steak" },
  { value: "Vegetarian", label: "🥗 Vegetarian" },
];

const STORAGE_KEY = "istiak-eram-wedding-rsvps";
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
      className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-[#1f1a17] outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-[#1f1a17] outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-[#1f1a17] outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
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
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "Yes",
    guestCount: "",
    guests: [],
    allergies: "",
    notes: "",
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

  function handleSubmit(event) {
    event.preventDefault();
    const rsvp = {
      id: String(Date.now()),
      submittedAt: new Date().toISOString(),
      ...form,
      guestCount: Number(form.guestCount) || 1,
    };
    const saved = safeReadRsvps();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, rsvp]));
    setSubmitted(true);
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

  function openDirections() {
    window.open(VENUE.mapUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4efe7] text-[#1f1a17]">
      <FloatingDecor />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#d8b46a,transparent_32%),radial-gradient(circle_at_bottom_right,#14352f,transparent_34%)] opacity-40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-[#fffaf0]/80 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
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
                className="rounded-2xl border border-amber-300 bg-[#fffaf0]/90 px-6 py-3 text-center font-semibold text-[#14352f] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Get Directions
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Wedding celebration"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 px-5 md:absolute md:-bottom-8 md:left-6 md:mt-0 md:px-0">
              <div className="relative mx-auto max-w-[330px] overflow-hidden rounded-[2rem] border border-amber-200/80 bg-[#fffaf0]/95 px-5 py-4 text-center shadow-lg backdrop-blur-md md:max-w-none md:rounded-[1.75rem] md:px-6 md:py-5 md:text-left md:shadow-[0_22px_55px_rgba(31,26,23,0.22)] md:w-auto">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-300/25 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-[#14352f]/15 blur-2xl" />

                <div className="relative">
                  <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                    <span className="h-px w-6 bg-amber-500/70 md:w-8" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-700 md:text-[11px] md:tracking-[0.35em]">
                      Save the Date
                    </p>
                    <span className="h-px w-6 bg-amber-500/70 md:w-8" />
                  </div>

                  <p style={nameFont} className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#1f1a17] md:text-3xl">
                    August 22
                  </p>

                  <div className="mt-2 flex items-end justify-center gap-2 md:justify-start">
                    <span className="text-4xl font-semibold leading-none text-[#14352f] md:text-5xl">
                      2026
                    </span>
                    <span style={scriptFont} className="text-2xl leading-none text-amber-600 md:text-3xl">
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

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-amber-100">
            <Icon>📅</Icon>
            <h2 className="text-xl font-semibold">Date</h2>
            <p className="mt-2 text-stone-600">Saturday, August 22, 2026</p>
          </div>

          <div className="rounded-3xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-amber-100">
            <Icon>📍</Icon>
            <h2 className="text-xl font-semibold">Venue</h2>
            <p className="mt-2 text-stone-600">{VENUE.name}</p>
            <p className="text-stone-500">{VENUE.address}</p>
          </div>

          <div className="rounded-3xl bg-[#fffaf0] p-6 shadow-sm ring-1 ring-amber-100">
            <Icon>🍽️</Icon>
            <h2 className="text-xl font-semibold">Dinner Options</h2>
            <p className="mt-2 text-stone-600">🐟 Salmon, 🥩 Steak, or 🥗 Vegetarian</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-amber-200 bg-[#211814] p-6 text-[#fffaf0] shadow-2xl lg:self-start">
            <h2 className="font-serif text-3xl text-[#f7e7c0]">Wedding Details</h2>

            <div className="mt-6 space-y-4 text-sm text-[#fff3db]">
              <p className="flex gap-3"><SmallIcon>📅</SmallIcon> Saturday, August 22, 2026</p>
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

          <div id="rsvp" className="rounded-[2rem] bg-[#fffaf0] p-6 shadow-xl ring-1 ring-amber-100 md:p-8">
            {submitted ? (
              <div className="grid min-h-[520px] place-items-center text-center">
                <div>
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-green-100 text-3xl text-green-700">✓</div>
                  <h2 className="font-serif text-4xl">Thank you!</h2>
                  <p className="mx-auto mt-4 max-w-md text-stone-600">
                    Your RSVP has been saved on this device. When this goes live, we can connect it to Google Sheets so every guest response is stored in one master list.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button type="button" onClick={() => setSubmitted(false)} className="rounded-2xl border border-amber-200 px-5 py-3 font-semibold hover:bg-[#f8f1e7]">
                      Submit Another RSVP
                    </button>
                    <button type="button" onClick={downloadCSV} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 font-semibold text-white hover:bg-stone-800">
                      <span>⬇</span> Download CSV
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" />
                  </Field>

                  <Field label="Phone Number">
                    <Input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="(514) 000-0000" />
                  </Field>

                  <Field label="Will you be attending?">
                    <Select value={form.attending} onChange={(event) => setForm({ ...form, attending: event.target.value })}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Select>
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
                        <div key={index} className="rounded-3xl border border-amber-200 bg-[#f8f1e7] p-4">
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
                  <Textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} placeholder="Optional message for Istiak & Eram" />
                </Field>

                <button type="submit" className="w-full rounded-2xl bg-[#14352f] px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f2925]">
                  Submit RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-stone-500">
        <p style={nameFont} className="text-4xl font-semibold tracking-[-0.04em] text-[#14352f]">
          Istiak <span style={scriptFont} className="text-5xl text-amber-600">&</span> Eram
        </p>
        <p className="mt-2">August 22, 2026 · {VENUE.name}</p>
      </footer>
    </main>
  );
}

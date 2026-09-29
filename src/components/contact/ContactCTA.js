export default function ContactCTA() {
  const whatsappMessage = encodeURIComponent(
    "Assalam-o-Alaikum, I would like to ask about Future Skills Academy.",
  );

  const whatsappLink = `https://wa.me/923166073020?text=${whatsappMessage}`;

  const values = ["Clear Communication", "Helpful Guidance", "Student Support"];

  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-cta-title"
    >
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================== */}

      <div
        className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full border border-[#F4B942]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full border border-[#071B36]/5"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[10%] top-[25%] h-32 w-32 rounded-full bg-[#F4B942]/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[15%] right-[12%] h-40 w-40 rounded-full bg-[#071B36]/5 blur-3xl"
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* =======================================================
            CTA CARD
        ======================================================== */}

        <div className="group relative overflow-hidden rounded-3xl bg-[#071B36] shadow-[0_25px_70px_rgba(7,27,54,0.16)]">
          {/* Decorative Circle */}

          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#F4B942]/10 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#F4B942]/5 blur-3xl transition-transform duration-1000 group-hover:scale-125"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-[18%] top-8 h-20 w-20 rounded-full border border-white/5"
            aria-hidden="true"
          />

          <div className="relative px-7 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            {/* ===================================================
                MAIN CONTENT
            ==================================================== */}

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="max-w-3xl">
                {/* Eyebrow */}

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F4B942]" aria-hidden="true" />

                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4B942]">
                    Start a Conversation
                  </span>
                </div>

                {/* Heading */}

                <h2
                  id="contact-cta-title"
                  className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Have a Question?
                  <span className="block text-[#F4B942]">
                    We&apos;re Here to Help.
                  </span>
                </h2>

                {/* Description */}

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Whether you are looking for academic guidance, want to learn
                  more about the academy, or simply have a question, feel free
                  to reach out.
                </p>

                {/* Small Accent */}

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,0.7)]"
                    aria-hidden="true"
                  />

                  <span
                    className="h-px w-20 bg-[#F4B942]/30"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* =================================================
                  WHATSAPP ACTION
              ================================================== */}

              <div className="shrink-0">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send your enquiry on WhatsApp"
                  className="group/button relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#F4B942] px-7 py-4 text-sm font-bold text-[#071B36] shadow-[0_12px_30px_rgba(244,185,66,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166] hover:shadow-[0_18px_38px_rgba(244,185,66,0.24)] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:ring-offset-2 focus:ring-offset-[#071B36] sm:w-auto"
                >
                  {/* Button Shine */}

                  <span
                    className="pointer-events-none absolute inset-y-0 -left-20 w-12 rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover/button:translate-x-[280px]"
                    aria-hidden="true"
                  />

                  <span className="relative z-10">Send Your Enquiry</span>

                  <svg
                    className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* WhatsApp Label */}

                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 sm:justify-end">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#F4B942]"
                    aria-hidden="true"
                  />

                  <span>Chat with us on WhatsApp</span>
                </div>
              </div>
            </div>

            {/* ===================================================
                BOTTOM VALUES
            ==================================================== */}

            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-medium text-slate-300">
                {values.map((value) => (
                  <div
                    key={value}
                    className="group/value flex items-center gap-2"
                  >
                    <span
                      className="h-2 w-2 rounded-full bg-[#F4B942] shadow-[0_0_10px_rgba(244,185,66,0.45)] transition-transform duration-300 group-hover/value:scale-125"
                      aria-hidden="true"
                    />

                    <span className="transition-colors duration-300 group-hover/value:text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Gold Line */}

          <div
            className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#F4B942] to-transparent opacity-70"
            aria-hidden="true"
          />
        </div>

        {/* =======================================================
            TAGLINE
        ======================================================== */}

        <div className="mt-9 text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span
              className="h-px w-10 bg-slate-200 sm:w-16"
              aria-hidden="true"
            />

            <span
              className="h-1.5 w-1.5 rounded-full bg-[#F4B942]"
              aria-hidden="true"
            />

            <span
              className="h-px w-10 bg-slate-200 sm:w-16"
              aria-hidden="true"
            />
          </div>

          <p className="text-sm font-medium tracking-wide text-slate-500">
            <span>Learn</span>

            <span className="mx-2 text-[#F4B942]" aria-hidden="true">
              •
            </span>

            <span>Build Skills</span>

            <span className="mx-2 text-[#F4B942]" aria-hidden="true">
              •
            </span>

            <span>Create Your Future</span>
          </p>
        </div>
      </div>
    </section>
  );
}

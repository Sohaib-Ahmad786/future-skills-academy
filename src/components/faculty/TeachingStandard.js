export default function TeachingStandard() {
  const standards = [
    {
      number: "01",
      title: "Concept Clarity",
      description:
        "We encourage teaching that helps students understand the ideas behind a topic instead of relying only on memorization.",
    },
    {
      number: "02",
      title: "Active Practice",
      description:
        "Students should have opportunities to practice what they learn through questions, examples, exercises, and relevant activities.",
    },
    {
      number: "03",
      title: "Open Communication",
      description:
        "A supportive classroom environment gives students the confidence to ask questions, discuss difficulties, and seek guidance.",
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description:
        "Learning is an ongoing process. We encourage students to identify areas for improvement and keep developing their knowledge and skills.",
    },
  ];

  const values = [
    "Understand",
    "Practice",
    "Improve",
    "Grow",
  ];

  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="teaching-standard-title"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full border border-[#F4B942]/10 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full border border-[#071B36]/5 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[12%] top-[24%] h-32 w-32 rounded-full bg-[#F4B942]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[20%] right-[10%] h-40 w-40 rounded-full bg-[#071B36]/5 blur-3xl"
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
            <span
              className="h-px w-7 bg-[#F4B942] sm:w-9"
              aria-hidden="true"
            />

            Our Teaching Standard

            <span
              className="h-px w-7 bg-[#F4B942] sm:w-9"
              aria-hidden="true"
            />
          </span>

          <h2
            id="teaching-standard-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl"
          >
            A Learning Environment
            <span className="block text-[#B8860B]">
              Built Around Students
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our teaching approach is designed to make learning clear,
            supportive, practical, and focused on the individual growth of
            students.
          </p>
        </div>

        {/* =======================================================
            STANDARDS GRID
        ======================================================== */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          {standards.map((standard) => (
            <article
              key={standard.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#F4B942]/50 hover:shadow-[0_22px_50px_rgba(7,27,54,0.10)] focus-within:-translate-y-2 focus-within:border-[#F4B942]/50 focus-within:shadow-[0_22px_50px_rgba(7,27,54,0.10)] sm:p-8"
            >
              {/* Top Accent */}

              <div
                className="absolute left-0 top-0 h-1 w-0 bg-[#F4B942] transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              {/* Background Glow */}

              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F4B942]/10 opacity-0 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex items-start gap-5">
                {/* Number */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#071B36] text-sm font-bold tracking-wide text-[#F4B942] shadow-[0_8px_20px_rgba(7,27,54,0.14)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_12px_25px_rgba(7,27,54,0.20)]">
                  {standard.number}
                </div>

                {/* Content */}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-px w-8 bg-[#F4B942] transition-all duration-500 group-hover:w-12"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B8860B]">
                      Standard
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-tight text-[#071B36] sm:text-2xl">
                    {standard.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                    {standard.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}

              <div className="relative mt-7 flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_0_4px_rgba(244,185,66,0.10)]"
                  aria-hidden="true"
                />

                <span className="h-px w-12 bg-slate-200 transition-all duration-500 group-hover:w-20 group-hover:bg-[#F4B942]/40" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Student Focus
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            FINAL STATEMENT
        ======================================================== */}

        <div className="mt-14 overflow-hidden rounded-3xl bg-[#071B36] shadow-[0_25px_70px_rgba(7,27,54,0.16)] sm:mt-16">
          <div className="relative px-7 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            {/* Decorative Circle */}

            <div
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#F4B942]/10"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#F4B942]/5 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute right-[20%] top-8 h-20 w-20 rounded-full border border-white/5"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-4xl text-center">
              {/* Eyebrow */}

              <div className="flex items-center justify-center gap-3">
                <span
                  className="h-px w-8 bg-[#F4B942]"
                  aria-hidden="true"
                />

                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F4B942]">
                  Our Commitment
                </p>

                <span
                  className="h-px w-8 bg-[#F4B942]"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}

              <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Help students understand today so they can face tomorrow with
                confidence.
              </h3>

              {/* Description */}

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                We believe meaningful education is not only about completing
                lessons. It is about developing understanding, encouraging
                curiosity, and helping students become more confident learners.
              </p>

              {/* Values */}

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                {values.map((value, index) => (
                  <div
                    key={value}
                    className="flex items-center gap-5"
                  >
                    <span className="text-sm font-semibold text-white transition-colors duration-300 hover:text-[#F4B942]">
                      {value}
                    </span>

                    {index < values.length - 1 && (
                      <span
                        className="text-[#F4B942]"
                        aria-hidden="true"
                      >
                        •
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Line */}

              <div className="mx-auto mt-9 flex max-w-xs items-center justify-center gap-3">
                <span
                  className="h-px flex-1 bg-white/10"
                  aria-hidden="true"
                />

                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#F4B942]"
                  aria-hidden="true"
                />

                <span
                  className="h-px flex-1 bg-white/10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM TAGLINE
        ======================================================== */}

        <div className="mt-9 text-center">
          <p className="text-sm font-medium tracking-wide text-slate-500">
            <span>Learn</span>

            <span
              className="mx-2 text-[#F4B942]"
              aria-hidden="true"
            >
              •
            </span>

            <span>Build Skills</span>

            <span
              className="mx-2 text-[#F4B942]"
              aria-hidden="true"
            >
              •
            </span>

            <span>Create Your Future</span>
          </p>
        </div>
      </div>
    </section>
  );
}
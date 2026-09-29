export default function TeacherProfiles() {
  const facultyAreas = [
    {
      number: "01",
      title: "School & Foundation Learning",
      description:
        "Focused academic guidance for students who are building strong foundations in their core subjects and developing effective learning habits.",
    },
    {
      number: "02",
      title: "Matric & College Education",
      description:
        "Subject-focused teaching designed to help students understand important concepts, practice effectively, and prepare for their next academic stage.",
    },
    {
      number: "03",
      title: "University & IT Learning",
      description:
        "Guidance for university-level learning and technology-focused subjects, with an emphasis on understanding, practical skills, and continuous growth.",
    },
  ];

  const profileFields = [
    {
      label: "Profile",
      value: "Name",
    },
    {
      label: "Academic",
      value: "Qualification",
    },
    {
      label: "Teaching",
      value: "Experience",
    },
  ];

  return (
    <section
      className="teacher-profiles-section relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="teacher-profiles-title"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#F4B942]/10 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full border border-[#071B36]/5 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[15%] top-[22%] h-32 w-32 animate-pulse rounded-full bg-[#F4B942]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[18%] right-[10%] h-40 w-40 animate-pulse rounded-full bg-[#071B36]/5 blur-3xl"
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
            <span className="h-px w-7 bg-[#F4B942] sm:w-9" aria-hidden="true" />
            Faculty Profiles
            <span className="h-px w-7 bg-[#F4B942] sm:w-9" aria-hidden="true" />
          </span>

          <h2
            id="teacher-profiles-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl"
          >
            Educators Focused on
            <span className="block text-[#B8860B]">Meaningful Learning</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our faculty information is presented with a focus on the subjects,
            learning levels, and guidance that students can expect from their
            educators.
          </p>
        </div>

        {/* =======================================================
            FACULTY AREAS
        ======================================================== */}

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {facultyAreas.map((area) => (
            <article
              key={area.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#F4B942]/50 hover:shadow-[0_22px_50px_rgba(7,27,54,0.10)] focus-within:-translate-y-2 focus-within:border-[#F4B942]/50 focus-within:shadow-[0_22px_50px_rgba(7,27,54,0.10)] sm:p-8"
            >
              {/* Top Accent */}

              <div
                className="absolute left-0 top-0 h-1 w-0 bg-[#F4B942] transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              {/* Card Glow */}

              <div
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#F4B942]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                {/* Number + Icon */}

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#B8860B]">
                    {area.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071B36] text-[#F4B942] shadow-[0_8px_20px_rgba(7,27,54,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_12px_25px_rgba(7,27,54,0.18)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6.5C6.7 5.1 9.3 5.1 12 6.5V19C9.3 17.6 6.7 17.6 4 19V6.5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M20 6.5C17.3 5.1 14.7 5.1 12 6.5V19C14.7 17.6 17.3 17.6 20 19V6.5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Divider */}

                <div
                  className="mt-7 h-px w-10 bg-[#F4B942] transition-all duration-500 group-hover:w-16"
                  aria-hidden="true"
                />

                {/* Content */}

                <h3 className="mt-6 text-xl font-bold leading-snug text-[#071B36] sm:text-[1.35rem]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>

                {/* Bottom Indicator */}

                <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#B8860B]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4B942] shadow-[0_0_0_4px_rgba(244,185,66,0.10)]"
                    aria-hidden="true"
                  />

                  <span>Student-Focused Guidance</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            PROFILE INFORMATION FEATURE
        ======================================================== */}

        <div className="mt-14 overflow-hidden rounded-3xl bg-[#071B36] shadow-[0_25px_70px_rgba(7,27,54,0.15)] sm:mt-16">
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            {/* Decorative Circle */}

            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#F4B942]/10"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute right-10 top-10 h-24 w-24 animate-pulse rounded-full bg-[#F4B942]/5 blur-2xl"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute bottom-0 left-0 h-px w-40 bg-gradient-to-r from-[#F4B942]/40 to-transparent"
              aria-hidden="true"
            />

            {/* Main Grid */}

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              {/* Left Content */}

              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F4B942]" aria-hidden="true" />

                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F4B942]">
                    Our Faculty Profiles
                  </p>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Meet the educators who guide our students.
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Detailed faculty profiles can include each educator&apos;s
                  name, subject or role, academic qualification, institution,
                  teaching experience, and teaching focus.
                </p>

                {/* Bottom Accent */}

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#F4B942]"
                    aria-hidden="true"
                  />

                  <span
                    className="h-px w-20 bg-[#F4B942]/40"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Profile Fields */}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:w-[390px]">
                {profileFields.map((field) => (
                  <div
                    key={field.label}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B942]/30 hover:bg-white/[0.08]"
                  >
                    {/* Field Glow */}

                    <div
                      className="pointer-events-none absolute -right-6 -top-6 h-12 w-12 rounded-full bg-[#F4B942]/10 blur-xl transition-transform duration-500 group-hover:scale-150"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <p className="text-xs font-medium text-slate-400">
                        {field.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        {field.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM MESSAGE
        ======================================================== */}

        <div className="mt-10 text-center">
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

          <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500">
            The right guidance can help students understand better, learn with
            confidence, and continue growing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TeachingTeam() {
  const teachingPrinciples = [
    {
      number: "01",
      title: "Clear Explanation",
      description:
        "Complex topics should be explained in a clear and understandable way so students can build strong concepts step by step.",
    },
    {
      number: "02",
      title: "Individual Attention",
      description:
        "Students learn differently, so effective teaching should encourage questions, identify learning gaps, and support individual progress.",
    },
    {
      number: "03",
      title: "Practical Understanding",
      description:
        "Where appropriate, lessons should connect concepts with examples, practice, and real-world applications.",
    },
    {
      number: "04",
      title: "Continuous Growth",
      description:
        "The goal of teaching goes beyond completing a lesson. Students should gradually develop confidence, discipline, and independent learning habits.",
    },
  ];

  const teachingSteps = [
    {
      number: "1",
      title: "Listen & Understand",
      description: "Understand where the student needs support.",
    },
    {
      number: "2",
      title: "Explain & Practice",
      description: "Make concepts clearer through explanation and practice.",
    },
    {
      number: "3",
      title: "Guide & Grow",
      description:
        "Encourage students to improve with confidence and consistency.",
    },
  ];

  return (
    <section
      className="teaching-team-section relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="teaching-team-title"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================== */}

      <div
        className="teaching-bg-ring pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full border border-[#F4B942]/10 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="teaching-bg-ring-secondary pointer-events-none absolute -left-40 bottom-20 h-72 w-72 rounded-full border border-[#071B36]/5"
        aria-hidden="true"
      />

      <div
        className="teaching-bg-glow pointer-events-none absolute right-[12%] top-[18%] h-32 w-32 rounded-full bg-[#F4B942]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[18%] left-[10%] h-40 w-40 rounded-full bg-[#071B36]/5 blur-3xl"
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="teaching-header mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
            <span className="h-px w-7 bg-[#F4B942] sm:w-9" aria-hidden="true" />
            Our Teaching Team
            <span className="h-px w-7 bg-[#F4B942] sm:w-9" aria-hidden="true" />
          </span>

          <h2
            id="teaching-team-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl"
          >
            Teaching That Puts{" "}
            <span className="block text-[#B8860B]">Students First</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            At Future Skills Academy, teaching is focused on helping students
            understand their subjects, strengthen their foundations, and develop
            the confidence to keep learning.
          </p>
        </div>

        {/* =======================================================
            TEACHING PRINCIPLES
        ======================================================== */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {teachingPrinciples.map((principle) => (
            <article
              key={principle.number}
              className="teaching-principle-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#F4B942]/50 hover:shadow-[0_20px_45px_rgba(7,27,54,0.10)] focus-within:-translate-y-2 focus-within:border-[#F4B942]/50 focus-within:shadow-[0_20px_45px_rgba(7,27,54,0.10)] sm:p-8"
            >
              {/* Card Glow */}
              <div
                className="teaching-card-shine pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#F4B942]/10 blur-2xl transition-all duration-500 group-hover:scale-150"
                aria-hidden="true"
              />

              {/* Top Accent */}
              <div
                className="absolute left-0 top-0 h-1 w-0 bg-[#F4B942] transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              <div className="relative">
                {/* Number + Dot */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#B8860B]">
                    {principle.number}
                  </span>

                  <span
                    className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_0_5px_rgba(244,185,66,0.10)] transition-transform duration-300 group-hover:scale-125"
                    aria-hidden="true"
                  />
                </div>

                {/* Divider */}
                <div
                  className="mt-6 h-px w-10 bg-[#F4B942] transition-all duration-500 group-hover:w-16"
                  aria-hidden="true"
                />

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold leading-tight text-[#071B36]">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM FEATURE
        ======================================================== */}

        <div className="teaching-feature mt-14 overflow-hidden rounded-3xl bg-[#071B36] shadow-[0_25px_70px_rgba(7,27,54,0.15)] sm:mt-16 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            {/* Decorative Circle */}

            <div
              className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full border border-[#F4B942]/10"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full border border-white/5"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#F4B942]" aria-hidden="true" />

                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F4B942]">
                  A Supportive Environment
                </p>
              </div>

              <h3 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Good teaching starts with understanding the student.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                We aim to create an environment where students feel comfortable
                asking questions, practicing what they learn, and improving
                through consistent guidance.
              </p>

              {/* Bottom Accent */}

              <div className="mt-8 flex items-center gap-3">
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
          </div>

          {/* =====================================================
              RIGHT STEPS
          ====================================================== */}

          <div className="relative border-t border-white/10 bg-white/[0.04] px-7 py-8 sm:px-10 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
            <div
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#F4B942]/5 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative space-y-6">
              {teachingSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="teaching-step group relative flex items-start gap-4"
                >
                  {/* Step Number */}

                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/20 bg-[#F4B942] text-sm font-bold text-[#071B36] shadow-[0_8px_20px_rgba(244,185,66,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_25px_rgba(244,185,66,0.22)]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Step Content */}

                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-[#F4B942]">
                      {step.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector */}

                  {index < teachingSteps.length - 1 && (
                    <span
                      className="pointer-events-none absolute left-5 top-10 h-6 w-px bg-gradient-to-b from-[#F4B942]/30 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM NOTE
        ======================================================== */}

        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm font-medium text-slate-500">
            <span>Learn with clarity</span>

            <span className="mx-2 text-[#F4B942]" aria-hidden="true">
              •
            </span>

            <span>Practice with purpose</span>

            <span className="mx-2 text-[#F4B942]" aria-hidden="true">
              •
            </span>

            <span>Grow with confidence</span>
          </p>
        </div>
      </div>

      {/* =========================================================
          PLAIN CSS
          
          IMPORTANT:
          Using normal <style> instead of <style jsx>
          prevents jsx-* hydration class mismatch.
      ========================================================== */}

      <style>{`
        .teaching-team-section {
          isolation: isolate;
        }

        .teaching-bg-ring {
          animation: teachingRingFloat 9s ease-in-out infinite;
        }

        .teaching-bg-ring-secondary {
          animation: teachingRingFloatReverse 11s ease-in-out infinite;
        }

        .teaching-bg-glow {
          animation: teachingGlowPulse 5s ease-in-out infinite;
        }

        .teaching-header {
          animation: teachingHeaderReveal 800ms ease-out both;
        }

        .teaching-principle-card {
          animation: teachingCardReveal 700ms ease-out both;
          transform-style: preserve-3d;
        }

        .teaching-principle-card:nth-child(1) {
          animation-delay: 80ms;
        }

        .teaching-principle-card:nth-child(2) {
          animation-delay: 160ms;
        }

        .teaching-principle-card:nth-child(3) {
          animation-delay: 240ms;
        }

        .teaching-principle-card:nth-child(4) {
          animation-delay: 320ms;
        }

        .teaching-feature {
          animation: teachingFeatureReveal 850ms ease-out 300ms both;
        }

        .teaching-step {
          position: relative;
        }

        @keyframes teachingHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes teachingCardReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes teachingFeatureReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes teachingRingFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(-12px, 14px, 0) rotate(8deg);
          }
        }

        @keyframes teachingRingFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(14px, -10px, 0) rotate(-7deg);
          }
        }

        @keyframes teachingGlowPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.18);
          }
        }

        @media (max-width: 640px) {
          .teaching-bg-ring {
            right: -180px;
            top: 30px;
          }

          .teaching-bg-ring-secondary {
            left: -190px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .teaching-bg-ring,
          .teaching-bg-ring-secondary,
          .teaching-bg-glow,
          .teaching-header,
          .teaching-principle-card,
          .teaching-feature {
            animation: none !important;
          }

          .teaching-principle-card,
          .teaching-card-shine,
          .teaching-step > div:first-child {
            transition: none !important;
          }

          .teaching-principle-card:hover,
          .teaching-principle-card:focus-within {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

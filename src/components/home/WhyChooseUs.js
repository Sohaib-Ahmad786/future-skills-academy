const features = [
  {
    number: "01",
    title: "Clear Concepts",
    description:
      "We focus on understanding the concepts instead of relying only on memorization, helping students build a strong academic foundation.",
    short: "UNDERSTAND",
  },
  {
    number: "02",
    title: "Practical Skills",
    description:
      "Students get opportunities to connect what they learn with practical examples, activities, and useful real-world skills.",
    short: "PRACTICE",
  },
  {
    number: "03",
    title: "Student-Focused",
    description:
      "Every student learns differently. Our approach encourages participation, questions, practice, and individual growth.",
    short: "PARTICIPATE",
  },
  {
    number: "04",
    title: "Confidence & Growth",
    description:
      "We help students develop confidence, problem-solving ability, communication, and a mindset for continuous improvement.",
    short: "GROW",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F4B942]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#071B36]/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#F4B942]/70 shadow-[0_0_15px_rgba(244,185,66,0.5)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#F4B942]/70 shadow-[0_0_12px_rgba(244,185,66,0.5)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[20%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#071B36]/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="why-badge inline-flex items-center gap-2 rounded-full border border-[#F4B942]/25 bg-[#F4B942]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_8px_rgba(244,185,66,0.8)]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B77A00] sm:text-[11px]">
              Why Future Skills Academy
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
            Learning That Goes
            <span className="block text-[#F4B942]">Beyond the Classroom.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            Our goal is to help students understand, practice, and grow so they
            can move forward with knowledge, confidence, and useful skills.
          </p>
        </div>

        {/* =========================================================
            3D FEATURE STAGE
        ========================================================= */}

        <div className="relative mt-14 sm:mt-16">
          {/* Decorative horizontal line */}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F4B942]/20 to-transparent lg:block"
            aria-hidden="true"
          />

          {/* =======================================================
              FEATURE GRID
          ======================================================== */}

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((feature, index) => (
              <article
                key={feature.number}
                className={`why-card why-card-${index + 1} group relative min-h-[330px] overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(7,27,54,0.06)] sm:min-h-[340px] lg:min-h-[360px]`}
              >
                {/* =================================================
                    CARD BACKGROUND
                ================================================== */}

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50"
                  aria-hidden="true"
                />

                {/* Animated glow */}

                <div
                  className="why-card-glow pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F4B942]/10 blur-3xl"
                  aria-hidden="true"
                />

                {/* Decorative corner circle */}

                <div
                  className="why-card-circle pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full border border-[#F4B942]/20 bg-[#F4B942]/[0.05]"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-[#F4B942]/10"
                  aria-hidden="true"
                />

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="relative z-10 flex h-full flex-col">
                  {/* Top Row */}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black tracking-[0.18em] text-[#F4B942]">
                        {feature.number}
                      </span>

                      <span className="h-px w-8 bg-[#F4B942]/30" />
                    </div>

                    {/* 3D Arrow Button */}

                    <div className="why-arrow flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#071B36] shadow-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* =================================================
                      3D ICON / MINI OBJECT
                  ================================================== */}

                  <div className="relative mt-7 flex h-16 items-center">
                    <div className="why-icon-stage relative h-14 w-14">
                      <div className="why-icon-ring absolute inset-0 rounded-2xl border border-[#F4B942]/25" />

                      <div className="why-icon-core absolute inset-2 flex items-center justify-center rounded-xl bg-[#071B36] shadow-[0_12px_25px_rgba(7,27,54,0.20)]">
                        {index === 0 && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 text-[#F4B942]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3L4 7l8 4 8-4-8-4Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5"
                            />
                          </svg>
                        )}

                        {index === 1 && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 text-[#F4B942]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 19h16"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 16l4-5 3 3 5-7"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 7h3v3"
                            />
                          </svg>
                        )}

                        {index === 2 && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 text-[#F4B942]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="8" r="3" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 20c.8-3.3 3.2-5 7-5s6.2 1.7 7 5"
                            />
                          </svg>
                        )}

                        {index === 3 && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 text-[#F4B942]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 17l4-4 3 2 7-8"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 7h4v4"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    <span className="ml-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {feature.short}
                    </span>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <div className="mt-6">
                    <h3 className="text-xl font-black tracking-tight text-[#071B36] sm:text-[21px]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>

                  {/* =================================================
                      BOTTOM AREA
                  ================================================== */}

                  <div className="mt-auto pt-7">
                    <div className="flex items-center justify-between">
                      <div className="why-progress h-1 w-10 overflow-hidden rounded-full bg-[#F4B942]">
                        <span className="block h-full w-full origin-left bg-[#071B36]" />
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        Discover
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CARD SHINE
                  ================================================== */}

                  <div
                    className="why-card-shine pointer-events-none absolute left-[-120%] top-0 h-full w-[55%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* =======================================================
              CENTER FLOATING LABEL
          ======================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="why-center-badge flex h-16 w-16 items-center justify-center rounded-full border border-[#F4B942]/30 bg-white/90 shadow-[0_15px_40px_rgba(7,27,54,0.12)] backdrop-blur">
              <div className="h-7 w-7 rounded-full bg-[#071B36] shadow-[0_0_20px_rgba(7,27,54,0.20)]" />
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM MESSAGE - 3D STYLE
        ========================================================= */}

        <div className="relative mt-12 overflow-hidden rounded-[1.7rem] border border-[#193c69] bg-[#071B36] px-6 py-9 shadow-[0_25px_65px_rgba(7,27,54,0.16)] sm:px-10 sm:py-10 lg:mt-14">
          {/* Glow */}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4B942]/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Rotating decorative ring */}

          <div
            className="why-bottom-ring pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full border border-[#F4B942]/20"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-4 -top-12 h-32 w-32 rounded-full border border-white/10"
            aria-hidden="true"
          />

          {/* Floating dots */}

          <span
            className="why-bottom-dot why-bottom-dot-1"
            aria-hidden="true"
          />

          <span
            className="why-bottom-dot why-bottom-dot-2"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#F4B942]/50" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F4B942]">
                Our Purpose
              </span>

              <span className="h-px w-8 bg-[#F4B942]/50" />
            </div>

            <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
              <span className="font-bold text-white">
                Our purpose is simple:
              </span>{" "}
              create an environment where students can learn with clarity,
              develop practical skills, and confidently build their future.
            </p>

            {/* Bottom indicators */}

            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-[#F4B942]" />

              <span className="h-1.5 w-5 rounded-full bg-[#F4B942]/40" />

              <span className="h-1.5 w-3 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`
        /* =========================================================
           HEADER BADGE
        ========================================================= */

        .why-badge {
          animation: whyBadgeFloat 4s ease-in-out infinite;
        }

        @keyframes whyBadgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        /* =========================================================
           FEATURE CARDS
        ========================================================= */

        .why-card {
          transform-style: preserve-3d;
          perspective: 1200px;

          transition:
            transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 500ms ease,
            border-color 300ms ease;
        }

        .why-card:hover {
          transform:
            translateY(-12px)
            rotateX(2deg)
            rotateY(-2deg);

          border-color: rgba(244, 185, 66, 0.45);

          box-shadow:
            0 30px 70px rgba(7, 27, 54, 0.13),
            0 10px 25px rgba(244, 185, 66, 0.07);
        }

        /* =========================================================
           CARD GLOW
        ========================================================= */

        .why-card-glow {
          transition:
            transform 700ms ease,
            opacity 500ms ease;
        }

        .why-card:hover .why-card-glow {
          transform: scale(1.6);
          opacity: 1;
        }

        /* =========================================================
           CARD CIRCLE
        ========================================================= */

        .why-card-circle {
          transition:
            transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .why-card:hover .why-card-circle {
          transform: scale(1.35) translate(-10px, -10px);
        }

        /* =========================================================
           ARROW
        ========================================================= */

        .why-arrow {
          transition:
            all 400ms cubic-bezier(0.2, 0.8, 0.2, 1);

          transform-style: preserve-3d;
        }

        .why-card:hover .why-arrow {
          background: #071B36;
          color: white;
          border-color: #071B36;

          transform:
            translateZ(20px)
            rotate(-5deg)
            scale(1.08);

          box-shadow:
            0 12px 25px rgba(7, 27, 54, 0.20);
        }

        .why-arrow svg {
          transition: transform 300ms ease;
        }

        .why-card:hover .why-arrow svg {
          transform: translateX(2px);
        }

        /* =========================================================
           3D ICON
        ========================================================= */

        .why-icon-stage {
          perspective: 500px;
          transform-style: preserve-3d;

          transition: transform 500ms ease;
        }

        .why-card:hover .why-icon-stage {
          transform:
            translateZ(25px)
            rotateY(-10deg)
            rotateX(5deg);
        }

        .why-icon-ring {
          animation: whyIconRing 5s linear infinite;

          transition: border-color 300ms ease;
        }

        .why-card:hover .why-icon-ring {
          border-color: rgba(244, 185, 66, 0.65);
        }

        @keyframes whyIconRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .why-icon-core {
          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        .why-card:hover .why-icon-core {
          transform: translateZ(15px) scale(1.08);

          box-shadow:
            0 18px 35px rgba(7, 27, 54, 0.30);
        }

        /* =========================================================
           PROGRESS
        ========================================================= */

        .why-progress {
          transition:
            width 500ms ease,
            box-shadow 400ms ease;
        }

        .why-progress span {
          transform: scaleX(0);

          transition:
            transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .why-card:hover .why-progress {
          width: 64px;

          box-shadow:
            0 0 12px rgba(244, 185, 66, 0.35);
        }

        .why-card:hover .why-progress span {
          transform: scaleX(1);
        }

        /* =========================================================
           CARD SHINE
        ========================================================= */

        .why-card-shine {
          opacity: 0;

          transition: opacity 200ms ease;
        }

        .why-card:hover .why-card-shine {
          opacity: 1;

          animation:
            whyCardShine
            900ms
            ease-out
            forwards;
        }

        @keyframes whyCardShine {
          from {
            left: -120%;
          }

          to {
            left: 140%;
          }
        }

        /* =========================================================
           CENTER BADGE
        ========================================================= */

        .why-center-badge {
          animation:
            whyCenterPulse
            4s
            ease-in-out
            infinite;
        }

        .why-center-badge > div {
          animation:
            whyCenterCore
            3s
            ease-in-out
            infinite;
        }

        @keyframes whyCenterPulse {
          0%,
          100% {
            transform:
              translateY(0)
              scale(1);
          }

          50% {
            transform:
              translateY(-5px)
              scale(1.05);
          }
        }

        @keyframes whyCenterCore {
          0%,
          100% {
            box-shadow:
              0 0 15px
              rgba(7, 27, 54, 0.15);
          }

          50% {
            box-shadow:
              0 0 30px
              rgba(244, 185, 66, 0.20);
          }
        }

        /* =========================================================
           BOTTOM RING
        ========================================================= */

        .why-bottom-ring {
          animation:
            whyBottomRing
            18s
            linear
            infinite;
        }

        @keyframes whyBottomRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =========================================================
           BOTTOM DOTS
        ========================================================= */

        .why-bottom-dot {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #F4B942;

          box-shadow:
            0 0 12px
            rgba(244, 185, 66, 0.75);

          animation:
            whyBottomDot
            4s
            ease-in-out
            infinite;
        }

        .why-bottom-dot-1 {
          left: 14%;
          top: 30%;
        }

        .why-bottom-dot-2 {
          right: 18%;
          bottom: 25%;

          animation-delay: -2s;
        }

        @keyframes whyBottomDot {
          0%,
          100% {
            opacity: 0.25;

            transform:
              translateY(0)
              scale(0.7);
          }

          50% {
            opacity: 1;

            transform:
              translateY(-10px)
              scale(1.25);
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 640px) {
          .why-card {
            min-height: 310px;
          }

          .why-card:hover {
            transform: translateY(-7px);
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .why-badge,
          .why-icon-ring,
          .why-center-badge,
          .why-center-badge > div,
          .why-bottom-ring,
          .why-bottom-dot {
            animation: none !important;
          }

          .why-card,
          .why-arrow,
          .why-icon-stage,
          .why-icon-core,
          .why-card-glow,
          .why-card-circle,
          .why-progress,
          .why-progress span,
          .why-card-shine {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

export default function FacultyHero() {
  return (
    <section className="faculty-hero relative overflow-hidden bg-[#071B36]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Ambient Glows */}
        <div className="faculty-glow faculty-glow-left absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#F4B942]/[0.06] blur-3xl" />

        <div className="faculty-glow faculty-glow-right absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-blue-500/[0.045] blur-3xl" />

        {/* Decorative Orbits */}
        <div className="faculty-orbit faculty-orbit-left absolute -left-44 top-20 h-96 w-96 rounded-full border border-[#F4B942]/10" />

        <div className="faculty-orbit faculty-orbit-right absolute -right-52 -top-32 h-[520px] w-[520px] rounded-full border border-white/[0.06]" />

        <div className="faculty-orbit-small absolute right-[18%] bottom-10 h-40 w-40 rounded-full border border-[#F4B942]/[0.06]" />

        {/* Floating Particles */}
        <span className="faculty-particle faculty-particle-one" />
        <span className="faculty-particle faculty-particle-two" />
        <span className="faculty-particle faculty-particle-three" />
        <span className="faculty-particle faculty-particle-four" />

        {/* Grid Overlay */}
        <div className="faculty-grid absolute inset-0 opacity-[0.035]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="faculty-content">
            {/* Eyebrow */}

            <div className="faculty-eyebrow inline-flex items-center gap-2 rounded-full border border-[#F4B942]/30 bg-[#F4B942]/[0.08] px-4 py-2 shadow-[0_8px_30px_rgba(244,185,66,0.06)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4B942] opacity-40" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-[#F4B942]" />
              </span>

              <span className="text-sm font-semibold tracking-wide text-[#F4B942]">
                Our Faculty
              </span>
            </div>

            {/* Heading */}

            <h1 className="faculty-heading mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet the People Behind
              <span className="faculty-gradient-text mt-2 block">
                Student Growth.
              </span>
            </h1>

            {/* Description */}

            <p className="faculty-description mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Our faculty plays an important role in creating a supportive
              learning environment where students can understand concepts, ask
              questions, develop skills, and grow with confidence.
            </p>

            {/* Supporting Points */}

            <div className="faculty-points mt-8 grid gap-4 sm:grid-cols-3">
              {/* Point 1 */}

              <div className="faculty-point group flex items-center gap-3">
                <div className="faculty-point-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/10 bg-[#F4B942]/[0.08]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,0.7)]" />
                </div>

                <span className="text-sm font-medium text-slate-200">
                  Clear Guidance
                </span>
              </div>

              {/* Point 2 */}

              <div className="faculty-point group flex items-center gap-3">
                <div className="faculty-point-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/10 bg-[#F4B942]/[0.08]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,0.7)]" />
                </div>

                <span className="text-sm font-medium text-slate-200">
                  Practical Learning
                </span>
              </div>

              {/* Point 3 */}

              <div className="faculty-point group flex items-center gap-3">
                <div className="faculty-point-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/10 bg-[#F4B942]/[0.08]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,0.7)]" />
                </div>

                <span className="text-sm font-medium text-slate-200">
                  Student Support
                </span>
              </div>
            </div>

            {/* Bottom Accent */}

            <div className="faculty-accent mt-9 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-[#F4B942] to-transparent" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Learn • Build • Create
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="faculty-visual relative mx-auto w-full max-w-lg lg:ml-auto">
            {/* Outer Glow */}

            <div
              className="faculty-card-glow pointer-events-none absolute -inset-5 rounded-[2.2rem] bg-[#F4B942]/[0.04] blur-2xl"
              aria-hidden="true"
            />

            {/* Decorative Ring */}

            <div
              className="faculty-card-ring pointer-events-none absolute -inset-7 rounded-[2.5rem] border border-[#F4B942]/[0.07]"
              aria-hidden="true"
            />

            {/* Main Card */}

            <div className="faculty-main-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
              {/* Card Shine */}

              <div
                className="faculty-card-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                aria-hidden="true"
              />

              {/* Card Header */}

              <div className="relative z-10 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4B942]">
                    Teaching Team
                  </p>

                  <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Learn with Confidence
                  </h2>
                </div>

                {/* Book Icon */}

                <div className="faculty-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#F4B942]/20 bg-[#F4B942] shadow-[0_12px_30px_rgba(244,185,66,0.18)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[#071B36]"
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

              {/* Teaching Approach */}

              <div className="relative z-10 mt-8 space-y-3">
                {/* Understand */}

                <div className="faculty-approach-card group/approach rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-start gap-4">
                    <span className="faculty-step flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4B942]/10 text-sm font-bold text-[#F4B942]">
                      01
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">Understand</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Build a clear understanding of the subject and its
                        concepts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Practice */}

                <div className="faculty-approach-card group/approach rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-start gap-4">
                    <span className="faculty-step flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4B942]/10 text-sm font-bold text-[#F4B942]">
                      02
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">Practice</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Strengthen learning through examples, practice, and
                        meaningful activities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Grow */}

                <div className="faculty-approach-card group/approach rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-start gap-4">
                    <span className="faculty-step flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4B942]/10 text-sm font-bold text-[#F4B942]">
                      03
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">Grow</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Develop confidence, skills, and readiness for the next
                        stage of learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}

              <div className="relative z-10 mt-7 border-t border-white/10 pt-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-medium text-slate-400">
                    Future Skills Academy
                  </span>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F4B942]">
                    <span>Learn</span>
                    <span className="text-white/30">•</span>
                    <span>Build</span>
                    <span className="text-white/30">•</span>
                    <span>Create</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Accent */}

              <div className="faculty-card-accent absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F4B942]/60 to-transparent" />
            </div>

            {/* Floating Badge */}

            <div className="faculty-badge absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Our Focus
              </p>

              <p className="mt-1 text-sm font-bold text-[#071B36]">
                Student Success
              </p>

              <div className="mt-2 h-1 w-8 rounded-full bg-[#F4B942]" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style>{`
        /* =====================================================
           PAGE ENTRANCE
        ====================================================== */

        .faculty-content {
          animation:
            facultyContentReveal
            900ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .faculty-eyebrow {
          animation:
            facultyFadeUp
            700ms
            100ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .faculty-heading {
          animation:
            facultyFadeUp
            850ms
            180ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .faculty-description {
          animation:
            facultyFadeUp
            850ms
            280ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .faculty-points {
          animation:
            facultyFadeUp
            850ms
            380ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .faculty-accent {
          animation:
            facultyFadeUp
            800ms
            470ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .faculty-visual {
          animation:
            facultyVisualReveal
            1100ms
            180ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes facultyContentReveal {
          from {
            opacity: 0;
            transform:
              translateX(-35px);
          }

          to {
            opacity: 1;
            transform:
              translateX(0);
          }
        }

        @keyframes facultyFadeUp {
          from {
            opacity: 0;
            transform:
              translateY(25px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }

        @keyframes facultyVisualReveal {
          from {
            opacity: 0;
            transform:
              translateX(35px)
              scale(.94)
              rotateY(-5deg);
          }

          to {
            opacity: 1;
            transform:
              translateX(0)
              scale(1)
              rotateY(0);
          }
        }


        /* =====================================================
           GRADIENT HEADING
        ====================================================== */

        .faculty-gradient-text {
          background:
            linear-gradient(
              110deg,
              #c58a00,
              #f4b942,
              #ffd978,
              #f4b942,
              #c58a00
            );

          background-size:
            250% auto;

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          animation:
            facultyGradient
            5s
            ease-in-out
            infinite;
        }

        @keyframes facultyGradient {
          0%,
          100% {
            background-position:
              0% center;
          }

          50% {
            background-position:
              100% center;
          }
        }


        /* =====================================================
           BACKGROUND GLOW
        ====================================================== */

        .faculty-glow-left {
          animation:
            facultyGlowLeft
            11s
            ease-in-out
            infinite;
        }

        .faculty-glow-right {
          animation:
            facultyGlowRight
            13s
            ease-in-out
            infinite;
        }

        @keyframes facultyGlowLeft {
          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(35px,-25px,0)
              scale(1.08);
          }
        }

        @keyframes facultyGlowRight {
          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-30px,25px,0)
              scale(1.1);
          }
        }


        /* =====================================================
           ORBITS
        ====================================================== */

        .faculty-orbit-left {
          animation:
            facultyOrbit
            28s
            linear
            infinite;
        }

        .faculty-orbit-right {
          animation:
            facultyOrbitReverse
            34s
            linear
            infinite;
        }

        .faculty-orbit-small {
          animation:
            facultyOrbit
            20s
            linear
            infinite;
        }

        @keyframes facultyOrbit {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        @keyframes facultyOrbitReverse {
          from {
            transform:
              rotate(360deg);
          }

          to {
            transform:
              rotate(0deg);
          }
        }


        /* =====================================================
           GRID
        ====================================================== */

        .faculty-grid {
          background-image:
            linear-gradient(
              rgba(255,255,255,.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.8) 1px,
              transparent 1px
            );

          background-size:
            55px 55px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 80%
            );
        }


        /* =====================================================
           FLOATING PARTICLES
        ====================================================== */

        .faculty-particle {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            #F4B942;

          box-shadow:
            0 0 16px rgba(244,185,66,.75);

          animation:
            facultyParticleFloat
            5s
            ease-in-out
            infinite;
        }

        .faculty-particle-one {
          left: 15%;
          top: 24%;
        }

        .faculty-particle-two {
          left: 44%;
          top: 14%;

          animation-delay:
            -1.2s;
        }

        .faculty-particle-three {
          right: 18%;
          top: 30%;

          animation-delay:
            -2.4s;
        }

        .faculty-particle-four {
          right: 10%;
          bottom: 18%;

          animation-delay:
            -3.5s;
        }

        @keyframes facultyParticleFloat {
          0%,
          100% {
            opacity: .25;

            transform:
              translateY(0)
              scale(.7);
          }

          50% {
            opacity: 1;

            transform:
              translateY(-16px)
              scale(1.3);
          }
        }


        /* =====================================================
           MAIN CARD
        ====================================================== */

        .faculty-main-card {
          perspective: 1200px;
          transform-style: preserve-3d;

          transition:
            transform 550ms cubic-bezier(.22,1,.36,1),
            border-color 400ms ease,
            box-shadow 550ms ease;
        }

        .faculty-main-card:hover {
          transform:
            translateY(-8px)
            rotateX(2deg)
            rotateY(-2deg);

          border-color:
            rgba(244,185,66,.24);

          box-shadow:
            0 40px 100px rgba(0,0,0,.35);
        }

        .faculty-card-glow {
          animation:
            facultyCardGlow
            6s
            ease-in-out
            infinite;
        }

        @keyframes facultyCardGlow {
          0%,
          100% {
            opacity: .45;

            transform:
              scale(1);
          }

          50% {
            opacity: .8;

            transform:
              scale(1.04);
          }
        }


        /* =====================================================
           CARD SHINE
        ====================================================== */

        .faculty-card-shine {
          animation:
            facultyShine
            7s
            ease-in-out
            infinite;
        }

        @keyframes facultyShine {
          0%,
          65% {
            transform:
              translateX(-180%);
          }

          85%,
          100% {
            transform:
              translateX(480%);
          }
        }


        /* =====================================================
           CARD RING
        ====================================================== */

        .faculty-card-ring {
          animation:
            facultyRingPulse
            5s
            ease-in-out
            infinite;
        }

        @keyframes facultyRingPulse {
          0%,
          100% {
            opacity: .35;

            transform:
              scale(1);
          }

          50% {
            opacity: .7;

            transform:
              scale(1.015);
          }
        }


        /* =====================================================
           ICON
        ====================================================== */

        .faculty-icon-box {
          transform-style:
            preserve-3d;

          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        .faculty-main-card:hover .faculty-icon-box {
          transform:
            translateZ(18px)
            rotateX(8deg)
            rotateY(-10deg)
            scale(1.06);

          box-shadow:
            0 18px 35px rgba(244,185,66,.25);
        }


        /* =====================================================
           APPROACH CARDS
        ====================================================== */

        .faculty-approach-card {
          transform-style:
            preserve-3d;

          transition:
            transform 400ms cubic-bezier(.22,1,.36,1),
            background 400ms ease,
            border-color 400ms ease,
            box-shadow 400ms ease;
        }

        .faculty-approach-card:hover {
          transform:
            translateX(5px)
            translateZ(8px);

          background:
            rgba(255,255,255,.075);

          border-color:
            rgba(244,185,66,.20);

          box-shadow:
            0 12px 30px rgba(0,0,0,.14);
        }


        /* =====================================================
           STEP NUMBER
        ====================================================== */

        .faculty-step {
          transition:
            transform 350ms ease,
            background 350ms ease,
            box-shadow 350ms ease;
        }

        .faculty-approach-card:hover .faculty-step {
          transform:
            translateZ(12px)
            scale(1.08);

          background:
            rgba(244,185,66,.18);

          box-shadow:
            0 8px 20px rgba(244,185,66,.12);
        }


        /* =====================================================
           POINT ICONS
        ====================================================== */

        .faculty-point-icon {
          transition:
            transform 350ms ease,
            border-color 350ms ease,
            background 350ms ease;
        }

        .faculty-point:hover .faculty-point-icon {
          transform:
            translateY(-4px)
            rotate(-4deg);

          border-color:
            rgba(244,185,66,.25);

          background:
            rgba(244,185,66,.13);
        }


        /* =====================================================
           BADGE
        ====================================================== */

        /*
          IMPORTANT:
          The badge has a continuous float animation that controls
          transform. Therefore, no hover transform is applied here.
          This prevents animation/hover transform conflicts.
        */

        .faculty-badge {
          animation:
            facultyBadgeFloat
            4s
            ease-in-out
            infinite;
        }

        @keyframes facultyBadgeFloat {
          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-7px);
          }
        }


        /* =====================================================
           BOTTOM ACCENT
        ====================================================== */

        .faculty-card-accent {
          animation:
            facultyAccent
            4s
            ease-in-out
            infinite;
        }

        @keyframes facultyAccent {
          0%,
          100% {
            opacity: .35;
          }

          50% {
            opacity: 1;
          }
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {
          .faculty-particle {
            display:
              none;
          }

          .faculty-orbit-small {
            display:
              none;
          }

          .faculty-card-ring {
            inset:
              -1rem;
          }

          .faculty-main-card:hover {
            transform:
              translateY(-4px);
          }

          .faculty-approach-card:hover {
            transform:
              translateX(3px);
          }
        }


        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .faculty-content,
          .faculty-eyebrow,
          .faculty-heading,
          .faculty-description,
          .faculty-points,
          .faculty-accent,
          .faculty-visual,
          .faculty-gradient-text,
          .faculty-glow-left,
          .faculty-glow-right,
          .faculty-orbit-left,
          .faculty-orbit-right,
          .faculty-orbit-small,
          .faculty-particle,
          .faculty-card-glow,
          .faculty-card-shine,
          .faculty-card-ring,
          .faculty-badge,
          .faculty-card-accent,
          .faculty-main-card,
          .faculty-icon-box,
          .faculty-approach-card,
          .faculty-step,
          .faculty-point-icon {
            animation:
              none !important;

            transition:
              none !important;
          }

          .faculty-main-card:hover,
          .faculty-approach-card:hover,
          .faculty-point:hover .faculty-point-icon,
          .faculty-main-card:hover .faculty-icon-box,
          .faculty-approach-card:hover .faculty-step {
            transform:
              none !important;
          }
        }
      `}</style>
    </section>
  );
}

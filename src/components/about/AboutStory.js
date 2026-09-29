"use client";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="story-glow story-glow-one absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-400/[0.07] blur-3xl" />

        <div className="story-glow story-glow-two absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="story-orbit-one absolute -left-32 top-20 h-72 w-72 rounded-full border border-amber-400/10" />

        <div className="story-orbit-two absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-[#071B36]/[0.04]" />

        <span className="story-particle story-particle-one" />
        <span className="story-particle story-particle-two" />
        <span className="story-particle story-particle-three" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="story-content max-w-2xl">
            {/* Label */}

            <div className="story-label inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-50" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-amber-400" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                Who We Are
              </span>
            </div>

            {/* Heading */}

            <h2 className="story-heading mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Education with{" "}
              <span className="story-gradient-text">Purpose.</span>
            </h2>

            {/* Paragraphs */}

            <div className="story-paragraphs">
              <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Future Skills Academy is built around a simple idea: students
                should have the opportunity to understand what they learn and
                develop the confidence to use that knowledge.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Our approach brings together academic learning and practical
                understanding. We encourage students to ask questions, practice
                their skills, and connect their learning with real-world
                situations.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                From foundational education to technology and programming, our
                aim is to help students build strong foundations and continue
                growing throughout their educational journey.
              </p>
            </div>

            {/* =================================================
                KEY POINTS
            ================================================== */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {/* Card 1 */}

              <div className="story-small-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-100/70 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-start gap-3">
                  <div className="story-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 12 4 4L19 6"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Strong Foundations
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      Building understanding step by step.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}

              <div className="story-small-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-start gap-3">
                  <div className="story-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12M6 12h12"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Practical Growth
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      Turning knowledge into useful skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT 3D VISUAL
          ====================================================== */}

          <div className="story-visual relative mx-auto w-full max-w-xl lg:ml-auto">
            {/* Outer 3D Rings */}

            <div
              className="story-outer-ring absolute -inset-6 rounded-[2.7rem] border border-amber-300/20"
              aria-hidden="true"
            />

            <div
              className="story-outer-ring-reverse absolute -inset-10 rounded-[3rem] border border-[#071B36]/[0.06]"
              aria-hidden="true"
            />

            {/* Floating decorative dots */}

            <span className="story-visual-dot story-visual-dot-one" />
            <span className="story-visual-dot story-visual-dot-two" />
            <span className="story-visual-dot story-visual-dot-three" />

            {/* =================================================
                MAIN 3D CARD
            ================================================== */}

            <div className="story-main-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071B36] p-7 shadow-[0_35px_80px_rgba(7,27,54,0.25)] sm:p-9">
              {/* Background Glow */}

              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-400/[0.10] blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-3xl"
                aria-hidden="true"
              />

              {/* Decorative Grid */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
                aria-hidden="true"
              />

              {/* Large Orbit */}

              <div
                className="story-inner-orbit pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border border-amber-400/10"
                aria-hidden="true"
              />

              <div
                className="story-inner-orbit-reverse pointer-events-none absolute right-[-65px] top-[-65px] h-56 w-56 rounded-full border border-white/[0.06]"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* =================================================
                    3D BOOK ICON
                ================================================== */}

                <div className="story-book-scene">
                  <div className="story-book relative flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-[#071B36] shadow-[0_15px_35px_rgba(244,185,66,0.25)]">
                    <div className="absolute inset-1 rounded-xl border border-[#071B36]/10" />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative h-8 w-8"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                      />
                    </svg>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                  Our Approach
                </p>

                <h3 className="mt-3 max-w-lg text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Learn with Clarity. Grow with Confidence.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
                  We believe meaningful learning happens when students
                  understand concepts, practice what they learn, and feel
                  confident about their progress.
                </p>

                {/* =================================================
                    LEARNING STEPS
                ================================================== */}

                <div className="mt-9 space-y-5">
                  {/* Step 01 */}

                  <div className="story-step group flex items-start gap-4">
                    <div className="story-step-number relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-white/[0.07] text-xs font-bold text-amber-300">
                      <span className="relative z-10">01</span>
                    </div>

                    <div className="pt-0.5">
                      <h4 className="font-bold text-white">Understand</h4>

                      <p className="mt-1 text-sm leading-5 text-slate-400">
                        Build clear understanding of the fundamentals.
                      </p>
                    </div>
                  </div>

                  {/* Step 02 */}

                  <div className="story-step group flex items-start gap-4">
                    <div className="story-step-number relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-white/[0.07] text-xs font-bold text-amber-300">
                      <span className="relative z-10">02</span>
                    </div>

                    <div className="pt-0.5">
                      <h4 className="font-bold text-white">Practice</h4>

                      <p className="mt-1 text-sm leading-5 text-slate-400">
                        Apply knowledge through practice and activities.
                      </p>
                    </div>
                  </div>

                  {/* Step 03 */}

                  <div className="story-step group flex items-start gap-4">
                    <div className="story-step-number relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-white/[0.07] text-xs font-bold text-amber-300">
                      <span className="relative z-10">03</span>
                    </div>

                    <div className="pt-0.5">
                      <h4 className="font-bold text-white">Grow</h4>

                      <p className="mt-1 text-sm leading-5 text-slate-400">
                        Develop confidence and continue improving.
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

                <div className="story-bottom-line mt-8 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-slate-300">
                    <span className="text-white">Learn</span>

                    <span className="text-amber-400">•</span>

                    <span>Build Skills</span>

                    <span className="text-amber-400">•</span>

                    <span>Create Your Future</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING BADGE
            ================================================== */}

            <div className="story-floating-badge absolute -bottom-5 -left-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_20px_45px_rgba(7,27,54,0.18)] sm:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3L14.2 8.2L20 8.7L15.6 12.5L16.9 18.2L12 15.2L7.1 18.2L8.4 12.5L4 8.7L9.8 8.2L12 3Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Learning Focus
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#071B36]">
                    Understand • Practice • Grow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style>{`

        /* =====================================================
           MAIN ENTRANCE
        ====================================================== */

        .story-content {
          animation:
            storyContentReveal
            900ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .story-label {
          animation:
            storyFadeUp
            700ms
            80ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .story-heading {
          animation:
            storyFadeUp
            800ms
            170ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .story-paragraphs {
          animation:
            storyFadeUp
            800ms
            280ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .story-small-card {
          animation:
            storyCardReveal
            800ms
            cubic-bezier(.22,1,.36,1)
            both;

          transform-style: preserve-3d;

          transition:
            transform 400ms ease,
            box-shadow 400ms ease,
            border-color 400ms ease;
        }

        .story-small-card:nth-child(1) {
          animation-delay: 430ms;
        }

        .story-small-card:nth-child(2) {
          animation-delay: 520ms;
        }

        @keyframes storyContentReveal {

          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }

        @keyframes storyFadeUp {

          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @keyframes storyCardReveal {

          from {
            opacity: 0;
            transform:
              translateY(30px)
              rotateX(8deg)
              scale(.95);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              rotateX(0deg)
              scale(1);
          }

        }

        /* =====================================================
           3D VISUAL ENTRANCE
        ====================================================== */

        .story-visual {
          perspective: 1400px;

          animation:
            storyVisualReveal
            1100ms
            180ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes storyVisualReveal {

          from {
            opacity: 0;

            transform:
              translateX(45px)
              translateY(25px)
              rotateY(-12deg)
              scale(.92);
          }

          to {
            opacity: 1;

            transform:
              translateX(0)
              translateY(0)
              rotateY(0deg)
              scale(1);
          }

        }

        /* =====================================================
           MAIN CARD
           
           Fixed:
           Removed continuous transform animation because it
           conflicted with the hover transform.
        ====================================================== */

        .story-main-card {
          transform-style: preserve-3d;

          transition:
            transform 500ms ease,
            box-shadow 500ms ease;
        }

        .story-main-card:hover {

          transform:
            translateY(-8px)
            rotateX(2deg)
            rotateY(-2deg);

          box-shadow:
            0 45px 100px rgba(7,27,54,.32);
        }

        /* =====================================================
           GRADIENT TEXT
        ====================================================== */

        .story-gradient-text {

          background:
            linear-gradient(
              110deg,
              #d97706,
              #f4b942,
              #ffd166,
              #d97706
            );

          background-size: 250% auto;

          -webkit-background-clip: text;
          background-clip: text;

          -webkit-text-fill-color: transparent;

          animation:
            storyGradient
            5s
            ease-in-out
            infinite;
        }

        @keyframes storyGradient {

          0%,
          100% {
            background-position: 0% center;
          }

          50% {
            background-position: 100% center;
          }

        }

        /* =====================================================
           BOOK ICON
           
           Fixed:
           Removed continuous transform animation because it
           conflicted with the hover transform.
        ====================================================== */

        .story-book {
          transform-style: preserve-3d;

          transition:
            transform 400ms ease;
        }

        .story-book:hover {

          transform:
            translateY(-5px)
            rotateX(10deg)
            rotateY(-12deg);
        }

        /* =====================================================
           ORBITS
        ====================================================== */

        .story-outer-ring {

          animation:
            storyOrbit
            22s
            linear
            infinite;
        }

        .story-outer-ring-reverse {

          animation:
            storyOrbitReverse
            28s
            linear
            infinite;
        }

        .story-inner-orbit {

          animation:
            storyOrbit
            18s
            linear
            infinite;
        }

        .story-inner-orbit-reverse {

          animation:
            storyOrbitReverse
            23s
            linear
            infinite;
        }

        @keyframes storyOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        @keyframes storyOrbitReverse {

          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }

        }

        /* =====================================================
           LEARNING STEPS
        ====================================================== */

        .story-step {

          transition:
            transform 350ms ease;
        }

        .story-step:hover {

          transform:
            translateX(7px);
        }

        .story-step-number {

          transition:
            transform 350ms ease,
            background 350ms ease,
            border-color 350ms ease;
        }

        .story-step:hover .story-step-number {

          transform:
            scale(1.12)
            rotateY(15deg);

          background:
            rgba(244,185,66,.13);

          border-color:
            rgba(244,185,66,.45);
        }

        /* =====================================================
           SMALL CARDS
        ====================================================== */

        .story-small-card:hover {

          transform:
            translateY(-7px)
            rotateX(2deg)
            rotateY(-2deg);

          border-color:
            rgba(244,185,66,.35);

          box-shadow:
            0 20px 45px rgba(7,27,54,.10);
        }

        .story-icon {

          transform-style: preserve-3d;

          transition:
            transform 350ms ease;
        }

        .story-small-card:hover .story-icon {

          transform:
            translateZ(10px)
            rotateY(-12deg)
            rotateX(8deg);
        }

        /* =====================================================
           FLOATING BADGE
        ====================================================== */

        .story-floating-badge {

          animation:
            storyBadgeFloat
            4s
            ease-in-out
            1.8s
            infinite;
        }

        @keyframes storyBadgeFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }

        }

        /* =====================================================
           BACKGROUND GLOWS
        ====================================================== */

        .story-glow-one {

          animation:
            storyGlowOne
            9s
            ease-in-out
            infinite;
        }

        .story-glow-two {

          animation:
            storyGlowTwo
            11s
            ease-in-out
            infinite;
        }

        @keyframes storyGlowOne {

          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(25px,-15px,0)
              scale(1.08);
          }

        }

        @keyframes storyGlowTwo {

          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-20px,20px,0)
              scale(1.1);
          }

        }

        /* =====================================================
           BACKGROUND ORBITS
        ====================================================== */

        .story-orbit-one {

          animation:
            storyOrbit
            25s
            linear
            infinite;
        }

        .story-orbit-two {

          animation:
            storyOrbitReverse
            30s
            linear
            infinite;
        }

        /* =====================================================
           PARTICLES
        ====================================================== */

        .story-particle {

          position: absolute;

          height: 5px;
          width: 5px;

          border-radius: 999px;

          background:
            #f4b942;

          box-shadow:
            0 0 15px rgba(244,185,66,.7);

          animation:
            storyParticle
            5s
            ease-in-out
            infinite;
        }

        .story-particle-one {

          left: 18%;
          top: 30%;
        }

        .story-particle-two {

          left: 48%;
          top: 15%;

          animation-delay:
            -2s;
        }

        .story-particle-three {

          right: 18%;
          bottom: 20%;

          animation-delay:
            -3s;
        }

        @keyframes storyParticle {

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
              translateY(-15px)
              scale(1.3);
          }

        }

        /* =====================================================
           VISUAL DOTS
        ====================================================== */

        .story-visual-dot {

          position: absolute;

          z-index: 20;

          height: 6px;
          width: 6px;

          border-radius: 999px;

          background:
            #f4b942;

          box-shadow:
            0 0 15px rgba(244,185,66,.7);

          animation:
            visualDotFloat
            4s
            ease-in-out
            infinite;
        }

        .story-visual-dot-one {

          right: 8%;
          top: 18%;
        }

        .story-visual-dot-two {

          left: 5%;
          top: 38%;

          animation-delay:
            -1.5s;
        }

        .story-visual-dot-three {

          right: 15%;
          bottom: 18%;

          animation-delay:
            -2.5s;
        }

        @keyframes visualDotFloat {

          0%,
          100% {
            transform:
              translateY(0)
              scale(.8);
          }

          50% {
            transform:
              translateY(-12px)
              scale(1.3);
          }

        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {

          .story-outer-ring {
            inset: -12px;
          }

          .story-outer-ring-reverse {
            inset: -20px;
          }

          .story-inner-orbit,
          .story-inner-orbit-reverse {
            opacity: .7;
          }

          .story-visual-dot-two,
          .story-visual-dot-three {
            display: none;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .story-content,
          .story-label,
          .story-heading,
          .story-paragraphs,
          .story-small-card,
          .story-visual,
          .story-main-card,
          .story-gradient-text,
          .story-book,
          .story-outer-ring,
          .story-outer-ring-reverse,
          .story-inner-orbit,
          .story-inner-orbit-reverse,
          .story-floating-badge,
          .story-glow-one,
          .story-glow-two,
          .story-orbit-one,
          .story-orbit-two,
          .story-particle,
          .story-visual-dot {
            animation: none !important;
          }

        }

      `}</style>
    </section>
  );
}

"use client";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND 3D DECORATION
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="mv-glow-one absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-400/[0.08] blur-3xl" />

        <div className="mv-glow-two absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="mv-orbit-one absolute -left-36 bottom-10 h-80 w-80 rounded-full border border-amber-400/10" />

        <div className="mv-orbit-two absolute -right-32 top-0 h-96 w-96 rounded-full border border-[#071B36]/[0.05]" />

        <span className="mv-particle mv-particle-one" />
        <span className="mv-particle mv-particle-two" />
        <span className="mv-particle mv-particle-three" />
        <span className="mv-particle mv-particle-four" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mv-header mx-auto max-w-3xl text-center">
          <span className="mv-label inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-50" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-amber-400" />
            </span>
            Our Direction
          </span>

          <h2 className="mv-heading mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Mission <span className="mv-gradient-text">& Vision</span>
          </h2>

          <p className="mv-description mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our direction is guided by a simple purpose: helping students
            develop strong foundations, useful skills, and confidence for their
            educational journey.
          </p>
        </div>

        {/* =======================================================
            MISSION + VISION
        ======================================================== */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* =====================================================
              MISSION CARD
          ====================================================== */}

          <article className="mv-card mv-mission-card group relative overflow-hidden rounded-[2rem] bg-[#071B36] p-7 shadow-[0_25px_70px_rgba(7,27,54,0.18)] sm:p-9 lg:p-10">
            {/* Animated background glow */}

            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/[0.10] blur-3xl"
              aria-hidden="true"
            />

            {/* Orbit */}

            <div
              className="mv-card-orbit absolute -right-20 -top-20 h-60 w-60 rounded-full border border-amber-400/10"
              aria-hidden="true"
            />

            <div
              className="mv-card-orbit-reverse absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/[0.06]"
              aria-hidden="true"
            />

            {/* Decorative dots */}

            <span className="mv-card-dot mv-card-dot-one" />
            <span className="mv-card-dot mv-card-dot-two" />

            <div className="relative z-10">
              {/* =================================================
                  MISSION ICON
              ================================================== */}

              <div className="mv-icon-scene">
                <div className="mv-icon-box flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-[#071B36] shadow-[0_15px_35px_rgba(244,185,66,0.25)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 7h14"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 7v2a5 5 0 0 0 10 0V7"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 21h8"
                    />
                  </svg>
                </div>
              </div>

              {/* Label */}

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                Our Mission
              </p>

              {/* Heading */}

              <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Every Student Deserves a Chance to Succeed.
              </h3>

              {/* Description */}

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                We aim to create a learning environment where students can
                understand concepts clearly, develop practical skills, ask
                questions confidently, and continue improving throughout their
                educational journey.
              </p>

              {/* =================================================
                  MISSION POINTS
              ================================================== */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="mv-point-card rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                    ✓
                  </span>

                  <p className="text-sm font-bold text-white">Clear Concepts</p>
                </div>

                <div className="mv-point-card rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                    ✓
                  </span>

                  <p className="text-sm font-bold text-white">
                    Practical Skills
                  </p>
                </div>

                <div className="mv-point-card rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                    ✓
                  </span>

                  <p className="text-sm font-bold text-white">Student Growth</p>
                </div>
              </div>

              {/* Bottom accent */}

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-16 rounded-full bg-amber-400" />

                <div className="h-1 w-3 rounded-full bg-amber-400/40" />

                <div className="h-1 w-2 rounded-full bg-amber-400/20" />
              </div>
            </div>
          </article>

          {/* =====================================================
              VISION CARD
          ====================================================== */}

          <article className="mv-card mv-vision-card group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_25px_70px_rgba(7,27,54,0.10)] sm:p-9 lg:p-10">
            {/* Background glow */}

            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-100/70 blur-2xl"
              aria-hidden="true"
            />

            {/* Orbit */}

            <div
              className="mv-card-orbit absolute -right-20 -top-20 h-60 w-60 rounded-full border border-amber-300/20"
              aria-hidden="true"
            />

            <div
              className="mv-card-orbit-reverse absolute -right-10 -top-10 h-40 w-40 rounded-full border border-amber-200/30"
              aria-hidden="true"
            />

            {/* Decorative dots */}

            <span className="mv-card-dot mv-vision-dot-one" />
            <span className="mv-card-dot mv-vision-dot-two" />

            <div className="relative z-10">
              {/* =================================================
                  VISION ICON
              ================================================== */}

              <div className="mv-icon-scene">
                <div className="mv-icon-box mv-eye-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                    />

                    <circle cx="12" cy="12" r="2.5" />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4V2.5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.2 6.8l1.1-1.1"
                    />
                  </svg>
                </div>
              </div>

              {/* Label */}

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                Our Vision
              </p>

              {/* Heading */}

              <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Preparing Students for What Comes Next.
              </h3>

              {/* Description */}

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                We want to help students become confident learners who are
                prepared to continue their education, develop valuable skills,
                and create meaningful opportunities for their future.
              </p>

              {/* =================================================
                  VISION POINTS
              ================================================== */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="mv-light-point rounded-xl bg-slate-50 px-4 py-4 ring-1 ring-slate-200">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    01
                  </span>

                  <p className="text-sm font-bold text-slate-800">Confidence</p>
                </div>

                <div className="mv-light-point rounded-xl bg-slate-50 px-4 py-4 ring-1 ring-slate-200">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    02
                  </span>

                  <p className="text-sm font-bold text-slate-800">Skills</p>
                </div>

                <div className="mv-light-point rounded-xl bg-slate-50 px-4 py-4 ring-1 ring-slate-200">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    03
                  </span>

                  <p className="text-sm font-bold text-slate-800">Growth</p>
                </div>
              </div>

              {/* Bottom accent */}

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-16 rounded-full bg-amber-400" />

                <div className="h-1 w-3 rounded-full bg-amber-300/60" />

                <div className="h-1 w-2 rounded-full bg-amber-200" />
              </div>
            </div>
          </article>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <div className="mv-bottom mx-auto mt-14 max-w-4xl text-center">
          <div className="mx-auto flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-amber-300" />

            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(244,185,66,.6)]" />

            <span className="h-px w-12 bg-amber-300" />
          </div>

          <p className="mt-6 text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
            At Future Skills Academy, we believe education is not only about
            completing a class or passing an exam. It is about building the
            understanding and confidence students can carry into the next stage
            of their lives.
          </p>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style>{`

        /* =====================================================
           HEADER ENTRANCE
        ====================================================== */

        .mv-header {
          animation:
            mvHeaderReveal
            900ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .mv-label {
          animation:
            mvFadeUp
            700ms
            80ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .mv-heading {
          animation:
            mvFadeUp
            800ms
            170ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .mv-description {
          animation:
            mvFadeUp
            800ms
            280ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes mvHeaderReveal {

          from {
            opacity: 0;
            transform:
              translateY(35px)
              scale(.97);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }

        @keyframes mvFadeUp {

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

        /* =====================================================
           CARDS ENTRANCE
        ====================================================== */

        .mv-mission-card {
          animation:
            mvMissionReveal
            1000ms
            380ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .mv-vision-card {
          animation:
            mvVisionReveal
            1000ms
            500ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes mvMissionReveal {

          from {
            opacity: 0;

            transform:
              translateX(-45px)
              rotateY(10deg)
              rotateX(4deg)
              scale(.94);
          }

          to {
            opacity: 1;

            transform:
              translateX(0)
              rotateY(0deg)
              rotateX(0deg)
              scale(1);
          }

        }

        @keyframes mvVisionReveal {

          from {
            opacity: 0;

            transform:
              translateX(45px)
              rotateY(-10deg)
              rotateX(4deg)
              scale(.94);
          }

          to {
            opacity: 1;

            transform:
              translateX(0)
              rotateY(0deg)
              rotateX(0deg)
              scale(1);
          }

        }

        /* =====================================================
           3D CARD HOVER
        ====================================================== */

        .mv-card {
          perspective: 1200px;
          transform-style: preserve-3d;

          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            box-shadow 500ms ease,
            border-color 400ms ease;
        }

        .mv-mission-card:hover {

          transform:
            translateY(-10px)
            rotateX(2deg)
            rotateY(-2deg);

          box-shadow:
            0 40px 90px rgba(7,27,54,.30);
        }

        .mv-vision-card:hover {

          transform:
            translateY(-10px)
            rotateX(2deg)
            rotateY(2deg);

          box-shadow:
            0 40px 90px rgba(7,27,54,.15);

          border-color:
            rgba(244,185,66,.35);
        }

        /* =====================================================
           ICON 3D

           Fixed:
           Removed the continuous mvIconFloat animation.
           The old animation and hover both controlled
           transform at the same time, causing conflicts.

           Hover now controls the icon transform cleanly.
        ====================================================== */

        .mv-icon-box {

          transform-style: preserve-3d;

          transition:
            transform 450ms ease,
            box-shadow 450ms ease;
        }

        .mv-card:hover .mv-icon-box {

          transform:
            translateZ(20px)
            rotateX(10deg)
            rotateY(-12deg)
            scale(1.05);

          box-shadow:
            0 20px 35px rgba(244,185,66,.25);
        }

        /* =====================================================
           CARD ORBITS
        ====================================================== */

        .mv-card-orbit {

          animation:
            mvOrbit
            20s
            linear
            infinite;
        }

        .mv-card-orbit-reverse {

          animation:
            mvOrbitReverse
            25s
            linear
            infinite;
        }

        @keyframes mvOrbit {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }

        }

        @keyframes mvOrbitReverse {

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
           MISSION POINTS
        ====================================================== */

        .mv-point-card {

          transform-style: preserve-3d;

          transition:
            transform 350ms ease,
            background 350ms ease,
            border-color 350ms ease;
        }

        .mv-point-card:hover {

          transform:
            translateY(-6px)
            translateZ(10px)
            rotateX(2deg);

          background:
            rgba(255,255,255,.10);

          border-color:
            rgba(244,185,66,.25);
        }

        /* =====================================================
           VISION POINTS
        ====================================================== */

        .mv-light-point {

          transform-style: preserve-3d;

          transition:
            transform 350ms ease,
            box-shadow 350ms ease,
            background 350ms ease;
        }

        .mv-light-point:hover {

          transform:
            translateY(-6px)
            translateZ(10px)
            rotateX(2deg);

          background:
            white;

          box-shadow:
            0 15px 35px rgba(7,27,54,.08);
        }

        /* =====================================================
           GRADIENT HEADING
        ====================================================== */

        .mv-gradient-text {

          background:
            linear-gradient(
              110deg,
              #d97706,
              #f4b942,
              #ffd166,
              #d97706
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
            mvGradient
            5s
            ease-in-out
            infinite;
        }

        @keyframes mvGradient {

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

        .mv-glow-one {

          animation:
            mvGlowOne
            9s
            ease-in-out
            infinite;
        }

        .mv-glow-two {

          animation:
            mvGlowTwo
            11s
            ease-in-out
            infinite;
        }

        @keyframes mvGlowOne {

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

        @keyframes mvGlowTwo {

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

        .mv-orbit-one {

          animation:
            mvOrbit
            27s
            linear
            infinite;
        }

        .mv-orbit-two {

          animation:
            mvOrbitReverse
            32s
            linear
            infinite;
        }

        /* =====================================================
           PARTICLES
        ====================================================== */

        .mv-particle {

          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            #f4b942;

          box-shadow:
            0 0 16px rgba(244,185,66,.7);

          animation:
            mvParticle
            5s
            ease-in-out
            infinite;
        }

        .mv-particle-one {

          left: 15%;
          top: 25%;
        }

        .mv-particle-two {

          left: 45%;
          top: 12%;

          animation-delay:
            -1.5s;
        }

        .mv-particle-three {

          right: 20%;
          top: 40%;

          animation-delay:
            -2.5s;
        }

        .mv-particle-four {

          right: 12%;
          bottom: 20%;

          animation-delay:
            -3.5s;
        }

        @keyframes mvParticle {

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
           CARD DOTS
        ====================================================== */

        .mv-card-dot {

          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            #f4b942;

          box-shadow:
            0 0 14px rgba(244,185,66,.75);

          animation:
            mvDotFloat
            4s
            ease-in-out
            infinite;
        }

        .mv-card-dot-one {

          right: 18%;
          top: 18%;
        }

        .mv-card-dot-two {

          right: 8%;
          bottom: 20%;

          animation-delay:
            -2s;
        }

        .mv-vision-dot-one {

          right: 16%;
          top: 20%;
        }

        .mv-vision-dot-two {

          left: 12%;
          bottom: 16%;

          animation-delay:
            -1.5s;
        }

        @keyframes mvDotFloat {

          0%,
          100% {
            transform:
              translateY(0)
              scale(.8);

            opacity: .35;
          }

          50% {
            transform:
              translateY(-10px)
              scale(1.3);

            opacity: 1;
          }

        }

        /* =====================================================
           BOTTOM STATEMENT
        ====================================================== */

        .mv-bottom {

          animation:
            mvBottomReveal
            900ms
            800ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes mvBottomReveal {

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

        /* =====================================================
           MOBILE RESPONSIVENESS
        ====================================================== */

        @media (max-width: 767px) {

          .mv-card {

            border-radius:
              1.5rem;
          }

          .mv-card-orbit {

            opacity:
              .7;
          }

          .mv-card-dot {

            display:
              none;
          }

          .mv-particle-three,
          .mv-particle-four {

            display:
              none;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .mv-header,
          .mv-label,
          .mv-heading,
          .mv-description,
          .mv-mission-card,
          .mv-vision-card,
          .mv-bottom,
          .mv-card-orbit,
          .mv-card-orbit-reverse,
          .mv-gradient-text,
          .mv-glow-one,
          .mv-glow-two,
          .mv-orbit-one,
          .mv-orbit-two,
          .mv-particle,
          .mv-card-dot {

            animation:
              none !important;

            transition:
              none !important;
          }

        }

      `}</style>
    </section>
  );
}

"use client";

export default function CoreValues() {
  const values = [
    {
      number: "01",
      title: "Strong Foundations",
      description:
        "We focus on building clear academic foundations so students can understand concepts properly and continue learning with confidence.",
    },
    {
      number: "02",
      title: "Practical Learning",
      description:
        "Learning becomes more meaningful when students can connect concepts with practical examples, activities, and real-world situations.",
    },
    {
      number: "03",
      title: "Student Growth",
      description:
        "We value progress beyond marks by encouraging students to develop confidence, problem-solving ability, discipline, and a positive learning mindset.",
    },
    {
      number: "04",
      title: "Future Readiness",
      description:
        "Our approach encourages students to develop the knowledge, skills, and confidence they need for their next academic and professional journey.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="cv-glow-left absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-amber-400/[0.07] blur-3xl" />

        <div className="cv-glow-right absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-blue-500/[0.045] blur-3xl" />

        <div className="cv-orbit-left absolute -left-36 top-28 h-80 w-80 rounded-full border border-amber-400/[0.12]" />

        <div className="cv-orbit-right absolute -right-36 bottom-10 h-96 w-96 rounded-full border border-[#071B36]/[0.06]" />

        <span className="cv-floating-dot cv-dot-one" />
        <span className="cv-floating-dot cv-dot-two" />
        <span className="cv-floating-dot cv-dot-three" />
        <span className="cv-floating-dot cv-dot-four" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="cv-header mx-auto max-w-3xl text-center">
          <span className="cv-label inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B] sm:text-sm">
            <span className="h-px w-8 bg-[#D4A017]" />

            <span className="relative flex items-center gap-2">
              <span className="cv-label-dot h-2 w-2 rounded-full bg-[#D4A017]" />
              What We Value
            </span>

            <span className="h-px w-8 bg-[#D4A017]" />
          </span>

          <h2 className="cv-heading mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
            The Values Behind
            <span className="cv-gradient-text block">
              Our Learning Approach
            </span>
          </h2>

          <p className="cv-description mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our approach is built around meaningful learning, strong
            foundations, practical skills, and the overall growth of every
            student.
          </p>
        </div>

        {/* =========================================================
            VALUES GRID
        ========================================================== */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={value.number}
              className={`cv-card cv-card-${index + 1} group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(7,27,54,0.07)]`}
            >
              {/* Card Glow */}

              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-100/60 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-amber-100"
                aria-hidden="true"
              />

              {/* Card Orbit */}

              <div
                className="cv-inner-orbit pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-amber-300/20"
                aria-hidden="true"
              />

              {/* Decorative Dot */}

              <span className="cv-card-particle" />

              <div className="relative z-10">
                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div className="flex items-center justify-between">
                  <div className="cv-number-wrap flex h-11 w-11 items-center justify-center rounded-xl bg-[#071B36] shadow-lg">
                    <span className="text-xs font-bold tracking-widest text-[#F4B942]">
                      {value.number}
                    </span>
                  </div>

                  <div className="cv-value-orb flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 shadow-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4A017] opacity-40" />
                      <span className="relative h-3 w-3 rounded-full bg-[#D4A017]" />
                    </span>
                  </div>
                </div>

                {/* =================================================
                    3D DIVIDER
                ================================================== */}

                <div className="mt-7 flex items-center gap-2">
                  <div className="cv-divider h-1 w-10 rounded-full bg-[#D4A017]" />

                  <div className="h-1 w-2 rounded-full bg-amber-300/50" />

                  <div className="h-1 w-1 rounded-full bg-amber-200" />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <h3 className="mt-6 text-xl font-extrabold leading-tight text-[#071B36]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>

                {/* =================================================
                    BOTTOM MINI INDICATOR
                ================================================== */}

                <div className="mt-7 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Future Skills
                  </span>

                  <span className="h-px flex-1 bg-slate-200" />

                  <span className="text-xs font-bold text-[#B8860B]">
                    {value.number}
                  </span>
                </div>
              </div>

              {/* Bottom Glow */}

              <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-amber-100/40 blur-2xl transition-transform duration-700 group-hover:scale-150" />
            </article>
          ))}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <div className="cv-belief mt-14 overflow-hidden rounded-[2rem] bg-[#071B36] shadow-[0_25px_70px_rgba(7,27,54,0.18)]">
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-12">
            {/* Background Orbits */}

            <div
              className="cv-belief-orbit absolute -right-20 -top-28 h-64 w-64 rounded-full border border-[#D4A017]/15"
              aria-hidden="true"
            />

            <div
              className="cv-belief-orbit-reverse absolute -right-4 -top-12 h-40 w-40 rounded-full border border-white/[0.07]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full border border-white/[0.06]"
              aria-hidden="true"
            />

            {/* Floating Particles */}

            <span className="cv-belief-dot cv-belief-dot-one" />
            <span className="cv-belief-dot cv-belief-dot-two" />

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* Text */}

              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017] sm:text-sm">
                  Our Belief
                </p>

                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Learning should build understanding, confidence, and a
                  stronger future.
                </h3>
              </div>

              {/* 3D Learning Chain */}

              <div className="cv-chain shrink-0">
                <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-white">
                  <span className="cv-chain-item rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                    Learn
                  </span>

                  <span className="text-[#D4A017]">•</span>

                  <span className="cv-chain-item rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                    Build
                  </span>

                  <span className="text-[#D4A017]">•</span>

                  <span className="cv-chain-item rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                    Create
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}

            <div className="relative z-10 mt-9 h-px w-full overflow-hidden bg-white/10">
              <div className="cv-accent-line h-full w-1/3 bg-gradient-to-r from-transparent via-[#F4B942] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style>{`
        /* =====================================================
           HEADER ENTRANCE
        ====================================================== */

        .cv-header {
          animation:
            cvHeaderReveal
            900ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .cv-label {
          animation:
            cvFadeUp
            700ms
            80ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .cv-heading {
          animation:
            cvFadeUp
            800ms
            170ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .cv-description {
          animation:
            cvFadeUp
            800ms
            280ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes cvHeaderReveal {
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

        @keyframes cvFadeUp {
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

        .cv-card {
          perspective: 1200px;
          transform-style: preserve-3d;

          animation:
            cvCardReveal
            950ms
            cubic-bezier(.22,1,.36,1)
            both;

          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            box-shadow 500ms ease,
            border-color 400ms ease;
        }

        .cv-card-1 {
          animation-delay: 350ms;
        }

        .cv-card-2 {
          animation-delay: 450ms;
        }

        .cv-card-3 {
          animation-delay: 550ms;
        }

        .cv-card-4 {
          animation-delay: 650ms;
        }

        @keyframes cvCardReveal {
          from {
            opacity: 0;

            transform:
              translateY(50px)
              rotateX(12deg)
              scale(.92);
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
           3D CARD HOVER
        ====================================================== */

        .cv-card:hover {
          transform:
            translateY(-12px)
            rotateX(3deg)
            rotateY(-2deg)
            scale(1.015);

          border-color:
            rgba(212,160,23,.40);

          box-shadow:
            0 35px 80px rgba(7,27,54,.15);
        }

        .cv-card:nth-child(even):hover {
          transform:
            translateY(-12px)
            rotateX(3deg)
            rotateY(2deg)
            scale(1.015);
        }


        /* =====================================================
           NUMBER 3D
        ====================================================== */

        .cv-number-wrap {
          transform-style: preserve-3d;

          transition:
            transform 450ms ease,
            box-shadow 450ms ease;
        }

        .cv-card:hover .cv-number-wrap {
          transform:
            translateZ(20px)
            rotateX(8deg)
            rotateY(-10deg)
            scale(1.08);

          box-shadow:
            0 18px 35px rgba(7,27,54,.22);
        }


        /* =====================================================
           ORBIT
        ====================================================== */

        .cv-inner-orbit {
          animation:
            cvOrbit
            18s
            linear
            infinite;
        }

        @keyframes cvOrbit {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }


        /* =====================================================
           CARD PARTICLES
        ====================================================== */

        .cv-card-particle {
          position: absolute;

          top: 26%;
          right: 16%;

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            #D4A017;

          box-shadow:
            0 0 14px rgba(212,160,23,.65);

          animation:
            cvParticleFloat
            4s
            ease-in-out
            infinite;
        }

        @keyframes cvParticleFloat {
          0%,
          100% {
            opacity: .3;

            transform:
              translateY(0)
              scale(.8);
          }

          50% {
            opacity: 1;

            transform:
              translateY(-12px)
              scale(1.35);
          }
        }


        /* =====================================================
           VALUE ORB
        ====================================================== */

        .cv-value-orb {
          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        .cv-card:hover .cv-value-orb {
          transform:
            translateZ(18px)
            rotateZ(12deg)
            scale(1.08);

          box-shadow:
            0 12px 25px rgba(212,160,23,.14);
        }


        /* =====================================================
           DIVIDER
        ====================================================== */

        .cv-divider {
          transition:
            width 500ms cubic-bezier(.22,1,.36,1);
        }

        .cv-card:hover .cv-divider {
          width:
            76px;
        }


        /* =====================================================
           GRADIENT HEADING
        ====================================================== */

        .cv-gradient-text {
          background:
            linear-gradient(
              110deg,
              #9a6b00,
              #d4a017,
              #f4b942,
              #ffd166,
              #9a6b00
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
            cvGradient
            5s
            ease-in-out
            infinite;
        }

        @keyframes cvGradient {
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

        .cv-glow-left {
          animation:
            cvGlowLeft
            10s
            ease-in-out
            infinite;
        }

        .cv-glow-right {
          animation:
            cvGlowRight
            12s
            ease-in-out
            infinite;
        }

        @keyframes cvGlowLeft {
          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(30px,-20px,0)
              scale(1.08);
          }
        }

        @keyframes cvGlowRight {
          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-25px,20px,0)
              scale(1.1);
          }
        }


        /* =====================================================
           BACKGROUND ORBITS
        ====================================================== */

        .cv-orbit-left {
          animation:
            cvOrbit
            28s
            linear
            infinite;
        }

        .cv-orbit-right {
          animation:
            cvOrbitReverse
            32s
            linear
            infinite;
        }

        @keyframes cvOrbitReverse {
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
           FLOATING DOTS
        ====================================================== */

        .cv-floating-dot {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            #D4A017;

          box-shadow:
            0 0 15px rgba(212,160,23,.7);

          animation:
            cvFloatingDot
            5s
            ease-in-out
            infinite;
        }

        .cv-dot-one {
          left: 15%;
          top: 25%;
        }

        .cv-dot-two {
          left: 42%;
          top: 12%;

          animation-delay:
            -1s;
        }

        .cv-dot-three {
          right: 18%;
          top: 32%;

          animation-delay:
            -2s;
        }

        .cv-dot-four {
          right: 12%;
          bottom: 18%;

          animation-delay:
            -3s;
        }

        @keyframes cvFloatingDot {
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
           LABEL DOT
        ====================================================== */

        .cv-label-dot {
          animation:
            cvLabelPulse
            2s
            ease-in-out
            infinite;
        }

        @keyframes cvLabelPulse {
          0%,
          100% {
            transform:
              scale(1);
            opacity:
              .7;
          }

          50% {
            transform:
              scale(1.35);
            opacity:
              1;
          }
        }


        /* =====================================================
           BELIEF SECTION
        ====================================================== */

        .cv-belief {
          animation:
            cvBeliefReveal
            1000ms
            800ms
            cubic-bezier(.22,1,.36,1)
            both;

          transform-style:
            preserve-3d;
        }

        @keyframes cvBeliefReveal {
          from {
            opacity: 0;

            transform:
              translateY(35px)
              rotateX(5deg)
              scale(.96);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              rotateX(0)
              scale(1);
          }
        }


        .cv-belief:hover {
          box-shadow:
            0 35px 90px rgba(7,27,54,.25);
        }


        /* =====================================================
           BELIEF ORBITS
        ====================================================== */

        .cv-belief-orbit {
          animation:
            cvOrbit
            20s
            linear
            infinite;
        }

        .cv-belief-orbit-reverse {
          animation:
            cvOrbitReverse
            25s
            linear
            infinite;
        }


        /* =====================================================
           BELIEF DOTS
        ====================================================== */

        .cv-belief-dot {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            #F4B942;

          box-shadow:
            0 0 14px rgba(244,185,66,.7);

          animation:
            cvBeliefDot
            4s
            ease-in-out
            infinite;
        }

        .cv-belief-dot-one {
          right: 28%;
          top: 25%;
        }

        .cv-belief-dot-two {
          right: 12%;
          bottom: 25%;

          animation-delay:
            -2s;
        }

        @keyframes cvBeliefDot {
          0%,
          100% {
            transform:
              translateY(0)
              scale(.7);

            opacity:
              .3;
          }

          50% {
            transform:
              translateY(-12px)
              scale(1.3);

            opacity:
              1;
          }
        }


        /* =====================================================
           CHAIN ITEMS
        ====================================================== */

        .cv-chain-item {
          transform-style:
            preserve-3d;

          transition:
            transform 350ms ease,
            background 350ms ease,
            border-color 350ms ease;
        }

        .cv-chain-item:hover {
          transform:
            translateY(-5px)
            translateZ(12px)
            rotateX(5deg);

          background:
            rgba(255,255,255,.11);

          border-color:
            rgba(244,185,66,.35);
        }


        /* =====================================================
           MOVING ACCENT
        ====================================================== */

        .cv-accent-line {
          animation:
            cvAccentMove
            3s
            ease-in-out
            infinite;
        }

        @keyframes cvAccentMove {
          0% {
            transform:
              translateX(-120%);
          }

          50% {
            transform:
              translateX(250%);
          }

          100% {
            transform:
              translateX(400%);
          }
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {
          .cv-floating-dot {
            display:
              none;
          }

          .cv-orbit-left,
          .cv-orbit-right {
            opacity:
              .6;
          }

          .cv-card {
            border-radius:
              1.5rem;
          }

          .cv-card:hover,
          .cv-card:nth-child(even):hover {
            transform:
              translateY(-7px)
              scale(1.01);
          }

          .cv-belief {
            border-radius:
              1.5rem;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .cv-header,
          .cv-label,
          .cv-heading,
          .cv-description,
          .cv-card,
          .cv-belief,
          .cv-inner-orbit,
          .cv-gradient-text,
          .cv-glow-left,
          .cv-glow-right,
          .cv-orbit-left,
          .cv-orbit-right,
          .cv-floating-dot,
          .cv-card-particle,
          .cv-belief-orbit,
          .cv-belief-orbit-reverse,
          .cv-belief-dot,
          .cv-accent-line,
          .cv-label-dot,
          .cv-number-wrap,
          .cv-value-orb,
          .cv-divider,
          .cv-chain-item {
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

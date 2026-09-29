export default function ContactHero() {
  const contactSteps = [
    {
      number: "01",
      title: "Share Your Question",
      description:
        "Tell us what you would like to know about the academy or learning opportunities.",
    },
    {
      number: "02",
      title: "Get Guidance",
      description:
        "Get the information you need to make a clear learning decision.",
    },
    {
      number: "03",
      title: "Take the Next Step",
      description:
        "Move forward with a better understanding of your learning needs.",
    },
  ];

  return (
    <section
      className="contact-hero relative overflow-hidden bg-[#071B36]"
      aria-labelledby="contact-hero-title"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Large Glows */}

        <div className="contact-glow-left absolute -left-52 top-20 h-[430px] w-[430px] rounded-full bg-[#F4B942]/[0.07] blur-3xl" />

        <div className="contact-glow-right absolute -right-52 bottom-0 h-[480px] w-[480px] rounded-full bg-blue-500/[0.045] blur-3xl" />

        {/* Orbit Rings */}

        <div className="contact-orbit contact-orbit-one absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#F4B942]/[0.09]" />

        <div className="contact-orbit contact-orbit-two absolute -right-36 -top-32 h-[430px] w-[430px] rounded-full border border-white/[0.06]" />

        <div className="contact-orbit contact-orbit-three absolute bottom-[-180px] right-[18%] h-[400px] w-[400px] rounded-full border border-[#F4B942]/[0.05]" />

        {/* Floating Particles */}

        <span className="contact-particle contact-particle-one" />
        <span className="contact-particle contact-particle-two" />
        <span className="contact-particle contact-particle-three" />
        <span className="contact-particle contact-particle-four" />
        <span className="contact-particle contact-particle-five" />

        {/* Grid */}

        <div className="contact-grid absolute inset-0 opacity-[0.035]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="contact-left max-w-3xl">
            {/* Eyebrow */}

            <div className="contact-eyebrow inline-flex items-center gap-2 rounded-full border border-[#F4B942]/30 bg-[#F4B942]/[0.08] px-4 py-2 backdrop-blur-sm">
              <span className="contact-live-dot h-2 w-2 rounded-full bg-[#F4B942]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F4B942] sm:text-sm">
                Get in Touch
              </span>
            </div>

            {/* Heading */}

            <h1
              id="contact-hero-title"
              className="contact-heading mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Let&apos;s Start Your
              <span className="contact-gradient-text block">
                Learning Journey.
              </span>
            </h1>

            {/* Description */}

            <p className="contact-description mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Have a question about Future Skills Academy, our learning
              approach, or the subjects we offer? Get in touch with us and
              we&apos;ll be happy to guide you.
            </p>

            {/* =================================================
                SUPPORTING POINTS
            ================================================== */}

            <div className="mt-9 space-y-4">
              <div className="contact-support contact-support-one flex items-center gap-3">
                <div className="contact-support-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/15 bg-[#F4B942]/[0.08]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,.7)]" />
                </div>

                <span className="text-sm font-medium text-slate-200 sm:text-base">
                  Ask About Learning Opportunities
                </span>
              </div>

              <div className="contact-support contact-support-two flex items-center gap-3">
                <div className="contact-support-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/15 bg-[#F4B942]/[0.08]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,.7)]" />
                </div>

                <span className="text-sm font-medium text-slate-200 sm:text-base">
                  Discuss Your Learning Needs
                </span>
              </div>

              <div className="contact-support contact-support-three flex items-center gap-3">
                <div className="contact-support-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/15 bg-[#F4B942]/[0.08]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,.7)]" />
                </div>

                <span className="text-sm font-medium text-slate-200 sm:text-base">
                  Get Clear Guidance
                </span>
              </div>
            </div>

            {/* Bottom Accent */}

            <div className="contact-left-line mt-9 h-px max-w-md overflow-hidden bg-white/10">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#F4B942] to-transparent" />
            </div>
          </div>

          {/* =====================================================
              RIGHT 3D VISUAL
          ====================================================== */}

          <div className="contact-visual relative mx-auto w-full max-w-xl lg:ml-auto">
            {/* Outer Rings */}

            <div
              className="contact-visual-ring-one pointer-events-none absolute -inset-5 rounded-[2.2rem] border border-[#F4B942]/10"
              aria-hidden="true"
            />

            <div
              className="contact-visual-ring-two pointer-events-none absolute -inset-9 rounded-[2.5rem] border border-white/[0.04]"
              aria-hidden="true"
            />

            {/* Main Card */}

            <div className="contact-main-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_35px_90px_rgba(0,0,0,.3)] backdrop-blur-xl sm:p-8 lg:p-9">
              {/* Card Glow */}

              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F4B942]/10 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-32 -left-28 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-3xl"
                aria-hidden="true"
              />

              {/* Decorative Orbit */}

              <div
                className="contact-card-orbit pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#F4B942]/10"
                aria-hidden="true"
              />

              {/* =================================================
                  CARD HEADER
              ================================================== */}

              <div className="relative z-10 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B942]">
                    Future Skills Academy
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    We&apos;re Here to Help
                  </h2>
                </div>

                {/* Message Icon */}

                <div className="contact-message-icon relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4B942] text-[#071B36] shadow-[0_12px_30px_rgba(244,185,66,.22)]">
                  <div
                    className="absolute inset-1 rounded-xl border border-white/30"
                    aria-hidden="true"
                  />

                  <svg
                    viewBox="0 0 24 24"
                    className="relative h-7 w-7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 6.5C5 5.672 5.672 5 6.5 5H17.5C18.328 5 19 5.672 19 6.5V14.5C19 15.328 18.328 16 17.5 16H11L7 19V16H6.5C5.672 16 5 15.328 5 14.5V6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8 9H16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M8 12H13"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* =================================================
                  CONTACT JOURNEY
              ================================================== */}

              <div className="relative z-10 mt-8 space-y-3">
                {contactSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`contact-step contact-step-${index + 1} group rounded-2xl border border-white/10 bg-white/[0.045] p-4 hover:-translate-y-1 hover:border-[#F4B942]/30 hover:bg-white/[0.075] hover:shadow-[0_15px_35px_rgba(0,0,0,.15)]`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number */}

                      <div className="contact-step-number flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/20 bg-[#F4B942]/[0.08] text-xs font-extrabold text-[#F4B942]">
                        {step.number}
                      </div>

                      {/* Content */}

                      <div className="min-w-0">
                        <h3 className="font-bold text-white">{step.title}</h3>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow */}

                      <div className="contact-step-arrow ml-auto hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-z-2 group-hover:border-[#F4B942]/30 group-hover:bg-[#F4B942]/10 group-hover:text-[#F4B942] sm:flex">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
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
                  </div>
                ))}
              </div>

              {/* =================================================
                  BOTTOM LINE
              ================================================== */}

              <div className="relative z-10 mt-7 border-t border-white/10 pt-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-medium text-slate-400">
                    Student &amp; Parent Support
                  </span>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#F4B942]">
                    <span>Ask</span>
                    <span className="opacity-60">•</span>
                    <span>Learn</span>
                    <span className="opacity-60">•</span>
                    <span>Grow</span>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}

              <div className="relative z-10 mt-6 h-px overflow-hidden bg-white/10">
                <div className="contact-accent-line h-full w-1/3 bg-gradient-to-r from-transparent via-[#F4B942] to-transparent" />
              </div>
            </div>

            {/* =================================================
                FLOATING BADGE
            ================================================== */}

            <div className="contact-badge absolute -bottom-6 -left-3 hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_20px_45px_rgba(0,0,0,.2)] sm:block lg:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#071B36]">
                  <span className="h-2 w-2 rounded-full bg-[#F4B942] shadow-[0_0_12px_rgba(244,185,66,.8)]" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Our Focus
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#071B36]">
                    Clear Communication
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
           LEFT ENTRANCE
        ====================================================== */

        .contact-left {
          animation:
            contactLeftReveal
            950ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes contactLeftReveal {
          from {
            opacity: 0;
            transform:
              translateX(-55px)
              translateY(20px)
              scale(.97);
          }

          to {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              scale(1);
          }
        }

        /* =====================================================
           EYEBROW / HEADING / DESCRIPTION
        ====================================================== */

        .contact-eyebrow {
          animation:
            contactFadeUp
            700ms
            100ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .contact-heading {
          animation:
            contactFadeUp
            800ms
            180ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .contact-description {
          animation:
            contactFadeUp
            800ms
            280ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           GRADIENT HEADING
        ====================================================== */

        .contact-gradient-text {
          background:
            linear-gradient(
              110deg,
              #d69b14,
              #f4b942,
              #ffd166,
              #f4b942,
              #d69b14
            );

          background-size: 250% auto;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          animation:
            contactGradient
            5s
            ease-in-out
            infinite;
        }

        @keyframes contactGradient {
          0%,
          100% {
            background-position: 0% center;
          }

          50% {
            background-position: 100% center;
          }
        }

        /* =====================================================
           SUPPORTING ITEMS
        ====================================================== */

        .contact-support {
          opacity: 0;

          animation:
            contactSupportReveal
            700ms
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .contact-support-one {
          animation-delay: 430ms;
        }

        .contact-support-two {
          animation-delay: 520ms;
        }

        .contact-support-three {
          animation-delay: 610ms;
        }

        @keyframes contactSupportReveal {
          from {
            opacity: 0;
            transform: translateX(-25px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-support-icon {
          transition:
            transform 350ms ease,
            background 350ms ease,
            border-color 350ms ease;
        }

        .contact-support:hover .contact-support-icon {
          transform:
            translateZ(10px)
            rotateY(-12deg)
            scale(1.08);

          border-color: rgba(244,185,66,.25);

          background: rgba(244,185,66,.14);
        }

        /* =====================================================
           RIGHT VISUAL
        ====================================================== */

        .contact-visual {
          perspective: 1400px;

          animation:
            contactVisualReveal
            1100ms
            250ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes contactVisualReveal {
          from {
            opacity: 0;
            transform:
              translateX(55px)
              translateY(25px)
              rotateY(-8deg)
              scale(.94);
          }

          to {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              rotateY(0)
              scale(1);
          }
        }

        /* =====================================================
           MAIN CARD
           No continuous transform animation here.
           This keeps hover transform reliable.
        ====================================================== */

        .contact-main-card {
          transform-style: preserve-3d;

          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            box-shadow 500ms ease,
            border-color 400ms ease;
        }

        .contact-main-card:hover {
          transform:
            translateY(-10px)
            rotateX(1deg)
            rotateY(-1deg);

          border-color: rgba(244,185,66,.24);

          box-shadow:
            0 45px 100px rgba(0,0,0,.38);
        }

        /* =====================================================
           CARD HEADER ICON
           No competing float animation.
        ====================================================== */

        .contact-message-icon {
          transform-style: preserve-3d;

          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        .contact-main-card:hover .contact-message-icon {
          transform:
            translateZ(22px)
            rotateY(-12deg)
            rotateZ(4deg)
            scale(1.05);

          box-shadow:
            0 18px 38px rgba(244,185,66,.28);
        }

        /* =====================================================
           CARD ORBIT
        ====================================================== */

        .contact-card-orbit {
          animation:
            contactOrbit
            18s
            linear
            infinite;
        }

        @keyframes contactOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =====================================================
           CONTACT STEPS
           Entrance animation only changes opacity so hover
           transform remains fully functional.
        ====================================================== */

        .contact-step {
          opacity: 0;

          animation:
            contactStepReveal
            750ms
            cubic-bezier(.22,1,.36,1)
            forwards;

          transform-style: preserve-3d;

          transition:
            transform 400ms cubic-bezier(.22,1,.36,1),
            border-color 400ms ease,
            background 400ms ease,
            box-shadow 400ms ease;
        }

        .contact-step-1 {
          animation-delay: 450ms;
        }

        .contact-step-2 {
          animation-delay: 560ms;
        }

        .contact-step-3 {
          animation-delay: 670ms;
        }

        @keyframes contactStepReveal {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .contact-step:hover {
          transform:
            translateX(4px)
            translateZ(15px);
        }

        /* =====================================================
           STEP NUMBER
        ====================================================== */

        .contact-step-number {
          transform-style: preserve-3d;

          transition:
            transform 400ms ease,
            background 400ms ease,
            box-shadow 400ms ease;
        }

        .contact-step:hover .contact-step-number {
          transform:
            translateZ(15px)
            rotateY(-10deg)
            scale(1.08);

          background: rgba(244,185,66,.14);

          box-shadow:
            0 10px 25px rgba(244,185,66,.12);
        }

        /* =====================================================
           STEP ARROW
        ====================================================== */

        .contact-step-arrow {
          transform-style: preserve-3d;

          transition:
            transform 350ms ease,
            border-color 350ms ease,
            background 350ms ease,
            color 350ms ease;
        }

        .contact-step:hover .contact-step-arrow {
          transform:
            translateX(4px)
            translateZ(10px);
        }

        /* =====================================================
           FLOATING BADGE
        ====================================================== */

        .contact-badge {
          transform-style: preserve-3d;

          animation:
            contactBadgeFloat
            5s
            ease-in-out
            infinite;
        }

        @keyframes contactBadgeFloat {
          0%,
          100% {
            transform:
              translateY(0)
              rotateZ(0deg);
          }

          50% {
            transform:
              translateY(-8px)
              rotateZ(-1deg);
          }
        }

        /* =====================================================
           BADGE DOT
        ====================================================== */

        .contact-badge span {
          animation:
            contactBadgePulse
            2s
            ease-in-out
            infinite;
        }

        @keyframes contactBadgePulse {
          0%,
          100% {
            opacity: .5;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        /* =====================================================
           OUTER RINGS
        ====================================================== */

        .contact-visual-ring-one {
          animation:
            contactRingOne
            16s
            linear
            infinite;
        }

        .contact-visual-ring-two {
          animation:
            contactRingTwo
            22s
            linear
            infinite;
        }

        @keyframes contactRingOne {
          from {
            transform:
              rotate(0deg)
              scale(1);
          }

          50% {
            transform:
              rotate(180deg)
              scale(1.015);
          }

          to {
            transform:
              rotate(360deg)
              scale(1);
          }
        }

        @keyframes contactRingTwo {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        /* =====================================================
           BACKGROUND ORBITS
        ====================================================== */

        .contact-orbit-one {
          animation:
            contactOrbitOne
            28s
            linear
            infinite;
        }

        .contact-orbit-two {
          animation:
            contactOrbitTwo
            34s
            linear
            infinite;
        }

        .contact-orbit-three {
          animation:
            contactOrbitThree
            25s
            linear
            infinite;
        }

        @keyframes contactOrbitOne {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes contactOrbitTwo {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes contactOrbitThree {
          from {
            transform:
              rotate(0deg)
              scale(1);
          }

          50% {
            transform:
              rotate(180deg)
              scale(1.05);
          }

          to {
            transform:
              rotate(360deg)
              scale(1);
          }
        }

        /* =====================================================
           BACKGROUND GLOW
        ====================================================== */

        .contact-glow-left {
          animation:
            contactGlowLeft
            10s
            ease-in-out
            infinite;
        }

        .contact-glow-right {
          animation:
            contactGlowRight
            12s
            ease-in-out
            infinite;
        }

        @keyframes contactGlowLeft {
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

        @keyframes contactGlowRight {
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
           PARTICLES
        ====================================================== */

        .contact-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #F4B942;
          box-shadow: 0 0 15px rgba(244,185,66,.7);

          animation:
            contactParticle
            5s
            ease-in-out
            infinite;
        }

        .contact-particle-one {
          left: 14%;
          top: 28%;
        }

        .contact-particle-two {
          left: 42%;
          top: 15%;
          animation-delay: -1s;
        }

        .contact-particle-three {
          right: 16%;
          top: 25%;
          animation-delay: -2s;
        }

        .contact-particle-four {
          right: 28%;
          bottom: 18%;
          animation-delay: -3s;
        }

        .contact-particle-five {
          left: 30%;
          bottom: 14%;
          animation-delay: -4s;
        }

        @keyframes contactParticle {
          0%,
          100% {
            opacity: .2;
            transform:
              translateY(0)
              scale(.7);
          }

          50% {
            opacity: 1;
            transform:
              translateY(-15px)
              scale(1.35);
          }
        }

        /* =====================================================
           LIVE DOT
        ====================================================== */

        .contact-live-dot {
          animation:
            contactLivePulse
            2s
            ease-in-out
            infinite;
        }

        @keyframes contactLivePulse {
          0%,
          100% {
            opacity: .55;
            transform: scale(.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        /* =====================================================
           BOTTOM ACCENTS
        ====================================================== */

        .contact-left-line > div,
        .contact-accent-line {
          animation:
            contactAccent
            3.5s
            ease-in-out
            infinite;
        }

        @keyframes contactAccent {
          0% {
            transform: translateX(-130%);
          }

          50% {
            transform: translateX(250%);
          }

          100% {
            transform: translateX(420%);
          }
        }

        /* =====================================================
           GRID
        ====================================================== */

        .contact-grid {
          background-image:
            linear-gradient(
              rgba(255,255,255,.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.7) 1px,
              transparent 1px
            );

          background-size: 45px 45px;
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {
          .contact-hero {
            min-height: auto;
          }

          .contact-visual {
            margin-top: 10px;
          }

          .contact-visual-ring-one,
          .contact-visual-ring-two {
            display: none;
          }

          .contact-particle {
            display: none;
          }

          .contact-orbit-three {
            display: none;
          }

          .contact-main-card {
            border-radius: 1.5rem;
          }

          .contact-main-card:hover {
            transform: translateY(-5px);
          }

          .contact-step:hover {
            transform: translateX(2px);
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .contact-left,
          .contact-eyebrow,
          .contact-heading,
          .contact-description,
          .contact-support,
          .contact-visual,
          .contact-main-card,
          .contact-message-icon,
          .contact-card-orbit,
          .contact-step,
          .contact-badge,
          .contact-visual-ring-one,
          .contact-visual-ring-two,
          .contact-orbit-one,
          .contact-orbit-two,
          .contact-orbit-three,
          .contact-glow-left,
          .contact-glow-right,
          .contact-particle,
          .contact-live-dot,
          .contact-gradient-text,
          .contact-left-line > div,
          .contact-accent-line {
            animation: none !important;
          }

          .contact-main-card,
          .contact-message-icon,
          .contact-step,
          .contact-step-number,
          .contact-step-arrow,
          .contact-support-icon {
            transition: none !important;
          }

          .contact-main-card:hover,
          .contact-step:hover,
          .contact-main-card:hover .contact-message-icon,
          .contact-step:hover .contact-step-number,
          .contact-step:hover .contact-step-arrow,
          .contact-support:hover .contact-support-icon {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

const whatsappNumber = "923166073020";

const whatsappMessage = encodeURIComponent(
  "Assalam-o-Alaikum, I would like to know more about Future Skills Academy.",
);

export default function AboutHero() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-[#071B36] pt-36 sm:pt-32 lg:pt-36">
      {/* BACKGROUND ATMOSPHERE */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="about-glow-one absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.06] blur-3xl" />

        <div className="about-glow-two absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[#F4B942]/[0.07] blur-3xl" />

        <div className="about-glow-three absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-400/[0.04] blur-3xl" />

        <div className="about-orbit about-orbit-one absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-[#F4B942]/10" />

        <div className="about-orbit about-orbit-two absolute -right-12 -top-12 h-[290px] w-[290px] rounded-full border border-[#F4B942]/10" />

        <div className="about-orbit about-orbit-three absolute -bottom-44 -left-44 h-[470px] w-[470px] rounded-full border border-white/[0.06]" />

        <div className="about-small-orbit absolute left-[8%] top-[42%] h-32 w-32 rounded-full border border-white/[0.05]" />

        <span className="about-particle about-particle-one" />
        <span className="about-particle about-particle-two" />
        <span className="about-particle about-particle-three" />
        <span className="about-particle about-particle-four" />
        <span className="about-particle about-particle-five" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="about-left max-w-3xl">
            <div className="about-eyebrow inline-flex items-center gap-2 rounded-full border border-[#F4B942]/30 bg-[#F4B942]/[0.08] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4B942] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F4B942]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#F4B942] sm:text-xs">
                About Future Skills Academy
              </span>
            </div>

            <h1 className="about-heading mt-7 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.2rem]">
              Building Strong
              <br />
              Foundations for a
              <br />
              <span className="about-gradient-text">Better Future.</span>
            </h1>

            <p className="about-description mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Future Skills Academy is committed to helping students understand
              what they learn, develop practical skills, and grow with
              confidence throughout their educational journey.
            </p>

            {/* ACTION BUTTONS */}
            <div className="about-actions mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meet Our Educator on WhatsApp"
                className="about-primary-button group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4B942] px-7 py-3.5 text-sm font-bold text-[#071B36] shadow-[0_15px_35px_rgba(244,185,66,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166] hover:shadow-[0_20px_45px_rgba(244,185,66,0.28)]"
              >
                <span>Meet Our Educator</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#071B36]/10 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 11.5A8 8 0 0 1 8.2 18.8L4 20L5.2 15.8A8 8 0 1 1 20 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8.5 9.5C9 11.5 10.5 13 12.5 13.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="/contact"
                className="about-secondary-button group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B942]/40 hover:bg-white/[0.08] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
              >
                <span>Contact Us</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* SUPPORTING POINTS */}
            <div className="about-points mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-400">
              <span className="group flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F4B942]/20 bg-[#F4B942]/10 text-[10px] text-[#F4B942] transition-transform duration-300 group-hover:scale-110">
                  ✓
                </span>
                Clear Concepts
              </span>

              <span className="group flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F4B942]/20 bg-[#F4B942]/10 text-[10px] text-[#F4B942] transition-transform duration-300 group-hover:scale-110">
                  ✓
                </span>
                Practical Skills
              </span>

              <span className="group flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F4B942]/20 bg-[#F4B942]/10 text-[10px] text-[#F4B942] transition-transform duration-300 group-hover:scale-110">
                  ✓
                </span>
                Student Growth
              </span>
            </div>
          </div>

          {/* RIGHT 3D CARD */}
          <div className="about-visual relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="about-card-orbit pointer-events-none absolute -inset-7 rounded-[2.5rem] border border-[#F4B942]/10" />

            <div className="about-card-orbit-reverse pointer-events-none absolute -inset-12 rounded-[3rem] border border-white/[0.04]" />

            {/* MAIN CARD */}
            <div className="about-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-white/[0.025] p-7 shadow-[0_35px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#F4B942]/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-400/[0.06] blur-3xl" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="relative z-10">
                {/* ICON */}
                <div className="about-icon-wrap relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F4B942]/30 bg-[#F4B942] text-[#071B36] shadow-[0_18px_35px_rgba(244,185,66,0.2)]">
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

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#F4B942]">
                  Our Purpose
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Learn. Build. Create.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Helping students turn knowledge into understanding, skills,
                  confidence, and meaningful opportunities.
                </p>

                {/* PROGRESS */}
                <div className="mt-9 space-y-5">
                  <div className="progress-item">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Learn</span>
                      <span className="text-[#F4B942]">01</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                      <div className="progress-bar progress-one h-full rounded-full bg-gradient-to-r from-[#F4B942] to-[#FFD166]" />
                    </div>
                  </div>

                  <div className="progress-item">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Build Skills</span>
                      <span className="text-[#F4B942]">02</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                      <div className="progress-bar progress-two h-full rounded-full bg-gradient-to-r from-[#F4B942] to-[#FFD166]" />
                    </div>
                  </div>

                  <div className="progress-item">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Create Your Future</span>
                      <span className="text-[#F4B942]">03</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                      <div className="progress-bar progress-three h-full rounded-full bg-gradient-to-r from-[#F4B942] to-[#FFD166]" />
                    </div>
                  </div>
                </div>

                {/* MINI CARDS */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="about-mini-card rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                    <p className="text-lg font-extrabold text-white">01</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                      Learn
                    </p>
                  </div>

                  <div className="about-mini-card rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                    <p className="text-lg font-extrabold text-white">02</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                      Build
                    </p>
                  </div>

                  <div className="about-mini-card rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                    <p className="text-lg font-extrabold text-white">03</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                      Create
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="about-badge absolute -bottom-6 -left-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_20px_45px_rgba(0,0,0,0.22)] sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4B942]/15 text-[#071B36]">
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
                    Our Focus
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#071B36]">
                    Student Success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F4B942]/30 to-transparent" />

      {/* ANIMATIONS */}
      <style>{`

        .about-left {
          animation:
            aboutContentReveal
            900ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .about-eyebrow {
          animation:
            aboutFadeUp
            700ms
            100ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .about-heading {
          animation:
            aboutFadeUp
            800ms
            180ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .about-description {
          animation:
            aboutFadeUp
            800ms
            300ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .about-actions {
          animation:
            aboutFadeUp
            800ms
            420ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .about-points {
          animation:
            aboutFadeUp
            800ms
            540ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .about-visual {
          animation:
            aboutVisualReveal
            1100ms
            200ms
            cubic-bezier(.22,1,.36,1)
            both;
        }

        /*
          Fixed:
          Badge previously had two animations controlling transform
          at the same time. Now one animation handles both reveal
          and floating movement.
        */
        .about-badge {
          animation:
            aboutBadgeMotion
            4.8s
            800ms
            ease-in-out
            both
            infinite;
        }

        @keyframes aboutFadeUp {

          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @keyframes aboutContentReveal {

          from {
            opacity: 0;
            transform: translateX(-30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }

        @keyframes aboutVisualReveal {

          from {
            opacity: 0;
            transform:
              translateX(40px)
              translateY(20px)
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

        /*
          Fixed badge animation:
          Reveal + floating are now handled in one keyframe.
        */
        @keyframes aboutBadgeMotion {

          0% {
            opacity: 0;
            transform: translateY(25px) scale(.8);
          }

          18% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          50% {
            opacity: 1;
            transform: translateY(-7px) scale(1);
          }

          82% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          100% {
            opacity: 1;
            transform: translateY(-7px) scale(1);
          }

        }

        .about-gradient-text {
          background:
            linear-gradient(
              110deg,
              #F4B942 0%,
              #FFD166 35%,
              #F4B942 65%,
              #FFD166 100%
            );

          background-size: 250% auto;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          animation:
            aboutGradientMove
            5s
            ease-in-out
            infinite;
        }

        @keyframes aboutGradientMove {

          0%,
          100% {
            background-position: 0% center;
          }

          50% {
            background-position: 100% center;
          }

        }

        /*
          Fixed:
          Removed continuous transform animation from .about-card
          because hover transform was conflicting with it.
          Hover now controls the card transform cleanly.
        */
        .about-card {
          transform-style: preserve-3d;

          transition:
            transform 500ms ease,
            box-shadow 500ms ease;
        }

        .about-card:hover {
          transform:
            translateY(-7px)
            rotateX(2deg)
            rotateY(-2deg);

          box-shadow:
            0 45px 100px rgba(0,0,0,0.34);
        }

        /*
          Fixed:
          Removed continuous transform animation from the icon.
          Hover transform now works without animation conflict.
        */
        .about-icon-wrap {
          transform-style: preserve-3d;

          transition:
            transform 400ms ease;
        }

        .about-icon-wrap:hover {
          transform:
            translateY(-5px)
            rotateY(-12deg)
            rotateX(8deg);
        }

        .about-card-orbit {
          animation:
            aboutOrbit
            20s
            linear
            infinite;
        }

        .about-card-orbit-reverse {
          animation:
            aboutOrbitReverse
            27s
            linear
            infinite;
        }

        @keyframes aboutOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        @keyframes aboutOrbitReverse {

          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }

        }

        .progress-bar {
          transform-origin: left center;

          animation:
            progressReveal
            1.6s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .progress-one {
          animation-delay: 900ms;
        }

        .progress-two {
          animation-delay: 1050ms;
        }

        .progress-three {
          animation-delay: 1200ms;
        }

        @keyframes progressReveal {

          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }

        }

        .about-mini-card {
          transform-style: preserve-3d;

          transition:
            transform 350ms ease,
            background 350ms ease,
            border-color 350ms ease;
        }

        .about-mini-card:hover {
          transform:
            translateY(-5px)
            translateZ(8px);

          background:
            rgba(244,185,66,0.08);

          border-color:
            rgba(244,185,66,0.25);
        }

        .about-particle {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 999px;

          background: #F4B942;

          box-shadow:
            0 0 12px rgba(244,185,66,.75);

          animation:
            aboutParticleFloat
            5s
            ease-in-out
            infinite;
        }

        .about-particle-one {
          left: 13%;
          top: 25%;
        }

        .about-particle-two {
          left: 42%;
          top: 18%;
          animation-delay: -1.5s;
        }

        .about-particle-three {
          right: 18%;
          top: 35%;
          animation-delay: -2.5s;
        }

        .about-particle-four {
          right: 8%;
          bottom: 22%;
          animation-delay: -3.5s;
        }

        .about-particle-five {
          left: 32%;
          bottom: 15%;
          animation-delay: -1s;
        }

        @keyframes aboutParticleFloat {

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
              translateY(-14px)
              scale(1.25);
          }

        }

        .about-glow-one {
          animation:
            aboutGlowOne
            9s
            ease-in-out
            infinite;
        }

        .about-glow-two {
          animation:
            aboutGlowTwo
            11s
            ease-in-out
            infinite;
        }

        @keyframes aboutGlowOne {

          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(20px,-15px,0)
              scale(1.08);
          }

        }

        @keyframes aboutGlowTwo {

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

        .about-orbit-one {
          animation:
            aboutBackgroundOrbit
            24s
            linear
            infinite;
        }

        .about-orbit-two {
          animation:
            aboutBackgroundOrbitReverse
            18s
            linear
            infinite;
        }

        .about-orbit-three {
          animation:
            aboutBackgroundOrbit
            30s
            linear
            infinite;
        }

        @keyframes aboutBackgroundOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        @keyframes aboutBackgroundOrbitReverse {

          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }

        }

        @media (max-width: 767px) {

          .about-orbit-one,
          .about-orbit-two {
            right: -180px;
          }

          .about-orbit-three {
            left: -250px;
          }

          .about-particle-two,
          .about-particle-four {
            display: none;
          }

          .about-card-orbit {
            inset: -15px;
          }

          .about-card-orbit-reverse {
            inset: -25px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .about-left,
          .about-eyebrow,
          .about-heading,
          .about-description,
          .about-actions,
          .about-points,
          .about-visual,
          .about-badge,
          .about-gradient-text,
          .about-card-orbit,
          .about-card-orbit-reverse,
          .about-particle,
          .about-glow-one,
          .about-glow-two,
          .about-orbit-one,
          .about-orbit-two,
          .about-orbit-three,
          .progress-bar {
            animation: none !important;
          }

        }

      `}</style>
    </section>
  );
}

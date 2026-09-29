import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact", href: "/contact" },
];

const learningPoints = [
  "Concept-Based Learning",
  "Regular Practice",
  "Student Progress",
  "Practical Skills",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappMessage = encodeURIComponent(
    "Assalam-o-Alaikum, I would like to know more about Future Skills Academy.",
  );

  const whatsappLink = `https://wa.me/923166073020?text=${whatsappMessage}`;

  return (
    <footer className="relative overflow-hidden bg-[#071B36] text-white">
      {/* =========================================================
          BACKGROUND 3D ATMOSPHERE
      ========================================================== */}

      <div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#F4B942]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F4B942]/[0.04] blur-3xl"
        aria-hidden="true"
      />

      {/* Floating Particles */}

      <span className="footer-particle footer-particle-1" aria-hidden="true" />

      <span className="footer-particle footer-particle-2" aria-hidden="true" />

      <span className="footer-particle footer-particle-3" aria-hidden="true" />

      <span className="footer-particle footer-particle-4" aria-hidden="true" />

      {/* =========================================================
          DECORATIVE 3D RINGS
      ========================================================== */}

      <div
        className="footer-orbit footer-orbit-1 pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full border border-[#F4B942]/10"
        aria-hidden="true"
      />

      <div
        className="footer-orbit footer-orbit-2 pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full border border-white/[0.06]"
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.45fr_0.85fr_1fr] lg:gap-14">
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div className="footer-brand">
            <Link
              href="/"
              className="group inline-flex items-center gap-4"
              aria-label="Future Skills Academy - Home"
            >
              {/* 3D LOGO CONTAINER */}

              <div className="footer-logo-wrap relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
                <div
                  className="absolute inset-1 rounded-xl border border-[#F4B942]/10"
                  aria-hidden="true"
                />

                <svg
                  viewBox="0 0 64 64"
                  className="relative h-12 w-12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Graduation Cap */}

                  <path d="M32 8L7 20L32 32L57 20L32 8Z" fill="#F4B942" />

                  {/* Book */}

                  <path
                    d="M8 42C16 39 24 40 32 46C40 40 48 39 56 42V55C48 52 40 53 32 58C24 53 16 52 8 55V42Z"
                    fill="#FFFFFF"
                  />

                  {/* Book Center */}

                  <path
                    d="M32 46V58"
                    stroke="#F4B942"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Growth Arrow */}

                  <path
                    d="M35 37L46 27"
                    stroke="#F4B942"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <path
                    d="M42 27H46V31"
                    stroke="#F4B942"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Star */}

                  <path
                    d="M49 10L50.5 13.5L54 15L50.5 16.5L49 20L47.5 16.5L44 15L47.5 13.5L49 10Z"
                    fill="#F4B942"
                  />
                </svg>
              </div>

              {/* BRAND NAME */}

              <div className="leading-none">
                <div className="text-xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-[#F4B942]">
                  Future
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F4B942]">
                    Skills
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Academy
                  </span>
                </div>
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-300 sm:text-[15px]">
              Future Skills Academy is committed to helping students build
              strong concepts, practical skills, confidence, and a clear path
              toward their future.
            </p>

            {/* TAGLINE */}

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#F4B942]/15 bg-white/[0.03] px-4 py-2">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F4B942] shadow-[0_0_10px_rgba(244,185,66,0.8)]"
                aria-hidden="true"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F4B942] sm:text-xs">
                Learn • Build • Create
              </p>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#F4B942]" aria-hidden="true" />

              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B942]">
                Navigation
              </h3>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                  >
                    <span
                      className="footer-link-dot flex h-2 w-2 shrink-0 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#F4B942] group-hover:shadow-[0_0_10px_rgba(244,185,66,0.7)]"
                      aria-hidden="true"
                    />

                    <span>{link.name}</span>

                    <svg
                      className="ml-auto h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10H15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M11 5L16 10L11 15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              OUR APPROACH
          ====================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#F4B942]" aria-hidden="true" />

              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B942]">
                Our Approach
              </h3>
            </div>

            <ul className="space-y-4">
              {learningPoints.map((point, index) => (
                <li
                  key={point}
                  className="group flex items-center gap-3 text-sm text-slate-300"
                >
                  {/* 3D CHECK */}

                  <span className="footer-check relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/15 bg-[#F4B942]/10 text-[#F4B942] shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                    <span
                      className="absolute inset-1 rounded-lg border border-[#F4B942]/10"
                      aria-hidden="true"
                    />

                    <svg
                      className="relative h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10L8 14L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="transition-colors duration-300 group-hover:text-white">
                    {point}
                  </span>

                  <span className="ml-auto text-[9px] font-bold text-slate-600">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>

            {/* =================================================
                CONTACT CTA
            ================================================== */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Future Skills Academy on WhatsApp"
              className="footer-cta group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F4B942] px-5 py-3 text-sm font-bold text-[#071B36] shadow-[0_12px_30px_rgba(244,185,66,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166] hover:shadow-[0_18px_40px_rgba(244,185,66,0.25)] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:ring-offset-2 focus:ring-offset-[#071B36]"
            >
              <span>Contact Our Academy</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#071B36]/10">
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10H15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M11 5L16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <p className="mt-3 text-[10px] font-medium text-slate-500">
              Chat with us directly on WhatsApp
            </p>
          </div>
        </div>

        {/* =========================================================
            3D MISSION BANNER
        ========================================================== */}

        <div className="footer-mission relative mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
          {/* Glow */}

          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F4B942]/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-400/[0.04] blur-3xl"
            aria-hidden="true"
          />

          {/* Decorative Ring */}

          <div
            className="footer-mission-ring pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full border border-[#F4B942]/15"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-5 -top-9 h-28 w-28 rounded-full border border-white/[0.06]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-7 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between md:py-9">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_10px_rgba(244,185,66,0.8)]"
                  aria-hidden="true"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4B942] sm:text-xs">
                  Our Mission
                </p>
              </div>

              <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                Every Student Deserves a Chance to Succeed.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                We focus on understanding, growth, confidence, and practical
                skills — helping students move forward one step at a time.
              </p>
            </div>

            {/* 3D ARROW OBJECT */}

            <div className="hidden shrink-0 md:block">
              <div className="footer-mission-icon relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F4B942]/25 bg-[#F4B942]/10 text-[#F4B942] shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                <div
                  className="absolute inset-2 rounded-xl border border-[#F4B942]/10"
                  aria-hidden="true"
                />

                <svg
                  className="relative h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================== */}

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          {/* Copyright */}

          <p className="text-xs leading-5 text-slate-400">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-300">
              Future Skills Academy
            </span>
            . All rights reserved.
          </p>

          {/* ONLY 4 LINKS */}

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
            <Link href="/" className="footer-bottom-link">
              Home
            </Link>

            <span
              className="h-1 w-1 rounded-full bg-slate-600"
              aria-hidden="true"
            />

            <Link href="/about" className="footer-bottom-link">
              About
            </Link>

            <span
              className="h-1 w-1 rounded-full bg-slate-600"
              aria-hidden="true"
            />

            <Link href="/faculty" className="footer-bottom-link">
              Faculty
            </Link>

            <span
              className="h-1 w-1 rounded-full bg-slate-600"
              aria-hidden="true"
            />

            <Link href="/contact" className="footer-bottom-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style>{`
        /* =========================================================
           LOGO
        ========================================================== */

        .footer-logo-wrap {
          transform-style: preserve-3d;
          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        .footer-logo-wrap:hover {
          transform:
            translateY(-5px)
            rotateY(-8deg)
            rotateX(5deg);

          box-shadow:
            0 22px 45px rgba(0,0,0,0.25);
        }

        /* =========================================================
           FOOTER BRAND
        ========================================================== */

        .footer-brand {
          animation:
            footerBrandReveal
            800ms
            ease-out
            both;
        }

        @keyframes footerBrandReveal {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================================================
           LINKS
        ========================================================== */

        .footer-link {
          transform-style: preserve-3d;
        }

        .footer-link:hover {
          box-shadow:
            0 8px 20px rgba(0,0,0,0.08);
        }

        /* =========================================================
           CHECK ICON
        ========================================================== */

        .footer-check {
          transition:
            transform 400ms ease,
            box-shadow 400ms ease;

          transform-style: preserve-3d;
        }

        li:hover .footer-check {
          transform:
            translateZ(10px)
            rotateY(-8deg)
            scale(1.08);

          box-shadow:
            0 10px 25px rgba(244,185,66,0.12);
        }

        /* =========================================================
           CTA
        ========================================================== */

        .footer-cta {
          transform-style: preserve-3d;
        }

        .footer-cta:hover {
          transform:
            translateY(-4px)
            translateZ(8px);
        }

        /* =========================================================
           MISSION BANNER
        ========================================================== */

        .footer-mission {
          transform-style: preserve-3d;
          transition:
            transform 500ms ease,
            border-color 400ms ease;
        }

        .footer-mission:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(244,185,66,0.18);
        }

        .footer-mission-ring {
          animation:
            footerMissionRing
            18s
            linear
            infinite;
        }

        @keyframes footerMissionRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =========================================================
           MISSION ICON

           No continuous transform animation here.
           This keeps hover 3D transform smooth and conflict-free.
        ========================================================== */

        .footer-mission-icon {
          transform-style: preserve-3d;
          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        .footer-mission-icon:hover {
          transform:
            rotateY(-12deg)
            rotateX(8deg)
            translateY(-3px);

          box-shadow:
            0 20px 40px rgba(244,185,66,0.12);
        }

        /* =========================================================
           BOTTOM LINKS
        ========================================================== */

        .footer-bottom-link {
          position: relative;
          font-size: 0.75rem;
          font-weight: 500;
          color: rgb(148 163 184);

          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .footer-bottom-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .footer-bottom-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 1px;

          transform:
            scaleX(0);

          transform-origin:
            center;

          background:
            #F4B942;

          transition:
            transform 300ms ease;
        }

        .footer-bottom-link:hover::after {
          transform:
            scaleX(1);
        }

        /* =========================================================
           FLOATING PARTICLES
        ========================================================== */

        .footer-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #F4B942;

          box-shadow:
            0 0 12px rgba(244,185,66,0.7);

          animation:
            footerParticleFloat
            5s
            ease-in-out
            infinite;
        }

        .footer-particle-1 {
          left: 8%;
          top: 30%;
        }

        .footer-particle-2 {
          left: 45%;
          top: 18%;
          animation-delay: -1.5s;
        }

        .footer-particle-3 {
          right: 15%;
          top: 45%;
          animation-delay: -3s;
        }

        .footer-particle-4 {
          right: 30%;
          bottom: 15%;
          animation-delay: -2s;
        }

        @keyframes footerParticleFloat {
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
              translateY(-12px)
              scale(1.2);
          }
        }

        /* =========================================================
           ORBIT ANIMATION
        ========================================================== */

        .footer-orbit-1 {
          animation:
            footerOrbit1
            25s
            linear
            infinite;
        }

        .footer-orbit-2 {
          animation:
            footerOrbit2
            30s
            linear
            infinite;
        }

        @keyframes footerOrbit1 {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes footerOrbit2 {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        /* =========================================================
           MOBILE
        ========================================================== */

        @media (max-width: 767px) {
          .footer-particle-2,
          .footer-particle-3 {
            display: none;
          }

          .footer-orbit-1 {
            left: -150px;
          }

          .footer-orbit-2 {
            right: -160px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================== */

        @media (prefers-reduced-motion: reduce) {
          .footer-brand,
          .footer-mission-ring,
          .footer-particle,
          .footer-orbit-1,
          .footer-orbit-2 {
            animation: none !important;
          }

          .footer-logo-wrap,
          .footer-link,
          .footer-check,
          .footer-cta,
          .footer-mission,
          .footer-mission-icon,
          .footer-bottom-link {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

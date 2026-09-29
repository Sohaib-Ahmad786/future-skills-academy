import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-[-180px] top-20 h-96 w-96 rounded-full border border-[#071B36]/5" />

      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full border border-[#F4B942]/10" />

      <div className="pointer-events-none absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-[#F4B942]/70 animate-pulse" />

      <div className="pointer-events-none absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#071B36]/30 animate-pulse" />

      <div className="pointer-events-none absolute bottom-[20%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#F4B942]/70 animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= MAIN 3D CARD ================= */}

        <div className="cta-main-card relative overflow-hidden rounded-[2rem] border border-[#18375f] bg-[#071B36] shadow-[0_30px_90px_rgba(7,27,54,0.22)]">
          {/* ================= AMBIENT GLOW ================= */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4B942]/[0.06] blur-3xl" />

          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#F4B942]/[0.04] blur-2xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#2c5b9b]/20 blur-3xl" />

          {/* ================= DECORATIVE ORBITS ================= */}

          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#F4B942]/20" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-16 -left-8 h-40 w-40 rounded-full border border-[#F4B942]/10" />

          {/* ================= FLOATING PARTICLES ================= */}

          <span className="cta-particle cta-particle-1" />
          <span className="cta-particle cta-particle-2" />
          <span className="cta-particle cta-particle-3" />
          <span className="cta-particle cta-particle-4" />
          <span className="cta-particle cta-particle-5" />
          <span className="cta-particle cta-particle-6" />

          <div className="relative grid items-center gap-12 px-7 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:px-16 lg:py-20">
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <div className="relative z-20 text-center lg:text-left">
              {/* Label */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B942]/30 bg-[#F4B942]/[0.08] px-4 py-2 shadow-[0_0_25px_rgba(244,185,66,0.06)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_8px_rgba(244,185,66,0.8)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F4B942] sm:text-[11px]">
                  Start Your Learning Journey
                </span>
              </div>

              {/* Heading */}

              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Build Skills.
                <span className="block text-[#F4B942]">Build Your Future.</span>
              </h2>

              {/* Description */}

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0 lg:text-lg">
                At Future Skills Academy, students learn through clear concepts,
                practical skills, and meaningful experiences designed to build
                confidence for the future.
              </p>

              {/* ================= BUTTONS ================= */}

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                {/* Primary Button - WhatsApp */}

                <a
                  href="https://wa.me/923166073020"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Meet Our Educator on WhatsApp"
                  className="cta-primary-button group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F4B942] px-7 py-3.5 text-sm font-extrabold text-[#071B36] shadow-[0_12px_30px_rgba(244,185,66,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD166] hover:shadow-[0_18px_40px_rgba(244,185,66,0.30)] sm:w-auto"
                >
                  <span className="relative z-10">Meet Our Educator</span>

                  <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                  <span className="cta-button-shine" />
                </a>

                {/* Secondary Button */}

                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B942]/50 hover:bg-white/[0.08] sm:w-auto"
                >
                  <span>Contact Us</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* ================= SUPPORTING POINTS ================= */}

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_7px_rgba(244,185,66,0.8)]" />
                  Learn with clarity
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_7px_rgba(244,185,66,0.8)]" />
                  Build practical skills
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_7px_rgba(244,185,66,0.8)]" />
                  Grow with confidence
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT 3D VISUAL
            ====================================================== */}

            <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[420px]">
              <div className="cta-3d-stage relative h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] lg:h-[390px] lg:w-[390px]">
                {/* ================= OUTER ORBITS ================= */}

                <div className="cta-orbit cta-orbit-1" />

                <div className="cta-orbit cta-orbit-2" />

                <div className="cta-orbit cta-orbit-3" />

                {/* ================= ORBIT DOTS ================= */}

                <span className="cta-orbit-dot cta-orbit-dot-1" />
                <span className="cta-orbit-dot cta-orbit-dot-2" />
                <span className="cta-orbit-dot cta-orbit-dot-3" />

                {/* ================= CENTRAL 3D OBJECT ================= */}

                <div className="cta-core">
                  <div className="cta-core-glow" />

                  <div className="cta-core-inner">
                    {/* Graduation Cap */}

                    <div className="cta-cap">
                      <div className="cta-cap-top" />

                      <div className="cta-cap-base" />

                      <div className="cta-cap-tassel" />
                    </div>

                    {/* Main Text */}

                    <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F4B942] sm:text-[10px]">
                      Future Skills
                    </p>

                    <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">
                      Learn. Grow.
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-slate-400">
                      Succeed.
                    </p>

                    {/* Mini Progress */}

                    <div className="mt-5 flex items-center justify-center gap-2">
                      <span className="h-1.5 w-8 rounded-full bg-[#F4B942]" />

                      <span className="h-1.5 w-5 rounded-full bg-white/20" />

                      <span className="h-1.5 w-3 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* ================= FLOATING CARDS ================= */}

                <div className="cta-floating-card cta-card-top">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4B942]/15 text-[#F4B942]">
                    ✓
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500">
                      Focus
                    </p>

                    <p className="text-[10px] font-bold text-white">
                      Practical Skills
                    </p>
                  </div>
                </div>

                <div className="cta-floating-card cta-card-bottom">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4B942]/15 text-[#F4B942]">
                    ★
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500">
                      Growth
                    </p>

                    <p className="text-[10px] font-bold text-white">
                      Student Success
                    </p>
                  </div>
                </div>

                <div className="cta-mini-badge cta-mini-left">LEARN</div>

                <div className="cta-mini-badge cta-mini-right">GROW</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        /* =========================================================
           MAIN CARD
        ========================================================= */

        .cta-main-card {
          transform-style: preserve-3d;
        }

        /* =========================================================
           3D STAGE
        ========================================================= */

        .cta-3d-stage {
          perspective: 1200px;
          transform-style: preserve-3d;
          animation: ctaStageFloat 6s ease-in-out infinite;
        }

        @keyframes ctaStageFloat {
          0%,
          100% {
            transform:
              translateY(0px)
              rotateX(0deg)
              rotateZ(0deg);
          }

          50% {
            transform:
              translateY(-10px)
              rotateX(2deg)
              rotateZ(1deg);
          }
        }

        /* =========================================================
           ORBITS
        ========================================================= */

        .cta-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .cta-orbit-1 {
          width: 92%;
          height: 48%;

          border:
            1px solid
            rgba(244,185,66,0.28);

          transform:
            translate(-50%, -50%)
            rotateX(68deg);

          animation:
            ctaOrbitOne
            12s
            linear
            infinite;
        }

        .cta-orbit-2 {
          width: 78%;
          height: 78%;

          border:
            1px solid
            rgba(255,255,255,0.12);

          transform:
            translate(-50%, -50%)
            rotateY(65deg);

          animation:
            ctaOrbitTwo
            15s
            linear
            infinite reverse;
        }

        .cta-orbit-3 {
          width: 62%;
          height: 92%;

          border:
            1px solid
            rgba(244,185,66,0.12);

          transform:
            translate(-50%, -50%)
            rotateX(45deg)
            rotateY(45deg);

          animation:
            ctaOrbitThree
            18s
            linear
            infinite;
        }

        @keyframes ctaOrbitOne {
          from {
            transform:
              translate(-50%, -50%)
              rotateX(68deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotateX(68deg)
              rotateZ(360deg);
          }
        }

        @keyframes ctaOrbitTwo {
          from {
            transform:
              translate(-50%, -50%)
              rotateY(65deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotateY(65deg)
              rotateZ(360deg);
          }
        }

        @keyframes ctaOrbitThree {
          from {
            transform:
              translate(-50%, -50%)
              rotateX(45deg)
              rotateY(45deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotateX(45deg)
              rotateY(45deg)
              rotateZ(360deg);
          }
        }

        /* =========================================================
           ORBIT DOTS
        ========================================================= */

        .cta-orbit-dot {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #F4B942;

          box-shadow:
            0 0 8px rgba(244,185,66,0.8),
            0 0 22px rgba(244,185,66,0.3);

          z-index: 10;

          animation:
            ctaDotPulse
            3s
            ease-in-out
            infinite;
        }

        .cta-orbit-dot-1 {
          left: 13%;
          top: 30%;
        }

        .cta-orbit-dot-2 {
          right: 12%;
          top: 48%;

          animation-delay: -1s;
        }

        .cta-orbit-dot-3 {
          left: 28%;
          bottom: 15%;

          animation-delay: -2s;
        }

        @keyframes ctaDotPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        /* =========================================================
           CENTRAL CORE
        ========================================================= */

        .cta-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 190px;
          height: 190px;

          transform:
            translate(-50%, -50%)
            translateZ(40px);

          transform-style: preserve-3d;

          border-radius: 50%;

          animation:
            ctaCoreFloat
            5s
            ease-in-out
            infinite;

          z-index: 5;
        }

        .cta-core-glow {
          position: absolute;
          inset: -30px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(244,185,66,0.20),
              transparent 65%
            );

          filter: blur(12px);

          animation:
            ctaGlowPulse
            4s
            ease-in-out
            infinite;
        }

        .cta-core-inner {
          position: relative;

          display: flex;
          height: 100%;
          width: 100%;

          flex-direction: column;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          border:
            1px solid
            rgba(244,185,66,0.55);

          background:
            radial-gradient(
              circle at 35% 25%,
              rgba(44,91,155,0.75),
              rgba(7,27,54,0.98) 65%
            );

          box-shadow:
            0 25px 70px rgba(0,0,0,0.45),
            inset 0 0 35px rgba(244,185,66,0.08);

          transform-style: preserve-3d;
        }

        @keyframes ctaCoreFloat {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              translateZ(40px)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              translateZ(65px)
              scale(1.035);
          }
        }

        @keyframes ctaGlowPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.92);
          }

          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        /* =========================================================
           GRADUATION CAP
        ========================================================= */

        .cta-cap {
          position: relative;
          width: 64px;
          height: 42px;

          transform:
            translateZ(30px)
            rotateX(8deg);

          animation:
            ctaCapFloat
            4s
            ease-in-out
            infinite;
        }

        .cta-cap-top {
          position: absolute;

          left: 50%;
          top: 0;

          width: 58px;
          height: 28px;

          transform:
            translateX(-50%)
            rotate(45deg)
            scale(0.72);

          border-radius: 4px;

          background:
            linear-gradient(
              135deg,
              #FFD166,
              #F4B942
            );

          box-shadow:
            0 8px 20px rgba(244,185,66,0.25);
        }

        .cta-cap-base {
          position: absolute;

          left: 50%;
          bottom: 2px;

          width: 44px;
          height: 15px;

          transform:
            translateX(-50%);

          border-radius: 3px 3px 8px 8px;

          background:
            linear-gradient(
              180deg,
              #F4B942,
              #D89A20
            );
        }

        .cta-cap-tassel {
          position: absolute;

          right: 2px;
          top: 8px;

          width: 3px;
          height: 29px;

          border-radius: 10px;

          background: #F4B942;

          transform:
            rotate(-22deg);

          transform-origin:
            top center;
        }

        @keyframes ctaCapFloat {
          0%,
          100% {
            transform:
              translateZ(30px)
              translateY(0)
              rotateX(8deg);
          }

          50% {
            transform:
              translateZ(45px)
              translateY(-5px)
              rotateX(8deg);
          }
        }

        /* =========================================================
           FLOATING CARDS
        ========================================================= */

        .cta-floating-card {
          position: absolute;

          display: flex;
          align-items: center;
          gap: 9px;

          min-width: 145px;

          border:
            1px solid
            rgba(255,255,255,0.12);

          border-radius: 16px;

          background:
            rgba(10,35,68,0.85);

          padding:
            10px 12px;

          box-shadow:
            0 18px 35px rgba(0,0,0,0.28);

          backdrop-filter:
            blur(14px);

          z-index: 20;

          transform-style: preserve-3d;
        }

        .cta-card-top {
          right: 0;
          top: 16%;

          animation:
            ctaCardTop
            5s
            ease-in-out
            infinite;
        }

        .cta-card-bottom {
          left: -2%;
          bottom: 14%;

          animation:
            ctaCardBottom
            5.5s
            ease-in-out
            infinite;
        }

        @keyframes ctaCardTop {
          0%,
          100% {
            transform:
              translate3d(0,0,30px)
              rotateY(-8deg);
          }

          50% {
            transform:
              translate3d(8px,-12px,45px)
              rotateY(-3deg);
          }
        }

        @keyframes ctaCardBottom {
          0%,
          100% {
            transform:
              translate3d(0,0,25px)
              rotateY(8deg);
          }

          50% {
            transform:
              translate3d(-7px,10px,40px)
              rotateY(3deg);
          }
        }

        /* =========================================================
           MINI BADGES
        ========================================================= */

        .cta-mini-badge {
          position: absolute;

          display: flex;
          align-items: center;
          justify-content: center;

          height: 43px;
          min-width: 64px;

          border-radius: 14px;

          border:
            1px solid
            rgba(244,185,66,0.45);

          background:
            rgba(244,185,66,0.10);

          color:
            #F4B942;

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.12em;

          backdrop-filter:
            blur(10px);

          z-index: 15;
        }

        .cta-mini-left {
          left: 7%;
          top: 13%;

          animation:
            ctaMiniLeft
            4.5s
            ease-in-out
            infinite;
        }

        .cta-mini-right {
          right: 8%;
          bottom: 9%;

          animation:
            ctaMiniRight
            4s
            ease-in-out
            infinite;
        }

        @keyframes ctaMiniLeft {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(-8deg);
          }

          50% {
            transform:
              translateY(-9px)
              rotate(-2deg);
          }
        }

        @keyframes ctaMiniRight {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(8deg);
          }

          50% {
            transform:
              translateY(9px)
              rotate(2deg);
          }
        }

        /* =========================================================
           PARTICLES
        ========================================================= */

        .cta-particle {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background:
            #F4B942;

          box-shadow:
            0 0 12px
            rgba(244,185,66,0.75);

          animation:
            ctaParticleFloat
            6s
            ease-in-out
            infinite;
        }

        .cta-particle-1 {
          left: 10%;
          top: 20%;
        }

        .cta-particle-2 {
          left: 43%;
          top: 12%;

          animation-delay: -1s;
        }

        .cta-particle-3 {
          right: 34%;
          top: 25%;

          animation-delay: -2s;
        }

        .cta-particle-4 {
          right: 10%;
          bottom: 23%;

          animation-delay: -3s;
        }

        .cta-particle-5 {
          left: 45%;
          bottom: 12%;

          animation-delay: -4s;
        }

        .cta-particle-6 {
          left: 20%;
          bottom: 25%;

          animation-delay: -5s;
        }

        @keyframes ctaParticleFloat {
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
              translateY(-16px)
              scale(1.3);
          }
        }

        /* =========================================================
           BUTTON SHINE
        ========================================================= */

        .cta-button-shine {
          position: absolute;

          left: -80%;
          top: 0;

          height: 100%;
          width: 35%;

          transform:
            skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.55),
              transparent
            );

          animation:
            ctaButtonShine
            4s
            ease-in-out
            infinite;
        }

        @keyframes ctaButtonShine {
          0%,
          55% {
            left: -80%;
          }

          75%,
          100% {
            left: 130%;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 640px) {
          .cta-3d-stage {
            transform:
              scale(0.88);
          }

          .cta-floating-card {
            min-width: 125px;
            transform-origin: center;
          }

          .cta-card-top {
            right: -3%;
          }

          .cta-card-bottom {
            left: -4%;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .cta-3d-stage,
          .cta-orbit,
          .cta-orbit-dot,
          .cta-core,
          .cta-core-glow,
          .cta-cap,
          .cta-floating-card,
          .cta-mini-badge,
          .cta-particle,
          .cta-button-shine {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

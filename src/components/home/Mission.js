export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#F4B942]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0F2F5F]/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-[#F4B942]/70"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[14%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#F4B942]/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= MAIN CARD ================= */}

        <div className="mission-card relative overflow-hidden rounded-[2rem] bg-[#0F2F5F] shadow-[0_30px_80px_rgba(15,47,95,0.20)]">
          {/* Ambient Glow */}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4B942]/[0.05] blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#F4B942]/[0.04] blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#071B36]/40 blur-3xl"
            aria-hidden="true"
          />

          {/* Decorative Circles */}

          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#F4B942]/20"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full border border-white/10"
            aria-hidden="true"
          />

          {/* ================= FLOATING PARTICLES ================= */}

          <span
            className="mission-particle mission-particle-1"
            aria-hidden="true"
          />

          <span
            className="mission-particle mission-particle-2"
            aria-hidden="true"
          />

          <span
            className="mission-particle mission-particle-3"
            aria-hidden="true"
          />

          <span
            className="mission-particle mission-particle-4"
            aria-hidden="true"
          />

          {/* ================= MAIN GRID ================= */}

          <div className="relative grid items-center gap-12 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-14 lg:py-16">
            {/* ================= LEFT CONTENT ================= */}

            <div className="relative z-20 max-w-3xl">
              {/* Label */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4B942]/25 bg-[#F4B942]/[0.07] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942] shadow-[0_0_8px_rgba(244,185,66,0.8)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4B942] sm:text-[11px]">
                  Our Mission
                </span>
              </div>

              {/* Heading */}

              <h2 className="max-w-2xl text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Every Student Deserves
                <span className="block">
                  a Chance to <span className="text-[#F4B942]">Succeed.</span>
                </span>
              </h2>

              {/* Description */}

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                We believe education should be about more than completing a
                syllabus. Our goal is to help students understand their
                concepts, develop useful skills, build confidence, and keep
                growing at every stage of their learning journey.
              </p>

              {/* ================= MISSION POINTS ================= */}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {/* Clear Concepts */}

                <div className="mission-point group">
                  <span className="mission-check">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 10.5L8.2 13.5L15 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                    Clear Concepts
                  </span>
                </div>

                {/* Practical Skills */}

                <div className="mission-point group">
                  <span className="mission-check">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 10.5L8.2 13.5L15 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                    Practical Skills
                  </span>
                </div>

                {/* Student Growth */}

                <div className="mission-point group">
                  <span className="mission-check">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 10.5L8.2 13.5L15 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                    Student Growth
                  </span>
                </div>
              </div>

              {/* Small Bottom Statement */}

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-10 bg-[#F4B942]/50" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Learn • Build • Grow
                </span>
              </div>
            </div>

            {/* ================= RIGHT 3D VISUAL ================= */}

            <div className="relative flex min-h-[340px] items-center justify-center lg:min-h-[420px]">
              <div className="mission-stage relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]">
                {/* ================= ORBIT RINGS ================= */}

                <div className="mission-orbit mission-orbit-1" />

                <div className="mission-orbit mission-orbit-2" />

                <div className="mission-orbit mission-orbit-3" />

                <div className="mission-gold-orbit" />

                {/* ================= ORBIT DOTS ================= */}

                <span className="mission-orbit-dot mission-dot-1" />

                <span className="mission-orbit-dot mission-dot-2" />

                <span className="mission-orbit-dot mission-dot-3" />

                {/* ================= CENTRAL 3D CORE ================= */}

                <div className="mission-core">
                  <div className="mission-core-glow" />

                  <div className="mission-core-inner">
                    {/* Star */}

                    <div className="mission-star-wrap">
                      <svg
                        viewBox="0 0 64 64"
                        className="mission-star"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M32 6L38.2 23.5L56 24.2L41.9 34.9L46.6 52.5L32 42.2L17.4 52.5L22.1 34.9L8 24.2L25.8 23.5L32 6Z"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />

                        <circle cx="32" cy="29" r="5" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Core Text */}

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#F4B942]">
                      Our Purpose
                    </p>

                    <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                      Student Success
                    </h3>

                    <p className="mt-1 max-w-[150px] text-center text-[10px] leading-4 text-slate-400">
                      Learn with clarity. Grow with confidence.
                    </p>

                    {/* Progress Bars */}

                    <div className="mt-4 flex items-center justify-center gap-1.5">
                      <span className="h-1.5 w-7 rounded-full bg-[#F4B942]" />

                      <span className="h-1.5 w-5 rounded-full bg-[#F4B942]/40" />

                      <span className="h-1.5 w-3 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* ================= FLOATING CARDS ================= */}

                <div className="mission-floating-card mission-card-top">
                  <div className="mission-card-icon">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
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
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Focus
                    </p>

                    <p className="text-[10px] font-bold text-white">
                      Clear Concepts
                    </p>
                  </div>
                </div>

                <div className="mission-floating-card mission-card-bottom">
                  <div className="mission-card-icon">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 15L9 11L12 13L16 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M13 7H16V10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Growth
                    </p>

                    <p className="text-[10px] font-bold text-white">
                      Student Progress
                    </p>
                  </div>
                </div>

                {/* ================= MINI BADGES ================= */}

                <div className="mission-mini-badge mission-mini-left">
                  LEARN
                </div>

                <div className="mission-mini-badge mission-mini-right">
                  GROW
                </div>

                {/* ================= SMALL GLOW DOTS ================= */}

                <span className="mission-glow-dot mission-glow-1" />

                <span className="mission-glow-dot mission-glow-2" />

                <span className="mission-glow-dot mission-glow-3" />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ACCENT ================= */}

          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#F4B942] to-transparent" />
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        .mission-stage {
          perspective: 1400px;
          transform-style: preserve-3d;
          animation: missionStageFloat 8s ease-in-out infinite;
        }

        @keyframes missionStageFloat {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              rotateX(0deg)
              rotateZ(0deg);
          }

          50% {
            transform:
              translate3d(0, -7px, 0)
              rotateX(1.5deg)
              rotateZ(0.5deg);
          }
        }

        /* ================= ORBITS ================= */

        .mission-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform-style: preserve-3d;
          pointer-events: none;
          will-change: transform;
        }

        .mission-orbit-1 {
          width: 94%;
          height: 48%;
          border: 1px solid rgba(244, 185, 66, 0.28);
          transform:
            translate(-50%, -50%)
            rotateX(68deg);
          animation:
            missionOrbitOne
            16s
            linear
            infinite;
        }

        .mission-orbit-2 {
          width: 80%;
          height: 80%;
          border: 1px solid rgba(255, 255, 255, 0.13);
          transform:
            translate(-50%, -50%)
            rotateY(65deg);
          animation:
            missionOrbitTwo
            19s
            linear
            infinite
            reverse;
        }

        .mission-orbit-3 {
          width: 65%;
          height: 92%;
          border: 1px solid rgba(244, 185, 66, 0.12);
          transform:
            translate(-50%, -50%)
            rotateX(45deg)
            rotateY(45deg);
          animation:
            missionOrbitThree
            22s
            linear
            infinite;
        }

        @keyframes missionOrbitOne {
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

        @keyframes missionOrbitTwo {
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

        @keyframes missionOrbitThree {
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

        /* ================= GOLD ORBIT ================= */

        .mission-gold-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 96%;
          height: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(244, 185, 66, 0.75);
          border-left-color: transparent;
          border-bottom-color: transparent;
          transform:
            translate(-50%, -50%)
            rotateX(68deg);
          filter:
            drop-shadow(
              0 0 8px
              rgba(244, 185, 66, 0.25)
            );
          animation:
            missionGoldOrbit
            8s
            linear
            infinite;
          will-change: transform;
        }

        @keyframes missionGoldOrbit {
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

        /* ================= ORBIT DOTS ================= */

        .mission-orbit-dot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #F4B942;
          box-shadow:
            0 0 8px rgba(244, 185, 66, 0.85),
            0 0 20px rgba(244, 185, 66, 0.35);
          z-index: 20;
          animation:
            missionDotPulse
            4s
            ease-in-out
            infinite;
        }

        .mission-dot-1 {
          left: 12%;
          top: 29%;
        }

        .mission-dot-2 {
          right: 12%;
          top: 48%;
          animation-delay: -1.2s;
        }

        .mission-dot-3 {
          left: 28%;
          bottom: 13%;
          animation-delay: -2.3s;
        }

        @keyframes missionDotPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        /* ================= CENTRAL CORE ================= */

        .mission-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 190px;
          height: 190px;
          transform:
            translate(-50%, -50%)
            translateZ(45px);
          transform-style: preserve-3d;
          z-index: 10;
          animation:
            missionCoreFloat
            6s
            ease-in-out
            infinite;
          will-change: transform;
        }

        .mission-core-glow {
          position: absolute;
          inset: -35px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(244, 185, 66, 0.20),
              transparent 67%
            );
          filter: blur(14px);
          animation:
            missionGlowPulse
            5s
            ease-in-out
            infinite;
        }

        .mission-core-inner {
          position: relative;
          display: flex;
          height: 100%;
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(244, 185, 66, 0.60);
          background:
            radial-gradient(
              circle at 35% 25%,
              rgba(44, 91, 155, 0.75),
              rgba(7, 27, 54, 0.98) 68%
            );
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.45),
            inset 0 0 35px rgba(244, 185, 66, 0.08);
          transform-style: preserve-3d;
        }

        @keyframes missionCoreFloat {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              translateZ(45px)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              translateZ(62px)
              scale(1.025);
          }
        }

        @keyframes missionGlowPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.06);
          }
        }

        /* ================= STAR ================= */

        .mission-star-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          width: 48px;
          border-radius: 15px;
          border: 1px solid rgba(244, 185, 66, 0.45);
          background: rgba(244, 185, 66, 0.08);
          box-shadow:
            0 0 25px rgba(244, 185, 66, 0.08);
          animation:
            missionStarFloat
            5s
            ease-in-out
            infinite;
        }

        .mission-star {
          height: 31px;
          width: 31px;
          color: #F4B942;
          filter:
            drop-shadow(
              0 0 5px
              rgba(244, 185, 66, 0.25)
            );
        }

        @keyframes missionStarFloat {
          0%,
          100% {
            transform:
              translateZ(25px)
              rotate(0deg);
          }

          50% {
            transform:
              translateZ(35px)
              rotate(4deg);
          }
        }

        /* ================= FLOATING CARDS ================= */

        .mission-floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 145px;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          background: rgba(7, 27, 54, 0.88);
          box-shadow:
            0 18px 35px rgba(0, 0, 0, 0.30);
          backdrop-filter: blur(14px);
          z-index: 25;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .mission-card-top {
          right: -1%;
          top: 15%;
          animation:
            missionCardTop
            6s
            ease-in-out
            infinite;
        }

        .mission-card-bottom {
          left: -2%;
          bottom: 14%;
          animation:
            missionCardBottom
            6.5s
            ease-in-out
            infinite;
        }

        .mission-card-icon {
          display: flex;
          height: 32px;
          width: 32px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: rgba(244, 185, 66, 0.12);
          color: #F4B942;
        }

        @keyframes missionCardTop {
          0%,
          100% {
            transform:
              translate3d(0, 0, 30px)
              rotateY(-7deg);
          }

          50% {
            transform:
              translate3d(7px, -9px, 42px)
              rotateY(-2deg);
          }
        }

        @keyframes missionCardBottom {
          0%,
          100% {
            transform:
              translate3d(0, 0, 25px)
              rotateY(7deg);
          }

          50% {
            transform:
              translate3d(-6px, 8px, 38px)
              rotateY(2deg);
          }
        }

        /* ================= MINI BADGES ================= */

        .mission-mini-badge {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          min-width: 64px;
          border:
            1px solid
            rgba(244, 185, 66, 0.45);
          border-radius: 13px;
          background: rgba(244, 185, 66, 0.08);
          color: #F4B942;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          backdrop-filter: blur(10px);
          z-index: 20;
        }

        .mission-mini-left {
          left: 7%;
          top: 12%;
          animation:
            missionMiniLeft
            5s
            ease-in-out
            infinite;
        }

        .mission-mini-right {
          right: 7%;
          bottom: 10%;
          animation:
            missionMiniRight
            4.5s
            ease-in-out
            infinite;
        }

        @keyframes missionMiniLeft {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(-8deg);
          }

          50% {
            transform:
              translateY(-8px)
              rotate(-2deg);
          }
        }

        @keyframes missionMiniRight {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(8deg);
          }

          50% {
            transform:
              translateY(8px)
              rotate(2deg);
          }
        }

        /* ================= GLOW DOTS ================= */

        .mission-glow-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #F4B942;
          box-shadow:
            0 0 12px rgba(244, 185, 66, 0.8);
          animation:
            missionGlowDot
            5s
            ease-in-out
            infinite;
        }

        .mission-glow-1 {
          left: 19%;
          top: 23%;
        }

        .mission-glow-2 {
          right: 20%;
          top: 29%;
          animation-delay: -1.2s;
        }

        .mission-glow-3 {
          right: 24%;
          bottom: 20%;
          animation-delay: -2.4s;
        }

        @keyframes missionGlowDot {
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
              scale(1.2);
          }
        }

        /* ================= PARTICLES ================= */

        .mission-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #F4B942;
          box-shadow:
            0 0 12px rgba(244, 185, 66, 0.75);
          animation:
            missionParticleFloat
            7s
            ease-in-out
            infinite;
        }

        .mission-particle-1 {
          left: 8%;
          top: 25%;
        }

        .mission-particle-2 {
          left: 37%;
          top: 12%;
          animation-delay: -1.5s;
        }

        .mission-particle-3 {
          right: 35%;
          top: 18%;
          animation-delay: -3s;
        }

        .mission-particle-4 {
          right: 9%;
          bottom: 24%;
          animation-delay: -4.5s;
        }

        @keyframes missionParticleFloat {
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

        /* ================= MISSION POINTS ================= */

        .mission-point {
          display: flex;
          align-items: center;
          gap: 10px;
          transition:
            transform 300ms ease;
        }

        .mission-point:hover {
          transform: translateY(-3px);
        }

        .mission-check {
          display: flex;
          height: 30px;
          width: 30px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(244, 185, 66, 0.12);
          color: #F4B942;
          border:
            1px solid
            rgba(244, 185, 66, 0.15);
          transition:
            all 300ms ease;
        }

        .mission-point:hover .mission-check {
          background: rgba(244, 185, 66, 0.22);
          box-shadow:
            0 0 18px
            rgba(244, 185, 66, 0.16);
          transform: scale(1.08);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 640px) {
          .mission-stage {
            transform: scale(0.84);
          }

          .mission-floating-card {
            min-width: 125px;
          }

          .mission-card-top {
            right: -4%;
          }

          .mission-card-bottom {
            left: -4%;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .mission-stage,
          .mission-orbit,
          .mission-gold-orbit,
          .mission-orbit-dot,
          .mission-core,
          .mission-core-glow,
          .mission-star-wrap,
          .mission-floating-card,
          .mission-mini-badge,
          .mission-glow-dot,
          .mission-particle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

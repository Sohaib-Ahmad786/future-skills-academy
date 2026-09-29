"use client";

import Image from "next/image";

const FRONT_IMAGE = "/images/faculty/lead-teacher.jpg";
const BACK_IMAGE = "/images/faculty/lead-teacher-back-v2.jpg";

const PORTFOLIO_URL = "https://sohaib-portfolio-phi.vercel.app/";

export default function LeadTeacher() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#071B36]/5" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full border border-[#F4B942]/10" />

      <div className="pointer-events-none absolute right-20 top-24 h-2 w-2 rounded-full bg-[#F4B942]/70" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="mb-12 max-w-3xl lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F4B942]/30 bg-[#F4B942]/[0.07] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#071B36]">
              Meet Your Educator
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
            The person behind
            <span className="block text-[#F4B942]">the learning journey.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Strong education begins with the right guidance. Meet the person
            behind Future Skills Academy and explore his professional journey,
            technical skills, and experience.
          </p>
        </div>

        {/* ================= PROFILE CARD ================= */}

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(7,27,54,0.10)]">
          {/* Gold Top Border */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#F4B942] to-transparent" />

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* =====================================================
                LEFT 3D AREA
            ====================================================== */}

            <div className="relative min-h-[500px] overflow-hidden bg-[#071B36] sm:min-h-[560px] lg:min-h-[620px]">
              {/* Background Glow */}

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(244,185,66,0.15),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(44,91,155,0.30),transparent_38%)]" />

              {/* Decorative Circles */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#F4B942]/15" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full border border-white/10" />

              {/* Floating Lights */}

              <span className="teacher-light teacher-light-1" />
              <span className="teacher-light teacher-light-2" />
              <span className="teacher-light teacher-light-3" />
              <span className="teacher-light teacher-light-4" />

              {/* ================= 3D STAGE ================= */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="teacher-stage relative h-[330px] w-[330px] sm:h-[380px] sm:w-[380px] lg:h-[410px] lg:w-[410px]">
                  {/* ================= ORBIT RINGS ================= */}

                  <div className="teacher-ring teacher-ring-1" />
                  <div className="teacher-ring teacher-ring-2" />
                  <div className="teacher-ring teacher-ring-3" />

                  <div className="teacher-gold-ring" />

                  {/* ================= ORBIT DOTS ================= */}

                  <div className="teacher-orbit-dot teacher-dot-1" />
                  <div className="teacher-orbit-dot teacher-dot-2" />
                  <div className="teacher-orbit-dot teacher-dot-3" />

                  {/* ================= PHOTO ================= */}

                  <div className="teacher-photo-frame">
                    <div className="absolute -inset-7 rounded-full bg-[#F4B942]/10 blur-3xl" />

                    <div className="absolute -inset-3 rounded-full bg-[#2c5b9b]/15 blur-2xl" />

                    {/* Outer Frame */}

                    <div className="absolute inset-0 rounded-full border border-white/25 bg-white/[0.05] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                      {/* Gold Frame */}

                      <div className="relative h-full w-full rounded-full border-2 border-[#F4B942]/80 bg-[#0b274b] p-1.5 shadow-[0_0_0_4px_rgba(255,255,255,0.05),0_0_35px_rgba(244,185,66,0.18)]">
                        {/* ================= 3D FLIP ================= */}

                        <div className="teacher-flip-container">
                          {/* ================= FRONT ================= */}

                          <div className="teacher-face teacher-front">
                            <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-200">
                              <Image
                                src={FRONT_IMAGE}
                                alt="Sohaib Ahmad - Lead Educator"
                                fill
                                sizes="(max-width: 640px) 245px, (max-width: 1024px) 285px, 315px"
                                className="object-cover object-center"
                              />

                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_25%),linear-gradient(180deg,transparent_55%,rgba(7,27,54,0.28))]" />

                              <div className="teacher-front-shine pointer-events-none absolute left-[-90%] top-0 h-full w-[38%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            </div>
                          </div>

                          {/* ================= BACK ================= */}

                          <div className="teacher-face teacher-back">
                            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0b274b]">
                              <Image
                                src={BACK_IMAGE}
                                alt="Future Skills Academy"
                                fill
                                sizes="(max-width: 640px) 245px, (max-width: 1024px) 285px, 315px"
                                className="object-cover object-center"
                                loading="lazy"
                              />

                              <div className="absolute inset-0 bg-[#071B36]/10" />

                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(244,185,66,0.16),transparent_45%)]" />

                              <div className="teacher-back-shine pointer-events-none absolute left-[-90%] top-0 h-full w-[38%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Badge */}

                    <div className="teacher-center-badge absolute left-1/2 top-1/2 z-50 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-[#071B36]/90 text-[#F4B942] shadow-[0_10px_25px_rgba(0,0,0,0.35)] backdrop-blur-md">
                      <span className="text-sm font-black">✦</span>
                    </div>
                  </div>

                  {/* ================= EDUCATOR LABEL ================= */}

                  <div className="teacher-label absolute bottom-0 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/15 bg-[#071B36]/95 px-5 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F4B942]">
                      Lead Educator
                    </p>

                    <p className="mt-1 whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
                      Sohaib Ahmad
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= ANIMATIONS ================= */}

              <style>{`
                .teacher-stage {
                  perspective: 1600px;
                  transform-style: preserve-3d;
                  animation: teacherStageFloat 7s ease-in-out infinite;
                }

                .teacher-photo-frame {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 255px;
                  height: 255px;
                  transform: translate(-50%, -50%) translateZ(25px);
                  transform-style: preserve-3d;
                  z-index: 10;
                }

                .teacher-flip-container {
                  position: absolute;
                  inset: 0;
                  transform-style: preserve-3d;
                  animation: teacherFlip 6s ease-in-out infinite;
                  will-change: transform;
                }

                @keyframes teacherFlip {
                  0% {
                    transform: rotateY(0deg);
                  }

                  33.333% {
                    transform: rotateY(0deg);
                  }

                  50% {
                    transform: rotateY(180deg);
                  }

                  83.333% {
                    transform: rotateY(180deg);
                  }

                  100% {
                    transform: rotateY(360deg);
                  }
                }

                .teacher-face {
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  overflow: hidden;
                  backface-visibility: hidden;
                  -webkit-backface-visibility: hidden;
                  transform-style: preserve-3d;
                }

                .teacher-front {
                  transform: rotateY(0deg);
                }

                .teacher-back {
                  transform: rotateY(180deg);
                }

                @keyframes teacherStageFloat {
                  0%,
                  100% {
                    transform: translate3d(0, 0, 0);
                  }

                  50% {
                    transform: translate3d(0, -5px, 8px);
                  }
                }

                .teacher-ring {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  border-radius: 50%;
                  transform-style: preserve-3d;
                  pointer-events: none;
                }

                .teacher-ring-1 {
                  width: 92%;
                  height: 58%;
                  border: 1px solid rgba(255, 255, 255, 0.15);
                  transform: translate(-50%, -50%) rotateX(67deg);
                  animation: teacherRingOne 14s linear infinite;
                }

                @keyframes teacherRingOne {
                  from {
                    transform:
                      translate(-50%, -50%)
                      rotateX(67deg)
                      rotateZ(0deg);
                  }

                  to {
                    transform:
                      translate(-50%, -50%)
                      rotateX(67deg)
                      rotateZ(360deg);
                  }
                }

                .teacher-ring-2 {
                  width: 82%;
                  height: 82%;
                  border: 1px solid rgba(244, 185, 66, 0.18);
                  transform: translate(-50%, -50%) rotateY(65deg);
                  animation: teacherRingTwo 11s linear infinite reverse;
                }

                @keyframes teacherRingTwo {
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

                .teacher-ring-3 {
                  width: 70%;
                  height: 70%;
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  transform:
                    translate(-50%, -50%)
                    rotateX(70deg)
                    rotateY(15deg);
                  animation: teacherRingThree 9s linear infinite;
                }

                @keyframes teacherRingThree {
                  from {
                    transform:
                      translate(-50%, -50%)
                      rotateX(70deg)
                      rotateY(15deg)
                      rotateZ(0deg);
                  }

                  to {
                    transform:
                      translate(-50%, -50%)
                      rotateX(70deg)
                      rotateY(15deg)
                      rotateZ(360deg);
                  }
                }

                .teacher-gold-ring {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 96%;
                  height: 60%;
                  border-radius: 50%;
                  border: 1.5px solid rgba(244, 185, 66, 0.75);
                  border-left-color: transparent;
                  border-bottom-color: transparent;
                  transform:
                    translate(-50%, -50%)
                    rotateX(67deg);
                  animation: teacherGoldRing 5.5s linear infinite;
                  filter:
                    drop-shadow(
                      0 0 8px
                      rgba(244, 185, 66, 0.28)
                    );
                  pointer-events: none;
                }

                @keyframes teacherGoldRing {
                  from {
                    transform:
                      translate(-50%, -50%)
                      rotateX(67deg)
                      rotateZ(0deg);
                  }

                  to {
                    transform:
                      translate(-50%, -50%)
                      rotateX(67deg)
                      rotateZ(360deg);
                  }
                }

                .teacher-orbit-dot {
                  position: absolute;
                  width: 7px;
                  height: 7px;
                  border-radius: 50%;
                  background: #f4b942;
                  box-shadow:
                    0 0 8px rgba(244, 185, 66, 0.80),
                    0 0 18px rgba(244, 185, 66, 0.30);
                  z-index: 20;
                }

                .teacher-dot-1 {
                  left: 11%;
                  top: 31%;
                  animation: teacherDotOne 5s ease-in-out infinite;
                }

                .teacher-dot-2 {
                  right: 11%;
                  top: 45%;
                  animation: teacherDotTwo 6s ease-in-out infinite;
                }

                .teacher-dot-3 {
                  left: 26%;
                  bottom: 14%;
                  animation: teacherDotThree 5.5s ease-in-out infinite;
                }

                @keyframes teacherDotOne {
                  0%,
                  100% {
                    opacity: 0.35;
                    transform: translateY(0);
                  }

                  50% {
                    opacity: 1;
                    transform: translateY(-10px);
                  }
                }

                @keyframes teacherDotTwo {
                  0%,
                  100% {
                    opacity: 0.35;
                    transform: translateX(0);
                  }

                  50% {
                    opacity: 1;
                    transform: translateX(-10px);
                  }
                }

                @keyframes teacherDotThree {
                  0%,
                  100% {
                    opacity: 0.35;
                    transform: translateY(0);
                  }

                  50% {
                    opacity: 1;
                    transform: translateY(10px);
                  }
                }

                .teacher-center-badge {
                  animation:
                    teacherCenterBadge
                    4s
                    ease-in-out
                    infinite;
                }

                @keyframes teacherCenterBadge {
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
                      translateZ(55px)
                      scale(1.05);
                  }
                }

                .teacher-label {
                  animation:
                    teacherLabelFloat
                    4.5s
                    ease-in-out
                    infinite;
                }

                @keyframes teacherLabelFloat {
                  0%,
                  100% {
                    transform:
                      translate(-50%, 0)
                      translateY(0);
                  }

                  50% {
                    transform:
                      translate(-50%, 0)
                      translateY(-5px);
                  }
                }

                .teacher-front-shine {
                  animation:
                    teacherFrontShine
                    6s
                    ease-in-out
                    infinite;
                }

                @keyframes teacherFrontShine {
                  0%,
                  25% {
                    transform:
                      translateX(-120%)
                      rotate(18deg);
                    opacity: 0;
                  }

                  45% {
                    opacity: 0.8;
                  }

                  65%,
                  100% {
                    transform:
                      translateX(430%)
                      rotate(18deg);
                    opacity: 0;
                  }
                }

                .teacher-back-shine {
                  animation:
                    teacherBackShine
                    6s
                    ease-in-out
                    infinite;
                }

                @keyframes teacherBackShine {
                  0%,
                  25% {
                    transform:
                      translateX(-120%)
                      rotate(18deg);
                    opacity: 0;
                  }

                  45% {
                    opacity: 0.7;
                  }

                  65%,
                  100% {
                    transform:
                      translateX(430%)
                      rotate(18deg);
                    opacity: 0;
                  }
                }

                .teacher-light {
                  position: absolute;
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background: #f4b942;
                  box-shadow:
                    0 0 15px rgba(244, 185, 66, 0.65);
                  animation:
                    teacherLightFloat
                    5s
                    ease-in-out
                    infinite;
                }

                .teacher-light-1 {
                  left: 17%;
                  top: 25%;
                }

                .teacher-light-2 {
                  right: 18%;
                  top: 29%;
                  animation-delay: -1.5s;
                }

                .teacher-light-3 {
                  left: 20%;
                  bottom: 22%;
                  animation-delay: -3s;
                }

                .teacher-light-4 {
                  right: 24%;
                  bottom: 18%;
                  animation-delay: -4s;
                }

                @keyframes teacherLightFloat {
                  0%,
                  100% {
                    opacity: 0.25;
                    transform:
                      translateY(0)
                      scale(0.8);
                  }

                  50% {
                    opacity: 1;
                    transform:
                      translateY(-10px)
                      scale(1.2);
                  }
                }

                @media (prefers-reduced-motion: reduce) {
                  .teacher-stage,
                  .teacher-flip-container,
                  .teacher-ring,
                  .teacher-gold-ring,
                  .teacher-orbit-dot,
                  .teacher-center-badge,
                  .teacher-label,
                  .teacher-front-shine,
                  .teacher-back-shine,
                  .teacher-light {
                    animation: none !important;
                  }
                }

                @media (min-width: 640px) {
                  .teacher-photo-frame {
                    width: 285px;
                    height: 285px;
                  }
                }

                @media (min-width: 1024px) {
                  .teacher-photo-frame {
                    width: 315px;
                    height: 315px;
                  }
                }

                @media (max-width: 640px) {
                  .teacher-stage {
                    width: 315px;
                    height: 315px;
                  }

                  .teacher-photo-frame {
                    width: 245px;
                    height: 245px;
                  }

                  .teacher-ring-1 {
                    width: 94%;
                  }

                  .teacher-ring-2 {
                    width: 84%;
                    height: 84%;
                  }

                  .teacher-ring-3 {
                    width: 72%;
                    height: 72%;
                  }
                }
              `}</style>
            </div>

            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}

            <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B942]">
                  Lead Educator
                </p>

                {/* ================= NAME ================= */}

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#071B36] sm:text-4xl">
                  Sohaib Ahmad
                </h3>

                <p className="mt-3 text-sm font-semibold text-[#F4B942] sm:text-base">
                  Software Engineering • Full-Stack Web Development
                </p>

                {/* ================= INTRO ================= */}

                <p className="mt-5 text-base leading-7 text-slate-600">
                  A Software Engineering student and aspiring full-stack
                  developer focused on building practical web applications,
                  learning modern technologies, and helping learners build
                  strong technical foundations.
                </p>

                {/* ================= DETAILS ================= */}

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {/* Qualification */}

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F4B942]/40 hover:bg-white hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071B36] text-[#F4B942]">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9L12 4L21 9L12 14L3 9Z"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M6 11.2V16.5C8.9 19 15.1 19 18 16.5V11.2"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Education
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#071B36]">
                          BS Software Engineering
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Focus */}

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F4B942]/40 hover:bg-white hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071B36] text-[#F4B942]">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M8 8L4 12L8 16"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M16 8L20 12L16 16"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M14 5L10 19"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Technical Focus
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#071B36]">
                          React • Next.js • Full-Stack
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= PHILOSOPHY ================= */}

                <div className="mt-8 border-l-2 border-[#F4B942] pl-5">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#071B36]">
                    Teaching Philosophy
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                    My goal is to make learning simple, practical, and
                    meaningful — helping students understand concepts, apply
                    their knowledge through real projects, and build confidence
                    in their skills.
                  </p>
                </div>

                {/* ================= CTA ================= */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Sohaib Ahmad's portfolio"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#071B36] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(7,27,54,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b274b] hover:shadow-[0_12px_26px_rgba(7,27,54,0.20)] active:translate-y-0"
                  >
                    <span>View My Portfolio</span>

                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </a>

                  <span className="text-center text-xs font-medium text-slate-400 sm:text-left">
                    Explore my skills, projects &amp; professional work.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= VALUES ================= */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-semibold text-slate-500 sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942]" />
            Practical Learning
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942]" />
            Full-Stack Development
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942]" />
            Continuous Growth
          </div>
        </div>
      </div>
    </section>
  );
}

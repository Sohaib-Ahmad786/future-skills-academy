"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  const pointerFrameRef = useRef(null);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });

  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isAcademyCtaPressed, setIsAcademyCtaPressed] = useState(false);

  /* =========================================================
     INITIAL LOAD + REDUCED MOTION
  ========================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    const timer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => {
      window.clearTimeout(timer);
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  /* =========================================================
     PERFORMANCE OPTIMIZED SCROLL PARALLAX
     
     IMPORTANT:
     Scroll progress is NOT stored in React state anymore.
     CSS variables are updated directly so the whole component
     does not re-render on every scroll frame.
  ========================================================= */

  useEffect(() => {
    const heroElement = heroRef.current;

    if (!heroElement) {
      return;
    }

    if (reducedMotion) {
      heroElement.style.setProperty("--hero-scroll-y", "0px");
      heroElement.style.setProperty("--hero-scroll-scale", "1");
      heroElement.style.setProperty("--hero-content-y", "0px");
      heroElement.style.setProperty("--hero-content-opacity", "1");

      return;
    }

    let frameId = null;

    const updateScroll = () => {
      frameId = null;

      if (!heroElement) {
        return;
      }

      const rect = heroElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight - rect.top) / Math.max(rect.height, viewportHeight),
        ),
      );

      heroElement.style.setProperty("--hero-scroll-y", `${progress * -18}px`);

      heroElement.style.setProperty(
        "--hero-scroll-scale",
        `${1 - progress * 0.025}`,
      );

      heroElement.style.setProperty("--hero-content-y", `${progress * -10}px`);

      heroElement.style.setProperty(
        "--hero-content-opacity",
        `${Math.max(0.72, 1 - progress * 0.22)}`,
      );
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [reducedMotion]);

  /* =========================================================
     PERFORMANCE OPTIMIZED DESKTOP MOUSE PARALLAX

     RAF only runs while the pointer is moving toward a target.
     It no longer runs forever when the user is doing nothing.
  ========================================================= */

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const heroElement = heroRef.current;

    if (!heroElement) {
      return;
    }

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      return;
    }

    const animatePointer = () => {
      const target = pointerTargetRef.current;
      const current = pointerCurrentRef.current;

      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      heroElement.style.setProperty(
        "--hero-mouse-x",
        `${current.x.toFixed(2)}px`,
      );

      heroElement.style.setProperty(
        "--hero-mouse-y",
        `${current.y.toFixed(2)}px`,
      );

      const distance =
        Math.abs(target.x - current.x) + Math.abs(target.y - current.y);

      if (distance > 0.05) {
        pointerFrameRef.current = window.requestAnimationFrame(animatePointer);
      } else {
        pointerFrameRef.current = null;
      }
    };

    const startPointerAnimation = () => {
      if (pointerFrameRef.current !== null) {
        return;
      }

      pointerFrameRef.current = window.requestAnimationFrame(animatePointer);
    };

    const handlePointerMove = (event) => {
      const rect = heroElement.getBoundingClientRect();

      if (!rect.width || !rect.height) {
        return;
      }

      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;

      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

      pointerTargetRef.current = {
        x: relativeX,
        y: relativeY,
      };

      startPointerAnimation();
    };

    const handlePointerLeave = () => {
      pointerTargetRef.current = {
        x: 0,
        y: 0,
      };

      startPointerAnimation();
    };

    heroElement.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    heroElement.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    return () => {
      heroElement.removeEventListener("pointermove", handlePointerMove);

      heroElement.removeEventListener("pointerleave", handlePointerLeave);

      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);

        pointerFrameRef.current = null;
      }
    };
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      className="group/hero relative isolate overflow-hidden bg-[#F8FAFC]"
      style={{
        "--hero-mouse-x": "0px",
        "--hero-mouse-y": "0px",
        "--hero-scroll-y": "0px",
        "--hero-scroll-scale": "1",
        "--hero-content-y": "0px",
        "--hero-content-opacity": "1",
      }}
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Navy Glow */}
        <div
          className="absolute left-[-12%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#0F2F5F]/[0.045] blur-[100px]"
          style={{
            transform: reducedMotion
              ? "none"
              : "translate3d(calc(var(--hero-mouse-x) * 0.8), calc(var(--hero-mouse-y) * 0.8), 0)",
          }}
        />

        {/* Golden Glow */}
        <div
          className="absolute right-[-8%] top-[-12%] h-[430px] w-[430px] rounded-full bg-[#F4B942]/[0.10] blur-[110px]"
          style={{
            transform: reducedMotion
              ? "none"
              : "translate3d(calc(var(--hero-mouse-x) * -0.7), calc(var(--hero-mouse-y) * -0.7), 0)",
          }}
        />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-18%] left-[35%] h-[320px] w-[320px] rounded-full bg-[#0F2F5F]/[0.035] blur-[100px]" />

        {/* Large Circle */}
        <div
          className="absolute right-[-180px] top-[-170px] h-[480px] w-[480px] rounded-full border border-[#0F2F5F]/[0.055]"
          style={{
            transform: reducedMotion
              ? "none"
              : "translate3d(calc(var(--hero-mouse-x) * -0.5), calc(var(--hero-mouse-y) * -0.5), 0)",
          }}
        />

        <div className="absolute right-[-100px] top-[-90px] h-[320px] w-[320px] rounded-full border border-[#F4B942]/[0.10]" />

        {/* Subtle Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(15,47,95,0.16) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage: "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN HERO CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="relative z-20 max-w-2xl"
            style={{
              transform: reducedMotion
                ? "none"
                : "translate3d(0, var(--hero-content-y), 0)",
              opacity: reducedMotion ? 1 : "var(--hero-content-opacity)",
            }}
          >
            {/* Badge */}
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4B942]/30 bg-[#F4B942]/10 px-4 py-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: "120ms",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#F4B942] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F4B942]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0F2F5F]">
                Learn • Build • Grow
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-tight text-[#0F2F5F] sm:text-5xl lg:text-6xl">
              <span
                className={`block transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: "260ms",
                }}
              >
                Education That
              </span>

              <span
                className={`mt-1 block text-[#F4B942] transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: "390ms",
                }}
              >
                Builds Futures.
              </span>
            </h1>

            {/* Description */}
            <p
              className={`mt-6 max-w-xl text-base leading-7 text-slate-600 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-lg sm:leading-8 motion-reduce:transition-none ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
              style={{
                transitionDelay: "560ms",
              }}
            >
              At Future Skills Academy, we focus on strong concepts, practical
              learning, and student growth — helping learners move forward with
              confidence.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className={`mt-8 flex flex-col gap-3 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex-row motion-reduce:transition-none ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
              style={{
                transitionDelay: "680ms",
              }}
            >
              {/* Discover Academy */}

              <Link
                href="/about"
                onPointerDown={() => setIsAcademyCtaPressed(true)}
                onPointerUp={() => setIsAcademyCtaPressed(false)}
                onPointerCancel={() => setIsAcademyCtaPressed(false)}
                onClick={() => {
                  setIsAcademyCtaPressed(true);
                }}
                className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none ${
                  isAcademyCtaPressed
                    ? "translate-y-0 bg-[#F4B942] text-[#0F2F5F] shadow-xl shadow-[#F4B942]/30"
                    : "bg-[#0F2F5F] text-white shadow-lg shadow-[#0F2F5F]/10 hover:-translate-y-1 hover:bg-[#F4B942] hover:text-[#0F2F5F] hover:shadow-xl hover:shadow-[#F4B942]/25"
                }`}
                aria-label="Discover Future Skills Academy"
              >
                {/* Button Shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:transition-none" />

                <span className="relative z-10">Discover Academy</span>

                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none"
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
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#0F2F5F] shadow-sm outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F4B942] hover:bg-[#F4B942]/10 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Points */}
            <div
              className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: "820ms",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4B942]/15 font-bold text-[#F4B942]">
                  ✓
                </span>
                Concept-Based Learning
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4B942]/15 font-bold text-[#F4B942]">
                  ✓
                </span>
                Student-Focused
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CINEMATIC VISUAL
          ================================================= */}

          <div
            className={`relative z-10 mx-auto w-full max-w-xl transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isLoaded
                ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                : "translate-x-8 translate-y-8 scale-[0.97] opacity-0"
            }`}
            style={{
              transitionDelay: "480ms",
              transform: reducedMotion
                ? "none"
                : "translate3d(calc(var(--hero-mouse-x) * 2px), calc(var(--hero-mouse-y) * 2px + var(--hero-scroll-y)), 0) scale(var(--hero-scroll-scale))",
            }}
          >
            {/* Outer Glow */}
            <div
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(circle,rgba(244,185,66,0.15),rgba(15,47,95,0.06),transparent_70%)] blur-2xl"
              style={{
                transform: reducedMotion
                  ? "none"
                  : "translate3d(calc(var(--hero-mouse-x) * -1px), calc(var(--hero-mouse-y) * -1px), 0)",
              }}
            />

            {/* Back Plane */}
            <div
              className="absolute -right-3 -top-3 h-[92%] w-[92%] rounded-[2.3rem] border border-[#F4B942]/20 bg-[#0F2F5F]/[0.035]"
              style={{
                transform: reducedMotion
                  ? "none"
                  : "translate3d(calc(var(--hero-mouse-x) * -3px), calc(var(--hero-mouse-y) * -3px), 0)",
              }}
            />

            {/* Main Frame */}
            <div
              className="relative rounded-[2rem] bg-[#0F2F5F] p-2 shadow-[0_30px_80px_rgba(15,47,95,0.20)]"
              style={{
                transform: reducedMotion
                  ? "none"
                  : "translate3d(calc(var(--hero-mouse-x) * 1px), calc(var(--hero-mouse-y) * 1px), 0)",
              }}
            >
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-[#173F78] via-[#0F2F5F] to-[#071B36] px-6 py-10 sm:px-10 sm:py-12">
                {/* Inner Atmosphere */}
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 15%, rgba(244,185,66,0.12), transparent 30%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.05), transparent 35%)",
                  }}
                />

                {/* Depth Circle */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#F4B942]/20"
                  aria-hidden="true"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : "translate3d(calc(var(--hero-mouse-x) * -4px), calc(var(--hero-mouse-y) * -4px), 0)",
                  }}
                />

                <div
                  className="pointer-events-none absolute -right-8 top-8 h-40 w-40 rounded-full border border-[#F4B942]/10"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-white/10"
                  aria-hidden="true"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : "translate3d(calc(var(--hero-mouse-x) * 3px), calc(var(--hero-mouse-y) * 3px), 0)",
                  }}
                />

                {/* Particles */}
                <span
                  className="absolute left-[12%] top-[17%] h-1.5 w-1.5 rounded-full bg-[#F4B942]/80"
                  aria-hidden="true"
                />

                <span
                  className="absolute right-[18%] top-[30%] h-1 w-1 rounded-full bg-white/50"
                  aria-hidden="true"
                />

                <span
                  className="absolute bottom-[25%] left-[18%] h-1 w-1 rounded-full bg-[#F4B942]/60"
                  aria-hidden="true"
                />

                <span
                  className="absolute bottom-[15%] right-[13%] h-1.5 w-1.5 rounded-full bg-white/40"
                  aria-hidden="true"
                />

                {/* Academy Icon */}
                <div
                  className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#F4B942]/30 bg-[#F4B942]/10 shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : "translate3d(calc(var(--hero-mouse-x) * -2px), calc(var(--hero-mouse-y) * -2px), 0)",
                  }}
                >
                  <div className="absolute inset-2 rounded-2xl border border-white/5" />

                  <svg
                    viewBox="0 0 64 64"
                    className="relative h-16 w-16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M32 9L7 21L32 33L57 21L32 9Z" fill="#F4B942" />

                    <path
                      d="M9 42C16 39 24 40 32 46C40 40 48 39 55 42V54C48 51 40 52 32 57C24 52 16 51 9 54V42Z"
                      fill="white"
                    />

                    <path
                      d="M32 46V57"
                      stroke="#0F2F5F"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M35 38L47 27"
                      stroke="#F4B942"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      d="M43 27H47V31"
                      stroke="#F4B942"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M50 10L51.5 13.5L55 15L51.5 16.5L50 20L48.5 16.5L45 15L48.5 13.5L50 10Z"
                      fill="#F4B942"
                    />
                  </svg>
                </div>

                {/* Visual Content */}
                <div className="relative mt-7 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B942]">
                    Future Skills Academy
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                    Learn. Grow. Succeed.
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300">
                    Building knowledge, confidence, and practical skills for
                    every stage of a student&apos;s journey.
                  </p>
                </div>

                {/* Learning Steps */}
                <div className="relative mt-8 grid grid-cols-3 gap-2.5">
                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center shadow-lg shadow-black/5"
                    style={{
                      transform: reducedMotion
                        ? "none"
                        : "translate3d(calc(var(--hero-mouse-x) * 1px), calc(var(--hero-mouse-y) * 1px), 0)",
                    }}
                  >
                    <p className="text-sm font-bold text-[#F4B942]">Learn</p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Understand
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center shadow-lg shadow-black/5"
                    style={{
                      transform: reducedMotion
                        ? "none"
                        : "translate3d(calc(var(--hero-mouse-x) * -1.5px), calc(var(--hero-mouse-y) * -1.5px), 0)",
                    }}
                  >
                    <p className="text-sm font-bold text-[#F4B942]">Practice</p>

                    <p className="mt-1 text-[11px] text-slate-400">Improve</p>
                  </div>

                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center shadow-lg shadow-black/5"
                    style={{
                      transform: reducedMotion
                        ? "none"
                        : "translate3d(calc(var(--hero-mouse-x) * 2px), calc(var(--hero-mouse-y) * 2px), 0)",
                    }}
                  >
                    <p className="text-sm font-bold text-[#F4B942]">Grow</p>

                    <p className="mt-1 text-[11px] text-slate-400">Succeed</p>
                  </div>
                </div>

                {/* Bottom Light */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4B942]/50 to-transparent" />
              </div>
            </div>

            {/* Floating Card 1 */}
            <div
              className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_20px_40px_rgba(15,47,95,0.14)] backdrop-blur-md sm:block md:-left-6"
              style={{
                transform: reducedMotion
                  ? "none"
                  : "translate3d(calc(var(--hero-mouse-x) * -5px), calc(var(--hero-mouse-y) * -5px), 0)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4B942]/15 text-[#F4B942]">
                  <span className="text-lg font-bold">★</span>
                </div>

                <div>
                  <p className="text-[11px] font-medium text-slate-500">
                    Our Focus
                  </p>

                  <p className="text-sm font-bold text-[#0F2F5F]">
                    Student Success
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div
              className="absolute -right-2 top-12 hidden rounded-2xl border border-white/15 bg-[#071B36]/90 px-4 py-3 shadow-[0_20px_40px_rgba(7,27,54,0.20)] backdrop-blur-md sm:block md:-right-6"
              style={{
                transform: reducedMotion
                  ? "none"
                  : "translate3d(calc(var(--hero-mouse-x) * 4px), calc(var(--hero-mouse-y) * 4px), 0)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4B942]/15">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4B942]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Focus
                  </p>

                  <p className="text-xs font-bold text-white">
                    Practical Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Micro Label */}
            <div
              className="absolute -right-1 bottom-[18%] hidden rounded-full border border-[#F4B942]/20 bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0F2F5F] shadow-lg backdrop-blur-md sm:block"
              style={{
                transform: reducedMotion
                  ? "none"
                  : "translate3d(calc(var(--hero-mouse-x) * 6px), calc(var(--hero-mouse-y) * 6px), 0)",
              }}
            >
              Learn • Practice • Grow
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CINEMATIC BOTTOM TRANSITION
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/30 to-transparent"
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE SIMPLIFICATION
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-4 left-1/2 hidden h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F4B942]/60 to-transparent sm:block lg:hidden"
        aria-hidden="true"
      />
    </section>
  );
}

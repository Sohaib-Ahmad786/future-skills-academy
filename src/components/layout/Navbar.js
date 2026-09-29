"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Faculty",
    href: "/faculty",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const navRef = useRef(null);
  const frameRef = useRef(null);

  /*
   * =========================================================
   * CLIENT MOUNT
   * =========================================================
   */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  /*
   * =========================================================
   * SCROLL EFFECT
   * =========================================================
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * =========================================================
   * CLOSE MOBILE MENU AFTER ROUTE CHANGE
   * =========================================================
   */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  /*
   * =========================================================
   * ESCAPE KEY + BODY SCROLL LOCK
   * =========================================================
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  /*
   * =========================================================
   * CLEANUP MOUSE ANIMATION FRAME
   * =========================================================
   */
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  /*
   * =========================================================
   * DESKTOP MOUSE DEPTH EFFECT
   * =========================================================
   */
  const handleMouseMove = (event) => {
    if (window.innerWidth < 1024) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (!navRef.current) {
      return;
    }

    const rect = navRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((x - centerX) / centerX) * 1.2;
    const moveY = ((y - centerY) / centerY) * 0.8;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      if (!navRef.current) {
        return;
      }

      navRef.current.style.setProperty("--mouse-x", `${moveX.toFixed(2)}px`);

      navRef.current.style.setProperty("--mouse-y", `${moveY.toFixed(2)}px`);
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    if (!navRef.current) {
      return;
    }

    navRef.current.style.setProperty("--mouse-x", "0px");
    navRef.current.style.setProperty("--mouse-y", "0px");
  };

  /*
   * =========================================================
   * HELPERS
   * =========================================================
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /*
   * Active route is intentionally disabled during the
   * initial server/client render to prevent hydration
   * mismatch.
   */
  const isActive = (href) => {
    if (!isMounted) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        }}
        className="mx-auto max-w-7xl"
      >
        <div
          className={`relative transform-gpu overflow-hidden rounded-2xl border transition-[height,background-color,border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none ${
            isScrolled
              ? "border-slate-200/90 bg-white/95 shadow-[0_18px_45px_rgba(7,27,54,0.14)] backdrop-blur-xl"
              : "border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(7,27,54,0.08)]"
          }`}
          style={{
            transform: "translate3d(var(--mouse-x), var(--mouse-y), 0)",
          }}
        >
          {/* =================================================
              TOP GOLDEN HIGHLIGHT
          ================================================= */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B942]/80 to-transparent" />

          {/* =================================================
              SOFT AMBIENT LIGHT
          ================================================= */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-100%,rgba(244,185,66,0.10),transparent_42%)]" />

          {/* =================================================
              MAIN NAVIGATION ROW
          ================================================= */}
          <div
            className={`relative flex items-center justify-between px-3 sm:px-6 lg:px-7 ${
              isScrolled ? "h-[68px]" : "h-[74px]"
            } transition-[height] duration-500 ease-out motion-reduce:transition-none`}
          >
            {/* =================================================
                REAL LOGO
            ================================================= */}
            <Link
              href="/"
              aria-label="Future Skills Academy - Home"
              onClick={closeMenu}
              className="group relative z-20 flex shrink-0 items-center rounded-xl outline-none transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <div
                className={`relative ${
                  isScrolled ? "h-[58px] w-[132px]" : "h-[64px] w-[145px]"
                } transition-all duration-500 ease-out motion-reduce:transition-none`}
              >
                <Image
                  src="/images/future-skills-logo.png"
                  alt="Future Skills Academy"
                  width={145}
                  height={64}
                  priority
                  sizes="145px"
                  className="h-full w-full object-contain object-left transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
                />

                <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[#F4B942]/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none" />
              </div>
            </Link>

            {/* =================================================
                PREMIUM CENTER BRANDING
                MOBILE / TABLET
            ================================================= */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center whitespace-nowrap lg:hidden"
              aria-label="Future Skills Academy"
            >
              {/* Main Brand */}
              <div className="relative flex items-center justify-center">
                {/* Left Premium Accent */}
                <span className="mr-2 h-px w-3 bg-gradient-to-r from-transparent via-[#F4B942] to-[#F4B942] opacity-90 sm:mr-2.5 sm:w-5" />

                {/* IMPORTANT:
                    Single-line className prevents CRLF/LF
                    hydration mismatch in Next.js/Turbopack.
                */}
                <span className="bg-gradient-to-r from-[#071B36] via-[#173E6A] to-[#D89B24] bg-clip-text text-[17px] font-black leading-none tracking-[-0.035em] text-transparent drop-shadow-[0_2px_8px_rgba(7,27,54,0.10)] sm:text-[20px]">
                  Future Skills
                </span>

                {/* Right Premium Accent */}
                <span className="ml-2 h-px w-3 bg-gradient-to-l from-transparent via-[#F4B942] to-[#F4B942] opacity-90 sm:ml-2.5 sm:w-5" />

                {/* Tiny Gold Glow */}
                <span className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-full bg-[#F4B942]/10 opacity-70 blur-xl" />
              </div>

              {/* Academy Label */}
              <div className="mt-1 flex items-center gap-1.5 sm:mt-1.5 sm:gap-2">
                <span className="h-px w-3 bg-[#F4B942]/60 sm:w-5" />

                {/* IMPORTANT:
                    Single-line className prevents CRLF/LF
                    hydration mismatch in Next.js/Turbopack.
                */}
                <span className="text-[7px] font-extrabold uppercase tracking-[0.32em] text-[#071B36]/60 sm:text-[8px] sm:tracking-[0.38em]">
                  Academy
                </span>

                <span className="h-px w-3 bg-[#F4B942]/60 sm:w-5" />
              </div>
            </div>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative rounded-xl px-4 py-3 text-[14px] font-semibold outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                      active
                        ? "bg-[#071B36]/[0.045] text-[#071B36]"
                        : "text-[#071B36] hover:-translate-y-[1px] hover:bg-slate-50"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {/* Premium Gold Underline */}
                    <span
                      className={`absolute bottom-[7px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#F4B942] transition-all duration-300 ease-out motion-reduce:transition-none ${
                        active
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                      }`}
                    />

                    {/* Active Glow */}
                    {active && (
                      <span className="pointer-events-none absolute inset-x-3 bottom-0 h-5 rounded-full bg-[#F4B942]/10 blur-md" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP GET STARTED
            ================================================= */}
            <div className="hidden shrink-0 lg:block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#071B36] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(7,27,54,0.16)] outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#F4B942] hover:text-[#071B36] hover:shadow-[0_14px_30px_rgba(244,185,66,0.32)] focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:transition-none" />

                <span className="pointer-events-none absolute inset-0 rounded-xl border border-[#F4B942]/20 transition-colors duration-300 group-hover:border-white/30 motion-reduce:transition-none" />

                <span className="relative z-10">Get Started</span>

                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
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
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className={`relative z-30 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border outline-none transition-all duration-300 lg:hidden focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                isMenuOpen
                  ? "border-[#F4B942] bg-[#071B36] text-white shadow-md"
                  : "border-slate-200 bg-white text-[#071B36] shadow-sm hover:border-[#F4B942] hover:shadow-md"
              }`}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>

              <span className="relative flex h-5 w-5 items-center justify-center">
                {/* Top Line */}
                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
                    isMenuOpen ? "rotate-45" : "-translate-y-[6px]"
                  }`}
                />

                {/* Middle Line */}
                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-200 motion-reduce:transition-none ${
                    isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  }`}
                />

                {/* Bottom Line */}
                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
                    isMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}
          <div
            id="mobile-navigation"
            aria-hidden={!isMenuOpen}
            className={`overflow-hidden border-t transition-all duration-500 ease-out motion-reduce:transition-none lg:hidden ${
              isMenuOpen
                ? "max-h-[500px] border-slate-200/80 opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }`}
          >
            <div className="px-4 pb-5 pt-3 sm:px-6">
              {/* Mobile Navigation Links */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      tabIndex={isMenuOpen ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                      }}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#F4B942] motion-reduce:transition-none ${
                        isMenuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      } ${
                        active
                          ? "bg-white text-[#071B36] shadow-sm"
                          : "text-slate-600 hover:bg-white hover:text-[#071B36] hover:shadow-sm"
                      }`}
                    >
                      <span>{link.name}</span>

                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                          active
                            ? "scale-100 bg-[#F4B942] opacity-100"
                            : "scale-0 bg-[#F4B942] opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Get Started */}
              <Link
                href="/contact"
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${navLinks.length * 45}ms`
                    : "0ms",
                }}
                className={`group relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#071B36] px-5 py-3.5 text-sm font-bold text-white shadow-md outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#F4B942] hover:text-[#071B36] hover:shadow-[0_12px_28px_rgba(244,185,66,0.28)] focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:transition-none" />

                <span className="relative z-10">Get Started</span>

                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
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

              {/* Mobile Tagline */}
              <p className="mt-4 text-center text-[10px] font-medium tracking-[0.08em] text-slate-400">
                Learn
                <span className="mx-2 text-[#F4B942]">•</span>
                Build Skills
                <span className="mx-2 text-[#F4B942]">•</span>
                Create Your Future
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

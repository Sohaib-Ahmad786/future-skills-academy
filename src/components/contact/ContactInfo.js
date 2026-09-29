"use client";

export default function ContactInfo() {
  const contactItems = [
    {
      number: "01",
      label: "VISIT OUR ACADEMY",
      title: "Academy Location",
      value: "Kot Muhammad Pura",
      subValue: "Lahore, Pakistan",
      description:
        "Visit Future Skills Academy and discover our learning environment, educational support, and student-focused approach.",
      type: "location",
      action: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Kot+Baghicha%2C+Kot+Muhammad+Pura%2C+Lahore%2C+Pakistan",
    },
    {
      number: "02",
      label: "CALL OR WHATSAPP",
      title: "Phone & WhatsApp",
      value: "+92 316 6073020",
      subValue: "Available for enquiries",
      description:
        "Call or message our team about admissions, learning requirements, timings, or general academy information.",
      type: "phone",
      action: "Call Now",
      href: "tel:+923166073020",
      whatsapp: "https://wa.me/923166073020",
    },
    {
      number: "03",
      label: "SEND US AN EMAIL",
      title: "Email Address",
      value: "sohaibahmad.dev@gmail.com",
      subValue: "We reply to general enquiries",
      description:
        "Send us your questions or requirements and our team will provide the information you need.",
      type: "email",
      action: "Send Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sohaibahmad.dev@gmail.com&su=Future%20Skills%20Academy%20Enquiry&body=Assalam-o-Alaikum%2C%0A%0AI%20would%20like%20to%20ask%20about%20Future%20Skills%20Academy.%0A%0AThank%20you.",
    },
  ];

  const icons = {
    location: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M19 10.5C19 15.5 12 21 12 21C12 21 5 15.5 5 10.5C5 6.91 8.13 4 12 4C15.87 4 19 6.91 19 10.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),

    phone: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7.5 4H5.8C4.81 4 4 4.81 4 5.8C4 13.64 10.36 20 18.2 20C19.19 20 20 19.19 20 18.2V16.5C20 16.06 19.75 15.66 19.35 15.46L15.8 13.69C15.39 13.49 14.9 13.56 14.57 13.89L13.45 15.01C10.82 13.75 8.25 11.18 6.99 8.55L8.11 7.43C8.44 7.1 8.51 6.61 8.31 6.2L6.54 2.65"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    email: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 7L12 13L19 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <section
      className="contact-info-section relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-information-title"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F4B942]/10 blur-[110px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#071B36]/[0.06] blur-[120px]" />

        <div className="contact-grid-bg absolute inset-0 opacity-40" />

        <div className="contact-orbit contact-orbit-1" />
        <div className="contact-orbit contact-orbit-2" />

        <span className="contact-dot contact-dot-1" />
        <span className="contact-dot contact-dot-2" />
        <span className="contact-dot contact-dot-3" />
        <span className="contact-dot contact-dot-4" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="contact-header mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#F4B942]" aria-hidden="true" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B8860B]">
              Contact Information
            </span>

            <span className="h-px w-10 bg-[#F4B942]" aria-hidden="true" />
          </div>

          <h2
            id="contact-information-title"
            className="text-4xl font-black leading-[1.05] tracking-tight text-[#071B36] sm:text-5xl lg:text-6xl"
          >
            We&apos;re Ready to
            <span className="contact-gradient-title block">Hear From You.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you are a student, parent, or simply looking for more
            information, choose the contact option that works best for you. Our
            team is here to provide clear and helpful guidance.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 overflow-hidden rounded-full bg-[#071B36]/10">
            <div className="contact-line-animation h-full w-full rounded-full bg-[#F4B942]" />
          </div>
        </div>

        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}

        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {contactItems.map((item, index) => (
            <article
              key={item.number}
              className="contact-card group"
              style={{
                animationDelay: `${index * 160}ms`,
              }}
            >
              {/* Top Gradient */}

              <div className="contact-card-gradient" />

              {/* Background Glow */}

              <div className="contact-card-glow" />

              {/* Large Number */}

              <div className="contact-card-number" aria-hidden="true">
                {item.number}
              </div>

              {/* =================================================
                  ICON
              ================================================== */}

              <div className="relative z-10">
                <div className="contact-icon-box">
                  <div className="contact-icon-inner">{icons[item.type]}</div>

                  <div className="contact-icon-ring ring-1" />
                  <div className="contact-icon-ring ring-2" />
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10 mt-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#B8860B]">
                  {item.label}
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-tight text-[#071B36]">
                  {item.title}
                </h3>

                {/* Main Contact Value */}

                <div className="contact-value mt-5">
                  <div className="contact-live-dot" aria-hidden="true" />

                  <div className="min-w-0">
                    <p className="break-words text-sm font-extrabold leading-6 text-[#071B36]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[11px] font-semibold text-slate-400">
                      {item.subValue}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================== */}

              <div className="contact-card-actions relative z-10 flex flex-wrap gap-3">
                <a
                  href={item.href}
                  target={
                    item.type === "location" || item.type === "email"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.type === "location" || item.type === "email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-main-button"
                >
                  <span>{item.action}</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {item.whatsapp && (
                  <a
                    href={item.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-whatsapp-button"
                  >
                    <span className="contact-whatsapp-icon">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 11.5C20 16.19 16.19 20 11.5 20C10.04 20 8.67 19.63 7.48 18.98L4 20L5.05 16.64C4.38 15.46 4 14.08 4 12.5C4 7.81 7.81 4 12.5 4C17.19 4 20 7.81 20 11.5Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M8.5 9.5C8.7 9.1 8.95 9 9.25 9H9.7C9.9 9 10.08 9.13 10.15 9.32L10.65 10.65C10.72 10.84 10.67 11.05 10.52 11.19L10.05 11.65C10.78 12.92 11.77 13.9 13.03 14.63L13.49 14.16C13.63 14.01 13.84 13.96 14.03 14.03L15.36 14.53C15.55 14.6 15.68 14.78 15.68 14.98V15.43C15.68 15.73 15.58 15.98 15.18 16.18C14.87 16.34 14.5 16.4 14.14 16.33C11.28 15.78 8.9 13.4 8.35 10.54C8.28 10.18 8.34 9.81 8.5 9.5Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    WhatsApp
                  </a>
                )}
              </div>

              {/* =================================================
                  BOTTOM STATUS
              ================================================== */}

              <div className="contact-card-footer">
                <div className="flex items-center gap-2">
                  <span className="contact-status-dot" />

                  <span>Available for enquiries</span>
                </div>

                <span className="contact-footer-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              {/* Corner Circle */}

              <div className="contact-corner-circle" aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* =====================================================
            DARK GUIDANCE PANEL
        ====================================================== */}

        <div className="contact-guidance mt-16">
          <div
            className="guidance-orbit guidance-orbit-one"
            aria-hidden="true"
          />

          <div
            className="guidance-orbit guidance-orbit-two"
            aria-hidden="true"
          />

          <span
            className="guidance-particle guidance-particle-one"
            aria-hidden="true"
          />

          <span
            className="guidance-particle guidance-particle-two"
            aria-hidden="true"
          />

          <span
            className="guidance-particle guidance-particle-three"
            aria-hidden="true"
          />

          <div className="relative z-10 grid items-center gap-12 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_0.55fr] lg:px-14 lg:py-14">
            {/* Left */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F4B942]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#F4B942]">
                  Need Guidance?
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                Have a question?
                <span className="block text-[#F4B942]">
                  We&apos;re here to help.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Choose the contact option above that is most convenient for you.
                Students, parents, and visitors can reach out for learning
                information, academy details, and general enquiries.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="guidance-pill">
                  <span>✓</span>
                  Student Support
                </div>

                <div className="guidance-pill">
                  <span>✓</span>
                  Parent Guidance
                </div>

                <div className="guidance-pill">
                  <span>✓</span>
                  General Enquiries
                </div>
              </div>
            </div>

            {/* Right Visual */}

            <div className="guidance-visual">
              <div className="guidance-ring guidance-ring-a" />
              <div className="guidance-ring guidance-ring-b" />
              <div className="guidance-ring guidance-ring-c" />

              <div className="guidance-center" aria-hidden="true">
                <span>✦</span>
              </div>

              <div className="guidance-badge">
                <span className="guidance-badge-dot" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Support
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    Always Here to Help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            QUICK CONTACT
        ====================================================== */}

        <div className="contact-quick mt-8">
          <a
            href="tel:+923166073020"
            className="quick-contact-item"
            aria-label="Call Future Skills Academy"
          >
            <div className="quick-contact-icon">☎</div>

            <div>
              <p className="quick-contact-label">Call Us</p>
              <p className="quick-contact-value">+92 316 6073020</p>
            </div>
          </a>

          <div className="quick-divider" aria-hidden="true" />

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sohaibahmad.dev@gmail.com&su=Future%20Skills%20Academy%20Enquiry&body=Assalam-o-Alaikum%2C%0A%0AI%20would%20like%20to%20ask%20about%20Future%20Skills%20Academy.%0A%0AThank%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="quick-contact-item"
            aria-label="Send email to Future Skills Academy"
          >
            <div className="quick-contact-icon">✉</div>

            <div>
              <p className="quick-contact-label">Email</p>
              <p className="quick-contact-value">sohaibahmad.dev@gmail.com</p>
            </div>
          </a>

          <div className="quick-divider" aria-hidden="true" />

          <div className="quick-contact-item">
            <div className="quick-contact-icon">◷</div>

            <div>
              <p className="quick-contact-label">Working Hours</p>
              <p className="quick-contact-value">Mon – Sat · 9 AM – 6 PM</p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TAGLINE
        ====================================================== */}

        <div className="mt-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
            Clear Communication
            <span className="mx-3 text-[#F4B942]">•</span>
            Helpful Guidance
            <span className="mx-3 text-[#F4B942]">•</span>
            Student Support
          </p>
        </div>
      </div>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`
        .contact-info-section {
          isolation: isolate;
        }

        /* =========================
           GRID
        ========================== */

        .contact-grid-bg {
          background-image:
            linear-gradient(
              rgba(7, 27, 54, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(7, 27, 54, 0.035) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        /* =========================
           BACKGROUND ORBITS
        ========================== */

        .contact-orbit {
          position: absolute;
          border: 1px solid rgba(244, 185, 66, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        .contact-orbit-1 {
          width: 520px;
          height: 520px;
          right: -300px;
          top: 5%;
          animation: contactOrbit 20s linear infinite;
        }

        .contact-orbit-2 {
          width: 350px;
          height: 350px;
          left: -240px;
          bottom: 12%;
          border-color: rgba(7, 27, 54, 0.05);
          animation: contactOrbitReverse 17s linear infinite;
        }

        .contact-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f4b942;
          box-shadow: 0 0 16px rgba(244, 185, 66, 0.7);
          animation: contactParticle 4s ease-in-out infinite;
        }

        .contact-dot-1 {
          left: 8%;
          top: 20%;
        }

        .contact-dot-2 {
          right: 12%;
          top: 28%;
          animation-delay: 1s;
        }

        .contact-dot-3 {
          left: 20%;
          bottom: 25%;
          animation-delay: 2s;
        }

        .contact-dot-4 {
          right: 25%;
          bottom: 10%;
          animation-delay: 3s;
        }

        /* =========================
           HEADER
        ========================== */

        .contact-header {
          opacity: 0;
          animation:
            contactHeaderIn
            0.9s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .contact-gradient-title {
          background:
            linear-gradient(
              90deg,
              #a36f00,
              #f4b942,
              #b8860b,
              #f4b942
            );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: contactGradient 5s linear infinite;
        }

        .contact-line-animation {
          animation: contactLine 3s ease-in-out infinite;
        }

        /* =========================
           MAIN CARD
           Entrance animation uses
           opacity only so hover
           transform stays reliable.
        ========================== */

        .contact-card {
          position: relative;
          min-height: 450px;
          overflow: hidden;
          border: 1px solid rgba(7, 27, 54, 0.09);
          border-radius: 30px;
          background:
            linear-gradient(
              145deg,
              #ffffff 0%,
              #fbfcfe 55%,
              #f5f8fb 100%
            );
          padding: 31px;
          padding-bottom: 82px;
          box-shadow:
            0 20px 55px rgba(7, 27, 54, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          transform-style: preserve-3d;
          opacity: 0;
          animation:
            contactCardIn
            0.9s
            ease
            forwards;
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s ease,
            border-color 0.4s ease;
        }

        .contact-card:hover {
          transform:
            translateY(-12px)
            rotateX(2deg)
            rotateY(-2deg);
          border-color: rgba(244, 185, 66, 0.42);
          box-shadow:
            0 40px 90px rgba(7, 27, 54, 0.14),
            0 10px 30px rgba(244, 185, 66, 0.08);
        }

        .contact-card-gradient {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 4px;
          background:
            linear-gradient(
              90deg,
              transparent,
              #f4b942 25%,
              #f4b942 75%,
              transparent
            );
          transform: scaleX(0.35);
          transition: transform 0.5s ease;
        }

        .contact-card:hover .contact-card-gradient {
          transform: scaleX(1);
        }

        .contact-card-glow {
          position: absolute;
          right: -110px;
          top: -120px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: rgba(244, 185, 66, 0.13);
          filter: blur(45px);
          opacity: 0;
          transition:
            opacity 0.5s ease,
            transform 0.6s ease;
        }

        .contact-card:hover .contact-card-glow {
          opacity: 1;
          transform: scale(1.25);
        }

        .contact-card-number {
          position: absolute;
          right: 25px;
          top: 24px;
          color: rgba(7, 27, 54, 0.06);
          font-size: 70px;
          font-weight: 900;
          line-height: 1;
          pointer-events: none;
          transform: translateZ(15px);
          transition:
            color 0.4s ease,
            transform 0.5s ease;
        }

        .contact-card:hover .contact-card-number {
          color: rgba(244, 185, 66, 0.16);
          transform:
            translateZ(35px)
            translateY(-5px);
        }

        /* =========================
           ICON
        ========================== */

        .contact-icon-box {
          position: relative;
          display: flex;
          width: 72px;
          height: 72px;
          align-items: center;
          justify-content: center;
          transform: translateZ(35px);
        }

        .contact-icon-inner {
          position: relative;
          z-index: 3;
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(244, 185, 66, 0.2);
          border-radius: 18px;
          background: #071b36;
          color: #f4b942;
          box-shadow:
            0 18px 35px rgba(7, 27, 54, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.35s ease,
            color 0.35s ease;
        }

        .contact-card:hover .contact-icon-inner {
          transform:
            translateZ(25px)
            rotate(-8deg)
            scale(1.08);
          background: #f4b942;
          color: #071b36;
        }

        .contact-icon-ring {
          position: absolute;
          border: 1px solid rgba(244, 185, 66, 0.22);
          border-radius: 22px;
          pointer-events: none;
        }

        .contact-icon-ring.ring-1 {
          inset: 2px;
          animation: iconRing 4s ease-in-out infinite;
        }

        .contact-icon-ring.ring-2 {
          inset: -5px;
          border-color: rgba(7, 27, 54, 0.05);
          animation:
            iconRing
            5s
            ease-in-out
            infinite
            reverse;
        }

        /* =========================
           CONTACT VALUE
        ========================== */

        .contact-value {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 68px;
          border: 1px solid rgba(7, 27, 54, 0.07);
          border-radius: 17px;
          background: #f8fafc;
          padding: 12px 15px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .contact-card:hover .contact-value {
          transform: translateZ(18px);
          border-color: rgba(244, 185, 66, 0.3);
          background: #fffaf0;
        }

        .contact-live-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f4b942;
          box-shadow:
            0 0 14px rgba(244, 185, 66, 0.75);
          animation: liveDot 2s ease-in-out infinite;
        }

        /* =========================
           BUTTONS
        ========================== */

        .contact-card-actions {
          position: absolute;
          left: 31px;
          right: 31px;
          bottom: 64px;
          min-height: 43px;
          align-items: center;
        }

        .contact-main-button,
        .contact-whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 43px;
          border-radius: 999px;
          padding: 11px 16px;
          font-size: 11px;
          font-weight: 800;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .contact-main-button {
          background: #071b36;
          color: white;
          box-shadow:
            0 10px 25px rgba(7, 27, 54, 0.12);
        }

        .contact-main-button:hover {
          transform: translateY(-4px);
          background: #0d2a50;
          box-shadow:
            0 15px 32px rgba(7, 27, 54, 0.2);
        }

        .contact-whatsapp-button {
          border: 1px solid rgba(7, 27, 54, 0.1);
          background: white;
          color: #071b36;
        }

        .contact-whatsapp-button:hover {
          transform: translateY(-4px);
          border-color: rgba(244, 185, 66, 0.5);
          background: #fffaf0;
        }

        .contact-whatsapp-icon {
          color: #b8860b;
        }

        /* =========================
           CARD FOOTER
        ========================== */

        .contact-card-footer {
          position: absolute;
          left: 31px;
          right: 31px;
          bottom: 23px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(7, 27, 54, 0.07);
          padding-top: 15px;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .contact-status-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f4b942;
          box-shadow:
            0 0 10px rgba(244, 185, 66, 0.7);
          animation: liveDot 2s ease-in-out infinite;
        }

        .contact-footer-arrow {
          font-size: 16px;
          color: #cbd5e1;
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .contact-card:hover .contact-footer-arrow {
          color: #071b36;
          transform: translate(4px, -4px);
        }

        .contact-corner-circle {
          position: absolute;
          right: -55px;
          bottom: -55px;
          width: 145px;
          height: 145px;
          border: 1px solid rgba(244, 185, 66, 0.12);
          border-radius: 50%;
          transition: transform 0.6s ease;
        }

        .contact-card:hover .contact-corner-circle {
          transform: scale(1.35);
        }

        /* =========================
           GUIDANCE PANEL
        ========================== */

        .contact-guidance {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(244, 185, 66, 0.18);
          border-radius: 32px;
          background:
            radial-gradient(
              circle at 85% 50%,
              rgba(244, 185, 66, 0.1),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #071b36,
              #0a2547,
              #071b36
            );
          box-shadow:
            0 35px 90px rgba(7, 27, 54, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        .contact-guidance:hover {
          transform:
            translateY(-5px)
            rotateX(1deg);
        }

        .guidance-orbit {
          position: absolute;
          border: 1px solid rgba(244, 185, 66, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .guidance-orbit-one {
          width: 500px;
          height: 500px;
          right: -220px;
          top: -240px;
          animation:
            contactOrbit
            18s
            linear
            infinite;
        }

        .guidance-orbit-two {
          width: 300px;
          height: 300px;
          right: -70px;
          top: -140px;
          border-color: rgba(255, 255, 255, 0.08);
          animation:
            contactOrbitReverse
            13s
            linear
            infinite;
        }

        .guidance-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f4b942;
          box-shadow:
            0 0 16px rgba(244, 185, 66, 0.8);
          animation:
            contactParticle
            4s
            ease-in-out
            infinite;
        }

        .guidance-particle-one {
          left: 10%;
          top: 25%;
        }

        .guidance-particle-two {
          left: 42%;
          bottom: 15%;
          animation-delay: 1.5s;
        }

        .guidance-particle-three {
          right: 30%;
          top: 18%;
          animation-delay: 2.5s;
        }

        .guidance-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
          padding: 8px 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 10px;
          font-weight: 700;
        }

        .guidance-pill span {
          color: #f4b942;
        }

        /* =========================
           GUIDANCE VISUAL
        ========================== */

        .guidance-visual {
          position: relative;
          display: flex;
          min-height: 250px;
          align-items: center;
          justify-content: center;
        }

        .guidance-ring {
          position: absolute;
          border: 1px solid rgba(244, 185, 66, 0.15);
          border-radius: 50%;
        }

        .guidance-ring-a {
          width: 230px;
          height: 230px;
          animation:
            contactOrbit
            11s
            linear
            infinite;
        }

        .guidance-ring-b {
          width: 175px;
          height: 175px;
          border-color: rgba(255, 255, 255, 0.08);
          animation:
            contactOrbitReverse
            8s
            linear
            infinite;
        }

        .guidance-ring-c {
          width: 125px;
          height: 125px;
          border-color: rgba(244, 185, 66, 0.22);
          animation:
            contactOrbit
            6s
            linear
            infinite;
        }

        .guidance-center {
          position: relative;
          z-index: 3;
          display: flex;
          width: 92px;
          height: 92px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(244, 185, 66, 0.35);
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(244, 185, 66, 0.2),
              rgba(244, 185, 66, 0.04)
            );
          color: #f4b942;
          font-size: 38px;
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          animation:
            guidanceFloat
            5s
            ease-in-out
            infinite;
        }

        .guidance-badge {
          position: absolute;
          right: -5px;
          bottom: 15px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          background: rgba(4, 18, 36, 0.9);
          padding: 12px 15px;
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(16px);
          animation:
            badgeFloat
            4s
            ease-in-out
            infinite;
        }

        .guidance-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f4b942;
          box-shadow:
            0 0 14px rgba(244, 185, 66, 0.9);
          animation:
            liveDot
            1.8s
            ease-in-out
            infinite;
        }

        /* =========================
           QUICK CONTACT
        ========================== */

        .contact-quick {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          overflow: hidden;
          border: 1px solid rgba(7, 27, 54, 0.08);
          border-radius: 24px;
          background: white;
          box-shadow:
            0 18px 50px rgba(7, 27, 54, 0.06);
        }

        .quick-contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-width: 0;
          padding: 22px;
          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .quick-contact-item:hover {
          background: #fffaf0;
        }

        .quick-contact-icon {
          display: flex;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #071b36;
          color: #f4b942;
          font-size: 16px;
          font-weight: 900;
        }

        .quick-contact-label {
          color: #94a3b8;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .quick-contact-value {
          margin-top: 3px;
          overflow-wrap: anywhere;
          color: #071b36;
          font-size: 12px;
          font-weight: 800;
        }

        .quick-divider {
          width: 1px;
          height: 45px;
          background: rgba(7, 27, 54, 0.08);
        }

        /* =========================
           KEYFRAMES
        ========================== */

        @keyframes contactHeaderIn {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactCardIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes contactGradient {
          0% {
            background-position: 0% center;
          }

          100% {
            background-position: 250% center;
          }
        }

        @keyframes contactLine {
          0%,
          100% {
            transform: translateX(-20%);
            opacity: 0.5;
          }

          50% {
            transform: translateX(20%);
            opacity: 1;
          }
        }

        @keyframes contactOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes contactOrbitReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes contactParticle {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }

        @keyframes iconRing {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.8;
          }
        }

        @keyframes liveDot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.45);
            opacity: 1;
          }
        }

        @keyframes guidanceFloat {
          0%,
          100% {
            transform:
              rotateX(5deg)
              rotateY(-5deg)
              translateY(0);
          }

          50% {
            transform:
              rotateX(2deg)
              rotateY(3deg)
              translateY(-10px);
          }
        }

        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 1024px) {
          .contact-quick {
            grid-template-columns: 1fr;
          }

          .quick-divider {
            width: 85%;
            height: 1px;
            margin: 0 auto;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 640px) {
          .contact-card {
            min-height: 455px;
            padding: 25px;
            padding-bottom: 82px;
            border-radius: 25px;
          }

          .contact-card:hover {
            transform: translateY(-7px);
          }

          .contact-card-number {
            font-size: 55px;
          }

          .contact-card-actions {
            left: 25px;
            right: 25px;
            bottom: 64px;
          }

          .contact-card-footer {
            left: 25px;
            right: 25px;
          }

          .contact-guidance {
            border-radius: 26px;
          }

          .guidance-visual {
            min-height: 210px;
          }

          .guidance-center {
            width: 78px;
            height: 78px;
            border-radius: 23px;
            font-size: 30px;
          }

          .guidance-ring-a {
            width: 185px;
            height: 185px;
          }

          .guidance-ring-b {
            width: 145px;
            height: 145px;
          }

          .guidance-ring-c {
            width: 110px;
            height: 110px;
          }

          .guidance-badge {
            right: 0;
            bottom: 0;
          }

          .quick-contact-item {
            justify-content: flex-start;
            padding: 18px 20px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================== */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          .contact-card:hover,
          .contact-guidance:hover,
          .contact-main-button:hover,
          .contact-whatsapp-button:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

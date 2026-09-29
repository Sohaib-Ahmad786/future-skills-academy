import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "School",
    subtitle: "Class 5 – 8",
    description:
      "Strong foundations in core subjects with clear concepts and confident learning.",
  },
  {
    number: "02",
    title: "Matric",
    subtitle: "Class 9 – 10",
    description:
      "Concept-focused preparation to help students understand subjects and perform better.",
  },
  {
    number: "03",
    title: "College",
    subtitle: "Class 11 – 12",
    description:
      "Focused learning for higher secondary studies with practical understanding.",
  },
  {
    number: "04",
    title: "BS & IT",
    subtitle: "University & Programming",
    description:
      "Practical technology and programming skills for university and future careers.",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            Our Programs
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Learning Paths for Every Stage
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From foundational education to university-level skills, we help
            students build knowledge, confidence, and practical abilities.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-wider text-amber-500">
                  {program.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700 transition-colors duration-300 group-hover:bg-[#071B36] group-hover:text-white">
                  →
                </div>
              </div>

              {/* Content */}
              <div className="mt-7">
                <h3 className="text-xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-amber-600">
                  {program.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {program.description}
                </p>
              </div>

              {/* Bottom Link */}
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071B36] transition-all duration-300 group-hover:gap-3"
              >
                Explore Program
                <span aria-hidden="true">→</span>
              </Link>

              {/* Decorative Element */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-amber-100/60 transition-transform duration-500 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* View All Programs */}
        <div className="mt-10 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full bg-[#071B36] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B2A50] hover:shadow-lg"
          >
            View All Programs
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

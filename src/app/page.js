import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import LeadTeacher from "../components/home/LeadTeacher";
import Mission from "../components/home/Mission";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HomeCTA from "../components/home/HomeCTA";
import Footer from "../components/layout/Footer";

const academyJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://futureskills.site/#organization",

  name: "Future Skills Academy",

  url: "https://futureskills.site/",

  logo: "https://futureskills.site/images/future-skills-logo.png",

  telephone: "+923166073020",

  email: "sohaibahmad.dev@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Kot Muhammad Pura",
    addressLocality: "Pattoki",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "15:00",
      closes: "18:00",
    },
  ],
};

export const metadata = {
  title: "Future Skills Academy | Education That Builds Futures",

  description:
    "Future Skills Academy provides quality, concept-based education, practical learning, and academic support to help students build strong skills and a successful future.",

  alternates: {
    canonical: "https://futureskills.site/",
  },

  openGraph: {
    title: "Future Skills Academy | Education That Builds Futures",

    description:
      "Future Skills Academy provides quality, concept-based education, practical learning, and academic support to help students build strong skills and a successful future.",

    url: "https://futureskills.site/",

    siteName: "Future Skills Academy",

    type: "website",

    locale: "en_PK",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(academyJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <LeadTeacher />
        <Mission />
        <WhyChooseUs />
        <HomeCTA />
      </main>

      <Footer />
    </>
  );
}

import Navbar from "../../components/layout/Navbar";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactCTA from "../../components/contact/ContactCTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Future Skills Academy for admissions, academic information, and enquiries. Find our academy in Kot Muhammad Pura, Tehsil Pattoki, District Kasur, Punjab, Pakistan.",

  alternates: {
    canonical: "https://futureskills.site/contact",
  },

  openGraph: {
    title: "Contact Us | Future Skills Academy",
    description:
      "Contact Future Skills Academy for admissions, academic information, and enquiries. Find our academy in Kot Muhammad Pura, Tehsil Pattoki, District Kasur, Punjab, Pakistan.",
    url: "https://futureskills.site/contact",
    siteName: "Future Skills Academy",
    type: "website",
    locale: "en_PK",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />
        <ContactInfo />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

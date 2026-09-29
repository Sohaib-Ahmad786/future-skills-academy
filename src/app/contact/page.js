import Navbar from "../../components/layout/Navbar";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactCTA from "../../components/contact/ContactCTA";
import Footer from "../../components/layout/Footer";

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

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import LeadTeacher from "../components/home/LeadTeacher";
import Mission from "../components/home/Mission";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HomeCTA from "../components/home/HomeCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
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

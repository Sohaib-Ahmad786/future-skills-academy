import Navbar from "../../components/layout/Navbar";
import AboutHero from "../../components/about/AboutHero";
import AboutStory from "../../components/about/AboutStory";
import MissionVision from "../../components/about/MissionVision";
import CoreValues from "../../components/about/CoreValues";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <AboutStory />
        <MissionVision />
        <CoreValues />
      </main>

      <Footer />
    </>
  );
}

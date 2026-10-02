import Navbar from "../../components/layout/Navbar";
import AboutHero from "../../components/about/AboutHero";
import AboutStory from "../../components/about/AboutStory";
import MissionVision from "../../components/about/MissionVision";
import CoreValues from "../../components/about/CoreValues";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Future Skills Academy, our educational approach, mission, vision, core values, and commitment to helping students build strong skills and a successful future.",

  alternates: {
    canonical: "https://futureskills.site/about",
  },

  openGraph: {
    title: "About Us | Future Skills Academy",
    description:
      "Learn about Future Skills Academy, our educational approach, mission, vision, core values, and commitment to student growth.",
    url: "https://futureskills.site/about",
    siteName: "Future Skills Academy",
    type: "website",
    locale: "en_PK",
  },
};

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

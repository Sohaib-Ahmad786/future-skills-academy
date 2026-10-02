import Navbar from "../../components/layout/Navbar";
import FacultyHero from "../../components/faculty/FacultyHero";
import TeachingTeam from "../../components/faculty/TeachingTeam";
import TeachingStandard from "../../components/faculty/TeachingStandard";
import TeacherProfiles from "../../components/faculty/TeacherProfiles";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Faculty & Teachers",
  description:
    "Meet the teaching team at Future Skills Academy and learn about our approach to quality education, concept-based learning, practical skills, and student development.",

  alternates: {
    canonical: "https://futureskills.site/faculty",
  },

  openGraph: {
    title: "Faculty & Teachers | Future Skills Academy",
    description:
      "Meet the teaching team at Future Skills Academy and learn about our approach to quality education, concept-based learning, practical skills, and student development.",
    url: "https://futureskills.site/faculty",
    siteName: "Future Skills Academy",
    type: "website",
    locale: "en_PK",
  },
};

export default function FacultyPage() {
  return (
    <>
      <Navbar />

      <main>
        <FacultyHero />
        <TeachingTeam />
        <TeacherProfiles />
        <TeachingStandard />
      </main>

      <Footer />
    </>
  );
}

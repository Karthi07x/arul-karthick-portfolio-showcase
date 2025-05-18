
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Internship from "@/components/Internship";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Skills />
        <Education />
        <Internship />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

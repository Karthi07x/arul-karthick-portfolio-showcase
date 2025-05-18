
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-light/5 via-navy/10 to-navy-dark/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,25,47,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto text-center lg:text-left px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto lg:mx-0 animate-fade-in">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 text-navy">
            Arul Karthick P
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto lg:mx-0">
            Designing Seamless Digital Journeys with Elegance and Precision
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#work" className="btn-primary">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#resume" className="btn-outline">
              Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about"
          className="flex flex-col items-center text-navy hover:text-navy-light transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            className="animate-bounce" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

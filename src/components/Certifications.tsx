
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Certifications = () => {
  const certifications = [
    {
      id: "cert-1",
      title: "Figma UI UX Design Essentials",
      issuer: "Udemy",
      date: "2022",
      description: "Comprehensive UI/UX design course covering wireframing, prototyping, and design systems in Figma."
    },
    {
      id: "cert-2",
      title: "Learn to Design and Build Website UI UX",
      issuer: "Coursera",
      date: "2021",
      description: "Website design course with focus on responsive layouts and creating engaging user interfaces."
    },
    {
      id: "cert-3",
      title: "Diploma Course in Python",
      issuer: "LinkedIn Learning",
      date: "2021",
      description: "Python programming fundamentals and application in data processing for design workflows."
    }
  ];
   const handleResumeClick = () => {
    window.location.href = 'https://drive.google.com/file/d/1ci46DhG2ed9Y1UljbD_v3I-o3bWyDw40/view?usp=drivesdk';
  };

  return (
    <section id="certifications" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Certifications</h2>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {certifications.map((cert) => (
              <AccordionItem 
                key={cert.id} 
                value={cert.id}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <AccordionTrigger className={cn(
                  "hover:bg-gray-50 px-6 py-4 group"
                )}>
                  <div className="text-left">
                    <h3 className="font-serif text-lg font-semibold text-navy">{cert.title}</h3>
                    <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <div className="text-gray-700">
                    {cert.description}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <a 
              onClick={handleResumeClick}
              className="btn-primary inline-flex items-center"
              id="resume"
            >
              Download My Resume
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

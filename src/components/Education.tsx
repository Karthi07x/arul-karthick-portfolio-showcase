
import { Calendar, GraduationCap, School } from "lucide-react";
import { cn } from "@/lib/utils";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "PSNA College of Engineering and Technology",
      period: "Sep 2021 – May 2025",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Higher Secondary in Computer Science",
      institution: "Sri Vidyalayam Matriculation Higher Secondary School",
      period: "June 2020 – April 2021",
      icon: <School size={24} />
    },
    {
      degree: "Secondary Schooling",
      institution: "Sri Vidyalayam Matriculation Higher Secondary School",
      period: "May 2018 – April 2019",
      icon: <School size={24} />
    }
  ];

  return (
    <section id="education" className="section py-20">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative border-l-2 border-navy pl-8 ml-6">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "mb-12 last:mb-0 relative animate-fade-in",
                  { "opacity-0": true }
                )}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <span className="absolute -left-[38px] flex items-center justify-center w-7 h-7 rounded-full bg-navy text-white">
                  {item.icon}
                </span>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-serif text-xl font-bold text-navy mb-1">{item.degree}</h3>
                  <p className="text-gray-700 mb-2">{item.institution}</p>
                  <div className="flex items-center text-gray-500 text-sm font-medium">
                    <Calendar size={16} className="mr-2" />
                    {item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

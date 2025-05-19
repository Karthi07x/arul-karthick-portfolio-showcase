
import { Github, Linkedin, Mail } from "lucide-react";
import BehanceIcon from "./icons/BehanceIcon";

const About = () => {
  const socialLinks = [
    { 
      name: "Behance", 
      icon: <BehanceIcon size={24} />, 
      url: "https://www.behance.net/karthi07x", 
      ariaLabel: "Visit Arul's Behance Profile" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={24} />, 
      url: "https://www.linkedin.com/in/arul-karthick?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", 
      ariaLabel: "Connect with Arul on LinkedIn" 
    },
    { 
      name: "GitHub", 
      icon: <Github size={24} />, 
      url: "https://github.com/Karthi07x", 
      ariaLabel: "Check Arul's GitHub Projects" 
    },
    { 
      name: "Email", 
      icon: <Mail size={24} />, 
      url: "mailto:arulkarthick47@gmail.com", 
      ariaLabel: "Send an email to Arul" 
    },
  ];

  return (
    <section id="about" className="section py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate and detail-driven UI/UX Designer focused on crafting seamless, 
                user-centric digital interfaces. I blend creative thinking with research-driven 
                design to build elegant and intuitive solutions across web and mobile platforms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a solid foundation in front-end development and tools like Figma, I strive 
                to elevate digital experiences through design precision and user empathy.
              </p>
            </div>
            
            <div className="md:col-span-4">
              <div className="flex flex-col space-y-4">
                <h3 className="font-serif font-semibold text-xl text-navy">Connect With Me</h3>
                <div className="flex space-x-5">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

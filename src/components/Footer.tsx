
import { Github, Linkedin, Mail } from "lucide-react";
import BehanceIcon from "./icons/BehanceIcon";

const Footer = () => {
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
    <footer id="contact" className="bg-navy text-white">
      <div className="container mx-auto py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Contact Details */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="font-serif text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div>
                <p className="font-medium text-white">Email me at:</p>
                <a 
                  href="mailto:arulkarthick47@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  arulkarthick47@gmail.com
                </a>
              </div>
            </div>

            {/* Quote and Social Links */}
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-between">
              <div>
                <blockquote className="font-serif text-xl italic mb-6">
                  "Design is not just what it looks like—it's how it works."
                </blockquote>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-3">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Arul Karthick P. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

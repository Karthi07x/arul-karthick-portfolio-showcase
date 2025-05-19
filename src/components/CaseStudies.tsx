
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import cityImage from "../assets/city.png";
import sneakerImage from "../assets/sneaker.png";
import nikeImage from "../assets/nike.png";
import ecommerceImage from "../assets/ecomm.png";
import fashionImage from "../assets/fashion.png";


const CaseStudies = () => {
  const projects = [
    {
      id: 1,
      title: "City Tracker",
      subtitle: "City Bus Navigation App",
      description: "Smart urban mobility reimagined through intuitive bus tracking and route planning.",
      image: cityImage,
      url: "https://www.behance.net/gallery/225255445/City-Tracker-Seamless-City-Bus-Navigation-App/modules/1287565497"
    },
    {
      id: 2,
      title: "Sneaker Shopping App",
      subtitle: "Mobile E-Commerce",
      description: "A stylish eCommerce app optimized for user engagement and seamless navigation.",
      image: sneakerImage,
        url: "https://www.behance.net/gallery/221802371/Sneaker-Shopping-App-A-Seamless-UIUX-Experience"
    },
    {
      id: 3,
      title: "Nike SuperRep Go",
      subtitle: "UI Design",
      description: "An immersive brand-centered product display with modern, clean UI.",
      image: nikeImage,
        url: "https://www.behance.net/gallery/218168941/Nike-SuperRep-Go-Modern-UI-Design"
    },
    {
      id: 4,
      title: "E-Commerce Product Page",
      subtitle: "UI Design",
      description: "Minimalist product page designed to increase clarity, usability, and conversions.",
      image: ecommerceImage,
         url: "https://www.behance.net/gallery/226162101/E-Commerce-UI-Design-Clean-Modern-Product-Page"
    },
    {
      id: 5,
      title: "Fashion E-Commerce Display",
      subtitle: "UI/UX Design",
      description: "Functional layout meets visual elegance in this clean fashion product page.",
      image: fashionImage,
         url: "https://www.behance.net/gallery/226163109/Fashion-E-CommerceClean-Functional-Product-Display"
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-1 text-sm uppercase tracking-wider text-gray-500">
                  {project.subtitle}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-navy">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.url} 
                  className="inline-flex items-center text-navy font-medium hover:text-navy-light"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

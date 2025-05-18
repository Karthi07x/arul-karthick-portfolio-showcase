
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const projects = [
    {
      id: 1,
      title: "City Tracker",
      subtitle: "City Bus Navigation App",
      description: "Smart urban mobility reimagined through intuitive bus tracking and route planning.",
      image: "https://source.unsplash.com/random/800x600/?navigation",
      url: "#"
    },
    {
      id: 2,
      title: "Sneaker Shopping App",
      subtitle: "Mobile E-Commerce",
      description: "A stylish eCommerce app optimized for user engagement and seamless navigation.",
      image: "https://source.unsplash.com/random/800x600/?sneakers",
      url: "#"
    },
    {
      id: 3,
      title: "Nike SuperRep Go",
      subtitle: "UI Design",
      description: "An immersive brand-centered product display with modern, clean UI.",
      image: "https://source.unsplash.com/random/800x600/?nike",
      url: "#"
    },
    {
      id: 4,
      title: "E-Commerce Product Page",
      subtitle: "UI Design",
      description: "Minimalist product page designed to increase clarity, usability, and conversions.",
      image: "https://source.unsplash.com/random/800x600/?ecommerce",
      url: "#"
    },
    {
      id: 5,
      title: "Fashion E-Commerce Display",
      subtitle: "UI/UX Design",
      description: "Functional layout meets visual elegance in this clean fashion product page.",
      image: "https://source.unsplash.com/random/800x600/?fashion",
      url: "#"
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

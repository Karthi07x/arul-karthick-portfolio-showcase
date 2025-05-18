
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

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
      image: "/lovable-uploads/736ec3c9-e1ed-40fd-9674-38fb3ea45282.png",
      url: "#",
      featured: true,
      details: {
        product: "Tamara Bellis Shorts - Shape",
        description: "Short Sleeve T-shirt with a round neckline and a contrast front print.",
        originalPrice: "$53.00",
        salePrice: "$36.70",
        colors: ["#FF5252", "#FFC107", "#1E88E5"],
        sizes: ["M", "L", "XL", "XXL"]
      }
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
        
        {/* Featured Project - E-commerce Product Display */}
        {projects.find(p => p.featured) && (
          <div className="mb-16">
            <h3 className="text-xl font-serif font-medium text-navy mb-4 text-center">Featured Work</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Product Image */}
                <div className="relative h-full bg-gray-100">
                  <AspectRatio ratio={4/5} className="h-full">
                    <img 
                      src={projects.find(p => p.featured)?.image} 
                      alt="E-commerce Product Display"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                
                {/* Product Info */}
                <div className="p-8 flex flex-col">
                  <div className="mb-8">
                    <h2 className="font-serif text-3xl font-bold mb-2">
                      {projects.find(p => p.featured)?.details?.product}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {projects.find(p => p.featured)?.details?.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-8">
                      <span className="text-gray-400 line-through">
                        {projects.find(p => p.featured)?.details?.originalPrice}
                      </span>
                      <span className="text-2xl font-bold">
                        {projects.find(p => p.featured)?.details?.salePrice}
                      </span>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-sm uppercase font-medium text-gray-500 mb-2">COLOR</h4>
                      <div className="flex space-x-3">
                        {projects.find(p => p.featured)?.details?.colors.map((color, i) => (
                          <button 
                            key={i} 
                            className="w-6 h-6 rounded-full border-2 border-white ring-2 ring-gray-200 focus:ring-navy hover:ring-navy"
                            style={{ backgroundColor: color }}
                            aria-label={`Color option ${i+1}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-10">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm uppercase font-medium text-gray-500">Select size</h4>
                        <button className="text-xs text-navy font-medium underline">Size help</button>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {projects.find(p => p.featured)?.details?.sizes.map((size, i) => (
                          <button 
                            key={i} 
                            className="w-12 h-10 flex items-center justify-center border border-gray-300 rounded hover:border-navy focus:border-navy focus:outline-none"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-auto">
                      <button className="flex-1 bg-navy text-white py-3 rounded font-medium hover:bg-navy-light transition">
                        ADD TO BAG
                      </button>
                      <button className="flex-1 border-2 border-gray-800 py-3 rounded font-medium hover:bg-gray-100 transition">
                        ADD TO WISH LIST
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <h4 className="text-lg font-serif font-medium mb-2">Design Features</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Minimalist product presentation</li>
                      <li>• Contrast color options and size selection</li>
                      <li>• Clear pricing display with sale indication</li>
                      <li>• Prominent call-to-action buttons</li>
                    </ul>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-navy font-medium mt-4 hover:text-navy-light"
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => !project.featured).map((project) => (
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

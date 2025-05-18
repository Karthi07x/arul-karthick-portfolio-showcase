
const Internship = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative p-8 border-l-4 border-navy">
            <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-navy"></div>
            <div className="mb-3">
              <h3 className="font-serif text-2xl font-bold text-navy">Zidio Development</h3>
              <p className="text-gray-500 font-medium">UI/UX Design Intern</p>
            </div>
            
            <p className="text-gray-700 mb-4">
              Gained hands-on experience with UI/UX workflows including wireframing, visual hierarchy, 
              usability testing, and user personas.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Created wireframes and prototypes for mobile and web applications</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Conducted user research and usability testing sessions</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Collaborated with development team to ensure design implementation</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Developed user personas and journey maps for product design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

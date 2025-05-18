
const Skills = () => {
  const skillsData = {
    skills: [
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Front-end Logic"
    ],
    tools: [
      "Figma",
      "VS Code",
      "GitHub",
      "Flutter",
      "Python",
      "SQL",
      "Android Studio",
      "MySQL Workbench"
    ]
  };

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Skills & Tools</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills Column */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-bold mb-6 text-navy">Skills</h3>
            <ul className="space-y-3">
              {skillsData.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-bold mb-6 text-navy">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {skillsData.tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-md px-4 py-3 text-center text-gray-700 border border-gray-100"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const Skills = () => {
  const skills = {
    Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Next.js'],
    Backend: ['Node.js', 'Express', 'PHP', 'RESTful APIs', 'GraphQL'],
    Database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    Tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel']
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
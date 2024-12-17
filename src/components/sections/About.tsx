import React from "react";
import { Code2, Server, Database, Globe } from "lucide-react";
import portfolioImage from "../../assets/images/portfolio.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={portfolioImage}
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full max-w-2xl"
            />
          </div>

          <div>
            <p className="text-lg text-gray-600 mb-6">
              With 3 years of experience in React development and a strong
              foundation in the MERN stack, I specialize in building scalable
              web applications that deliver exceptional user experiences. My
              expertise extends to PHP and MySQL, allowing me to tackle diverse
              development challenges.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Code2 className="text-blue-600" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="text-blue-600" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="text-blue-600" />
                <span>Database Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-blue-600" />
                <span>Web Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

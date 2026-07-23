import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  emoji: string;
  accent: string; // tailwind gradient classes for the fallback banner
  technologies: string[];
  liveLink: string;
  githubLink: string;
  featured?: boolean;
};

const REPO = 'https://github.com/erm111/personal_portfolio/tree/main/public/demos';

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'MERN-style storefront with product filtering, a live-updating inventory, a full cart drawer and a working checkout flow.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    emoji: '🛍️',
    accent: 'from-blue-500 to-violet-500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: '/demos/ecommerce/index.html',
    githubLink: `${REPO}/ecommerce`,
    featured: true,
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative Kanban board with drag-and-drop columns, priorities, a live activity feed and real-time-style updates.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    emoji: '🗂️',
    accent: 'from-sky-500 to-indigo-500',
    technologies: ['React', 'WebSocket', 'PHP', 'MySQL'],
    liveLink: '/demos/taskboard/index.html',
    githubLink: `${REPO}/taskboard`,
    featured: true,
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard with animated charts, KPI sparklines, a platform breakdown donut and a streaming live-activity feed.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    emoji: '📊',
    accent: 'from-cyan-500 to-purple-500',
    technologies: ['React', 'Express', 'MongoDB', 'Chart.js'],
    liveLink: '/demos/dashboard/index.html',
    githubLink: `${REPO}/dashboard`,
    featured: true,
  },
  {
    title: 'Blockchain Voting System',
    description:
      'Ethereum-based decentralised voting for university elections — matric-number sign-in, on-chain ballots, an official dashboard and a live vote ledger.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    emoji: '🗳️',
    accent: 'from-blue-600 to-cyan-500',
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'React'],
    liveLink: '/demos/voting/index.html',
    githubLink: 'https://github.com/erm111/Blockchain-Voting-System',
  },
  {
    title: 'BRTickets — Bus Booking',
    description:
      'End-to-end bus ticket booking: route search, trip comparison, an interactive seat map and a confirmed e-ticket with a QR code.',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    emoji: '🚌',
    accent: 'from-orange-500 to-amber-500',
    technologies: ['PHP', 'JavaScript', 'SCSS', 'MySQL'],
    liveLink: '/demos/brtickets/index.html',
    githubLink: 'https://github.com/erm111/BRTickets-main',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Each project ships with an interactive live demo — click through and try them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Gradient fallback sits underneath the photo; if the image fails it stays visible */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex items-center justify-center`}
                >
                  <span className="text-6xl drop-shadow-lg">{project.emoji}</span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                  className="relative w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Live Demo
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 bg-white/90 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

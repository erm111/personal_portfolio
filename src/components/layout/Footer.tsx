import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              NC
            </span>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="text-red-500" size={20} />
            <span>by Nnanyere Clinton</span>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
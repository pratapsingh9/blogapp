import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-16 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Blogo</h3>
            <p className="text-gray-600 mb-6">Inspiring minds through words.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Blogs', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Technology', 'Lifestyle', 'Business', 'Travel'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Subscribe</h4>
            <p className="text-gray-600 mb-4">Stay updated with our latest posts and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800" 
              />
              <button 
                type="submit" 
                className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Blogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
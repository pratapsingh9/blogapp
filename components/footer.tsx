import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Blogo</h3>
            <p className="text-gray-600 mb-6">Inspiring minds through words.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
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
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2 text-blue-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Technology', 'Lifestyle', 'Business', 'Travel', 'Food', 'Health'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2 text-blue-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-blue-500" />
                <span>123 Blog Street, Content City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500" />
                <span>pratap.09082005@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Blogo. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
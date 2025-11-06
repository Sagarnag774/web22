
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold font-poppins text-soft-orange">🐾 PetResQ</h3>
            <p className="mt-4 text-gray-400">Rescue. Foster. Adopt. Every pet deserves a loving home.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-soft-orange transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Adopt</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Donate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider uppercase">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-soft-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-soft-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider uppercase">Follow Us</h4>
             <div className="mt-4 flex space-x-4">
               {/* SVGs for social icons */}
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PetResQ. All rights reserved. Made with ❤️ for our furry friends.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

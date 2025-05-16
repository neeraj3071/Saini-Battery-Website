
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Saini Battery & Auto Electrical Works</h3>
            <p className="text-gray-300 mb-4">
              Your One-Stop Solution for Batteries & Auto Electrical Repairs. Serving Nigdi, Pune with quality products and services since years.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://goo.gl/maps/Lq8ejTz3wGZcMuYz5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a 
                href="tel:+919822436042" 
                className="text-white hover:text-gray-300"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919822436042" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Battery Replacement</li>
              <li className="text-gray-300">Starter Motor Repair</li>
              <li className="text-gray-300">Alternator Repair</li>
              <li className="text-gray-300">Auto Electrical Wiring</li>
              <li className="text-gray-300">UPS & Inverter Installation</li>
              <li className="text-gray-300">Emergency Battery Service</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Nirman Arcade, Shop No. 12, Opp. Nigdi Jakat Naka, Nigdi, Pune – 44, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+919822436042" className="text-gray-300 hover:text-white">
                  +91 9822436042
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+918180801414" className="text-gray-300 hover:text-white">
                  +91 8180801414
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Open Daily: 9 AM - 9 PM</span>
              </li>
              <li className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Saini Battery & Auto Electrical Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

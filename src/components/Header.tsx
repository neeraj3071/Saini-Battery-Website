
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-brand-blue text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+919822436042" className="flex items-center hover:text-gray-200">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">+91 9822436042</span>
            </a>
            <a href="tel:+918180801414" className="flex items-center hover:text-gray-200 hidden sm:flex">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">+91 8180801414</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <span className="text-sm">Open Daily: 9:00 AM - 9:00 PM</span>
            <span className="text-sm">|</span>
            <span className="text-sm">7 Days a Week</span>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-poppins font-bold text-xl md:text-2xl">
              <span className="text-brand-red">Saini</span> <span className="text-brand-blue">Battery & Auto Electrical Works</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-brand-red transition-colors ${
                  location.pathname === link.path ? 'text-brand-red' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-brand-red hover:bg-red-600">
              <a href="tel:+919822436042">Call Now</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-brand-red" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-4/5 max-w-sm p-5 shadow-lg transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-poppins font-bold text-xl">
                <span className="text-brand-red">Saini</span> <span className="text-brand-blue">Battery</span>
              </h2>
              <button onClick={toggleMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium hover:text-brand-red transition-colors ${
                    location.pathname === link.path ? 'text-brand-red' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-brand-red hover:bg-red-600 w-full mt-4">
                <a href="tel:+919822436042">Call Now</a>
              </Button>
              <Button asChild variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                <a href="https://wa.me/919822436042">WhatsApp Now</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

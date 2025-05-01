
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              MoTech<span className="text-motech-primary">Solutions</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Innovative technology solutions to help your business thrive in the digital age.
            </p>
            <button 
              onClick={scrollToTop}
              className="bg-motech-primary hover:bg-motech-secondary text-white p-3 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-motech-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-motech-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-motech-primary transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-motech-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-motech-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">Data Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">IT Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-4">info@motechsolutions.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} MoTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-motech-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

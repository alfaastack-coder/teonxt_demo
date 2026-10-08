import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded-lg text-white group-hover:bg-brand-secondary transition-colors">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <span className="font-bold text-xl text-brand-primary block leading-none">Teonxt</span>
              <span className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold">Systems</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-brand-border pl-6">
              <Link to="/contact" className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors">
                Contact Us
              </Link>
              <Button href="/consultation" size="sm">Book a Consultation</Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-text hover:text-brand-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-lg font-medium text-brand-text hover:text-brand-primary py-2 border-b border-brand-border/50"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="text-lg font-medium text-brand-text hover:text-brand-primary py-2 border-b border-brand-border/50"
            >
              Contact Us
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button href="/consultation" className="w-full">Book a Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

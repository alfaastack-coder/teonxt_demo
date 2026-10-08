import { Link } from 'react-router-dom';
import { Code2, Globe, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-brand-secondary p-2 rounded-lg text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <span className="font-bold text-xl text-white block leading-none">Teonxt</span>
                <span className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold">Systems</span>
              </div>
            </Link>
            <p className="text-brand-muted mb-6 max-w-sm">
              Technology That Moves Your Business Forward. We help growing businesses build, modernize and automate technology through software engineering, cloud, AI and IT consulting.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-muted hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><Link to="/services/custom-software" className="hover:text-brand-accent transition-colors">Custom Software</Link></li>
              <li><Link to="/services/cloud-solutions" className="hover:text-brand-accent transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-brand-accent transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/it-consulting" className="hover:text-brand-accent transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><Link to="/solutions/digital-transformation" className="hover:text-brand-accent transition-colors">Digital Transformation</Link></li>
              <li><Link to="/solutions/legacy-modernization" className="hover:text-brand-accent transition-colors">Legacy Modernization</Link></li>
              <li><Link to="/solutions/business-automation" className="hover:text-brand-accent transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><Link to="/insights" className="hover:text-brand-accent transition-colors">Insights</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border/20 text-sm text-brand-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Teonxt Systems. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Based in Pune, Maharashtra, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

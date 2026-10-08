import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IconRenderer } from './IconRenderer';

interface ServiceCardProps {
  service: {
    title: string;
    slug: string;
    shortDescription: string;
    icon: string;
  };
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link 
      to={`/services/${service.slug}`}
      className="group block p-8 bg-white border border-brand-border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-brand-secondary/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
        <IconRenderer name={service.icon} className="h-7 w-7" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-brand-text group-hover:text-brand-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-brand-muted mb-6 line-clamp-2">
        {service.shortDescription}
      </p>
      
      <div className="flex items-center text-brand-primary font-medium text-sm group-hover:text-brand-secondary transition-colors">
        Explore Service
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

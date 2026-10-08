import { SectionHeader } from '../../components/ui/SectionHeader';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { services } from '../../data/mockData';

const ServicesList = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          eyebrow="Our Services"
          title="Technology Solutions for Modern Business"
          description="Comprehensive engineering, design, and consulting services tailored to your organizational needs."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;

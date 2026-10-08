import { SectionHeader } from '../../components/ui/SectionHeader';
import { industries } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { IconRenderer } from '../../components/ui/IconRenderer';

const IndustriesList = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          eyebrow="Industries We Serve"
          title="Tailored Technology for Your Sector"
          description="We understand the unique challenges and regulatory requirements of various industries."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map(industry => (
            <Link 
              key={industry.id} 
              to={`/industries/${industry.slug}`}
              className="block p-6 border border-brand-border rounded-xl hover:shadow-lg transition-all text-center"
            >
              <div className="w-12 h-12 mx-auto bg-brand-light text-brand-primary flex items-center justify-center rounded-full mb-4">
                 <IconRenderer name={industry.icon} />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">{industry.title}</h3>
              <p className="text-sm text-brand-muted">{industry.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default IndustriesList;

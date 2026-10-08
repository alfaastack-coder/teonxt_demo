import { SectionHeader } from '../../components/ui/SectionHeader';
import { caseStudies } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesList = () => {
  return (
    <div className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          eyebrow="Case Studies"
          title="Illustrative Results & Solutions"
          description="Explore examples of how we approach complex technology challenges."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((study) => (
              <Link 
                key={study.id} 
                to={`/case-studies/${study.slug}`}
                className="group bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-brand-dark/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm uppercase tracking-wider">
                    Sample Case Study
                  </div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-brand-muted text-sm mb-6 flex-grow">
                    {study.challenge}
                  </p>
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                      Read Case Study
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CaseStudiesList;

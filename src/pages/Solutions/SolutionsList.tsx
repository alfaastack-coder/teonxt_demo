import { SectionHeader } from '../../components/ui/SectionHeader';
import { solutions } from '../../data/mockData';
import { Link } from 'react-router-dom';

const SolutionsList = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          eyebrow="Solutions"
          title="Transformative Business Solutions"
          description="Pre-architected approaches to common business challenges."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map(solution => (
            <Link 
              key={solution.id} 
              to={`/solutions/${solution.slug}`}
              className="block p-8 border border-brand-border rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-3">{solution.title}</h3>
              <p className="text-brand-muted">{solution.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsList;

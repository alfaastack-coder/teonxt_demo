import { SectionHeader } from '../../components/ui/SectionHeader';
import { jobs } from '../../data/mockData';
import { Link } from 'react-router-dom';

const CareersList = () => {
  return (
    <div className="py-20 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          eyebrow="Careers at Teonxt"
          title="Build Your Future With Us"
          description="Join a remote-first team of passionate engineers building modern technology solutions."
          align="center"
        />
        
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl border border-brand-border overflow-hidden">
          {jobs.map((job, idx) => (
            <Link 
              key={job.id} 
              to={`/careers/${job.slug}`}
              className={`block p-6 hover:bg-brand-light/50 transition-colors ${idx !== jobs.length - 1 ? 'border-b border-brand-border' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-brand-muted">
                    <span className="flex items-center gap-1">{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.experience}</span>
                  </div>
                </div>
                <div className="text-brand-secondary font-medium">View Details &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CareersList;

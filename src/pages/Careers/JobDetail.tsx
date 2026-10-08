import { useParams } from 'react-router-dom';
import { jobs } from '../../data/mockData';
import { Button } from '../../components/ui/Button';

const JobDetail = () => {
  const { slug } = useParams();
  const job = jobs.find(s => s.slug === slug);

  if (!job) return <div className="py-32 text-center text-2xl">Job Not Found</div>;

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 pb-8 border-b border-brand-border">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-brand-muted font-medium">
            <span className="bg-brand-light px-3 py-1 rounded-full">{job.location}</span>
            <span className="bg-brand-light px-3 py-1 rounded-full">{job.type}</span>
            <span className="bg-brand-light px-3 py-1 rounded-full">{job.experience}</span>
          </div>
        </div>
        
        <div className="prose prose-lg text-brand-muted mb-12">
          <h2>About the Role</h2>
          <p>This is a placeholder for the {job.title} position description. Teonxt Systems is looking for talented individuals who are passionate about building scalable, high-quality software.</p>
          
          <h3>Requirements</h3>
          <ul>
            <li>Strong foundation in computer science and software engineering.</li>
            <li>Experience with modern development practices and tools.</li>
            <li>Excellent communication skills for a remote-first environment.</li>
          </ul>
        </div>
        
        <div className="bg-brand-light p-8 rounded-xl border border-brand-border">
          <h3 className="text-xl font-bold text-brand-primary mb-4">Apply for this position</h3>
          <p className="text-brand-muted mb-6">Note: This is a prototype frontend. Form submission is disabled.</p>
          <Button variant="primary" onClick={() => alert('Application form modal would open here.')}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default JobDetail;

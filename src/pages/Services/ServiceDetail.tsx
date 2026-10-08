import { useParams } from 'react-router-dom';
import { services } from '../../data/mockData';
import { Button } from '../../components/ui/Button';
import { IconRenderer } from '../../components/ui/IconRenderer';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <div className="py-32 text-center text-2xl font-bold">Service Not Found</div>;
  }

  return (
    <div>
      <section className="pt-24 pb-16 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary text-white mb-6">
            <IconRenderer name={service.icon} className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">{service.title}</h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-8">
            {service.shortDescription}
          </p>
          <Button href="/consultation">Discuss Your Project</Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg text-brand-muted">
          <h2>Overview</h2>
          <p>
            Demo content for {service.title}. In a real implementation, this section would contain detailed information about the approach, technologies used, and expected outcomes.
          </p>
          
          <h3>Capabilities</h3>
          <ul>
            <li>Requirement Analysis & Architecture Design</li>
            <li>Implementation & Development</li>
            <li>Testing & Quality Assurance</li>
            <li>Deployment & Post-launch Support</li>
          </ul>

          <div className="mt-12 p-8 bg-brand-primary text-white rounded-xl text-center not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <Button href="/consultation" variant="secondary">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

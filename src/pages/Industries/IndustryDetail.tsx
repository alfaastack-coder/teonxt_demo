import { useParams } from 'react-router-dom';
import { industries } from '../../data/mockData';

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = industries.find(s => s.slug === slug);

  if (!industry) return <div className="py-32 text-center text-2xl">Industry Not Found</div>;

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">{industry.title}</h1>
        <p className="text-xl text-brand-muted">{industry.description}</p>
      </div>
    </div>
  );
};
export default IndustryDetail;

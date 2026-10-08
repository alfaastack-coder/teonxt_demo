import { useParams } from 'react-router-dom';
import { solutions } from '../../data/mockData';

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) return <div className="py-32 text-center text-2xl">Solution Not Found</div>;

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">{solution.title}</h1>
        <p className="text-xl text-brand-muted">{solution.description}</p>
      </div>
    </div>
  );
};
export default SolutionDetail;

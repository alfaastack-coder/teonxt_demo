import { useParams } from 'react-router-dom';
import { caseStudies } from '../../data/mockData';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) return <div className="py-32 text-center text-2xl">Case Study Not Found</div>;

  return (
    <div>
      <section className="pt-24 pb-16 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-brand-border">
              {study.industry}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">{study.title}</h1>
            <p className="text-xl text-brand-muted">Client: {study.client}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <img src={study.image} alt={study.title} className="w-full h-auto rounded-xl mb-12 shadow-lg" />
           <div className="prose prose-lg text-brand-muted mx-auto">
             <div className="bg-brand-primary/5 p-6 rounded-lg border border-brand-primary/10 mb-8">
               <p className="font-bold text-brand-primary text-sm uppercase tracking-wider mb-2">Note</p>
               <p className="text-sm m-0">This is illustrative demo content representing the type of solutions Teonxt Systems delivers.</p>
             </div>
             
             <h3>The Challenge</h3>
             <p>{study.challenge}</p>
             
             <h3>Our Solution</h3>
             <p>{study.solution}</p>
             
             <h3>Illustrative Outcome</h3>
             <p>{study.result}</p>
             
             <h3>Technologies Used</h3>
             <div className="flex gap-2 mt-4 not-prose">
               {study.tags.map(tag => (
                 <span key={tag} className="px-3 py-1 bg-brand-light border border-brand-border rounded-full text-sm font-medium text-brand-primary">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};
export default CaseStudyDetail;

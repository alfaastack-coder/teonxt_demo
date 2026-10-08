import { SectionHeader } from '../../components/ui/SectionHeader';
import { insights } from '../../data/mockData';
import { Link } from 'react-router-dom';

const InsightsList = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          eyebrow="Insights"
          title="Technology Perspectives"
          description="Thoughts, guides, and engineering best practices from our team."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {insights.map(post => (
            <Link 
              key={post.id} 
              to={`/insights/${post.slug}`}
              className="block p-6 bg-white border border-brand-border rounded-xl hover:shadow-lg transition-all"
            >
              <div className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-2">
                {post.category} • {post.date}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{post.title}</h3>
              <p className="text-sm text-brand-muted mb-4">{post.excerpt}</p>
              <span className="text-sm font-semibold text-brand-primary">Read Article &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InsightsList;

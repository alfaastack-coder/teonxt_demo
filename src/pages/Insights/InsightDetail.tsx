import { useParams } from 'react-router-dom';
import { insights } from '../../data/mockData';

const InsightDetail = () => {
  const { slug } = useParams();
  const post = insights.find(s => s.slug === slug);

  if (!post) return <div className="py-32 text-center text-2xl">Article Not Found</div>;

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-brand-secondary font-bold text-sm uppercase tracking-wider">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mt-4 mb-6">{post.title}</h1>
          <div className="text-brand-muted text-sm">
            By {post.author} • {post.date}
          </div>
        </div>
        <div className="prose prose-lg mx-auto text-brand-muted">
          <p className="lead text-xl mb-8">{post.excerpt}</p>
          <h2>Introduction</h2>
          <p>This is a demo article for the Teonxt Systems prototype. In a real environment, this would contain full markdown or CMS-driven content regarding {post.title}.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};
export default InsightDetail;

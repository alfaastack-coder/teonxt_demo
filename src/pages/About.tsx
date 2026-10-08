import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="About Teonxt Systems"
            title="Building Beyond Boundaries"
            description="We are a remote-first IT consulting and technology services company based in Pune, India. We partner with startups and enterprises globally to engineer modern software solutions."
            align="center"
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg mx-auto text-brand-muted">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h3>
            <p className="mb-8">
              To empower businesses with scalable, modern, and reliable technology solutions that solve real-world problems and drive sustainable growth.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Vision</h3>
            <p className="mb-8">
              To be the most trusted technology engineering partner for forward-thinking organizations, known for our technical excellence, business acumen, and unwavering commitment to client success.
            </p>

            <h3 className="text-2xl font-bold text-brand-primary mb-4">Why Teonxt?</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="p-6 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-primary mb-2">Remote-First Culture</h4>
                <p className="text-sm">Access top-tier engineering talent without geographical limitations, operating with seamless asynchronous and synchronous communication.</p>
              </div>
              <div className="p-6 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-primary mb-2">Business-Centric Engineering</h4>
                <p className="text-sm">We don't just write code; we understand your business model to deliver technology that directly impacts your bottom line.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to build your next big thing?</h2>
          <Button href="/consultation" variant="secondary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

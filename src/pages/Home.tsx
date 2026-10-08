import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { services, caseStudies } from '../data/mockData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-x-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-primary opacity-20 blur-[100px]"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-light text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-brand-border">
                Building Beyond Boundaries
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-primary leading-tight mb-6">
                Technology That Moves Your Business Forward
              </h1>
              <p className="text-xl text-brand-muted mb-8 leading-relaxed">
                Teonxt Systems helps growing businesses build, modernize and automate technology through software engineering, cloud, AI and IT consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/consultation" size="lg">Book a Consultation</Button>
                <Button href="/services" variant="outline" size="lg">Explore Services</Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-brand-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                  Remote-first Delivery
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                  Enterprise Quality
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-light to-white border border-brand-border rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
                 {/* Abstract visual representation instead of generic image */}
                 <div className="w-full h-full p-8 grid grid-cols-4 grid-rows-4 gap-4 opacity-70">
                    <div className="col-span-2 row-span-2 bg-brand-primary/5 rounded-xl border border-brand-primary/10"></div>
                    <div className="col-span-2 row-span-1 bg-brand-secondary/5 rounded-xl border border-brand-secondary/10"></div>
                    <div className="col-span-1 row-span-2 bg-brand-accent/5 rounded-xl border border-brand-accent/10"></div>
                    <div className="col-span-1 row-span-1 bg-brand-text/5 rounded-xl border border-brand-text/10"></div>
                    <div className="col-span-2 row-span-2 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl border border-brand-primary/20 backdrop-blur-sm"></div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                       <div className="h-12 w-12 rounded-full bg-brand-secondary text-white flex items-center justify-center font-bold text-xl">T</div>
                       <div>
                         <div className="h-2 w-24 bg-brand-border rounded-full mb-2"></div>
                         <div className="h-2 w-16 bg-brand-border rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Placeholder */}
      <section className="py-12 border-y border-brand-border bg-brand-light/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-semibold text-brand-muted uppercase tracking-wider mb-8">
            Trusted by Forward-Thinking Companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-brand-text">
                <div className="w-8 h-8 rounded bg-brand-border"></div>
                Client Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow="Our Expertise"
            title="End-to-End Technology Services"
            description="We provide comprehensive engineering and consulting services to build, scale, and optimize your business technology."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button href="/services" variant="outline">View All Capabilities</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                eyebrow="Why Teonxt"
                title="Technology built around your business."
                description="We don't just write code. We partner with you to understand your business objectives and engineer scalable solutions that drive real outcomes."
                className="[&_h2]:text-white [&_p]:text-white/80 [&_span]:bg-white/10 [&_span]:text-brand-accent [&_span]:border-white/20"
              />
              
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                {[
                  { title: "Business-First Thinking", desc: "Solutions designed for ROI and growth, not just technical specifications." },
                  { title: "End-to-End Engineering", desc: "From architecture to deployment and ongoing support." },
                  { title: "Remote-First Delivery", desc: "Access to top engineering talent with seamless communication." },
                  { title: "Modern Technology", desc: "Future-proof architectures using proven, modern stacks." }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-brand-accent pl-4">
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-secondary/40 to-brand-dark border border-white/10 p-8 flex flex-col justify-center gap-6">
                 <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                   <div className="text-4xl font-bold text-brand-accent mb-2">100%</div>
                   <div className="text-white/80 font-medium">Remote-First Delivery</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                   <div className="text-4xl font-bold text-brand-accent mb-2">Modern</div>
                   <div className="text-white/80 font-medium">Technology Stack</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                   <div className="text-4xl font-bold text-brand-accent mb-2">Scalable</div>
                   <div className="text-white/80 font-medium">Architecture Design</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow="Proven Results"
            title="Real Outcomes for Growing Businesses"
            description="Explore how we've helped companies modernize their technology and streamline operations."
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {caseStudies.slice(0, 3).map((study) => (
              <Link 
                key={study.id} 
                to={`/case-studies/${study.slug}`}
                className="group bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-brand-dark/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm uppercase tracking-wider">
                    Sample Case Study
                  </div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-brand-muted text-sm mb-6 flex-grow">
                    {study.challenge}
                  </p>
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                      Read Case Study
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/case-studies" variant="outline">View All Case Studies</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Have a technology challenge? Let's solve it.
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Talk to our team about your technology goals, challenges and next steps. We're ready to build beyond boundaries with you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/consultation" size="lg" className="bg-white text-brand-primary hover:bg-white/90">
                  Talk to Teonxt
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

const Consultation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            eyebrow="Book a Consultation"
            title="Discuss Your Technology Goals"
            description="Schedule a free strategy session with our technical consultants to explore how we can help your business scale."
            align="center"
          />
          
          <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-brand-primary mb-4">Request Received</h3>
                <p className="text-xl text-brand-muted mb-8">Thanks! Your consultation request has been captured in this prototype.</p>
                <Button onClick={() => setSubmitted(false)}>Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">Work Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">Company Size</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all bg-white">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>501+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all bg-white">
                    <option>Custom Software Development</option>
                    <option>IT Consulting</option>
                    <option>Cloud Solutions</option>
                    <option>AI & Automation</option>
                    <option>Web / Mobile Development</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">Describe Your Technology Challenge</label>
                  <textarea required rows={4} placeholder="Briefly describe what you're looking to build or solve..." className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"></textarea>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full text-lg">Request Consultation</Button>
                </div>
                <p className="text-center text-xs text-brand-muted">
                  By submitting this form, you agree to our placeholder privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;

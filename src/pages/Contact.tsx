import { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <SectionHeader 
              eyebrow="Contact Us"
              title="Let's build something great together."
              description="Have a question or want to discuss a project? Reach out to our team."
            />
            
            <div className="mt-12 space-y-8">
              <div>
                <h4 className="font-bold text-brand-primary mb-2 text-lg">Headquarters</h4>
                <p className="text-brand-muted">Pune, Maharashtra, India<br />(Remote-first global delivery)</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-2 text-lg">Email</h4>
                <p className="text-brand-muted">hello@teonxtsystems.example.com</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-2 text-lg">Phone</h4>
                <p className="text-brand-muted">+91 (0) 0000 00000</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Thank You!</h3>
                <p className="text-brand-muted">Your enquiry has been captured in this prototype.</p>
                <Button className="mt-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

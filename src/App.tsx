import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesList from './pages/Services/ServicesList';
import ServiceDetail from './pages/Services/ServiceDetail';
import SolutionsList from './pages/Solutions/SolutionsList';
import SolutionDetail from './pages/Solutions/SolutionDetail';
import IndustriesList from './pages/Industries/IndustriesList';
import IndustryDetail from './pages/Industries/IndustryDetail';
import CaseStudiesList from './pages/CaseStudies/CaseStudiesList';
import CaseStudyDetail from './pages/CaseStudies/CaseStudyDetail';
import InsightsList from './pages/Insights/InsightsList';
import InsightDetail from './pages/Insights/InsightDetail';
import CareersList from './pages/Careers/CareersList';
import JobDetail from './pages/Careers/JobDetail';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          <Route path="services" element={<ServicesList />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          
          <Route path="solutions" element={<SolutionsList />} />
          <Route path="solutions/:slug" element={<SolutionDetail />} />
          
          <Route path="industries" element={<IndustriesList />} />
          <Route path="industries/:slug" element={<IndustryDetail />} />
          
          <Route path="case-studies" element={<CaseStudiesList />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
          
          <Route path="insights" element={<InsightsList />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          
          <Route path="careers" element={<CareersList />} />
          <Route path="careers/:slug" element={<JobDetail />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import LuxuryMotion from './components/luxury/LuxuryMotion';
import ScrollToTop from './components/common/ScrollToTop';
import { SiteDataProvider } from './context/SiteDataContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const B2BGrowth = lazy(() => import('./pages/B2BGrowth'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Team = lazy(() => import('./pages/Team'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Loading() {
  return (
    <div className="loading-spinner">
      <div className="spinner" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <SiteDataProvider>
      <Router>
        <ScrollToTop />
        <LuxuryMotion>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
                <Route path="/b2b-growth" element={<B2BGrowth />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </LuxuryMotion>
      </Router>
      </SiteDataProvider>
    </HelmetProvider>
  );
}

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';
import { business } from './data/business';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Initialize from URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages: PageId[] = ['home', 'about', 'services', 'reviews', 'faq', 'contact'];
    if (validPages.includes(hash as PageId)) {
      setCurrentPage(hash as PageId);
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '').toLowerCase();
      if (validPages.includes(currentHash as PageId)) {
        setCurrentPage(currentHash as PageId);
      } else if (!currentHash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and canonical meta dynamically per page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: `${business.name} | Professional Electrician in Chiswick, London`,
      about: `About Us | ${business.name} Chiswick, London`,
      services: `Electrical Services in Chiswick & London | ${business.name}`,
      reviews: `Customer Reviews (${business.rating}★ / ${business.reviewCount} Reviews) | ${business.name}`,
      faq: `Frequently Asked Questions | ${business.name}`,
      contact: `Contact ${business.name} | Chiswick, London W3`,
    };

    document.title = titles[currentPage] || `${business.name} | Chiswick, London`;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Global Accessible Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'reviews' && <ReviewsPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Accessible Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

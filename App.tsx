
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AdoptPage from './components/pages/AdoptPage';
import VolunteerPage from './components/pages/VolunteerPage';
import DonatePage from './components/pages/DonatePage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import Chatbot from './components/Chatbot';

export type Page = 'Home' | 'Adopt' | 'Volunteer' | 'Donate' | 'Blog' | 'Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Adopt':
        return <AdoptPage />;
      case 'Volunteer':
        return <VolunteerPage />;
      case 'Donate':
        return <DonatePage />;
      case 'Blog':
        return <BlogPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-white font-nunito text-gray-800 min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;

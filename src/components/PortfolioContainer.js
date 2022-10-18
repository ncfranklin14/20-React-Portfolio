import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolio'>
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

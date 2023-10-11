import React, { useState } from 'react';
import PortfolioItems from './Pages/PortfolioItems';
import PortfolioNav from './PortfolioNav';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import { useRef, useEffect } from "react";
import Resume from './Footer';

function DisplayPortfolio() {
    const [currentPage, setCurrentPage] = useState('PortfolioItems');

    const [bigCard, setBigCard] = useState(false);
    
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'PortfolioItems') {
        return <PortfolioItems bigCard={bigCard} setBigCard={setBigCard} />;
      }
      if (currentPage === 'ContactMe') {
        return <ContactMe />;
      }
      return <AboutMe />;
    }

const handlePageChange = (page) => setCurrentPage(page);


return (
    <div>
        <PortfolioNav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    )
};

export default DisplayPortfolio;
import React, { useState } from 'react';
import PortfolioItems from './Pages/PortfolioItems';
import PortfolioNav from './PortfolioNav';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Footer from './Footer';
import { useRef, useEffect } from "react";
import Resume from './Footer';

function DisplayPortfolio() {
    const [currentPage, setCurrentPage] = useState('PortfolioItems');

    const [bigItemCarShop, setBigItemCarShop] = useState(false);
    const [bigItemBetterReads, setBigItemBetterReads] = useState(false);
    const [bigItemMemeCoin, setBigItemMemeCoin] = useState(false);
    const [bigItemWeather, setBigItemWeather] = useState(false);

  const renderPage = () => {
      if (currentPage === 'PortfolioItems') {
        return <PortfolioItems
        bigItemCarShop={bigItemCarShop} setBigItemCarShop={setBigItemCarShop} bigItemBetterReads={bigItemBetterReads} setBigItemBetterReads={setBigItemBetterReads} bigItemMemeCoin={bigItemMemeCoin} setBigItemMemeCoin={setBigItemMemeCoin} bigItemWeather={bigItemWeather} setBigItemWeather={setBigItemWeather}
          />;
      }
      if (currentPage === 'ContactMe') {
        return <ContactMe />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
    }

const handlePageChange = (page) => setCurrentPage(page);


return (
    <div>
        <PortfolioNav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer currentPage={currentPage}/>
    </div>
    )
};

export default DisplayPortfolio;
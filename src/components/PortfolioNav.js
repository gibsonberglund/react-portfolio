import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function PortfolioNav({ currentPage, handlePageChange }) {
  return (
    <section>
      <h1 className='sitetitle'>Gibson Berglund<small className='subtitle'>Full Stack Web Developer</small></h1>
      <ul className="navbar">
        <li className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link-active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('PortfolioItems')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'PortfolioItems' ? 'nav-link-active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('ContactMe')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'ContactMe' ? 'nav-link-active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
}

export default PortfolioNav;
